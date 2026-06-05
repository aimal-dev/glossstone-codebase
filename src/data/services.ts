export type ServiceItem = { name: string; price: string; note?: string; popular?: boolean };
export type ServiceCategory = { title: string; items: ServiceItem[] };

export const services: ServiceCategory[] = [
  {
    title: "Exterior",
    items: [
      { name: "Exterior Hand Wash", price: "$50" },
      { name: "Detox Wash w/ Sealant", price: "$100" },
      { name: "Mini Exterior w/ Machine Polish", price: "$150" },
      { name: "Signature 3 Stage Polish w/ Sealant", price: "$200" },
    ],
  },
  {
    title: "Interior",
    items: [
      { name: "Interior Refresher w/ Vacuum", price: "$40" },
      { name: "Mini Interior Detail", price: "$60" },
      { name: "Full Interior Detail", price: "$100" },
      { name: "Signature Interior Detail", price: "$140" },
    ],
  },
  {
    title: "Complete Packages",
    items: [
      { name: "In-N-Out Signature Express", price: "$120" },
      { name: "Premium Complete Detail", price: "$200" },
      { name: "Signature Complete Detail", price: "$250", popular: true },
      { name: "Signature Complete w/ Ceramic", price: "$350" },
    ],
  },
  {
    title: "Additional Services",
    items: [
      { name: "Headlight Restore (Per Set)", price: "$60" },
      { name: "Engine Bay Deep Cleaning Wash", price: "$50" },
      { name: "Odor / Pet Hair Removal", price: "$40" },
      { name: "Deep Cleaning (Per Hour)", price: "$50" },
      { name: "Paint Correction (Per Hour)", price: "$50" },
      { name: "Automotive Ceramic Coating", price: "$200+" },
    ],
  },
];
