# Animal & Cia Landing Page - Roadmap

## Milestone 1 - Preflight & Architecture (The Foundation)

- **Step 1:** Create the AI workspace: /.agent and /.agent/.logs (✅ Already Done).
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

- **Step 1:** Update roadmap and agent rules (Current).
- **Step 2:** Create `src/design-system/classes.ts` for centralizing UI string constants.
- **Step 3:** Refactor Header and Footer (and any other necessary files) components to use these centralized classes.

## Milestone 3 - Premium Frontpage Assembly (The UI)

- **Step 1:** Build the **Hero Section**: Implement an asymmetrical layout with a strong CTA and Framer Motion animations. (Completed)
- **Step 2:** Build the **Services Section**: Map over strictly-typed data to generate a custom, alternating zig-zag layout. (Completed)
- **Step 3:** Build the **About Us Section**: Implement a scalable team array focusing on a warm founder profile design. (Completed)
- **Step 4:** Build the **Location Section**: Implement a bento-box layout with business hours, a direct routing CTA, and an embedded Google Map. (Completed)
- **Step 5:** Verify the **Footer & Contact**: Ensure the pre-built footer integrates properly with the new design system classes. (Completed)

## Milestone 4 - Polish, CI/CD & Deployment

- **Step 1:** Conduct an asset audit: Manually process and optimize all image assets into modern formats (WebP/AVIF) before adding them to `/public`, and ensure off-screen elements are lazy-loaded.
- **Step 2:** Conduct an accessibility (a11y) audit: Enforce semantic HTML tags, strict ARIA labels, and WCAG-compliant color contrast.
- **Step 3:** Run local Google Lighthouse audits. Refactor components as needed to secure a 100/100 score across Performance, Accessibility, Best Practices, and SEO.
- **Step 4:** Implement a Playwright End-to-End (E2E) test to verify critical user paths and ensure UI stability.
- **Step 5:** Configure `next.config.ts` for a purely static HTML build (`output: 'export'`).
- **Step 6:** Set up a GitHub Actions workflow to run type-checks, linting, and E2E tests on every push.
- **Step 7:** Connect the GitHub repository to Cloudflare Pages for the initial live, automated deployment.
