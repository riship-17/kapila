import { ContactDetails } from "@/components/sections/ContactDetails";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactMap } from "@/components/sections/ContactMap";
import { ContentGrid } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { JsonLd } from "@/components/ui/JsonLd";
import { RevealItem } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { contact } from "@/content/pages";
import { products } from "@/content/products";
import { site } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Contact", description: contact.description, path: "/contact" });

export default function ContactPage() {
  return (
    <>
      <DisplayHeading>Contact</DisplayHeading>
      <Section number="01" title="Enquiry">
        <ContentGrid className="gap-y-16">
          <RevealItem className="col-span-9 md:col-span-5">
            <ContactForm
              products={products.map((product) => product.name)}
              successMessage={contact.success}
              fallbackEmail={site.email}
            />
          </RevealItem>
          <div className="col-span-9 md:col-span-3 md:col-start-7">
            <ContactDetails />
          </div>
        </ContentGrid>
      </Section>
      <ContactMap />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
