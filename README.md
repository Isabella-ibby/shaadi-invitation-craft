# 🎊 Shaadi Studio — Luxury Digital Wedding Invitation Platform

A production-ready, config-driven, multi-theme digital wedding invitation platform built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Language**: TypeScript
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod

## 📁 Project Structure

```
shaadi-studio/
├── public/                # Static assets (images, music)
├── scripts/               # Utility scripts (sync-gallery)
├── src/
│   ├── app/               # Next.js App Router files
│   ├── components/        # React components (ui, sections, layout, effects)
│   ├── config/            # Typed configuration loaders
│   ├── data/              # JSON configuration files (Client edits these)
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility functions, animations, themes
│   └── types/             # TypeScript interfaces
```

## 🎨 Configuration Guide

The platform is designed to be 100% config-driven. **You do not need to modify any code to set up a new client.**

Edit the JSON files in `src/data/`:

- **client.json**: Basic details (Names, Date, Venue, Contact).
- **theme.json**: Select one of the 12 premium themes (e.g., `"luxury-gold"`, `"minimal-white"`).
- **sections.json**: Toggle which sections to show/hide.
- **events.json**: Add unlimited wedding events (Mehndi, Haldi, etc.).
- **story.json**: The couple's love story timeline.
- **family.json**: Family members showcase.
- **gallery.json**: Image gallery data (can be auto-generated).
- **gifts.json**: Registry, Bank, and UPI details.
- **hotels.json**: Accommodation recommendations.
- **music.json**: Background music settings.

## 🖼 Image Management

Place your images in the `public/` directory:
- Hero/Couple photos: `public/photos/`
- Gallery photos: `public/gallery/`

**Auto-sync Gallery:**
If you drop multiple folders into `public/gallery/` (e.g., `public/gallery/pre-wedding/`), you can automatically generate the `gallery.json` by running:
```bash
npm run sync-gallery
```

## 🎭 Available Themes

| Theme Name | Best For | Key Style |
|---|---|---|
| `luxury-gold` | Grand Weddings | Rich Gold, Dark Background, Elegant |
| `royal-palace` | Heritage/Palace | Royal Purple, Dramatic |
| `minimal-white` | Modern/Western | Pure White, Clean Typography |
| `classic-floral` | Elegant | Dusty Rose, Floral Accents |
| `dark-luxury` | Evening Events | Deep Black, Rose Gold |
| `traditional-indian`| Traditional | Bridal Red, Turmeric Gold |
| `south-indian` | Cultural | Temple Gold, Silk Maroon |
| `christian` | Church Weddings | Chapel White, Stained Glass Blue |
| `muslim` | Nikah | Emerald Green, Gold |
| `destination-wedding`| Exotic | Sunset Orange, Sky Blue |
| `beach-wedding` | Coastal | Ocean Teal, Sand |
| `garden-wedding` | Outdoor | Forest Green, Blush |

## 🚀 Deployment

This project is optimized for Vercel.

1. Push your code to GitHub.
2. Import the repository in Vercel.
3. Deploy!

No additional configuration is needed.

## 📄 License

MIT License
