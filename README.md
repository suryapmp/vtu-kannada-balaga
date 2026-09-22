# VTU Kannada Balaga — Kannada Rajyotsava Website

React + Vite + GSAP single-page application with responsive internal routes.

## Routes
- `/` Home
- `/about` About / Our Story
- `/culture` Karnataka Heritage
- `/events` Events
- `/activities` What We Do
- `/team` Our Team
- `/gallery` Gallery
- `/contact` Contact

## Run
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

## Image paths
Generated assets are kept as replaceable paths under `public/assets/images/`.

- `/assets/images/gandaberunda.png`
- `/assets/images/hero-background.jpg`
- `/assets/images/story-image.jpg`
- `/assets/images/karnataka-map-collage.jpg`

The remaining cultural/event/member/gallery paths are intentionally placeholders until individual assets are generated.

## Flag animation
Place a looping MP4/GIF-compatible browser video at:
`public/assets/media/kannada-rajyotsava-flag.mp4`

## Background music
Place a licensed/royalty-free Karnataka instrumental at:
`public/assets/audio/karnataka-ambient.mp3`

Music starts only after the visitor clicks the music button because browsers commonly block autoplay with sound.
