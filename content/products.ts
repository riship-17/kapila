// TODO: Check every detail row against your own specifications before launch.
// They were written from the product photographs and cover only what those show.

export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** CSS object-position when the photograph is cropped to a square. */
  focus?: string;
};

export type Product = {
  slug: string;
  name: string;
  /** Schema.org Product category. */
  category: string;
  /** One line for the product grid. */
  short: string;
  summary: string[];
  images: [ProductImage, ...ProductImage[]];
  details: { label: string; value: string }[];
  uses: string[];
};

const img = (file: string, alt: string, [width, height]: [number, number], focus?: string): ProductImage => ({
  src: `/images/products/${file}`,
  alt,
  width,
  height,
  focus,
});

export const products: Product[] = [
  {
    slug: "granular-activated-carbon",
    name: "Granular Activated Carbon",
    category: "Activated carbon",
    short: "Coconut-shell GAC for RO pre-treatment, drinking water and effluent polishing.",
    summary: [
      "Our granular activated carbon is made from coconut shell. Its fine internal pore structure adsorbs chlorine, organics, colour, and taste and odour compounds as water passes through a carbon bed.",
      "It is the standard dechlorination stage ahead of RO membranes, and is supplied in a range of particle sizes to suit the vessel and the flow rate.",
    ],
    images: [
      img("gac-handful.jpg", "A cupped hand holding a heap of black coconut-shell activated carbon granules", [960, 1280]),
      img("gac-heap.jpg", "A pile of coarse activated carbon granules on dark slate, with a steel scoop beside it", [1024, 1536]),
      img("gac-fine-palm.jpg", "Fine activated carbon granules held in an open palm", [864, 1536]),
    ],
    details: [
      { label: "Raw material", value: "Coconut shell" },
      { label: "Particle size", value: "0.5–1, 1–2, 2–4, 3–5, 4–6 and 6–8 mm" },
      { label: "Mesh size", value: "4×8, 8×16" },
      { label: "Packing", value: "25 kg bags" },
      { label: "Origin", value: "Made in India" },
    ],
    uses: [
      "RO pre-treatment and dechlorination",
      "Drinking water filters",
      "Colour, taste and odour removal",
      "Effluent polishing",
    ],
  },
  {
    slug: "activated-carbon-powder",
    name: "Activated Carbon Powder",
    category: "Activated carbon",
    short: "Fine powdered carbon for batch dosing and decolourisation.",
    summary: [
      "Powdered activated carbon is dosed straight into a liquid, mixed, and then removed by settling or filtration. Its very fine particles give fast, complete contact.",
      "It suits decolourisation and purification work where a fixed carbon bed would be impractical.",
    ],
    images: [img("carbon-powder-heap.jpg", "A heap of black activated carbon powder beside a wooden scoop and halved coconut shells", [1536, 864], "55% 50%")],
    details: [
      { label: "Form", value: "Fine powder" },
      { label: "Method", value: "Batch dosing" },
      { label: "Supply", value: "Bulk, on enquiry" },
    ],
    uses: ["Effluent treatment", "Decolourisation of liquids", "Chemical and food processing"],
  },
  {
    slug: "ro-plants",
    name: "Commercial & Industrial RO Plants",
    category: "Water treatment plant",
    short: "Complete RO plants, from 1,000 LPH skids to container-built systems.",
    summary: [
      "We build and commission reverse osmosis plants for commercial and industrial users. Each plant is assembled with its pre-filters, high-pressure pump, membranes and control panel on a single frame.",
      "Plants range from compact 1,000 litres-per-hour skids to container-built systems producing 18 m³ an hour, which arrive ready to connect on site.",
    ],
    images: [
      img("ro-plant-skid.jpg", "An RO plant on a steel frame with two blue filter vessels, a control panel, cartridge housings, a vertical pump and RO membrane tubes", [1536, 1024]),
      img("ro-container.jpg", "An RO plant installed inside a shipping container", [1024, 1280]),
    ],
    details: [
      { label: "Capacity", value: "From 1,000 LPH" },
      { label: "Largest recent build", value: "18 m³/hr, container-built" },
      { label: "Includes", value: "Pre-filters, high-pressure pump, RO membranes, control panel" },
      { label: "Options", value: "Chiller, container housing" },
    ],
    uses: ["Factories and process water", "Packaged drinking water", "Hotels and hospitals", "Boiler feed"],
  },
  {
    slug: "spun-filter-cartridges",
    name: "PP Spun Filter Cartridges",
    category: "Filter cartridge",
    short: "Polypropylene sediment cartridges for RO pre-filtration.",
    summary: [
      "Spun cartridges are made from polypropylene fibre formed into a depth-filter tube. They trap sand, silt and rust before the water reaches the RO membrane.",
      "They fit standard filter housings and are replaced when the pressure drop across the filter starts to rise.",
    ],
    images: [img("spun-cartridges.jpg", "Four white polypropylene spun filter cartridges of different lengths standing upright", [864, 1536], "50% 60%")],
    details: [
      { label: "Material", value: "Polypropylene" },
      { label: "Type", value: "Depth (sediment) filter" },
      { label: "Sizes", value: "Standard and slim, in several lengths" },
    ],
    uses: ["RO pre-filtration", "Commercial water purifiers", "Process water"],
  },
  {
    slug: "filter-housings",
    name: "Filter Housings",
    category: "Filter housing",
    short: "Blue cartridge housings for spun and carbon filter cartridges.",
    summary: [
      "A filter housing holds a replaceable cartridge in the water line. Water enters through the cap, passes through the cartridge from the outside in, and leaves through the centre.",
      "The blue body unscrews from the black cap, so the cartridge can be changed in minutes without disturbing the pipework.",
    ],
    images: [img("filter-housings.jpg", "Two tall blue filter housings with black caps and inlet and outlet ports on top", [1024, 1536], "50% 35%")],
    details: [
      { label: "Body", value: "Blue plastic, ribbed" },
      { label: "Cap", value: "Black, inlet and outlet ports" },
      { label: "Takes", value: "PP spun and carbon cartridges" },
    ],
    uses: ["RO pre-filtration", "Sediment filtration", "Commercial water purifiers"],
  },
  {
    slug: "ro-antiscalant",
    name: "RO Antiscalant",
    category: "Water treatment chemical",
    short: "Liquid antiscalant that keeps RO membranes free of scale.",
    summary: [
      "Antiscalant is dosed into the feed water ahead of the RO membranes. It keeps hardness salts such as calcium carbonate and calcium sulphate in solution, so they do not deposit as scale on the membrane surface.",
      "Steady dosing keeps permeate flow up and lengthens the time between membrane cleanings.",
    ],
    images: [img("antiscalant-cans.jpg", "Three blue plastic cans of RO antiscalant in large, medium and small sizes", [1024, 1280], "50% 60%")],
    details: [
      { label: "Form", value: "Liquid" },
      { label: "Dosing", value: "Continuous, into the RO feed" },
      { label: "Packing", value: "Plastic cans, several sizes" },
    ],
    uses: ["Commercial and industrial RO plants", "Boiler feed RO", "Brackish water RO"],
  },
];

/** Shown as the wide card at the top of the product grid. */
export const featuredSlug = "ro-plants";

export const getProduct = (slug: string) => products.find((product) => product.slug === slug);
