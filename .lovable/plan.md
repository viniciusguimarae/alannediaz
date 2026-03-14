

# Premium Creator Subscription Landing Page

## Overview
A mobile-first creator subscription landing page inspired by modern premium content platforms, featuring locked content previews and a subscription paywall. All content in Portuguese.

## Design System
- **Primary Accent:** #FF5A1F (Vibrant Orange)
- **Background:** White with off-white card surfaces
- **Typography:** Outfit for headings/prices, Inter for body text
- **Cards:** 16-20px border radius, soft diffused shadows
- **Layout:** Single-column, centered, 20px side padding

## Page Sections (Top to Bottom)

### 1. Promotional Banner
Thin orange bar with white text: "ESSA PROMOÇÃO É VÁLIDA ATÉ 14/03/2026"

### 2. Platform Header
Minimal centered logo with subtle divider

### 3. Creator Profile
- Full-width banner image with overlapping circular profile photo
- "Nicolle Caroline" with blue verification badge
- Stats row: 📷 354 · 🎬 148 · ❤️ 20.2K
- Collapsible bio in Portuguese with "Mostrar mais" toggle

### 4. Subscription Card
White card with main offer: "15 Dias — R$ 9,90" with fire emoji badge, benefits list (video call, secure payment, immediate access)

### 5. Promotions Section
Three selectable plan cards (30 dias R$14,90 "Mais popular", 3 Meses R$32,90 "Melhor oferta", 6 Meses R$24,90 "Exclusivo") with orange border on selection

### 6. Content Counters
"502 Posts • 148 Vídeos • 354 Fotos"

### 7. Locked Content Feed
Multiple post cards with blurred placeholder images, centered lock icon overlay, creator info, and engagement stats (likes/comments)

### 8. FAQ Accordion
6 collapsible questions about privacy, access, cancellation, refunds, video calls, custom content

### 9. Final CTA
Large sticky-style orange button: "Veja tudo por apenas R$ 9,90 →"

### 10. Footer
Centered links: Termos de Uso · Política de Privacidade

## Components Structure
- `PromoBar` — top banner
- `PlatformHeader` — logo area
- `CreatorProfile` — banner, avatar, name, stats, bio
- `SubscriptionCard` — main offer card
- `PromotionsSection` — selectable plan cards
- `ContentCounter` — stats line
- `LockedPost` — blurred content card (reusable)
- `FAQSection` — accordion
- `FinalCTA` — bottom CTA button
- `Footer` — links

## Technical Notes
- Built with React + Tailwind (not Next.js, as project uses Vite)
- Google Fonts: Outfit + Inter loaded via index.html
- Placeholder images via gradient backgrounds for banner/content
- All text in Portuguese as specified
- Smooth 200ms accordion animations
- Mobile-first with max-width container for larger screens

