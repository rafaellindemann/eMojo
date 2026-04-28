---
name: Vibrant Energy
colors:
  surface: '#131314'
  surface-dim: '#131314'
  surface-bright: '#39393a'
  surface-container-lowest: '#0e0e0f'
  surface-container-low: '#1b1b1c'
  surface-container: '#1f1f20'
  surface-container-high: '#2a2a2b'
  surface-container-highest: '#353436'
  on-surface: '#e5e2e3'
  on-surface-variant: '#d0c6ab'
  inverse-surface: '#e5e2e3'
  inverse-on-surface: '#303031'
  outline: '#999077'
  outline-variant: '#4d4732'
  surface-tint: '#e9c400'
  primary: '#fff6df'
  on-primary: '#3a3000'
  primary-container: '#ffd700'
  on-primary-container: '#705e00'
  inverse-primary: '#705d00'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#fff7cf'
  on-tertiary: '#363100'
  tertiary-container: '#f0dc2a'
  on-tertiary-container: '#6a6000'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe16d'
  primary-fixed-dim: '#e9c400'
  on-primary-fixed: '#221b00'
  on-primary-fixed-variant: '#544600'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#f9e534'
  tertiary-fixed-dim: '#dbc90a'
  on-tertiary-fixed: '#201c00'
  on-tertiary-fixed-variant: '#4f4800'
  background: '#131314'
  on-background: '#e5e2e3'
  surface-variant: '#353436'
typography:
  display-lg:
    fontFamily: Spline Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Spline Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Spline Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  gutter: 16px
  margin: 20px
---

## Brand & Style
The design system is built to capture the high-octane, expressive nature of modern digital communication. It targets a Gen-Z and Millennial demographic that values speed, personality, and visual flair. The brand personality is electric, approachable, and unapologetically bold.

The aesthetic leans into **Glassmorphism** and **High-Contrast Bold** styles. It utilizes deep, saturated surfaces paired with luminous accents to create a "neon-noir" atmosphere. Interaction is the core of the experience; every touchpoint should feel like a burst of energy, utilizing subtle glows and fluid transitions to mimic the responsiveness of a physical emoji.

## Colors
The palette is anchored by a sophisticated Deep Charcoal (`#121213`) surface that avoids the "deadness" of pure black, providing a rich canvas for high-contrast elements. The Primary Yellow (`#FFD700`) is the pulse of the UI, used for critical actions, active states, and brand-heavy components.

Crisp White is reserved for maximum legibility in body text and primary headers. A secondary, softer yellow is utilized for hover states and subtle gradients to prevent the interface from feeling flat. Functional colors for success, error, and warnings should maintain high saturation to remain consistent with the vibrant theme.

## Typography
This design system employs two distinct sans-serifs to balance personality with performance. **Spline Sans** is used for headlines and display text, providing a fresh and slightly geometric character that feels modern and playful. 

**Plus Jakarta Sans** handles body copy and UI labels. Its soft curves and generous x-height ensure exceptional readability on mobile screens, even against dark backgrounds. Use tight tracking on large display headers to create a "tight," editorial look, while maintaining standard tracking for body copy to ensure accessibility.

## Layout & Spacing
The layout utilizes a **fluid grid** model optimized for mobile-first social interactions. A standard 12-column grid is used for desktop, while a 4-column grid governs mobile views. 

The spacing rhythm is based on a 4px baseline, ensuring all elements align to a consistent vertical and horizontal scale. Content should feel airy but purposeful; use `xl` and `xxl` spacing for sectional breaks, and `sm` to `md` for grouping related internal components like profile headers and meta-data.

## Elevation & Depth
Depth in this design system is achieved through **Tonal Layers** combined with **Ambient Shadows**. Instead of traditional grey shadows, elevations on interactive elements utilize a low-opacity yellow glow (`#FFD700` at 15-25% opacity) to suggest energy emanating from the component.

Higher elevation levels are represented by lighter shades of charcoal (e.g., Surface L1, L2, L3) to create a sense of verticality. Background blurs (10px - 20px) are applied to navigation bars and overlays to maintain context while keeping the focus on the foreground content.

## Shapes
The shape language is consistently **Rounded**, reflecting the friendliness of the emoji logo. The standard radius of `0.5rem` is applied to most containers and input fields. For high-engagement items like buttons and story bubbles, use `rounded-xl` or full pill-shaping to encourage interaction. Avoid sharp corners entirely to maintain the playful, organic feel of the system.

## Components
- **Buttons:** Primary buttons are solid Yellow (`#FFD700`) with black text. On hover, apply a subtle outer glow. Secondary buttons use a White outline with a 10% white fill.
- **Chips:** Used for tags and categories, these should be pill-shaped with a dark-grey stroke and White text. Active chips flip to Yellow background with Black text.
- **Cards:** Cards should have a slightly lighter charcoal background than the main page. They feature a `1px` low-contrast border (`rgba(255, 255, 255, 0.1)`) to define edges without adding visual noise.
- **Input Fields:** Use a subtle inset shadow to create a "pressed" look, with the border turning Yellow when focused.
- **Checkboxes & Radios:** These are high-impact yellow when selected, utilizing a custom checkmark or dot to maintain the sleek aesthetic.
- **Reaction Bar:** A specialized component for this system, featuring animated emoji transitions and a glass-morphic backdrop for quick social interactions.