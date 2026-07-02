# Happy 5th Anniversary 💛

A one-page, romantic anniversary website built with Next.js, Tailwind CSS, and Framer Motion — made to be sent as a personal link to celebrate five years of marriage.

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
