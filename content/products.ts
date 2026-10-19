export type Spec = { label: string; value: string };

export type SpecTable = { title: string; rows: Spec[] };

export type ComparisonTable = {
  title: string;
  headers: string[];
  rows: { label: string; values: string[] }[];
};

export type ProductImage = { src: string; alt: string };

/** Plain text runs and inline links, for copy that links to other products. */
export type RichText = (string | { text: string; href: string })[];

export type Product = {
  slug: string;
  index: string;
  name: string;
  /** Schema.org Product category. */
  category: string;
  summary: string[];
  highlights: string[];
  images: [ProductImage, ...ProductImage[]];
  specTables: SpecTable[];
  comparisonTables?: ComparisonTable[];
  applications: string[];
  /** A numbered section after specifications: one statement line, then body text. */
  note?: { title: string; statement: string; body: RichText };
  ordering?: { pattern: string; segments: string[]; note: string };
  downloads: { name: string; href: string; format: string; size: string }[];
};

const image = (slug: string, alt: string): ProductImage => ({
  src: `/images/products/${slug}-01.jpg`,
  alt,
});

export const products: Product[] = [
  {
    slug: "granular-activated-carbon",
    index: "01",
    name: "Granular Activated Carbon",
    category: "Activated carbon",
    highlights: ["IODINE VALUE 600–1200 MG/G", "4×8 TO 20×50 MESH", "COCONUT SHELL, COAL"],
    summary: [
      "Activated carbon is a porous carbonaceous adsorbent. Contaminant molecules attach to the internal pore surface rather than distributing through the bulk of the material, so pore structure rather than volume determines performance.",
      "Granular grades are produced from coconut shell and bituminous coal by steam activation. They are used in packed beds, where contact time and bed depth govern the result, and are the standard dechlorination stage ahead of an RO membrane.",
    ],
    images: [
      image(
        "granular-activated-carbon",
        "A pile of black activated carbon granules beside a solid block of carbon on a white surface",
      ),
    ],
    specTables: [
      {
        title: "Specifications",
        rows: [
          { label: "Particle size", value: "Above 0.2 mm" },
          { label: "Raw material", value: "Coconut shell, bituminous coal" },
          { label: "Mesh sizes", value: "4×8, 6×12, 8×16, 8×30, 12×30, 20×50" },
          { label: "Iodine value", value: "600, 800, 900, 1000, 1100, 1200 mg/g" },
          { label: "CTC activity", value: "40–70%" },
          { label: "Hardness", value: "95% minimum" },
          { label: "Moisture", value: "5% maximum" },
          { label: "Ash content", value: "5% max coconut shell; 12% max coal" },
          { label: "Bulk density", value: "450–550 g/l" },
          { label: "Grades", value: "Washed and unwashed" },
          { label: "Packaging", value: "25 kg bags; 500 kg jumbo bags" },
        ],
      },
    ],
    applications: [
      "RO pre-treatment and dechlorination",
      "Potable water taste and odour correction",
      "Organics and colour removal",
      "Solvent recovery",
      "Gold recovery",
      "Effluent polishing",
    ],
    downloads: [],
  },
  {
    slug: "powdered-activated-carbon",
    index: "02",
    name: "Powdered Activated Carbon",
    category: "Activated carbon",
    highlights: ["PARTICLE SIZE BELOW 0.18 MM", "WOOD, COAL, COCONUT", "WASHED AND UNWASHED"],
    summary: [
      "Powdered grades are milled to pass 325 mesh, which exposes the pore structure immediately on contact. They are dosed into a batch rather than packed into a bed, then separated by filtration or settling.",
      "Because the contact is short and complete, powdered carbon suits decolourisation and polishing duties where a bed would be impractical — effluent treatment, sugar refining, and chemical and pharmaceutical processing.",
    ],
    images: [
      image(
        "powdered-activated-carbon",
        "Electron micrograph of activated carbon, showing the open, porous structure of its surface",
      ),
    ],
    specTables: [
      {
        title: "Specifications",
        rows: [
          { label: "Particle size", value: "Below 0.18 mm (325 mesh); 200 mesh available" },
          { label: "Raw material", value: "Wood, coal, coconut shell" },
          { label: "Methylene blue value", value: "10–22 ml/0.1 g" },
          { label: "Iodine value", value: "500–1100 mg/g" },
          { label: "Moisture", value: "10% maximum" },
          { label: "Ash content", value: "5–15% by grade" },
          { label: "pH", value: "6–11 by grade" },
          { label: "Grades", value: "Washed, unwashed, acid washed" },
          { label: "Packaging", value: "25 kg bags" },
        ],
      },
    ],
    applications: [
      "Effluent treatment batch dosing",
      "Sugar and glucose decolourisation",
      "Pharmaceutical purification",
      "Chemical process decolourisation",
      "Food and beverage",
      "Flue gas treatment",
    ],
    downloads: [],
  },
  {
    slug: "ro-membrane-elements",
    index: "03",
    name: "RO Membrane Elements",
    category: "Reverse osmosis membrane elements",
    highlights: ["1812 TO 8040", "NACL REJECTION 99.0–99.7%", "BRACKISH, LOW ENERGY, SEA WATER"],
    summary: [
      "Reverse osmosis elements are spiral-wound with a thin-film composite polyamide membrane. Feed water is driven across the membrane surface under pressure; dissolved salts are rejected to the concentrate stream and permeate passes through.",
      "Element selection follows feed TDS and the energy the plant can carry. Brackish water elements cover most industrial duty, low energy elements reduce operating pressure at moderate TDS, and sea water elements handle high-TDS borewell and desalination feed.",
    ],
    images: [
      image(
        "ro-membrane-elements",
        "Hands peeling back the outer wrap of a spiral-wound membrane element to show the membrane and mesh spacer layers",
      ),
    ],
    comparisonTables: [
      {
        title: "Element sizes",
        headers: ["Model", "Dimensions", "Permeate flow", "Active area", "Typical use"],
        rows: [
          { label: "1812", values: ["1.8\"×12\"", "50–100 GPD", "4 ft²", "Domestic and under-sink"] },
          { label: "2012", values: ["2.0\"×12\"", "100–150 GPD", "6 ft²", "Small commercial"] },
          { label: "2521", values: ["2.5\"×21\"", "150–250 GPD", "12 ft²", "Laboratory and small plant"] },
          { label: "4021", values: ["4.0\"×21\"", "1,000 GPD", "40 ft²", "Compact commercial"] },
          { label: "4040", values: ["4.0\"×40\"", "2,200–2,600 GPD", "85–90 ft²", "Commercial and industrial"] },
          { label: "8040", values: ["8.0\"×40\"", "9,500–11,500 GPD", "365–400 ft²", "Industrial plants"] },
        ],
      },
      {
        title: "Series",
        headers: ["Series", "NaCl rejection", "Test pressure", "Feed TDS limit"],
        rows: [
          { label: "Brackish water (BW)", values: ["99.5%", "225 psi", "Up to 10,000 ppm"] },
          { label: "Low energy (LE)", values: ["99.2%", "150 psi", "Up to 5,000 ppm"] },
          { label: "Sea water (SW)", values: ["99.7%", "800 psi", "Up to 42,000 ppm"] },
        ],
      },
    ],
    specTables: [
      {
        title: "Operating limits",
        rows: [
          { label: "Membrane", value: "Thin-film composite polyamide" },
          { label: "Max operating pressure", value: "600 psi brackish; 1,000 psi sea water" },
          { label: "Max feed temperature", value: "45°C" },
          { label: "Max feed SDI", value: "5" },
          { label: "Free chlorine tolerance", value: "Below 0.1 ppm" },
          { label: "pH range, operation", value: "2 to 11" },
          { label: "pH range, cleaning", value: "1 to 13" },
          { label: "Max pressure drop per element", value: "15 psi" },
        ],
      },
    ],
    note: {
      title: "Pre-treatment",
      statement: "Free chlorine above 0.1 ppm oxidises the polyamide layer, and the damage cannot be reversed.",
      body: [
        { text: "A 5 micron sediment cartridge", href: "/products/pp-spun-filter-cartridges" },
        " followed by ",
        { text: "granular activated carbon", href: "/products/granular-activated-carbon" },
        " ahead of the membrane housing is the standard arrangement.",
      ],
    },
    applications: [
      "Industrial RO plants",
      "Packaged drinking water",
      "Boiler feed and DM plants",
      "Borewell desalination",
      "Process water",
      "Effluent recovery and ZLD",
    ],
    downloads: [],
  },
  {
    slug: "pp-spun-filter-cartridges",
    index: "04",
    name: "PP Spun Filter Cartridges",
    category: "Filter cartridges",
    highlights: ["1–100 MICRON", "10\" TO 40\"", "2.5\" AND 4.5\" OD"],
    summary: [
      "PP spun cartridges are produced by thermally bonding melt-blown polypropylene fibres into a self-supporting depth filter. Fibre density increases towards the core, so coarse particles are held in the outer layers and finer particles nearer the centre, and the cartridge holds more dirt before differential pressure rises.",
      "There are no binders, adhesives, lubricants or surfactants in the construction. The raw material is 100% virgin polypropylene of FDA-compliant grade, suitable for potable water and food contact duty.",
    ],
    images: [
      image(
        "pp-spun-filter-cartridges",
        "A tall white filter cartridge standing on a steel stand in a process room lined with stainless tanks",
      ),
    ],
    specTables: [
      {
        title: "Specifications",
        rows: [
          { label: "Material", value: "100% virgin polypropylene" },
          { label: "Micron ratings", value: "1, 3, 5, 10, 20, 25, 30, 50, 75, 100" },
          { label: "Filtration efficiency", value: "90% nominal at rated micron" },
          { label: "Lengths", value: "9¾\", 9⅞\", 10\", 20\", 30\", 40\"" },
          { label: "Outer diameter", value: "2.5\" (63 mm); jumbo 4.5\" (114 mm)" },
          { label: "Inner diameter", value: "28 mm standard; 30 mm optional" },
          { label: "End caps", value: "DOE; 222 and 226 O-ring, flat or fin end" },
          { label: "Max operating temperature", value: "52°C" },
          { label: "Max differential pressure", value: "2.1 bar (30 psi) at 25°C" },
          { label: "Recommended change-out", value: "1.0 bar (15 psi) differential" },
          { label: "Packaging", value: "Individually bagged; 25 or 50 per carton" },
        ],
      },
    ],
    ordering: {
      pattern: "PPS-05-20-DOE",
      segments: ["Type", "Micron", "Length", "End cap"],
      note: "Non-standard lengths, micron ratings and end-cap configurations are made to drawing.",
    },
    applications: [
      "RO and DM plant pre-filtration",
      "Packaged drinking water",
      "Pharmaceutical process water",
      "Electroplating and metal finishing",
      "Paint, ink and coatings",
      "Chemical process streams",
      "Food, beverage and dairy",
      "Boiler feed and cooling water",
    ],
    downloads: [],
  },
  {
    slug: "string-wound-filter-cartridges",
    index: "05",
    name: "String Wound Filter Cartridges",
    category: "Filter cartridges",
    highlights: ["1–200 MICRON", "PP, COTTON, POLYESTER YARN", "PP, SS304, SS316 CORE"],
    summary: [
      "String wound cartridges are built by winding filtration yarn over a rigid core in a diamond pattern, varying density through the build to produce a true graded depth gradient from surface to core.",
      "Yarn and core are chosen for the duty. Polypropylene suits general water and chemical service, bleached cotton suits food and beverage, and a stainless steel core raises the temperature limit to 120°C for hot process liquids and plating baths.",
    ],
    images: [
      image(
        "string-wound-filter-cartridges",
        "Black and white photograph of a mill worker winding yarn from one bobbin onto another",
      ),
    ],
    specTables: [
      {
        title: "Specifications",
        rows: [
          { label: "Yarn", value: "Polypropylene, bleached cotton, polyester" },
          { label: "Core", value: "Polypropylene, SS 304, SS 316" },
          { label: "Micron ratings", value: "1, 3, 5, 10, 20, 25, 30, 50, 75, 100, 150, 200" },
          { label: "Lengths", value: "9¾\", 10\", 20\", 30\", 40\"" },
          { label: "Outer diameter", value: "2.5\" (63 mm); 4.5\" (114 mm)" },
          { label: "Inner diameter", value: "28 mm" },
          { label: "End caps", value: "DOE; 222 and 226 O-ring" },
          { label: "Max operating temperature", value: "60°C PP core; 120°C SS core" },
          { label: "Max differential pressure", value: "2.1 bar (30 psi)" },
          { label: "Packaging", value: "Individually bagged; 25 or 50 per carton" },
        ],
      },
    ],
    applications: [
      "High solids loading",
      "Viscous liquids",
      "Hot process water",
      "Plating and anodising baths",
      "Edible oils",
      "Resin and varnish",
    ],
    downloads: [],
  },
  {
    slug: "filter-housings",
    index: "06",
    name: "Filter Housings",
    category: "Filter housings",
    highlights: ["10\" AND 20\" SLIM", "10\" AND 20\" BIG BLUE", "½\" TO 1½\" PORTS"],
    summary: [
      "Housings are moulded in reinforced food-grade polypropylene and supplied with a spanner wrench, mounting bracket and fixings. The cap carries a pressure-release button so the sump can be opened without draining the line twice.",
      "Slim housings take 2.5\" cartridges and suit domestic and light commercial flow. Big Blue housings take 4.5\" cartridges, for higher flow rates and heavier dirt loads.",
    ],
    images: [
      image(
        "filter-housings",
        "A clear filter housing with a blue cap beside a white cartridge and a measuring rule",
      ),
    ],
    comparisonTables: [
      {
        title: "Housing sizes",
        headers: ["Specification", "10\" Slim", "20\" Slim", "10\" Big Blue", "20\" Big Blue"],
        rows: [
          { label: "Cartridge size", values: ["2.5\"×10\"", "2.5\"×20\"", "4.5\"×10\"", "4.5\"×20\""] },
          { label: "Port sizes", values: ["½\", ¾\", 1\"", "½\", ¾\", 1\"", "1\", 1½\"", "1\", 1½\""] },
          { label: "Typical flow", values: ["15 LPM", "20 LPM", "60 LPM", "80 LPM"] },
          { label: "Max working pressure", values: ["125 psi", "125 psi", "125 psi", "125 psi"] },
          { label: "Max temperature", values: ["50°C", "50°C", "50°C", "50°C"] },
          { label: "Sump options", values: ["Opaque or clear", "Opaque or clear", "Opaque", "Opaque"] },
          {
            label: "Supplied with",
            values: [
              "Wrench, bracket, fixings",
              "Wrench, bracket, fixings",
              "Wrench, bracket, fixings",
              "Wrench, bracket, fixings",
            ],
          },
        ],
      },
    ],
    specTables: [],
    applications: [
      "Single and multi-stage pre-filtration",
      "RO plant inlet",
      "Borewell and tank water",
      "Point of entry",
      "Light commercial",
    ],
    downloads: [],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getNextProduct(slug: string): Product {
  const position = products.findIndex((product) => product.slug === slug);
  const next = products[(position + 1) % products.length];
  if (!next) throw new Error(`No product follows ${slug}`);
  return next;
}
