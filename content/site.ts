// TODO: Replace the remaining values marked TODO (address, hours, map) before launch.

export type SiteImage = { src: string; alt: string };

export type Industry = {
  name: string;
  /** Product slugs from /content/products.ts */
  products: string[];
};

export const site = {
  name: "Kruti Enterprise",
  description:
    "Manufacturer of filter cartridges, filter housings, activated carbon and RO membrane elements for water treatment plants, OEM assemblers and process industries.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  address: {
    street: "TODO Street address",
    locality: "TODO City",
    region: "TODO State",
    postalCode: "TODO Postcode",
    country: "India",
  },
  contactPerson: "Dhruv Trivedi",
  phones: ["+91 98798 31353", "+91 99133 31353"],
  email: "krutiwatersolution@gmail.com",
  hours: "TODO Mon–Sat, 09:30–18:30",
  map: { latitude: 0, longitude: 0 }, // TODO: factory coordinates
} as const;

/** tel: link for a displayed phone number. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const industries: Industry[] = [
  {
    name: "Water treatment plants",
    products: [
      "pp-spun-filter-cartridges",
      "filter-housings",
      "granular-activated-carbon",
      "ro-membrane-elements",
    ],
  },
  {
    name: "Pharmaceutical",
    products: ["pp-spun-filter-cartridges", "ro-membrane-elements", "powdered-activated-carbon"],
  },
  {
    name: "Chemical",
    products: [
      "string-wound-filter-cartridges",
      "pp-spun-filter-cartridges",
      "powdered-activated-carbon",
      "granular-activated-carbon",
    ],
  },
  {
    name: "Food and beverage",
    products: [
      "pp-spun-filter-cartridges",
      "string-wound-filter-cartridges",
      "powdered-activated-carbon",
      "granular-activated-carbon",
    ],
  },
  {
    name: "Textile",
    products: [
      "pp-spun-filter-cartridges",
      "string-wound-filter-cartridges",
      "powdered-activated-carbon",
    ],
  },
  {
    name: "Dairy",
    products: [
      "pp-spun-filter-cartridges",
      "string-wound-filter-cartridges",
      "ro-membrane-elements",
    ],
  },
  {
    name: "Power and boiler feed",
    products: ["ro-membrane-elements", "pp-spun-filter-cartridges", "granular-activated-carbon"],
  },
  {
    name: "Electroplating",
    products: [
      "pp-spun-filter-cartridges",
      "string-wound-filter-cartridges",
      "powdered-activated-carbon",
    ],
  },
];
