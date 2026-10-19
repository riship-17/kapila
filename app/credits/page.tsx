import { notFound } from "next/navigation";
import { DisplayHeading } from "@/components/ui/DisplayHeading";
import { Label } from "@/components/ui/Label";
import { RevealItem } from "@/components/ui/Reveal";
import { Rule } from "@/components/ui/Rule";
import { Section } from "@/components/ui/Section";
import { photoCredits } from "@/content/credits";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Photo credits",
  description: "Sources and licences for the photographs used on this site.",
  path: "/credits",
});

export default function CreditsPage() {
  if (photoCredits.length === 0) notFound();

  return (
    <>
      <DisplayHeading>Photo credits</DisplayHeading>
      <Section number="01" title="Photography" flush>
        <ul>
          {photoCredits.map((credit) => (
            <RevealItem as="li" key={credit.file}>
              <div className="space-y-2 py-6">
                <p>{credit.title}</p>
                <Label as="p" tone="secondary">
                  {credit.author} ·{" "}
                  {credit.licenseUrl ? (
                    <a href={credit.licenseUrl} className="link">
                      {credit.license}
                    </a>
                  ) : (
                    credit.license
                  )}{" "}
                  ·{" "}
                  <a href={credit.source} className="link">
                    Source
                  </a>
                </Label>
                <Label as="p" tone="secondary">
                  Used as public{credit.file}
                </Label>
              </div>
              <Rule bleed />
            </RevealItem>
          ))}
        </ul>
      </Section>
    </>
  );
}
