import { site, telHref } from "@/content/site";
import { Label } from "../ui/Label";
import { RevealItem } from "../ui/Reveal";
import { Rule } from "../ui/Rule";

/** Phone and email at heading size, address in body, hours in mono, separated by hairlines. */
export function ContactDetails() {
  const { address } = site;
  const [emailLocal, emailDomain] = site.email.split("@");

  return (
    <address className="not-italic">
      <RevealItem className="space-y-2 pb-5">
        <Label as="p" tone="secondary">
          {site.contactPerson}
        </Label>
        {site.phones.map((phone) => (
          <p key={phone}>
            <a href={telHref(phone)} className="text-heading link">
              {phone}
            </a>
          </p>
        ))}
      </RevealItem>
      <Rule />
      <RevealItem className="py-5">
        <a href={`mailto:${site.email}`} className="text-heading link">
          {emailLocal}
          <wbr />@{emailDomain}
        </a>
      </RevealItem>
      <Rule />
      <RevealItem className="py-5">
        <p>{address.street}</p>
        <p>
          {address.locality}, {address.region} {address.postalCode}
        </p>
        <p>{address.country}</p>
      </RevealItem>
      <Rule />
      <RevealItem className="py-5">
        <Label as="p">{site.hours}</Label>
      </RevealItem>
    </address>
  );
}
