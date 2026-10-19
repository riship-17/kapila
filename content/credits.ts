// Licensed photographs from Wikimedia Commons, standing in until the company's own photography is ready.
// CC BY and CC BY-SA licences require the credit shown on /credits. Remove an entry when its file is replaced.

export type PhotoCredit = {
  file: string;
  title: string;
  author: string;
  license: string;
  licenseUrl: string;
  source: string;
};

export const photoCredits: PhotoCredit[] = [
  {
    file: "/images/site/opening-01.jpg",
    title: "The interior of a drinking water treatment plant. DW Treatment Plant (15011059300)",
    author: "US Environmental Protection Agency",
    license: "Public domain",
    licenseUrl: "",
    source: "https://commons.wikimedia.org/wiki/File:The_interior_of_a_drinking_water_treatment_plant._DW_Treatment_Plant_(15011059300).jpg",
  },
  {
    file: "/images/site/manufacturing-01.jpg",
    title: "Reverse osmosis desalination plant",
    author: "James Grellier",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Reverse_osmosis_desalination_plant.JPG",
  },
  {
    file: "/images/site/production-01.jpg",
    title: "Reverse Osmosis System",
    author: "Mas mufti",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Reverse_Osmosis_System.jpg",
  },
  {
    file: "/images/products/granular-activated-carbon-01.jpg",
    title: "Activated Carbon",
    author: "Ravedave",
    license: "CC BY 2.5",
    licenseUrl: "https://creativecommons.org/licenses/by/2.5",
    source: "https://commons.wikimedia.org/wiki/File:Activated_Carbon.jpg",
  },
  {
    file: "/images/products/powdered-activated-carbon-01.jpg",
    title: "Activated Charcoal",
    author: "Mydriatic",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Activated_Charcoal.jpg",
  },
  {
    file: "/images/products/ro-membrane-elements-01.jpg",
    title: "Reverse osmosis membrane element layers",
    author: "David Shankbone",
    license: "CC BY 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Reverse_osmosis_membrane_element_layers.jpg",
  },
  {
    file: "/images/products/pp-spun-filter-cartridges-01.jpg",
    title: "Membrane filter without housing",
    author: "Agne27",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Membrane_filter_without_housing.jpg",
  },
  {
    file: "/images/products/string-wound-filter-cartridges-01.jpg",
    title: "Paterson, New Jersey - Textiles. Rayon yarn being wound from one bobbin on to another and being twisted. - NARA - 518580",
    author: "Lewis Hine",
    license: "Public domain",
    licenseUrl: "",
    source: "https://commons.wikimedia.org/wiki/File:Paterson,_New_Jersey_-_Textiles._Rayon_yarn_being_wound_from_one_bobbin_on_to_another_and_being_twisted._-_NARA_-_518580.jpg",
  },
  {
    file: "/images/products/filter-housings-01.jpg",
    title: "Wasserfilter mit Aktivkohle-Filterpatrone",
    author: "Cschirp",
    license: "CC BY-SA 3.0",
    licenseUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    source: "https://commons.wikimedia.org/wiki/File:Wasserfilter_mit_Aktivkohle-Filterpatrone.JPG",
  },
];
