import type { TranslatedArticle } from "../types";

/** English version of /iphone-18-pro/accessoires-usb-c-setup */
export const article: TranslatedArticle = {
  slug: "accessoires-usb-c-setup",
  model: "both",
  /** Date of the French version this translation was written from. */
  sourceUpdatedAt: "2026-08-21",
  title: "USB-C accessories shared by iPhone 18 Pro / Pro Max and your PC",
  excerpt:
    "Docks, 240 W cables, external SSDs: the accessories that serve both models and the rest of your gaming setup.",
  image:
    "https://images.unsplash.com/photo-1585790050230-5dd28404ccb9?w=1200&q=80",
  updatedAt: "2026-08-21",
  publishedAt: "2026-08-21",
  intro:
    "The whole point of USB-C everywhere is that you stop buying the same accessory twice. Here is what genuinely gets shared between the iPhone 18 Pro, the Pro Max and a desktop PC.",
  sections: [
    {
      id: "dock",
      heading: "The desk dock",
      paragraphs: [
        "A powered dock with a DisplayPort output and several data ports lets you plug the iPhone in like any other source, without unplugging your keyboard or your headset.",
      ],
      amazon: {
        pro: {
          url: "https://www.amazon.fr/s?k=dock+usb+c+alimente+displayport+iphone+pc&tag=gearhub-21",
          productName: "Powered USB-C dock — iPhone 18 Pro & PC",
        },
        pro_max: {
          url: "https://www.amazon.fr/s?k=dock+usb+c+alimente+displayport+iphone+pc&tag=gearhub-21",
          productName: "Powered USB-C dock — iPhone 18 Pro Max & PC",
        },
      },
      showCta: true,
    },
    {
      id: "cables",
      heading: "Cables and charging",
      paragraphs: [
        "USB-C 240 W (EPR) cables charge a gaming laptop just as happily as the phone. Look for the \"USB4\" or \"Thunderbolt\" marking if you plan to carry video over them.",
      ],
      bullets: [
        "240 W for fast laptop charging",
        "USB4 / Thunderbolt for video and SSDs",
        "1 m maximum length to keep the full throughput",
      ],
      amazon: {
        pro: {
          url: "https://www.amazon.fr/s?k=cable+usb+c+240w+usb4+iphone+pc&tag=gearhub-21",
          productName: "USB-C 240 W / USB4 cable — iPhone 18 Pro & PC",
        },
        pro_max: {
          url: "https://www.amazon.fr/s?k=cable+usb+c+240w+usb4+iphone+pc&tag=gearhub-21",
          productName: "USB-C 240 W / USB4 cable — iPhone 18 Pro Max & PC",
        },
      },
    },
    {
      id: "stockage",
      heading: "External storage",
      paragraphs: [
        "An external NVMe SSD takes ProRes footage straight off the phone and doubles as an editing drive on the PC. It is the best value accessory on this list.",
      ],
      amazon: {
        pro: {
          url: "https://www.amazon.fr/s?k=ssd+nvme+externe+usb+c+iphone+pc&tag=gearhub-21",
          productName: "External USB-C NVMe SSD — iPhone 18 Pro & PC",
        },
        pro_max: {
          url: "https://www.amazon.fr/s?k=ssd+nvme+externe+usb+c+iphone+pc&tag=gearhub-21",
          productName: "External USB-C NVMe SSD — iPhone 18 Pro Max & PC",
        },
      },
      showCta: true,
    },
  ],
  faq: [
    {
      question: "Does a PC Thunderbolt dock work with the iPhone?",
      answer:
        "Yes for charging and data. Video features depend on the dock itself; go for a powered model.",
    },
    {
      question: "Do the cables need MFi certification?",
      answer:
        "No, USB-C does not require MFi certification. Look for USB-IF certification instead.",
    },
  ],
  amazon: {
    pro: {
      url: "https://www.amazon.fr/s?k=iPhone+18+Pro&tag=gearhub-21",
      productName: "iPhone 18 Pro",
    },
    pro_max: {
      url: "https://www.amazon.fr/s?k=iPhone+18+Pro+Max&tag=gearhub-21",
      productName: "iPhone 18 Pro Max",
    },
  },
  seo: {
    title: "USB-C accessories for iPhone 18 Pro and a gaming PC",
    description:
      "The USB-C accessories worth sharing between the iPhone 18 Pro, the Pro Max and your PC setup: powered dock, 240 W cables and external NVMe SSDs.",
  },
};

export default article;
