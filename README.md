# Executive Sightseeing Ltd - Luxury London Tours

A modern, executive-focused website for Executive Sightseeing Ltd, a Kenyan-owned luxury sightseeing company based in London.

## 🎯 Project Overview

Executive Sightseeing Ltd provides premium sightseeing experiences for VIPs, CEOs, senior executives, diplomats, and business leaders visiting London. This website showcases their luxury services with a sophisticated, professional design that reflects their executive clientele.

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom executive theme
- **Fonts**: Inter (body) & Playfair Display (headings)
- **Components**: Custom UI component library
- **Build Tool**: Turbopack
- **Deployment**: Vercel (recommended)

## 🎨 Executive Theme

The website features a comprehensive executive theme with:

### Color Palette
- **Navy**: `#1a2332` - Primary executive color
- **Gold**: `#d4af37` - Accent color for luxury feel
- **Cream**: `#f8f6f0` - Soft background color
- **Charcoal**: `#2c3e50` - Secondary text color
- **Silver**: `#95a5a6` - Muted elements

### Typography
- **Headings**: Playfair Display (serif) - Elegant and sophisticated
- **Body**: Inter (sans-serif) - Clean and readable

### Design Principles
- Professional and refined aesthetic
- Luxury-focused visual hierarchy
- Executive-appropriate color scheme
- Responsive design for all devices
- Accessibility-first approach

## 📁 Project Structure

```
executive-sightseeing/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles with executive theme
│   │   ├── layout.tsx          # Root layout with metadata
│   │   ├── page.tsx            # Homepage
│   │   └── viewport.ts         # Viewport configuration
│   ├── components/
│   │   └── ui/                 # Reusable UI components
│   │       ├── Button.tsx      # Executive-styled button component
│   │       └── Card.tsx        # Executive-styled card component
│   └── lib/
│       ├── theme.ts            # Theme configuration and utilities
│       └── utils.ts            # Utility functions
├── public/                     # Static assets
├── .env.local                  # Environment variables
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

## 🛠 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd executive-sightseeing
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Theme Usage

### Using Executive Colors
```tsx
// In components
<div className="bg-executive-navy text-executive-cream">
  <h1 className="text-executive-gold">Executive Title</h1>
</div>
```

### Typography Classes
```tsx
// Headings
<h1 className="heading-display">Display Heading</h1>
<h2 className="heading-primary">Primary Heading</h2>
<h3 className="heading-secondary">Secondary Heading</h3>

// Body text
<p className="body-large">Large body text</p>
<p className="body-regular">Regular body text</p>
<p className="body-small">Small body text</p>
```

### Executive Components
```tsx
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card';

// Executive buttons
<Button variant="primary">Primary Action</Button>
<Button variant="secondary">Secondary Action</Button>
<Button variant="ghost">Ghost Button</Button>

// Executive cards
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
  </CardHeader>
  <CardContent>
    Card content here
  </CardContent>
</Card>
```

## 🔧 Configuration

### Environment Variables

The project uses environment variables for configuration. Key variables include:

- `NEXT_PUBLIC_APP_NAME` - Application name
- `NEXT_PUBLIC_APP_URL` - Application URL
- Database, CMS, and API configurations (to be added)

### Theme Customization

The executive theme can be customized in `src/lib/theme.ts`:

```typescript
export const executiveTheme = {
  colors: {
    navy: '#1a2332',
    gold: '#d4af37',
    // ... other colors
  },
  // ... other theme properties
};
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px  
- Desktop: > 1024px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Color contrast compliance
- Screen reader optimization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Configure environment variables
3. Deploy automatically on push

### Other Platforms
The project can be deployed to any platform supporting Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📄 License

This project is proprietary to Executive Sightseeing Ltd.

## 🤝 Contributing

This is a private project for Executive Sightseeing Ltd. For development inquiries, please contact the development team.

---

**Executive Sightseeing Ltd** - Luxury Sightseeing & Executive Travel in London