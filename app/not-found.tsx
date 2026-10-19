import Link from "next/link";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Section } from "@/components/ui/Section";
import { RevealItem } from "@/components/ui/Reveal";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <>
      <DisplayHeading>Page not found</DisplayHeading>
      <Section number="404" title="Not found">
        <RevealItem as="p" className="measure">
          There is no page at this address. The{" "}
          <Link href="/products" className="link">
            product index
          </Link>{" "}
          lists every specification on the site, or{" "}
          <Link href="/contact" className="link">
            send an enquiry
          </Link>{" "}
          if you were looking for something specific.
        </RevealItem>
      </Section>
    </>
  );
}
