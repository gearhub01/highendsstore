import type { TranslatedArticle } from "../types";

/** English version of /iphone-18-pro/webcam-4k-pc-pro-max */
export const article: TranslatedArticle = {
  slug: "webcam-4k-pc-pro-max",
  model: "pro_max",
  /** Date of the French version this translation was written from. */
  sourceUpdatedAt: "2026-08-21",
  title: "iPhone 18 Pro Max as a 4K webcam: what the big model changes",
  excerpt:
    "Battery life, heat and stability: why the Pro Max holds up better through long 4K capture sessions on PC.",
  image:
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
  updatedAt: "2026-08-21",
  publishedAt: "2026-08-21",
  intro:
    "Same main sensor, bigger chassis: over a three-hour stream, the iPhone 18 Pro Max does not behave like the Pro. Here is what actually changes when you use it as a webcam.",
  sections: [
    {
      id: "autonomie",
      heading: "Battery life and continuous power",
      paragraphs: [
        "Connected over USB-C data to a powered dock, the Pro Max charges while it captures. Its larger battery absorbs the consumption spikes of 4K encoding far more comfortably.",
      ],
      amazon: {
        pro_max: {
          url: "https://www.amazon.fr/s?k=dock+usb+c+alimente+iphone+pro+max&tag=gearhub-21",
          productName: "Powered USB-C dock for iPhone 18 Pro Max",
        },
      },
      showCta: true,
    },
    {
      id: "chauffe",
      heading: "Heat on long sessions",
      paragraphs: [
        "The larger dissipation surface of the Pro Max pushes the thermal throttling threshold back. In practice, 4K quality holds for longer before the feed drops to a lower definition.",
      ],
      bullets: [
        "A cooled mount is recommended beyond two hours",
        "1080p60 as a fallback if the room is warm",
        "Avoid fast charging while capturing",
      ],
    },
    {
      id: "cadrage",
      heading: "Framing and stability",
      paragraphs: [
        "The extra weight calls for a rigid articulated arm: a flexible mount vibrates with every keystroke, and it shows immediately in 4K.",
      ],
      amazon: {
        pro_max: {
          url: "https://www.amazon.fr/s?k=bras+articule+smartphone+pro+max&tag=gearhub-21",
          productName: "Articulated arm for iPhone 18 Pro Max",
        },
      },
      showCta: true,
    },
  ],
  faq: [
    {
      question: "Does the Pro Max film better than the Pro?",
      answer:
        "Image quality is identical. The difference is thermal endurance and battery life on long captures.",
    },
    {
      question: "Do I need a different mount than for the Pro?",
      answer:
        "Yes — go for an articulated arm rated for the weight of the larger model, so you avoid micro-vibrations.",
    },
  ],
  amazon: {
    pro_max: {
      url: "https://www.amazon.fr/s?k=iPhone+18+Pro+Max&tag=gearhub-21",
      productName: "iPhone 18 Pro Max",
    },
  },
  seo: {
    title: "iPhone 18 Pro Max 4K webcam — Endurance and framing",
    description:
      "Using the iPhone 18 Pro Max as a 4K webcam: battery life, thermal behaviour on long sessions and the right mount for the larger model.",
  },
};

export default article;
