/**
 * PILLAR PAGE (EN) — iPhone 16, 17 and 18 Pro comparison.
 * Only page of the collection carrying the six-column table.
 * Generation 18 cells are always "Not confirmed" or an explicit rumour label.
 */
import type { TranslatedArticle } from "../types";

const NC = "Not confirmed";
const RUMOR = "Rumour — unconfirmed as of 29/08/2026";

export const article: TranslatedArticle = {
  slug: "comparatif-iphone-16-17-18",
  model: "both",
  sourceUpdatedAt: "2026-08-29",
  title: "iPhone 16, 17 and 18 Pro compared",
  excerpt:
    "Three generations of iPhone Pro and Pro Max in a single table: display, chip, cameras, battery life, weight. And what the 18 Pro still has to prove.",
  image:
    "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=1200&q=80",
  updatedAt: "2026-08-29",
  publishedAt: "2026-08-29",
  intro:
    "Three generations of iPhone Pro, six models, one table. This page gathers the official specifications of the iPhone 16 Pro, 16 Pro Max, 17 Pro and 17 Pro Max, and deliberately leaves the unannounced generation 18 columns empty. It is the reference page for all our detailed comparisons.",
  notice:
    "Updated 29 August 2026 — iPhone 18 Pro and 18 Pro Max specifications will be confirmed at the keynote on 9 September 2026. Until then no value is claimed for those two models: the relevant cells read “Not confirmed”, and the few reports in circulation are labelled as rumours.",
  sections: [
    {
      id: "ce-qui-a-change",
      heading: "What actually changed in two generations",
      paragraphs: [
        "Let's start on solid ground: everything in this section is official, published by Apple, and covers only the move from the iPhone 16 Pro to the iPhone 17 Pro. It is the most useful part of this page, because it is the only one built entirely on verifiable data.",
        "The first gain shows up outdoors. Peak outdoor brightness rises from 2,000 nits on generation 16 to 3,000 nits on generation 17, at identical resolution and refresh rate: 2622 × 1206 at 460 ppi on the 6.3-inch models, 2868 × 1320 at 460 ppi on the 6.9-inch ones, with ProMotion up to 120 Hz throughout. The panel did not change in nature; it changed its ceiling.",
        "The second gain shows up at zoom. The 16 Pro and 16 Pro Max pair two 48 Mpx sensors with a 12 Mpx 5x telephoto. The 17 Pro and 17 Pro Max replace that third module with a 48 Mpx Fusion 100 mm ƒ/2.8 telephoto, rated for 8x optical-quality zoom and a 16x total range. All three rear focal lengths now share the same 48 Mpx resolution.",
        "The third gain shows up on video calls. The front camera goes from 12 Mpx to 18 Mpx Center Stage ƒ/1.9. Nobody talks about it, and it is the change that matters most for the use case this site documents: an iPhone sitting on a desk, plugged into a PC over USB-C, acting as a webcam.",
        "The fourth gain shows up at the socket. Claimed video playback battery life climbs from 27 to 33 hours on the 6.3-inch format, and from 33 to 39 hours on the 6.9-inch one. Six hours in both cases. These are manufacturer figures measured in local video playback, not real days of use: they compare generations, they do not predict your evening.",
        "Two things moved the other way. The chassis drops generation 16's titanium and matte glass back for a unibody aluminium design with Ceramic Shield 2 at the front, and weight goes up: from 199 to 206 g on the Pro, from 227 to 233 g on the Pro Max. And the USB-C port has not budged: USB 3, 10 Gb/s across all four models, while the video produced now reaches 4K Dolby Vision at 120 fps.",
      ],
    },
    {
      id: "tableau-complet",
      heading: "The full table — six columns",
      paragraphs: [
        "This is the reference table for the Pro line across three generations. The first four columns are documented by Apple. The last two stay empty until 9 September 2026, except for rows carrying a rumour, which are flagged as such. On mobile the table scrolls horizontally.",
      ],
      table: {
        caption:
          "Sources: Apple technical specifications for generations 16 and 17. Generation 18: no official data as of 29 August 2026.",
        headers: [
          "Specification",
          "iPhone 16 Pro",
          "iPhone 16 Pro Max",
          "iPhone 17 Pro",
          "iPhone 17 Pro Max",
          "iPhone 18 Pro",
          "iPhone 18 Pro Max",
        ],
        rows: [
          ["Display", "6.3\" OLED", "6.9\" OLED 2868 × 1320 at 460 ppi", "6.3\" OLED 2622 × 1206 at 460 ppi", "6.9\" OLED 2868 × 1320 at 460 ppi", NC, NC],
          ["Refresh rate", "120 Hz ProMotion", "120 Hz ProMotion", "120 Hz ProMotion", "120 Hz ProMotion", NC, NC],
          ["Peak outdoor brightness", "2,000 nits", "2,000 nits", "3,000 nits", "3,000 nits", NC, NC],
          ["Chip", "A18 Pro", "A18 Pro (6-core CPU / 6-core GPU)", "A19 Pro (6-core CPU: 2P + 4E)", "A19 Pro", `A20 Pro on 2 nm — ${RUMOR}`, `A20 Pro on 2 nm — ${RUMOR}`],
          ["Modem", NC, NC, NC, NC, `Apple-designed C2 modem — ${RUMOR}`, `Apple-designed C2 modem — ${RUMOR}`],
          ["Storage", "128 GB to 1 TB", "256 GB to 1 TB", "256 GB to 1 TB", "256 GB to 2 TB", NC, NC],
          ["Main camera", "48 Mpx 24 mm ƒ/1.78", "48 Mpx 24 mm ƒ/1.78", "48 Mpx Fusion 24 mm ƒ/1.78", "48 Mpx Fusion 24 mm ƒ/1.78", `Variable aperture — ${RUMOR}`, `Variable aperture — ${RUMOR}`],
          ["Ultra wide", "48 Mpx", "48 Mpx 13 mm ƒ/2.2", "48 Mpx Fusion 13 mm ƒ/2.2", "48 Mpx Fusion 13 mm ƒ/2.2", NC, NC],
          ["Telephoto", "12 Mpx 5x", "12 Mpx 5x 120 mm ƒ/2.8", "48 Mpx Fusion 100 mm (4x) ƒ/2.8", "48 Mpx Fusion 100 mm (4x) ƒ/2.8", NC, NC],
          ["Zoom", "5x optical", "5x optical", "8x optical quality, 16x range", "8x optical quality, 16x range", NC, NC],
          ["Front camera", "12 Mpx", "12 Mpx ƒ/1.9", "18 Mpx Center Stage ƒ/1.9", "18 Mpx Center Stage ƒ/1.9", NC, NC],
          ["Video", "4K Dolby Vision", "4K Dolby Vision", "4K Dolby Vision up to 120 fps", "4K Dolby Vision up to 120 fps", NC, NC],
          ["Video battery life", "27 h", "33 h", "33 h", "39 h", NC, NC],
          ["USB-C", "USB 3, 10 Gb/s", "USB 3, 10 Gb/s", "USB 3, 10 Gb/s", "USB 3, 10 Gb/s", NC, NC],
          ["Wireless", "—", "—", "Wi-Fi 7", "Wi-Fi 7", NC, NC],
          ["Face ID", NC, NC, NC, NC, `Under-display, conflicting reports point to a 2027 delay — ${RUMOR}`, `Under-display, conflicting reports point to a 2027 delay — ${RUMOR}`],
          ["Material", "Titanium, matte glass back", "Titanium, matte glass back", "Unibody aluminium, Ceramic Shield 2", "Unibody aluminium, Ceramic Shield 2", NC, NC],
          ["Weight", "199 g", "227 g", "206 g", "233 g", NC, NC],
          ["Dimensions", "71.5 × 149.6 × 8.25 mm", "77.6 × 163 × 8.25 mm", "—", "—", NC, NC],
          ["Finishes", "Black, White, Natural, Desert (titanium)", "Black, White, Natural, Desert (titanium)", "Silver, Cosmic Orange, Deep Blue", "Silver, Cosmic Orange, Deep Blue", NC, NC],
          ["Pricing", "—", "—", "—", "—", `A $250 to $300 increase floated by analyst Jeff Pu (GF Securities) — ${RUMOR}`, `A $250 to $300 increase floated by analyst Jeff Pu (GF Securities) — ${RUMOR}`],
        ],
      },
    },
    {
      id: "ecran-luminosite",
      heading: "Display and brightness: the most visible day-to-day gain",
      paragraphs: [
        "On paper the display row looks frozen between generations 16 and 17: same size, same resolution, same 460 ppi, same ProMotion up to 120 Hz. Only one value moves, and it changes more in daily use than the rest of the spec sheet: peak outdoor brightness, from 2,000 to 3,000 nits.",
        "That figure does not describe the brightness you see indoors. It describes the ceiling the panel can briefly reach when the ambient light sensor detects direct sunlight. On an iPhone 16 Pro in summer sun the screen stays readable, but photos lose their blacks and grey text fades until you shade the panel with your hand. At 3,000 nits that reflex mostly disappears.",
        "So this 50 % gain is never felt indoors, on a desk, or in the evening. If you mostly use your phone under artificial light, drop this row from your buying decision. If you are often outside, it is the improvement you will notice on unboxing day, before even opening the camera app.",
        "One thing not to confuse: the 1,000 nits typical and 1,600 nits peak HDR quoted for generation 17 are not gains over the 16 Pro, they are simply values Apple started publishing. Peak outdoor brightness is the only directly comparable figure.",
      ],
    },
    {
      id: "photo-teleobjectif",
      heading: "Cameras: the telephoto changes category",
      paragraphs: [
        "This is where the gap between generations 16 and 17 is widest. The 16 Pro and 16 Pro Max pair two 48 Mpx sensors with a 12 Mpx telephoto at 5x. The 17 Pro and 17 Pro Max replace that module with a 48 Mpx Fusion 100 mm ƒ/2.8 sensor, rated for optical-quality zoom up to 8x and a 16x total range.",
        "“Optical quality” is a misleading term here. The module is not a mechanical zoom: the focal length is fixed. The gain comes from sensor resolution. With 48 Mpx instead of 12, you can crop into the centre of the frame and keep a full output resolution, where the same crop on 12 Mpx produced a soft image needing heavy denoising.",
        "In practice: on generation 16, zooming beyond 5x helps you frame but rarely publish. On generation 17, the intermediate range — the one you actually use to isolate an object on a desk or shoot a component close up — becomes usable without retouching.",
        "The other change is consistency. All three rear modules on the 17 Pro share the same resolution and the same Fusion processing. Switching from ultra wide to telephoto mid-shoot no longer produces a visible break in rendering or noise level — invisible on a spec sheet, very visible across a series of photos.",
        "Finally, the only camera rumour for generation 18, a variable aperture, rests on no announcement. If confirmed it would bring optical control over depth of field, today simulated in software. It has been announced and postponed for several cycles: it should not enter a buying decision.",
      ],
    },
    {
      id: "camera-avant",
      heading: "Front camera: the change nobody mentions",
      paragraphs: [
        "Every generation comparison focuses on the rear cluster. Yet the most important row of the table for our readers is elsewhere: the front camera goes from 12 Mpx on generation 16 to 18 Mpx Center Stage ƒ/1.9 on generation 17. It is an entirely new sensor, not a revision.",
        "Why does it matter more here? Because an iPhone sitting on a desk and plugged into a PC over USB-C is used from the front, not the back. In video calls, voice-over recording or streaming, that sensor works all day, and it alone. A built-in PC webcam typically sits far below, with a tiny sensor and slow optics; the gap becomes obvious as soon as light drops.",
        "Center Stage adds automatic reframing that follows the subject. On a 12 Mpx sensor that crop cost resolution. On 18 Mpx the available margin lets it track movement without visibly degrading the output. That is exactly the scenario of someone talking and gesturing in front of a screen.",
        "For anyone using an iPhone as a PC webcam, this is the single most important generational improvement of the past two years — more than the chip, the telephoto or the brightness. Our dedicated guide covers the wiring, settings, software and bandwidth limits.",
      ],
      links: [
        {
          label: "Our guide: the iPhone as a 4K PC webcam",
          href: "/iphone-18-pro/webcam-4k-pc",
        },
      ],
    },
    {
      id: "autonomie",
      heading: "Battery life: +6 hours on both formats",
      paragraphs: [
        "The gain is identical on both sizes: 27 to 33 hours of video playback on the 6.3-inch format, 33 to 39 hours on the 6.9-inch one. Six hours each, roughly 20 % more. It is one of the clearest battery jumps in the Pro line for several generations.",
        "What these numbers are not: they are maximums measured by Apple playing locally stored video, at standard brightness, with no active cellular. No real day looks like that protocol. Their value is comparative — measured the same way generation after generation, they do reflect a genuine capacity and efficiency gap.",
        "For a phone that stays plugged in on a desk the effect is paradoxical. You will never use 33 or 39 hours in a row. But a larger energy reserve means the device can sustain a heavy load — continuous capture, screen on, USB transfer — drawing on the battery for longer before thermal management throttles it. The gain is felt in stamina, not duration.",
        "The flip side is less pleasant. A long capture session, plugged in with the screen active, heats the device and ages the battery faster than normal use. No generation is exempt, and a higher claimed figure does not offset permanently charging to 100 %.",
      ],
    },
    {
      id: "pro-ou-pro-max",
      heading: "Pro or Pro Max: what the format costs and returns",
      paragraphs: [
        "The trade-off between formats has been remarkably stable for three generations, so it fits in one sentence: the Pro Max swaps bulk for endurance and storage.",
        "What the larger format brings: six more hours of video playback (39 h against 33 h on generation 17), a 2 TB storage option exclusive to the 17 Pro Max, and a 6.9-inch display at the same 460 ppi, so more on screen without losing sharpness.",
        "What it costs: 27 g more (233 g against 206 g) and about 6 mm of extra width, with the same 8.25 mm thickness recorded on generation 16. In hand those 27 g register after an hour. On a desk stand or an articulated arm they register on the ball joint, not your wrist — which flips the trade-off entirely if the device lives on a desk.",
        "Our simple rule: if the phone lives in a pocket and serves as a camera, the Pro is enough. If it lives on a desk, acts as a camera and records video, the Pro Max is the logical pick for battery and storage. The detailed comparison goes use case by use case.",
      ],
      links: [
        {
          label: "Detailed comparison: iPhone 18 Pro or Pro Max",
          href: "/iphone-18-pro/iphone-18-pro-vs-pro-max",
        },
      ],
    },
    {
      id: "iphone-18-pro",
      heading: "What the iPhone 18 Pro has to deliver",
      paragraphs: [
        "This section is provisional and will stay so until the keynote on 9 September 2026. Nothing below is confirmed by Apple: these are reports from the specialist press and analysts, listed for what they are worth — hypotheses.",
        "The A20 Pro on a 2 nm process is the sturdiest rumour, simply because a process node change follows a known industrial calendar. A finer node buys either more performance at equal power or less power at equal performance. Given the trajectory above — the A19 Pro already exceeds any office or video-call workload — the expected benefit would be thermal stamina in long sessions, not raw speed.",
        "An Apple-designed C2 modem is judged on connected standby power draw and network grip, not theoretical throughput. For a device spending its days on Wi-Fi at a desk, the effect would be close to zero.",
        "Under-display Face ID is the weakest rumour: several conflicting reports point to a 2027 delay. A variable aperture camera has resurfaced every cycle for years without materialising. Finally, analyst Jeff Pu (GF Securities) floats a $250 to $300 price increase; we display no prices on this site, and mention it only because it weighs on a buying decision more than any spec row.",
        "What is missing from the list says as much as what is on it: no rumour covers the USB-C port, stuck at 10 Gb/s for three generations, nor the front camera, nor battery life. On the three rows that matter most for desk use, nobody is announcing anything.",
        "This section will be updated on 9 September 2026 after the keynote: the 18 Pro and 18 Pro Max columns will then carry official values, and disproved rumours will be removed.",
      ],
      bullets: [
        `A20 Pro chip on 2 nm — ${RUMOR}`,
        `Apple-designed C2 modem — ${RUMOR}`,
        `Under-display Face ID, 2027 delay suggested by conflicting reports — ${RUMOR}`,
        `Variable aperture camera — ${RUMOR}`,
        `A $250 to $300 price increase floated by analyst Jeff Pu (GF Securities) — ${RUMOR}`,
      ],
    },
    {
      id: "quelle-generation-choisir",
      heading: "Which generation to pick, depending on your situation",
      paragraphs: [
        "Three profiles, three clear-cut recommendations, based only on confirmed data.",
        "You own an iPhone 16 Pro or 16 Pro Max. This is by far the profile where upgrading makes most sense. You would gain 3,000 nits outdoors, the 48 Mpx telephoto with its 16x range, the 18 Mpx Center Stage front camera and six extra hours of battery life in one move. Those gains already exist on generation 17: whatever the 18 Pro announces on 9 September, you will get them. The only real question is waiting two weeks to choose between an end-of-cycle 17 Pro and an 18 Pro.",
        "You own an iPhone 17 Pro or 17 Pro Max. Upgrading will very likely be unjustified. No documented rumour touches a row you would feel daily: not the USB-C port, not the front camera, not battery life. Watch the keynote out of curiosity, not intent, and keep your device at least one more generation.",
        "You are coming from further back, an iPhone older than the 16 Pro or another ecosystem. Wait for 9 September without hesitation: within days you will know whether the 18 Pro delivers, and the 17 Pro becomes a more interesting choice in any case once the new generation is announced. There is no scenario where buying now is the right call.",
        "Each of our three detailed comparisons covers one of these cases, with a verdict per use case.",
      ],
      links: [
        {
          label: "iPhone 18 Pro vs iPhone 16 Pro: the real two-generation jump",
          href: "/iphone-18-pro/iphone-18-pro-vs-iphone-16-pro",
        },
        {
          label: "iPhone 18 Pro vs iPhone 17 Pro: is it worth switching",
          href: "/iphone-18-pro/iphone-18-pro-vs-iphone-17-pro",
        },
        {
          label: "iPhone 18 Pro or Pro Max: which format to pick",
          href: "/iphone-18-pro/iphone-18-pro-vs-pro-max",
        },
      ],
    },
  ],
  faq: [
    {
      question: "Are the iPhone 18 Pro specifications known?",
      answer:
        "No. Nothing is confirmed by Apple: the keynote takes place on 9 September 2026. The only information in circulation is rumour, flagged as such in the table and in the dedicated section.",
    },
    {
      question: "What is the biggest gain between the iPhone 16 Pro and 17 Pro?",
      answer:
        "It depends on use: outdoor brightness goes from 2,000 to 3,000 nits, the telephoto from 12 Mpx 5x to 48 Mpx with a 16x range, the front camera from 12 to 18 Mpx, and video battery life gains six hours.",
    },
    {
      question: "Has USB-C improved across three generations?",
      answer:
        "No. The iPhone 16 Pro, 16 Pro Max, 17 Pro and 17 Pro Max all cap at USB 3, that is 10 Gb/s. No documented rumour suggests a change on generation 18.",
    },
    {
      question: "Pro or Pro Max: what is the real difference?",
      answer:
        "On generation 17: six extra hours of video playback (39 h against 33 h) and an exclusive 2 TB option, against 27 g and roughly 6 mm of extra width.",
    },
  ],
  amazon: {},
  seo: {
    title: "iPhone 16, 17 and 18 Pro compared",
    description:
      "Three generations of iPhone Pro and Pro Max compared: display, chip, cameras, battery life and weight. What really changed, and what the 18 Pro adds.",
  },
};

export default article;
