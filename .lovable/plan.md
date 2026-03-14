

# UI Refinement Plan

## Changes by Component

### CreatorProfile
- Banner height: `h-44` → `h-[120px]`, remove rounded corners
- Avatar: reduce to `w-20 h-20`, keep overlap with `-mt-10`
- **Name + Stats on same row**: name/badge left, stats right (currently stats are below name)
- Bio: change `line-clamp-2` → `line-clamp-3`, reduce text to `text-xs`
- "Mostrar mais": change from orange/primary to grey muted text, remove chevron icons, smaller font

### SubscriptionCard
- "Promocional" label: add green color styling
- Tighten internal spacing slightly
- Overall structure is close, minor padding tweaks

### PromotionsSection  
- Reduce spacing between cards: `space-y-3` → `space-y-2`
- Make cards more pill-like: reduce vertical padding `p-4` → `py-3 px-4`

### LockedPost
- Reduce gap between posts: `mt-4` → `mt-3`
- Keep structure as-is

### FAQSection
- Style accordion items with grey background (`bg-muted`) and rounded corners
- Remove default border styling from AccordionItem

### PromoBar
- Constrain height to ~32px: `py-2.5` → `py-1.5`

### PlatformHeader
- Reduce padding: `py-4` → `py-2`

### FinalCTA / Footer / ContentCounter
- Minor spacing tweaks only

