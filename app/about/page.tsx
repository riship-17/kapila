import { ContentGrid } from "@/components/ui/Container";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { DocumentList } from "@/components/ui/DocumentList";
import { HairlineList } from "@/components/ui/HairlineList";
import { JsonLd } from "@/components/ui/JsonLd";
import { Photo } from "@/components/ui/Photo";
import { RevealItem } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { Section } from "@/components/ui/Section";
import { about } from "@/content/pages";
import { publicFileExists } from "@/lib/images";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({ title: "About", description: about.description, path: "/about" });

export default function AboutPage() {
  const certifications = about.certifications.filter((certificate) => publicFileExists(certificate.href));

  return (
    <>
      <DisplayHeading>About</DisplayHeading>
      <Section number="01" title="Manufacturing">
        <ContentGrid>
          <div className="col-span-9 space-y-6 lg:col-span-6">
            {about.manufacturing.map((paragraph) => (
              <RevealItem as="p" key={paragraph} className="measure">
                {paragraph}
              </RevealItem>
            ))}
          </div>
        </ContentGrid>
      </Section>
      <Photo image={about.image} sizes="100vw" className="mt-24 h-[64vh] w-full lg:mt-40" />
      <Section number="02" title="Quality">
        <RevealItem as="p" className="measure">
          {about.quality}
        </RevealItem>
        <div className="mt-10">
          <Rule bleed />
          <HairlineList items={about.checks} />
        </div>
      </Section>
      {certifications.length > 0 && (
        <Section number="03" title="Certifications" flush>
          <DocumentList documents={certifications} action="View PDF" />
        </Section>
      )}
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
        ])}
      />
    </>
  );
}
