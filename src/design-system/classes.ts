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
    wrapper: "pt-32 pb-16 md:pt-40 md:pb-24 bg-slate-50 relative overflow-hidden",
    grid: "max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
    h1: "font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-green-dark mb-6 leading-tight",
    p: "text-lg text-slate-600 mb-8 max-w-lg",
    imagePlaceholder: "w-full aspect-[4/3] lg:aspect-square bg-green-light/20 rounded-3xl border-4 border-white shadow-xl flex items-center justify-center",
  },
  
  services: {
    wrapper: "py-20 bg-slate-50",
    headerContainer: "text-center max-w-2xl mx-auto mb-16 px-6",
    h2: "font-heading text-3xl md:text-4xl font-bold text-green-dark mb-4",
    p: "text-slate-600 text-lg",
    stack: "flex flex-col gap-16 md:gap-24 mt-16 max-w-5xl mx-auto px-6",
    cardWrapper: "flex flex-col md:flex-row gap-8 items-center",
    cardWrapperReverse: "flex flex-col md:flex-row-reverse gap-8 items-center",
    cardContent: "flex-1 space-y-4",
    cardImagePlaceholder: "flex-1 w-full aspect-square bg-green-light/20 rounded-2xl border-2 border-dashed border-green-light/50 flex items-center justify-center text-green-dark/50 font-medium",
  },
  
  about: {
    wrapper: "py-20 bg-white",
    headerContainer: "text-center max-w-2xl mx-auto mb-16 px-6",
    h2: "font-heading text-3xl md:text-4xl font-bold text-green-dark mb-4",
    profileContainer: "max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16",
    imageWrapper: "relative",
    imageOffsetBackground: "absolute inset-0 bg-green-light/20 rounded-2xl transform translate-x-4 translate-y-4",
    image: "w-full aspect-[4/5] bg-slate-100 flex items-center justify-center rounded-2xl object-cover shadow-lg relative z-10 text-slate-400 font-medium",
    textContent: "space-y-6",
    name: "font-heading text-3xl font-bold text-green-dark",
    role: "text-pink font-semibold text-lg",
    bioText: "text-slate-600 leading-relaxed",
  },
  
  location: {
    wrapper: "py-20 bg-slate-50",
    grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto px-6 items-start",
    infoWrapper: "flex flex-col space-y-6 sticky top-24",
    h2: "font-heading text-3xl md:text-4xl font-bold text-green-dark",
    p: "text-slate-600 text-lg",
    bentoGrid: "grid grid-cols-2 gap-4",
    bentoItemWide: "col-span-2 aspect-video bg-slate-200 rounded-2xl overflow-hidden flex items-center justify-center text-slate-500 font-medium",
    bentoItemSquare: "col-span-1 aspect-square bg-slate-200 rounded-2xl overflow-hidden flex items-center justify-center text-slate-500 font-medium",
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
