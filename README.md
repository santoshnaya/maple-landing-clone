# Maple Landing Clone

A clean, family-centric, responsive Next.js landing page inspired by Grow Maple's site—showcasing app screenshots, trust signals, simple navigation, and a warm, soft-ui vibe. This project is strictly frontend only, using static/mock assets and no backend logic.

## Features

- **Sticky Header**: Logo and call-to-action button with scroll effects
- **Hero Section**: Large headline, subheading, CTA button, and interactive phone mockup
- **Handwritten Annotations**: CSS-based decorative elements around the phone mockup
- **Trust Signals**: Family-focused messaging throughout
- **Responsive Footer**: Download links, resources, about section, and social icons
- **Mobile-First Design**: Fully responsive across all devices
- **Modern Animations**: Smooth transitions and hover effects
- **Accessible**: Built with semantic HTML and ARIA labels

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Custom Fonts** - Inter for text, Caveat for handwritten style
- **Static Export** - Ready for deployment on any static host

## Design System

### Colors
- Background: Off-white/beige (`#faf9f7`)
- Headings: Charcoal black (`#2d2d2d`)
- Accents: Soft pastel green (`#7fb069`) and blue (`#6b9dcc`)
- Warm tones: Light beige (`#f5f3f0`)

### Typography
- **Headlines**: Inter Bold
- **Body text**: Inter Regular
- **Annotations**: Caveat (handwritten style)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Build and Deploy

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Home page component
├── components/
│   ├── Header.tsx           # Sticky header with logo and CTA
│   ├── Hero.tsx             # Main hero section with phone mockup
│   └── Footer.tsx           # Footer with links and social icons
├── public/
│   └── mobile-screens.png   # App screenshot mockup
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Project dependencies and scripts
```

## Customization

### Colors
Edit the color palette in `tailwind.config.js`:
```javascript
colors: {
  'maple-beige': '#faf9f7',
  'maple-charcoal': '#2d2d2d',
  'maple-green': '#7fb069',
  'maple-blue': '#6b9dcc',
  'maple-warm': '#f5f3f0',
}
```

### Fonts
Update font imports in `app/globals.css` and `tailwind.config.js`.

### Content
Modify component files in the `components/` directory to update text, links, and layout.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

This project is for educational purposes only. Original design inspiration from Grow Maple.

## Deployment

This project is configured for static export and can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting provider

The build output will be in the `out/` directory after running `npm run build`.