# Happy 5th Anniversary 💛

A one-page, romantic anniversary website built with Next.js, Tailwind CSS, and Framer Motion — made to be sent as a personal link to celebrate five years of marriage.

## What's inside

- Hero section with animated headline, floating hearts, and drifting background photos
- A personal, editable love letter
- A 7-stop relationship timeline (met → wedding → years 1–5), each with its own photo
- "Reasons I Love You" cards
- A closing love note with a little heart-burst button

## 1. Run it locally

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
npm install
npm run dev
```

Then open http://localhost:3000 in your browser. The page hot-reloads as you edit files.

## 2. Edit the words

Almost everything you'd want to change lives in one file:

```
src/data/content.ts
```

Open it and edit:

- `heroContent` — the big headline and subtext
- `personalMessage` — your letter (paragraphs + signature)
- `timelineEvents` — the 7 timeline entries (date, title, memory, photo)
- `reasons` — the "Reasons I Love You" cards
- `finalNote` — the closing message and button text

Every placeholder is wrapped in `[brackets]` — just replace the bracketed text with your own words.

## 3. Replace the photos

### Hero background photos

The hero section has up to 6 small photos that gently drift and rotate behind the headline. Placeholders live in `public/photos/` (`placeholder-1.svg` through `placeholder-6.svg`).

To use your own photos:

1. Add your image files to `public/photos/` (e.g. `us-1.jpg`, `us-2.jpg`, ...). Square-ish photos work best since they're shown fairly small.
2. Open `src/data/content.ts` and update the `heroPhotos` array — change each `src` to point at your new file, e.g. `"/photos/us-1.jpg"`.
3. Save — the hero background updates automatically.

You can use fewer than 6 photos by removing entries from the array; the layout positions in `src/components/FloatingPhotos.tsx` will just show fewer photos.

### Timeline photos

Each timeline entry also has its own photo, using placeholders `timeline-1.svg` through `timeline-7.svg` in `public/photos/`.

To use your own photos, add your image files to `public/photos/` and update the `image` field on the matching entry in the `timelineEvents` array in `src/data/content.ts`, e.g. `image: "/photos/us-met.jpg"`. Landscape-oriented photos (roughly 16:11) look best here. If you'd rather not show a photo for a particular entry, just delete its `image` line.

## 4. Deploy to Vercel

The easiest way:

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Leave all settings as default (Vercel auto-detects Next.js) and click **Deploy**.
4. Once it finishes, Vercel gives you a live link (e.g. `https://your-project.vercel.app`) — that's the link you send.

Alternatively, using the [Vercel CLI](https://vercel.com/docs/cli):

```bash
npm install -g vercel
vercel
```

Follow the prompts, and it will deploy and give you a live URL.

### Optional: custom domain / project name

In the Vercel dashboard, you can rename the project or attach a custom domain under **Project Settings** if you'd like a prettier link than the default `.vercel.app` one.

## Project structure

```
src/
  app/
    layout.tsx      # fonts, page metadata
    page.tsx         # assembles all sections in order
    globals.css       # color palette + background animations
  components/
    Hero.tsx
    PersonalMessage.tsx
    Timeline.tsx
    Reasons.tsx
    FinalNote.tsx
    FloatingHearts.tsx
    FloatingPhotos.tsx  # drifting hero background photos
  data/
    content.ts        # <- all editable text and photo references
public/
  photos/              # <- your photos go here
```

## Tech

- [Next.js](https://nextjs.org) (App Router)
- [Tailwind CSS v4](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/) for scroll and entrance animations

No backend, database, or API keys required — it's a fully static frontend, so it deploys instantly and free-tier Vercel is plenty.
