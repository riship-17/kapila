import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { JsonLd } from "@/components/ui/JsonLd";
import { Label } from "@/components/ui/Label";
import { PageHeading } from "@/components/ui/PageHeading";
import { products } from "@/content/products";
import { contactPage, site, telHref } from "@/content/site";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "Contact", description: contactPage.intro, path: "/contact" });

export default function ContactPage() {
  const details = [
    site.contactPerson && { label: "Contact", content: <p>{site.contactPerson}</p> },
    site.phones.length > 0 && {
      label: "Phone",
      content: site.phones.map((phone) => (
        <p key={phone}>
          <a href={telHref(phone)} className="link">
            {phone}
          </a>
        </p>
      )),
    },
    site.email && {
      label: "Email",
      content: (
        <a href={`mailto:${site.email}`} className="link break-all">
          {site.email}
        </a>
      ),
    },
    site.address.length > 0 && { label: "Address", content: site.address.map((line) => <p key={line}>{line}</p>) },
    site.hours && { label: "Hours", content: <p>{site.hours}</p> },
  ].filter((detail) => Boolean(detail)) as { label: string; content: React.ReactNode }[];

  return (
    <>
      <PageHeading label="Contact" intro={contactPage.intro}>
        Send an enquiry
      </PageHeading>
      <Container className="mt-16 lg:mt-24">
        <div className="grid gap-x-12 gap-y-16 border-t border-rule pt-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm
              products={products.map(({ slug, name }) => ({ slug, name }))}
              successMessage={contactPage.success}
              fallbackEmail={site.email}
            />
          </div>
          {details.length > 0 && (
            <address className="not-italic lg:col-span-4 lg:col-start-9">
              {details.map((detail) => (
                <div key={detail.label} className="border-b border-rule py-5 first:pt-0">
                  <Label as="p" tone="secondary" className="mb-2">
                    {detail.label}
                  </Label>
                  {detail.content}
                </div>
              ))}
            </address>
          )}
        </div>
      </Container>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
