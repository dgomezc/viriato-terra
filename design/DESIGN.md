---
name: Tactical Light
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f4'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#594139'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f0f1f1'
  outline: '#8d7168'
  outline-variant: '#e1bfb5'
  surface-tint: '#aa3700'
  primary: '#a63500'
  on-primary: '#ffffff'
  primary-container: '#cb4a13'
  on-primary-container: '#fffbff'
  inverse-primary: '#ffb59c'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2dfde'
  on-secondary-container: '#636262'
  tertiary: '#5c5c5c'
  on-tertiary: '#ffffff'
  tertiary-container: '#757474'
  on-tertiary-container: '#fefcfc'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59c'
  on-primary-fixed: '#380c00'
  on-primary-fixed-variant: '#822800'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474746'
  tertiary-fixed: '#e4e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1b1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1280px
---

## Brand & Style

The design system adopts a "Tactical Grit" aesthetic reimagined for high-visibility environments. It targets professionals and enthusiasts in technical, outdoors, or industrial sectors who demand clarity and functional precision. The UI evokes a sense of reliability, high-performance gear, and utilitarian efficiency.

The design style is a hybrid of **Minimalism** and **Modern Corporate**, utilizing a high-contrast foundation. It strips away unnecessary decorative elements, focusing instead on structural integrity, clear information hierarchy, and a pure white canvas that emphasizes "work-ready" tools. The emotional response is one of alertness, focus, and unwavering dependability.

## Colors

The palette is centered on a pure white (#FFFFFF) background to maximize legibility and provide a clinical, focused workspace. The primary brand color, **Ochre Orange (#D9541E)**, is used strategically for action elements, status indicators, and critical highlights, ensuring they pop against the neutral base.

Typography and iconography utilize **Rich Black (#1A1A1A)** for primary content to ensure the highest possible contrast ratio. Secondary information uses shades of deep grey to maintain hierarchy without sacrificing readability. Surface containers use subtle cool-grey tints to differentiate nested content while maintaining the overarching "light mode" clarity.

## Typography

This design system uses a dual-type approach to reinforce the tactical narrative. **JetBrains Mono** is utilized for headlines and labels, providing a technical, monospaced "readout" feel that suggests precision and data-driven logic. **Hanken Grotesk** is used for body copy to provide a clean, contemporary, and highly readable experience for long-form content.

Labels should frequently utilize uppercase styling with tighter tracking to mimic technical equipment markings. Headlines should remain impactful and concise.

## Layout & Spacing

The layout follows a strict **fixed-grid** philosophy on desktop to maintain a structured, instrument-panel feel, transitioning to a fluid layout on mobile devices. A 12-column grid is standard for desktop, with 24px gutters providing ample breathing room between dense data blocks.

The spacing rhythm is based on a 4px baseline. Components should use consistent padding (e.g., 16px or 24px) to maintain a rigid, geometric alignment. Content should be grouped into logical modules with clear vertical separation to avoid visual clutter on the white background.

## Elevation & Depth

To maintain the "Tactical Grit" feel in a light theme, this design system avoids soft, ambient shadows. Instead, it uses **Tonal Layers** and **Bold Borders**. Depth is communicated through:

1.  **Container Levels:** Use `#F5F5F5` and `#EBEBEB` for background surfaces to create a stack of functional areas.
2.  **Hairline Outlines:** Elements are defined by 1px solid borders in `#1A1A1A` or `#D1D1D1` rather than drop shadows. 
3.  **Active States:** Hard, 2px offsets (similar to a subtle "button press") are preferred over diffused elevation for interactive elements, reinforcing the mechanical nature of the UI.

## Shapes

The shape language is "Soft" (0.25rem), providing just enough rounding to ensure the UI feels modern and engineered rather than sharp and aggressive. This slight radius mimics the machined edges of high-end tactical equipment. Large containers and primary action buttons follow the `rounded-lg` (0.5rem) standard to create a clear visual distinction from smaller UI components.

## Components

-   **Buttons:** Primary buttons use a solid Ochre Orange (#D9541E) background with white text and a 1px black bottom-border to simulate physical depth. Secondary buttons use a white background with a 1px black border and black text.
-   **Input Fields:** Use a 1px solid border (#1A1A1A) with JetBrains Mono for the input text. Focused states should switch the border to Ochre Orange and include a subtle inner tint.
-   **Cards:** Pure white background with a 1px solid border in a light grey (#D1D1D1). Use sharp 90-degree internal corners for nested images to maintain the technical look.
-   **Lists:** Divided by 1px horizontal rules in `#EBEBEB`. Use monospaced labels for metadata or timestamps within list items.
-   **Chips/Tags:** Small, high-contrast badges with black backgrounds and white monospaced text, or white backgrounds with Ochre Orange borders for active filters.
-   **Status Indicators:** Use solid geometric shapes (circles or squares) in Ochre Orange for "active" or "warning" states, and Rich Black for "off" or "inactive" states.