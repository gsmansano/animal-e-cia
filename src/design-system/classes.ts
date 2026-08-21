export const GLOBAL = {
  container: "max-w-7xl mx-auto px-6",
  primaryButton: "inline-block bg-pink text-white font-bold py-3 px-6 rounded-lg hover:bg-pink/90 transition-colors",
} as const;

export const SECTION = {
  header: {
    wrapper: {
      base: "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled: "bg-white shadow-sm py-4",
      transparent: "bg-transparent py-6",
    },
    innerContainer: "max-w-7xl mx-auto px-6 flex items-center justify-between",
    logo: "font-heading text-2xl font-bold text-green-dark",
    navDesktop: "hidden md:flex items-center gap-8",
    navLink: "text-slate-700 hover:text-green-dark transition-colors font-medium",
    mobileMenuBtn: "md:hidden text-green-dark p-2 focus:outline-none",
    navMobileDrawer: "md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-slate-100",
    navMobileContainer: "flex flex-col p-6 gap-4",
  },
  
  hero: {
    wrapper: "relative overflow-hidden bg-slate-50 py-20 lg:py-32",
    h1: "font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-green-dark mb-6",
    p: "text-lg md:text-xl text-slate-600 mb-8 max-w-2xl",
  },
  
  services: {
    wrapper: "py-24 bg-white",
    h2: "font-heading text-3xl md:text-4xl font-bold text-green-dark text-center mb-12",
    p: "text-slate-600 text-center max-w-2xl mx-auto mb-16",
    card: "bg-slate-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-slate-100",
  },
  
  about: {
    wrapper: "py-24 bg-slate-50",
    h2: "font-heading text-3xl md:text-4xl font-bold text-green-dark mb-8",
    p: "text-slate-600 mb-6 leading-relaxed",
  },
  
  location: {
    wrapper: "py-24 bg-white",
    h2: "font-heading text-3xl md:text-4xl font-bold text-green-dark mb-8",
    p: "text-slate-600 mb-6",
  },

  footer: {
    wrapper: "bg-green-dark text-white pt-16 pb-8",
    innerGrid: "max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12",
    columnHeading: "font-heading text-xl font-bold mb-4 text-pink",
    textMuted: "text-slate-300",
    link: "flex items-center gap-2 hover:text-green-light transition-colors",
    qrBox: "bg-white/10 p-4 rounded-xl inline-block text-center border border-white/20",
    qrInner: "w-32 h-32 bg-white/20 mb-3 flex items-center justify-center rounded-lg border-2 border-dashed border-white/40 mx-auto",
    copyright: "max-w-7xl mx-auto px-6 pt-8 border-t border-white/20 text-center text-sm text-slate-400",
  },
} as const;
