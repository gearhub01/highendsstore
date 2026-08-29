import type { TranslatedArticle } from "../types";

/** English version of /iphone-18-pro/webcam-4k-pc (covers Pro and Pro Max). */
export const article: TranslatedArticle = {
  slug: "webcam-4k-pc",
  model: "both",
  /** Date of the French version this translation was written from. */
  sourceUpdatedAt: "2026-08-29",
  title: "iPhone 18 Pro and Pro Max as a 4K webcam on PC: full guide",
  excerpt:
    "Plug the iPhone 18 Pro or Pro Max in over USB-C for a clean 4K feed in OBS, Discord and Teams — gear, settings, model differences and limits.",
  image:
    "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
  updatedAt: "2026-08-29",
  publishedAt: "2026-08-21",
  intro:
    "A decent 4K webcam costs about as much as a good keyboard. Your iPhone 18 Pro — or Pro Max — is already sitting on your desk: here is how to make it the main camera of your PC setup, without shady software, and what actually changes between the two models.",
  sections: [
    {
      id: "materiel",
      heading: "The gear you need",
      paragraphs: [
        "The video feed travels over USB-C: a certified cable and a stable mount are enough to get started on either model. Steer clear of cheap adapters — they are the number one cause of dropped feeds.",
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
        "In Discord and Teams the iPhone shows up as a standard camera once the connection is up; no extra driver is required. Settings are identical on the Pro and the Pro Max.",
      ],
    },
    {
      id: "pro-vs-pro-max",
      heading: "Pro or Pro Max: what really changes as a webcam",
      paragraphs: [
        "Image quality is identical: same main sensor, same processing, same 4K feed. Differences show up over time, not in the first five minutes of capture.",
        "The Pro Max has more surface area to shed heat and a bigger battery: thermal throttling kicks in later, and continuous charging on a powered dock absorbs 4K encoding spikes better. Over a three-hour stream, it is the one that holds full resolution longest.",
        "The trade-off is weight: it needs a rigid articulated arm, as a flexible mount vibrates with every keystroke — instantly visible in 4K. The lighter Pro is fine on a simple desk stand.",
      ],
      bullets: [
        "Image quality: identical on both models",
        "Short sessions (calls, meetings): the Pro is plenty",
        "Long sessions (streaming, filming): the Pro Max handles heat better",
        "Pro Max: a rigid articulated arm is a must to avoid micro-vibrations",
      ],
      amazon: {
        pro_max: {
          url: "https://www.amazon.fr/s?k=bras+articule+smartphone+pro+max&tag=gearhub-21",
          productName: "Articulated arm for iPhone 18 Pro Max",
        },
      },
      showCta: true,
    },
    {
      id: "limites",
      heading: "The limits to know about",
      paragraphs: [
        "Heat is still the weak spot on long sessions: past an hour of 4K capture on the Pro (noticeably more on the Pro Max), the sensor dials quality back. A cooled mount, or switching to 1080p60, solves it.",
        "Also avoid fast charging during capture: it adds heat exactly where the phone is already producing it.",
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
    {
      question: "Does the Pro Max film better than the Pro?",
      answer:
        "No, image quality is identical. The difference is thermal endurance and battery life on long captures.",
    },
    {
      question: "Does the Pro Max need a different mount?",
      answer:
        "Yes, go for an articulated arm rated for the larger model's weight to avoid micro-vibrations visible in 4K.",
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
    title: "iPhone 18 Pro and Pro Max as a 4K webcam on PC",
    description:
      "Turn the iPhone 18 Pro or Pro Max into a 4K webcam for your PC: USB-C cable, OBS and Discord settings, model differences and thermal limits.",
  },
};

export default article;
