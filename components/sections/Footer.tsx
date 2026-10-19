import Link from "next/link";
import { photoCredits } from "@/content/credits";
import { nav, site, telHref } from "@/content/site";
import { Container, Grid } from "../ui/Container";
import { Label } from "../ui/Label";
import { Reveal } from "../ui/Reveal";
import { Rule } from "../ui/Rule";

export function Footer() {
  const { address } = site;

  return (
    <footer className="mt-24 lg:mt-40">
      <Container>
        <Reveal>
          <Rule />
          <Grid className="gap-y-10 py-10">
            <p className="col-span-12 font-medium lg:col-span-3">{site.name}</p>
            <address className="col-span-12 not-italic md:col-span-4 lg:col-span-3">
              <Label as="p" tone="secondary" className="mb-3">
                Address
              </Label>
              <p>{address.street}</p>
              <p>
                {address.locality}, {address.region} {address.postalCode}
              </p>
              <p>{address.country}</p>
            </address>
            <div className="col-span-12 md:col-span-4 lg:col-span-3">
              <Label as="p" tone="secondary" className="mb-3">
                Contact
              </Label>
              {site.phones.map((phone) => (
                <p key={phone}>
                  <a href={telHref(phone)} className="link">
                    {phone}
                  </a>
                </p>
              ))}
              <p>
                <a href={`mailto:${site.email}`} className="link">
                  {site.email}
                </a>
              </p>
            </div>
            <nav aria-label="Footer" className="col-span-12 md:col-span-4 lg:col-span-3">
              <ul className="font-mono text-label uppercase">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="inline-block py-1 decoration-1 underline-offset-4 hover:underline">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Grid>
          <Rule />
          <div className="flex flex-wrap justify-between gap-x-6 gap-y-2 py-6">
            <Label tone="secondary">
              © {new Date().getFullYear()} {site.name}
            </Label>
            {photoCredits.length > 0 && (
              <Label tone="secondary">
                <Link href="/credits" className="inline-block py-1 decoration-1 underline-offset-4 hover:underline">
                  Photo credits
                </Link>
              </Label>
            )}
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
