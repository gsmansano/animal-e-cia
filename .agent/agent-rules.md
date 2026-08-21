# Architectural Rules & Guardrails - Animal & Cia

## 1. Core Stack & Constraints

- **Framework:** Next.js (App Router), purely static export (`output: 'export'`).
- **Language:** TypeScript (Strict mode enabled, strict zero-`any` policy).
- **Styling & Motion:** Tailwind CSS, Framer Motion.
- **Backend & Database:** None. Strictly zero backend APIs, databases, or runtime server dependencies.

## 2. Localization & Clean Code Standards

- **User Interface Copy:** Clean, warm, accessible Portuguese (PT-BR) targeting local SEO (e.g., Brumado/BA).
- **Codebase Conventions:** 100% English for all file names, directories, component names, TypeScript types/interfaces, and utility functions.
- **In-Code Commentary:** Strict NO commentary policy inside source code files. Explain implementation details and technical architecture strictly within terminal logs, changelogs, or chat summaries.

## 3. Autonomous Dev Guardrails (STRICT)

- **Step-by-Step Execution:** Complete ONLY the assigned atomic tasks (maximum 1-3 steps at a time depending on complexity) and immediately pause for user confirmation before proceeding to subsequent steps.
- **The Review & Commit Lifecycle:** Every task must strictly follow this workflow:
  1. **Execute & Reflect:** Implement the requested changes. Perform a critical self-review against project constraints (performance, a11y, static export) and provide a brief feedback summary of your technical choices.
  2. **Pause for Approval:** DO NOT stage (`git add`) or commit (`git commit`) any files yet. Wait for the user to review the code changes.
  3. **Iterate:** If the user requests refinements, update the code and pause again.
  4. **Commit:** ONLY after receiving explicit user approval, stage and commit the changes. Commit messages must be strictly English, concise, lowercase, and follow Conventional Commits (e.g., `feat: setup root structure`, `style: add color tokens`).
  5. **Log:** Immediately after the approved commit, write or update the markdown ledger entry inside `/.agent/.logs/YYYY-MM-DD_changelog.md`. If the file exists for today, append the new task and timestamp. If not, initialize it using the standard template.

## 4. UI Architecture & Performance

- **Design System Isolation:** All brand colors, custom typography, spacing tokens, and base themes must live inside `/design-system` and be referenced by `tailwind.config.ts`. Do not hardcode arbitrary hex values into component files.
- **Content Dictionary Pattern:** Never hardcode UI text (headings, paragraphs, button labels) directly in component files. All copy must be centralized inside a `CONTENT` constant in `src/constants/content.ts` and imported into components.
- **Accessibility (a11y):** Semantic HTML5 tags (`<main>`, `<nav>`, `<section>`, `<header>`, `<footer>`), valid heading hierarchy ($h1 \rightarrow h2 \rightarrow h3$), and descriptive `aria-label` tags for interactive elements.
- **Lighthouse Performance:** Mandatory optimization using `next/image`, lazy loading for off-screen components, and zero unused dependencies to target a 100/100 Lighthouse score.
- **Static Image Export:** Because the project uses output: 'export', the agent must configure unoptimized: true in next.config.mjs for the next/image component, or explicitly use standard <img /> tags for local assets to prevent build failures on Cloudflare Pages.
- **Iconography:** Strictly use lucide-react for all SVG icons to maintain a clean, uniform design language.
- **Mobile-First Styling:** Tailwind classes must be written mobile-first. Base classes apply to mobile screens, with md:, lg:, and xl: prefixes used to scale up the UI for wider screens.
- **Tailwind Cleanliness:** To keep JSX clean without premature component abstraction, avoid long inline Tailwind class strings. Instead, define reusable Tailwind class strings as constants inside `src/design-system/classes.ts` and import them into components.

## 5. Optimized Directory Map

animal-e-cia/
├── .agent/ # AI Agent workspace
│ ├── .logs/ # Daily changelogs & activity history
│ │ └── YYYY-MM-DD_changelog.md
│ ├── project-roadmap.md # Full project roadmap
│ └── agent-rules.md # This rules and guardrails file
│
├── design-system/ # Centralized styling & design tokens
│ ├── colors.ts # Brand palette definitions
│ ├── typography.ts # Font families & sizing scales
│ └── index.ts # Design system export bundle
│
├── src/
│ ├── app/ # Next.js App Router
│ │ ├── layout.tsx # Root layout shell & global SEO metadata
│ │ └── page.tsx # Bespoke landing page layout
│ │
│ ├── components/ # Modular UI blocks
│ │ ├── hero/ # Hero section & animations
│ │ ├── about/ # History & clinic narrative
│ │ ├── services/ # Dynamic services card grid
│ │ ├── social/ # Instagram feed integration
│ │ ├── contact/ # Map, WhatsApp CTA & hours
│ │ └── layout/ # Header, Navbar & Footer
│ │
│ └── constants/ # Type-safe static text & data
│ ├── navigation.ts # Navigation links
│ ├── services.ts # Service list & descriptions
│ └── clinic-info.ts # Address, WhatsApp, hours, SEO metadata
│
├── public/ # Static assets (optimized images, icons)
├── next.config.mjs # Static export configuration
├── tailwind.config.ts # Tailwind integration with design-system
├── tsconfig.json # Strict TypeScript configuration
└── package.json
