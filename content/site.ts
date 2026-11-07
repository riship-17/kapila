// TODO: Fill in the opening hours and contact person. Anything left empty is simply not shown.

export const site = {
  name: "Kapila Enterprise",
  logo: { src: "/logo.png", width: 1481, height: 556 },
  tagline: "Water treatment supplies",
  description:
    "Coconut-shell activated carbon, spun filter cartridges, filter housings, RO antiscalant, and commercial and industrial RO plants.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, ""),
  contactPerson: "",
  phones: ["+91 94294 38776"] as string[],
  email: "siddhi0047@gmail.com",
  /** One line per row, e.g. ["Plot 12, GIDC Estate", "Ahmedabad, Gujarat 382445"]. */
  address: [
    "20, Shyam Corner, Sai Baba Mandir Road",
    "Nr. Express Highway Junction, CTM",
    "Ahmedabad 380026",
  ] as string[],
  hours: "",
};

/** tel: link for a displayed phone number. */
export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const nav = [
  { href: "/products", label: "Products" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const home = {
  heading: "Activated carbon, RO filters and RO plants.",
  intro:
    "We supply the materials that clean water, from coconut-shell carbon to spun filters and antiscalant, and build complete RO plants for commercial and industrial sites.",
  heroImage: {
    src: "/images/site/warehouse-stock.jpg",
    alt: "Rows of white 25 kg sacks stacked on pallets in a warehouse, with an open sack of granular activated carbon in front",
  },
  // TODO: Confirm this paragraph describes the business accurately.
  about: [
    "Kapila Enterprise supplies water treatment plants, filter manufacturers and RO assemblers. We keep our main grades in stock, packed and ready to dispatch.",
    "Our granular activated carbon is made from coconut shell and packed in 25 kg bags. Alongside it we supply the rest of a filtration train: spun cartridges and housings, antiscalant for the membranes, and the RO plant itself.",
  ],
  facts: [
    { value: "Coconut shell", label: "Activated carbon raw material" },
    { value: "25 kg", label: "Standard bag" },
    { value: "18 m³/hr", label: "Largest recent RO plant" },
  ],
  project: {
    src: "/images/products/ro-container.jpg",
    alt: "Inside a shipping container: RO membrane tubes, a blue vertical pump, a filter vessel, dosing tanks and a control panel",
    width: 1024,
    height: 1280,
    title: "18 m³/hr container RO plant",
    body: "A complete reverse osmosis plant built into a shipping container: pressure vessels, high-pressure pump, dosing and control panel. It was delivered as one unit and commissioned on site.",
    facts: [
      { label: "Output", value: "18 m³/hr" },
      { label: "Housing", value: "Shipping container" },
      { label: "Status", value: "Commissioned" },
    ],
  },
};

export const contactPage = {
  intro: "Tell us the product, grade and quantity you need.",
  success: "Thank you. Your enquiry has reached us and we will reply by email.",
};
