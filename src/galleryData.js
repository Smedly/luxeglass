// src/galleryData.js
// Table gallery (Top8 + initial Top12 entries). Add more entries later using the same object shape.

export const tableGallery = [
  {
    id: "argent-shard",
    category: "Tables",
    title: "Argent Shard Table",
    description: "Premium tempered glass with fractured metallic patterning for a sculptural, modern presence.",
    thumb: new URL('../public/images/tables/Top8/argent-shard-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top8/argent-shard.webp', import.meta.url).href,
    alt: "Argent Shard glass table with metallic crystalline texture"
  },
  {
    id: "aurora-moon",
    category: "Tables",
    title: "Aurora Moon Table",
    description: "Subtle luminous gradients evoke lunar reflections across smooth tempered glass.",
    thumb: new URL('../public/images/tables/Top8/aurora-moon-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top8/aurora-moon.webp', import.meta.url).href,
    alt: "Aurora Moon glass table with soft glowing gradient"
  },
  {
    id: "cold-ice",
    category: "Tables",
    title: "Cold Ice Table",
    description: "Ultra-clear glass hand-frozen texture capturing the clarity and break of natural ice.",
    thumb: new URL('../public/images/tables/Top8/cold-ice-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top8/cold-ice.webp', import.meta.url).href,
    alt: "Cold Ice glass table with crisp frozen texture"
  },
  {
    id: "crystal-cascade",
    category: "Tables",
    title: "Crystal Cascade Table",
    description: "Flowing surface relief inspired by cascading water, precision-carved into tempered glass.",
    thumb: new URL('../public/images/tables/Top8/crystal-cascade-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top8/crystal-cascade.webp', import.meta.url).href,
    alt: "Crystal Cascade glass table with flowing carved texture"
  },
  {
    id: "crystal-rock",
    category: "Tables",
    title: "Crystal Rock Table",
    description: "Bold fractured structure with deep crystalline facets for a sculptural, architectural look.",
    thumb: new URL('../public/images/tables/Top8/crystal-rock-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top8/crystal-rock.webp', import.meta.url).href,
    alt: "Crystal Rock glass table with deep crystal-like facets"
  },
  {
    id: "diamond-drift",
    category: "Tables",
    title: "Diamond Drift Table",
    description: "Elegant diamond wave-patterned glass designed for upscale residential and gallery installations.",
    thumb: new URL('../public/images/tables/Top8/diamond-drift-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top8/diamond-drift.webp', import.meta.url).href,
    alt: "Diamond Drift glass table with shimmering diamond pattern"
  },
  {
    id: "exquisite-berg",
    category: "Tables",
    title: "Exquisite Berg Table",
    description: "Carved ice-berg inspired relief that captures light with dramatic depth and translucency.",
    thumb: new URL('../public/images/tables/Top8/exquisite-berg-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top8/exquisite-berg.webp', import.meta.url).href,
    alt: "Exquisite Berg glass table with carved iceberg texture"
  },
  {
    id: "frosted-ice",
    category: "Tables",
    title: "Frosted Ice Table",
    description: "Soft frosted finish with refined surface etching for a modern, understated luxury look.",
    thumb: new URL('../public/images/tables/Top8/frosted-ice-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top8/frosted-ice.webp', import.meta.url).href,
    alt: "Frosted Ice glass table with smooth frosted texture"
  },
  {
    id: "frostfire",
    category: "Tables",
    title: "Frostfire Table",
    description: "Contrasting matte and glossy treatments create a warm-ice appearance designed for statement dining spaces.",
    thumb: new URL('../public/images/tables/Top12/frostfire-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top12/frostfire.webp', import.meta.url).href,
    alt: "Frostfire glass table with warm-ice finish"
  },
  {
    id: "ice-cloud",
    category: "Tables",
    title: "Ice Cloud Table",
    description: "Soft, cloud-like texture across the surface that diffuses light while retaining clean translucency.",
    thumb: new URL('../public/images/tables/Top12/ice-cloud-thumb.webp', import.meta.url).href,
    large: new URL('../public/images/tables/Top12/ice-cloud.webp', import.meta.url).href,
    alt: "Ice Cloud glass table with diffuse cloud-like texture"
  }
];

// default export for convenience
export default tableGallery;
