# Animal & Cia Landing Page - Roadmap

## Milestone 1 - Preflight & Architecture (The Foundation)

- **Step 1:** Create the AI workspace: /.agent and /.agent/.logs.
- **Step 2:** Initialize the local Git repository, create the .gitignore file (to protect our logs), and set up the public GitHub repository.
- **Step 3:** Initialize the Next.js App Router project (TypeScript, Tailwind, ESLint) in the current directory.
- **Step 4:** Strip out all default Next.js boilerplate.
- **Step 5:** Create the core application directory structure (/design-system, /components, /constants, etc.).

## Milestone 2 - The Custom Chassis (Design System & Core Shell)

- **Step 1:** Define the clinic's design tokens (colors, typography, spacing) inside the `/design-system` folder.
- **Step 2:** Configure `tailwind.config.ts` to strictly consume those custom tokens, ensuring a single source of truth for all styles.
- **Step 3:** Install Framer Motion and create reusable global animation wrappers (e.g., a fade-in-up component) inside `/components`.
- **Step 4:** Implement localized Next.js Metadata in `layout.tsx` for core SEO.
- **Step 5:** Build a bespoke, responsive Header/Navbar (e.g., sticky or transparent-to-solid on scroll).
- **Step 6:** Build the base Footer containing standard copyright and quick links.

## Milestone 2.5 - Design System Refactoring

- **Step 1:** Update roadmap and agent rules.
- **Step 2:** Create `src/design-system/classes.ts` for centralizing UI string constants.
- **Step 3:** Refactor Header and Footer (and any other necessary files) components to use these centralized classes.

## Milestone 3 - Premium Frontpage Assembly (The UI)

- **Step 1:** Build the **Hero Section**: Implement an asymmetrical layout with a strong CTA and Framer Motion animations.
- **Step 2:** Build the **Services Section**: Map over strictly-typed data to generate a custom, alternating zig-zag layout.
- **Step 3:** Build the **About Us Section**: Implement a scalable team array focusing on a warm founder profile design.
- **Step 4:** Build the **Location Section**: Implement a bento-box layout with business hours, a direct routing CTA, and an embedded Google Map.
- **Step 5:** Verify the **Footer & Contact**: Ensure the pre-built footer integrates properly with the new design system classes.

## Milestone 3.5 - Architecture Refactor & Audit Remediation

- **Step 1:** Documentation Sync (Updating rules/constraints).
- **Step 2:** Enforce Type Contracts (Strict TS interfaces for constants).
- **Step 3:** De-abstract Structural Tailwind (Move layout classes back to JSX).
- **Step 4:** Accessibility (a11y) Patch (ARIA attributes for interactive UI).
- **Step 5:** Static Image Prep (Prepare img tags for `output: 'export'`).

## Milestone 4 - Infrastructure Core & Local SEO

- **Step 1:** Local SEO (JSON-LD) Injection (Completed)
- **Step 2:** Static Export Configuration (Completed)
- **Step 3:** Dead Code & Project Audit (Completed)

## Milestone 5 - Brand Identity & UI Polish

- **Step 1:** Header Overhaul (Implement `Animal e Cia Logo Horizontal sem centro.png` for desktop and `Animal e Cia Logo Coração.png` for mobile).
- **Step 2:** Global CTA Standardization (Update all primary buttons to "Fale com a gente!" paired with a WhatsApp icon).
- **Step 3:** Color System Enforcement (Apply the "White Buffer Rule": Green backgrounds must have White text/icons. White backgrounds can have Green/Pink text. Pink and Green must never touch without a white buffer. Remove pink text from the footer).
- **Step 4:** Contact Section & Mini-Footer Redesign (Create a dedicated Contact section with a desktop-only QR code, and shrink the footer to just feature `Animal e Cia Logo Branco Grosso (1).png`, copyright, and socials).
- **Step 5:** Final Asset Integration & Lighthouse Polish (Inject final WebP photos once approved and run final 100/100 Lighthouse audit).

## Milestone 6 - CI/CD & Production Deployment

- **Step 1:** Automated Testing (Playwright E2E test).
- **Step 2:** Continuous Integration (GitHub Actions for automated type-checking).
- **Step 3:** Production Deployment (Connect repository to Cloudflare Pages).
