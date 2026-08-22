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

## Milestone 4 - Polish, Local SEO, CI/CD & Deployment

- **Step 1: Asset Integration:** Map and place the final `.webp` images into `/public/images/` and add the site favicon.
- **Step 2: Local SEO (JSON-LD) Injection:** Implement structured data schema for the local business to supercharge Google Maps ranking.
- **Step 3: Static Export Configuration:** Configure `next.config.ts` for a purely static HTML build (`output: 'export'`).
- **Step 4: Lighthouse Audit & Polish:** Verify 100/100 scores across Performance, Accessibility, Best Practices, and SEO.
- **Step 5: Automated Testing & CI/CD:** Implement a lightweight Playwright E2E test and set up GitHub Actions for automated type-checking and testing.
- **Step 6: Production Deployment:** Connect the GitHub repository to Cloudflare Pages for live deployment.
