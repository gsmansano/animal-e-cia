export const GLOBAL = {
  container: "max-w-7xl mx-auto px-6",
  primaryButton: "inline-block bg-pink text-white font-bold py-3 px-6 rounded-lg hover:bg-pink/90 transition-colors",
} as const;

export const SECTION = {
  header: {
    wrapper: {
      base: "transition-all duration-300",
      scrolled: "bg-white shadow-sm py-4",
      transparent: "bg-transparent py-6",
    },
    logo: "font-heading text-2xl font-bold text-green-dark",
    navLink: "text-slate-700 hover:text-green-dark transition-colors font-medium",
    mobileMenuBtn: "text-green-dark p-2 focus:outline-none",
    navMobileDrawer: "bg-white shadow-lg border-t border-slate-100",
  },
  
  hero: {
    wrapper: "pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50",
    h1: "font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-green-dark leading-tight",
    p: "text-lg text-slate-600",
    imagePlaceholder: "bg-green-light/20 rounded-3xl border-4 border-white shadow-xl text-green-dark/50 font-medium font-heading",
  },
  
  services: {
    wrapper: "py-20 bg-slate-50",
    h2: "font-heading text-3xl md:text-4xl font-bold text-green-dark",
    p: "text-slate-600 text-lg",
    cardImagePlaceholder: "bg-green-light/20 rounded-2xl border-2 border-dashed border-green-light/50 text-green-dark/50 font-medium",
  },
  
  about: {
    wrapper: "py-20 bg-white",
    h2: "font-heading text-3xl md:text-4xl font-bold text-green-dark",
    imageOffsetBackground: "bg-green-light/20 rounded-2xl",
    image: "bg-slate-100 rounded-2xl shadow-lg text-slate-400 font-medium",
    name: "font-heading text-3xl font-bold text-green-dark",
    role: "text-pink font-semibold text-lg",
    bioText: "text-slate-600 leading-relaxed",
  },
  
  location: {
    wrapper: "py-20 bg-slate-50",
    h2: "font-heading text-3xl md:text-4xl font-bold text-green-dark",
    p: "text-slate-600 text-lg",
    bentoItem: "bg-slate-200 rounded-2xl shadow-sm text-slate-500 font-medium",
  },

  footer: {
    wrapper: "bg-green-dark text-white pt-16 pb-8",
    columnHeading: "font-heading text-xl font-bold text-pink",
    textMuted: "text-slate-300",
    link: "text-slate-300 hover:text-green-light transition-colors",
    qrBox: "bg-white/10 p-4 rounded-xl text-center border border-white/20",
    qrInner: "bg-white/20 rounded-lg border-2 border-dashed border-white/40",
    copyright: "border-t border-white/20 text-center text-sm text-slate-400",
  },
} as const;
