# Animal & Cia - Centro Veterinário

A premium, high-performance static landing page for the Animal & Cia veterinary clinic located in Brumado, BA. Designed with a modern aesthetic, smooth animations, and a strict focus on local SEO and accessibility.

## 🚀 Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v3](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## 🏗 Architecture Highlights

- **Pure Static Export:** The application is configured with `output: 'export'` for maximum performance and deployment flexibility (e.g., Cloudflare Pages, GitHub Pages).
- **Strict Data Contracts:** All content (services, team, contact info) is centralized in `src/constants/content.ts` and `clinic-info.ts`, rigidly typed via TypeScript interfaces to prevent runtime errors.
- **Isolated Design System:** Visual tokens (colors, typography, standard paddings) are centralized in `src/design-system/classes.ts`, while structural layout classes remain directly inline in JSX for maximum developer readability.
- **WCAG Compliant:** Semantic HTML, ARIA attributes for interactive elements, and native image `loading`/`fetchPriority` attributes are strictly enforced.

## 💻 Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠 Project Structure

```text
├── src/
│   ├── app/                # Next.js App Router (page.tsx, layout.tsx)
│   ├── components/         # Modular UI Components (Hero, Services, Location, etc.)
│   ├── constants/          # Strictly typed content dictionaries
│   ├── design-system/      # Centralized visual CSS tokens
│   └── types/              # Global TypeScript interfaces
├── public/                 # Static assets (images, favicon)
├── tailwind.config.ts      # Tailwind configuration and theme extension
└── next.config.ts          # Next.js configuration (static export enabled)
```

## 📦 Deployment

To build the static HTML export:

```bash
npm run build
```

The optimized static files will be generated in the `/out` directory, ready to be deployed to any static hosting provider.
