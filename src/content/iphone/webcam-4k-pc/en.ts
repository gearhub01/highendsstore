import type { TranslatedArticle } from "../types";

/** English version of /iphone-18-pro/webcam-4k-pc */
export const article: TranslatedArticle = {
  slug: "webcam-4k-pc",
  model: "pro",
  /** Date of the French version this translation was written from. */
  sourceUpdatedAt: "2026-08-21",
  title: "iPhone 18 Pro as a 4K webcam on PC: full guide",
  excerpt:
    "Plug the iPhone 18 Pro in over USB-C for a clean 4K feed in OBS, Discord and Teams — gear, settings and the limits to expect.",
  image:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  updatedAt: "2026-08-21",
  publishedAt: "2026-08-21",
  intro:
    "A decent 4K webcam costs about as much as a good keyboard. Your iPhone 18 Pro is already sitting on your desk: here is how to make it the main camera of your PC setup, without shady software.",
  sections: [
    {
      id: "materiel",
      heading: "The gear you need",
      paragraphs: [
        "The video feed travels over USB-C: a certified cable and a stable mount are enough to get started. Steer clear of cheap adapters — they are the number one cause of dropped feeds.",
      ],
      bullets: [
        "A USB-C to USB-C data cable (not a charge-only cable)",
        "A desk stand or an articulated arm to frame at eye level",
        "Optional: an LED light to keep low-light noise down",
      ],
      amazon: {
        pro: {
          url: "https://www.amazon.fr/s?k=cable+usb+c+data+iphone+18+pro&tag=gearhub-21",
          productName: "USB-C data cable for iPhone 18 Pro",
        },
      },
      showCta: true,
    },
    {
      id: "reglages-obs",
      heading: "OBS and Discord settings",
      paragraphs: [
        "Add a \"Video Capture Device\" source, pick the iPhone, then force the resolution to 3840x2160 at 30 fps. For 60 fps, drop down to 1080p: most graphics cards encode it better and latency falls sharply.",
        "In Discord and Teams the iPhone shows up as a standard camera once the connection is up; no extra driver is required.",
      ],
    },
    {
      id: "limites",
      heading: "The limits to know about",
      paragraphs: [
        "Heat is still the weak spot on long sessions: past an hour of 4K capture, the sensor dials quality back. A cooled mount, or switching to 1080p, solves it.",
      ],
      amazon: {
        pro: {
          url: "https://www.amazon.fr/s?k=support+ventile+smartphone+iphone&tag=gearhub-21",
          productName: "Cooled mount for iPhone 18 Pro",
        },
      },
      showCta: true,
    },
  ],
  faq: [
    {
      question: "Do I need a paid app?",
      answer:
        "No. USB-C capture is recognised natively by Windows 11 and by OBS. Third-party apps are mostly there to add filters.",
    },
    {
      question: "Does audio travel through the cable too?",
      answer:
        "Yes, the iPhone is exposed as a separate audio device. For published content, a dedicated microphone is still better.",
    },
  ],
  amazon: {
    pro: {
      url: "https://www.amazon.fr/s?k=iPhone+18+Pro&tag=gearhub-21",
      productName: "iPhone 18 Pro",
    },
  },
  seo: {
    title: "iPhone 18 Pro as a 4K webcam on PC — Setup guide",
    description:
      "Turn the iPhone 18 Pro into a 4K webcam for your PC: USB-C cable, OBS and Discord settings, thermal limits on long sessions and alternatives.",
  },
};

export default article;
