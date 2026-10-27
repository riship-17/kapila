import Image from "next/image";
import Link from "next/link";
import { products } from "@/content/products";
import { nav, site, telHref } from "@/content/site";
import { Container } from "../ui/Container";
import { Label } from "../ui/Label";

export function Footer() {
  const hasContact = site.phones.length > 0 || site.email || site.address.length > 0;

  return (
    <footer className="mt-32 lg:mt-48">
      <Container>
        <div className="grid gap-x-6 gap-y-10 border-t border-rule py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src={site.logo.src} alt={site.name} width={site.logo.width} height={site.logo.height} className="h-10 w-auto" />
          <p className="mt-4 text-ink-secondary">{site.tagline}</p>
        </div>
        <div>
          <Label as="p" tone="secondary" className="mb-3">
            Products
          </Label>
          <ul className="space-y-1">
            {products.map((product) => (
              <li key={product.slug}>
                <Link href={`/products/${product.slug}`} className="decoration-1 underline-offset-4 hover:underline">
                  {product.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {hasContact && (
          <address className="not-italic">
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
            {site.email && (
              <p>
                <a href={`mailto:${site.email}`} className="link">
                  {site.email}
                </a>
              </p>
            )}
            {site.address.length > 0 && (
              <div className="mt-3 text-ink-secondary">
                {site.address.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            )}
          </address>
        )}
        <nav aria-label="Footer">
          <Label as="p" tone="secondary" className="mb-3">
            Company
          </Label>
          <ul className="space-y-1">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="decoration-1 underline-offset-4 hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>
        <div className="border-t border-rule py-6">
          <Label tone="secondary">
            © {new Date().getFullYear()} {site.name}
          </Label>
        </div>
      </Container>
    </footer>
  );
}
