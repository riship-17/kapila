"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { attachmentError, enquirySchema, PRODUCT_OTHER, type Enquiry } from "@/lib/enquiry";
import { cx } from "@/lib/cx";
import { Field, fieldControl } from "../ui/Field";
import { AttachmentField } from "./AttachmentField";

type ContactFormProps = { products: { slug: string; name: string }[]; successMessage: string; fallbackEmail: string };

const inputs = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "company", label: "Company", type: "text", autoComplete: "organization", optional: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel", optional: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
] as const;

export function ContactForm({ products, successMessage, fallbackEmail }: ContactFormProps) {
  const [file, setFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const confirmation = useRef<HTMLParagraphElement>(null);
  const honeypot = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Enquiry>({
    resolver: zodResolver(enquirySchema),
    defaultValues: { name: "", company: "", phone: "", email: "", product: "", requirement: "" },
  });

  useEffect(() => {
    if (sent) confirmation.current?.focus();
  }, [sent]);

  // Product pages link here with ?product={slug}; preselect that product.
  useEffect(() => {
    const slug = new URLSearchParams(window.location.search).get("product");
    const match = products.find((product) => product.slug === slug);
    if (match) setValue("product", match.name);
  }, [products, setValue]);

  const chooseFile = (next: File | null) => {
    setFile(next);
    setFileError(next ? attachmentError(next) : null);
  };

  const onSubmit = async (values: Enquiry) => {
    if (fileError) return;
    setServerError(null);
    const body = new FormData();
    for (const [key, value] of Object.entries(values)) body.append(key, value);
    if (file) body.append("attachment", file);
    body.append("website", honeypot.current?.value ?? "");

    const response = await fetch("/api/enquiry", { method: "POST", body }).catch(() => null);
    if (response?.ok) return setSent(true);
    const data: unknown = await response?.json().catch(() => null);
    const message = data && typeof data === "object" && "error" in data ? String(data.error) : null;
    setServerError(
      message ??
        (fallbackEmail
          ? `The enquiry could not be sent. Email us at ${fallbackEmail} instead.`
          : "The enquiry could not be sent. Please try again in a moment."),
    );
  };

  if (sent) {
    return (
      <p ref={confirmation} tabIndex={-1} role="status" className="measure focus:outline-none">
        {successMessage}
      </p>
    );
  }

  const describedBy = (id: string) => ({ id, "aria-describedby": `${id}-error` });

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)}>
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">Website</label>
        <input ref={honeypot} id="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <fieldset disabled={isSubmitting} className="space-y-8">
        <legend className="sr-only">Enquiry</legend>
        {inputs.map((input) => (
          <Field key={input.name} id={input.name} label={input.label} optional={"optional" in input} error={errors[input.name]?.message}>
            <input
              {...describedBy(input.name)}
              {...register(input.name)}
              type={input.type}
              autoComplete={input.autoComplete}
              aria-invalid={Boolean(errors[input.name])}
              className={cx(fieldControl, "h-14")}
            />
          </Field>
        ))}
        <Field id="product" label="Product" error={errors.product?.message}>
          <div className="relative">
            <select {...describedBy("product")} {...register("product")} aria-invalid={Boolean(errors.product)} className={cx(fieldControl, "h-14 pr-8")}>
              <option value="" disabled>
                Choose a product
              </option>
              {[...products.map((product) => product.name), PRODUCT_OTHER].map((product) => (
                <option key={product}>{product}</option>
              ))}
            </select>
            <span aria-hidden className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2">
              ↓
            </span>
          </div>
        </Field>
        <Field id="requirement" label="Requirement" error={errors.requirement?.message}>
          <textarea
            {...describedBy("requirement")}
            {...register("requirement")}
            rows={5}
            aria-invalid={Boolean(errors.requirement)}
            className={cx(fieldControl, "min-h-36 resize-y pt-4")}
          />
        </Field>
        <AttachmentField file={file} error={fileError} onChange={chooseFile} />
        <div className="pt-4">
          <button type="submit" className="h-12 bg-brand px-6 text-body font-medium text-paper transition-opacity hover:opacity-85 disabled:opacity-60">
            {isSubmitting ? "Sending…" : "Send enquiry"}
          </button>
          <p role="alert" className="measure mt-4">
            {serverError}
          </p>
        </div>
      </fieldset>
    </form>
  );
}
