import { NextResponse } from "next/server";
import { Resend } from "resend";
import { products } from "@/content/products";
import { site } from "@/content/site";
import { attachmentError, enquirySchema, PRODUCT_OTHER, type Enquiry } from "@/lib/enquiry";

const productNames = new Set([...products.map((product) => product.name), PRODUCT_OTHER]);

const fail = (status: number, error: string) => NextResponse.json({ error }, { status });

function emailText(enquiry: Enquiry): string {
  return [
    `Name: ${enquiry.name}`,
    `Company: ${enquiry.company || "—"}`,
    `Phone: ${enquiry.phone || "—"}`,
    `Email: ${enquiry.email}`,
    `Product: ${enquiry.product}`,
    "",
    enquiry.requirement,
  ].join("\n");
}

export async function POST(request: Request) {
  const form = await request.formData().catch(() => null);
  if (!form) return fail(400, "The enquiry could not be read. Please try again.");
  // Honeypot: people never see this field, so anything in it came from a bot.
  if (String(form.get("website") ?? "")) return NextResponse.json({ ok: true });

  const fields = Object.fromEntries(
    ["name", "company", "phone", "email", "product", "requirement"].map((key) => [key, String(form.get(key) ?? "")]),
  );
  const parsed = enquirySchema.safeParse(fields);
  if (!parsed.success) {
    return fail(422, "Some fields need attention. Check the form and send again.");
  }
  if (!productNames.has(parsed.data.product)) return fail(422, "Choose a product from the list.");

  const attachment = form.get("attachment");
  const file = attachment instanceof File && attachment.size > 0 ? attachment : null;
  const fileProblem = file && attachmentError(file);
  if (fileProblem) return fail(422, fileProblem);

  const { RESEND_API_KEY: apiKey, ENQUIRY_TO: to, ENQUIRY_FROM: from } = process.env;
  if (!apiKey || !to || !from) {
    console.error("Enquiry not sent: RESEND_API_KEY, ENQUIRY_TO or ENQUIRY_FROM is not set.");
    return fail(503, `The enquiry form is not accepting messages right now. Email us at ${site.email} instead.`);
  }

  const { error } = await new Resend(apiKey).emails.send({
    from,
    to,
    replyTo: parsed.data.email,
    subject: `Enquiry: ${parsed.data.product} — ${parsed.data.company || parsed.data.name}`,
    text: emailText(parsed.data),
    attachments: file ? [{ filename: file.name, content: Buffer.from(await file.arrayBuffer()) }] : undefined,
  });

  if (error) {
    console.error("Resend rejected the enquiry:", error.message);
    return fail(502, `The enquiry could not be sent. Email us at ${site.email} instead.`);
  }

  return NextResponse.json({ ok: true });
}
