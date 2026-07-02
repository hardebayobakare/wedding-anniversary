/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT ME: All the personal text for the site lives here.
 *  You do not need to touch any component files to update
 *  the words on the page — just change the values below.
 * ─────────────────────────────────────────────────────────────
 */

// Shown in the hero section.
export const heroContent = {
  headline: "Happy 5th Anniversary,\nMy Love",
  subtext: "Five years of love, laughter, growth, and beautiful memories.",
};

// The heartfelt letter. Feel free to rewrite this completely —
// it's your words, this is just a starting point. Use "\n\n" to
// start a new paragraph.
export const personalMessage = {
  heading: "To My Wife",
  paragraphs: [
    "Five years ago, I made the best decision of my life when I chose to marry you. Since then, every single day has been proof that I chose right.",
    "You have been my calm in the storm, and my favorite person to come home to. Thank you for growing with me, for laughing with me through the hard days, and for loving me exactly as I am.",
    "I fall in love with you a little more with every year that passes. Here's to five years down, and a lifetime still to go.",
  ],
  signature: "Forever yours,\nMustapha",
};

// The relationship timeline. Add, remove, or reorder entries freely.
type TimelineEvent = {
  year: string;
  date: string;
  title: string;
  description: string;
  image?: string;
  // Optional: controls how a photo is cropped if the default center
  // crop cuts off something important (like faces). Try "top",
  // "bottom", "center", or a precise value like "center 20%".
  imagePosition?: string;
};

export const timelineEvents: TimelineEvent[] = [
  {
    year: "The Start of our Journey",
    date: "December 2018",
    title: "The Day We Met",
    description:
      "After months of chatting online, I picked you up from the airport in Malaysia. You stepped off that flight looking exhausted from the journey — and somehow still the most beautiful thing I'd ever seen. Our first date wasn't fancy: just a quick bite at McDonald's, crashers and all, since my sister and my friend tagged along for the pickup. Four of us for a first date — and I wouldn't have had it any other way.",
    image: "/photos/20181230_141055.jpg",
  },
  {
    year: "The Beginning",
    date: "July 2021",
    title: "Our Wedding Day",
    description:
      "It was a beautiful wedding, surrounded by the people we love most. Family and friends filled the day with so much joy, laughter, and celebration — everyone had a wonderful time. But my favorite part was simply having fun with you, my wife, on the happiest day of our lives.",
    image: "/photos/DSC_0129.JPG",
  },
  {
    year: "Year One",
    date: "July 2022",
    title: "Our time after Covid",
    description:
      "Once things opened back up, we took our first trip together as a couple — Langkawi. It was such a wonderful experience, just the two of us, finally free to explore somewhere new together. We had so much fun, and we still talk about that one amazing restaurant with the best spinach we've ever had.",
    image: "/photos/20220716_193750.jpg",
  },
  {
    year: "Year Two",
    date: "December 2023",
    title: "Aisha's Birth",
    description:
      "The pregnancy had a lot of ups and downs, with complications that meant many hospital visits — and through all of it, you were incredibly strong. When Aisha finally arrived, she was so small and beautiful, and it was truly amazing. There were some complications after her birth, and we got through that season together as a couple, leaning on each other and on the love of our family. And Alhamdulillahi, today, Aisha is doing awesome, and we're endlessly grateful.",
    image: "/photos/PXL_20240506_003304825.jpg",
  },
  {
    year: "Year Three",
    date: "July 2024",
    title: "Our first big purchase",
    description:
      "A milestone worth celebrating — we bought our first car together. It was a proud moment for us as a couple, a real symbol of how far we'd come. Just one of the many wins we're grateful for.",
    image: "/photos/20240901_182601.jpg",
  },
  {
    year: "Year Four",
    date: "January 2025",
    title: "Amirah's Birth",
    description:
      "This time around, there was a lot less drama than with Aisha — but Amirah's arrival was just as amazing and every bit as beautiful. And I have to say it: she looks more you than me. 😉",
    image: "/photos/timeline-6.svg",
  },
  {
    year: "Year Five",
    date: "July 2025",
    title: "Five Years Strong",
    description:
      "We've made it through five years of marriage, and I couldn't be prouder of us. We've built a life together, and we've built a family together. We've made it through some tough times, and we've made it through some good times. We've made it through it all together, and I couldn't be happier. Alhamdulillahi!",
    image: "/photos/timeline-7.svg",
  },
];

// Photos that gently drift and rotate in the background of the hero
// section. Replace the `src` with your own images in /public/photos
// (see the README for step-by-step instructions). You can have anywhere
// from 1 to 6 — just add or remove entries.
export const heroPhotos = [
  { src: "/photos/20210801_150155.jpg", alt: "Memory one" },
  { src: "/photos/20210731_171848.jpg", alt: "Memory two" },
  { src: "/photos/20220715_082549.jpg", alt: "Memory three" },
  { src: "/photos/20210821_200257.jpg", alt: "Memory four" },
  { src: "/photos/20220819_204821.jpg", alt: "Memory five" },
  { src: "/photos/20210810_151455.jpg", alt: "Memory six" },
];

// "Reasons I Love You" cards. Add or remove as many as you like.
export const reasons = [
  { icon: "💛", title: "Your Kindness", text: "The gentle way you treat everyone around you, always." },
  { icon: "😊", title: "Your Smile", text: "It still makes my whole day better, every single time." },
  { icon: "🌿", title: "Your Patience", text: "The way you stay steady with me, even on my hardest days." },
  { icon: "💞", title: "Your Love", text: "Unconditional, generous, and freely given — I never doubt it." },
  { icon: "🦋", title: "Your Strength", text: "The quiet courage you show when life gets heavy." },
  { icon: "🕊️", title: "Your Peace", text: "Being near you feels like coming home." },
];

// A little surprise gift link (e.g. an e-gift card). Replace `url`
// with your real link before sending the site — that's the only
// thing you need to change here.
export const giftCard = {
  heading: "One More Thing…",
  subtext: "A little something extra, just for you.",
  buttonLabel: "Open Your Gift",
  url: "https://example.com/REPLACE-WITH-YOUR-GIFT-CARD-LINK",
};

// Final closing section.
export const finalNote = {
  heading: "Here's to forever with you.",
  subtext: "Happy 5th Anniversary. I love you more today than yesterday, and I'll love you more tomorrow than today.",
  buttonLabel: "I love you always",
};
