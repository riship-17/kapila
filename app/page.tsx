import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { Label } from "@/components/ui/Label";
import { ProductGrid } from "@/components/ui/ProductGrid";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { home, site } from "@/content/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
};

export default function HomePage() {
  return (
    <>
      <Container className="grid items-end gap-x-12 gap-y-12 pt-14 lg:grid-cols-12 lg:pt-24">
        <div className="rise lg:col-span-7">
          <Label as="p" tone="secondary">
            {site.name} — {site.tagline}
          </Label>
          <h1 className="mt-6 text-display text-balance">{home.heading}</h1>
          <p className="measure mt-8 text-lead text-ink-secondary">{home.intro}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
            <ButtonLink href="/products">View products</ButtonLink>
            <ButtonLink href="/contact" variant="text">
              Send an enquiry
            </ButtonLink>
          </div>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden bg-surface lg:col-span-5 lg:aspect-[4/5]">
          <Image
            src={home.heroImage.src}
            alt={home.heroImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 480px, 100vw"
            style={{ objectPosition: "30% 50%" }}
            className="object-cover"
          />
        </div>
      </Container>

      <Container className="mt-28 lg:mt-40">
        <section aria-labelledby="products">
          <SectionHeading
            label="01 — Products"
            id="products"
            action={
              <ButtonLink href="/contact" variant="text">
                Ask about a grade
              </ButtonLink>
            }
          >
            Everything a filtration train needs.
          </SectionHeading>
          <div className="mt-12">
            <ProductGrid />
          </div>
        </section>
      </Container>

      <Container className="mt-28 lg:mt-40">
        <section aria-labelledby="work">
          <SectionHeading label="02 — Recent work" id="work">
            Built, delivered and commissioned.
          </SectionHeading>
          <div className="mt-12 grid items-end gap-x-6 gap-y-10 lg:grid-cols-12">
            <Image
              src={home.project.src}
              alt={home.project.alt}
              width={home.project.width}
              height={home.project.height}
              sizes="(min-width: 1024px) 588px, 100vw"
              className="h-auto w-full bg-surface lg:col-span-6"
            />
            <div className="lg:col-span-5 lg:col-start-8">
              <h3 className="text-heading">{home.project.title}</h3>
              <p className="measure mt-3 text-ink-secondary">{home.project.body}</p>
              <dl className="mt-8">
                {home.project.facts.map((fact) => (
                  <div key={fact.label} className="flex items-baseline justify-between gap-6 border-t border-rule py-4 last:border-b">
                    <dt className="text-ink-secondary">{fact.label}</dt>
                    <dd>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </Container>

      <Container className="mt-28 lg:mt-40">
        <section aria-labelledby="about-heading" id="about" className="scroll-mt-8">
          <SectionHeading label="03 — About" id="about-heading">
            Stocked, packed and ready to dispatch.
          </SectionHeading>
          <div className="mt-12 grid gap-x-6 gap-y-12 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-6">
              {home.about.map((paragraph) => (
                <p key={paragraph} className="measure text-lead">
                  {paragraph}
                </p>
              ))}
            </div>
            <dl className="lg:col-span-5 lg:col-start-8">
              {home.facts.map((fact) => (
                <div key={fact.label} className="flex items-baseline justify-between gap-6 border-t border-rule py-5 last:border-b">
                  <dt className="text-ink-secondary">{fact.label}</dt>
                  <dd className="text-heading">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      </Container>

      <Container className="mt-28 lg:mt-40">
        <section aria-labelledby="enquire" className="bg-brand px-6 py-16 text-paper md:px-12 md:py-20">
          <h2 id="enquire" className="max-w-[16ch] text-title text-balance">
            Tell us what you need and how much.
          </h2>
          <p className="measure mt-5 text-lead opacity-80">
            Send the product, grade and quantity, and we will come back with a price and dispatch date.
          </p>
          <ButtonLink href="/contact" variant="inverse" className="mt-10">
            Send an enquiry
          </ButtonLink>
        </section>
      </Container>
    </>
  );
}
