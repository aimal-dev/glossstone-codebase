import ridgelineRear from "@/assets/gallery/ridgeline-rear.jpg";
import ridgelineFront from "@/assets/gallery/ridgeline-front.jpg";
import ridgelineSide from "@/assets/gallery/ridgeline-side.jpg";
import audiFront from "@/assets/gallery/audi-front.jpg";
import audiInteriorFront from "@/assets/gallery/audi-interior-front.jpg";
import audiInteriorRear from "@/assets/gallery/audi-interior-rear.jpg";
import audiDash from "@/assets/gallery/audi-dash.jpg";
import audiRear from "@/assets/gallery/audi-rear.jpg";

export type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  category: "Exterior" | "Interior";
};

export const gallery: GalleryItem[] = [
  { src: audiFront, alt: "Detailed Audi A8 front quarter view", caption: "Audi A8 — Full Exterior Detail", category: "Exterior" },
  { src: ridgelineFront, alt: "Honda Ridgeline front detail", caption: "Honda Ridgeline HPD — Hand Wash & Wax", category: "Exterior" },
  { src: audiInteriorFront, alt: "Audi A8 front interior after detail", caption: "Audi A8 — Interior Deep Clean", category: "Interior" },
  { src: ridgelineSide, alt: "Honda Ridgeline side profile", caption: "Honda Ridgeline — Paint Decontamination", category: "Exterior" },
  { src: audiDash, alt: "Audi A8 dashboard cleaned and conditioned", caption: "Audi A8 — Dash & Trim Restoration", category: "Interior" },
  { src: audiRear, alt: "Audi A8 rear with mirror-like finish", caption: "Audi A8 — Mirror Finish", category: "Exterior" },
  { src: audiInteriorRear, alt: "Audi A8 rear seats detailed", caption: "Audi A8 — Leather Treatment", category: "Interior" },
  { src: ridgelineRear, alt: "Honda Ridgeline rear tailgate detail", caption: "Honda Ridgeline — Showroom Shine", category: "Exterior" },
];
