import type { SiteImage } from "./site";

export const home = {
  opening: {
    src: "/images/site/opening-01.jpg",
    alt: "Inside a drinking water treatment plant, blue and green pipework running between rows of filter vessels",
  } satisfies SiteImage,
  categories: ["Filter cartridges", "Filter housings", "Activated carbon", "RO membrane elements"],
  statement:
    "We manufacture filter cartridges, housings, activated carbon and RO membrane elements for water treatment plants, OEM assemblers and process industries.",
  // TODO: Confirm these two paragraphs describe the factory accurately.
  manufacturing: [
    "Spun and string wound cartridges are produced on our own lines from virgin polypropylene and filtration yarn. Each batch is checked for micron rating, dimensions and fibre density before it is bagged and cartoned.",
    "Activated carbon is screened to mesh and tested for iodine value, moisture and ash before packing. Membrane elements and housings are supplied against the same specification sheets, so a plant can be built and re-ordered from a single catalogue.",
  ],
  manufacturingImage: {
    src: "/images/site/manufacturing-01.jpg",
    alt: "The long hall of a desalination plant, membrane pressure vessels racked either side of green pipework",
  } satisfies SiteImage,
};

export type Certification = { name: string; href: string };

export const about = {
  description:
    "How our filter cartridges, activated carbon, RO membrane elements and housings are made and checked before dispatch.",
  // TODO: Confirm these paragraphs describe the factory accurately.
  manufacturing: [
    "We make filtration consumables for the plants that treat water and process liquids: filter cartridges, housings, activated carbon and reverse osmosis membrane elements.",
    "Spun cartridges are melt-blown and thermally bonded on our own lines; string wound cartridges are wound to a graded density over the specified core. Carbon is screened to mesh and packed to order.",
    "Most of what we ship goes to plant builders, OEM assemblers and distributors who re-order the same specification for years. The catalogue is written for them, and every figure in it is a figure we test against.",
  ],
  image: {
    src: "/images/site/production-01.jpg",
    alt: "A stainless steel reverse osmosis skid with pressure vessels, pipework and a storage tank in a tiled plant room",
  } satisfies SiteImage,
  quality:
    "Each batch is checked against its specification sheet before dispatch. The measurements below are recorded for every lot, and the records are available to customers on request.",
  checks: ["Micron rating", "Dimensions", "Fibre density", "Iodine value", "Moisture content", "Ash content"],
  // Add certificates as PDFs in /public/certificates and list them here. The section stays hidden while empty.
  certifications: [] as Certification[],
};

export const contact = {
  description:
    "Send an enquiry for filter cartridges, housings, activated carbon or RO membrane elements. Attach a drawing or specification if you have one.",
  success:
    "Thank you. Your enquiry has reached us and we will reply by email.",
};

export const industriesPage = {
  description:
    "Industries we supply with filter cartridges, housings, activated carbon and RO membrane elements, and the products each one uses.",
};

export const productsPage = {
  description:
    "Activated carbon, RO membrane elements, PP spun and string wound filter cartridges, and filter housings. Specifications for each product.",
};
