# Alpha Clock

<img width="1624" alt="Alpha Clock Screenshot" src="https://github.com/user-attachments/assets/4b8af4b7-5c2f-4a3d-860a-9c42eb82d0eb" />

A minimalist clock display designed for Alpha group discussions at McMaster University. This elegant, distraction-free clock helps us keep track of time during Alpha group discussions. The design features:

- Clean, easy-to-read time display
- Built-in timer functionality with preset durations
- Subtle animated gradient background
- Alpha McMaster branding
- Distraction-free interface with motion-sensitive controls

## Features

### Clock Mode

- Large, clear 12-hour time display
- Minimalist design that stays out of the way

### Timer Mode

- Quick access to 5, 10, and 15-minute presets
- Fine-tune controls (+/- 30 seconds)
- Play/pause functionality
- Motion-sensitive controls that fade away when not in use

## About

This clock was created for Alpha at Mac ([@alpha.mcmaster](https://www.instagram.com/alpha.mcmaster/)), a group that meets every week to explore life, faith, and meaning through open discussions.

<div align="center">
  <img width="400" alt="Alpha Meeting" src="https://github.com/user-attachments/assets/fd3d057b-8c99-4785-a8b7-40bb8c7d80d9" />
</div>

## Running the Clock

To start the clock locally:

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## Development

This project is built with:

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [React](https://reactjs.org)
- [Heroicons](https://heroicons.com)

### Project Structure

```
src/
  app/
    components/
      Clock.tsx          # Clock display component
      Timer.tsx          # Timer logic and display
      TimerControls.tsx  # Timer control buttons
      Logo.tsx           # Alpha branding
      ModeToggle.tsx     # Mode switch button
      styles.ts          # Shared styles
      useMouseIdle.ts    # Mouse movement detection
    page.tsx             # Main app page
    layout.tsx           # Root layout
    globals.css          # Global styles
```
