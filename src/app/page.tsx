export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-8 gap-12 font-sans text-slate-800">
      <div className="text-center space-y-4">
        <h1 className="font-heading text-5xl font-bold text-green-dark">Animal & Cia</h1>
        <p className="text-xl text-slate-600 max-w-lg mx-auto">
          This is a quick typography and color test. The heading above uses <span className="font-bold">Nunito</span> (green-dark), and this body text uses <span className="font-bold">Inter</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
        {/* Primary Action */}
        <div className="bg-pink text-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center">
          <h2 className="font-heading text-2xl font-semibold mb-2">Primary Action</h2>
          <p className="opacity-90">bg-pink</p>
          <button className="mt-4 bg-white text-pink px-6 py-2 rounded-full font-bold shadow-sm hover:opacity-90 transition-opacity">
            Test Button
          </button>
        </div>

        {/* Primary Text */}
        <div className="bg-green-dark text-white p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center">
          <h2 className="font-heading text-2xl font-semibold mb-2">Primary Text</h2>
          <p className="opacity-90">bg-green-dark</p>
        </div>

        {/* Accents / Secondary */}
        <div className="bg-green-light text-green-dark p-6 rounded-2xl shadow-sm flex flex-col items-center justify-center">
          <h2 className="font-heading text-2xl font-semibold mb-2">Secondary</h2>
          <p className="opacity-80">bg-green-light</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 mt-8">
        <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-2">Slate Scale Test</p>
        <div className="flex gap-2 sm:gap-4 flex-wrap justify-center">
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-slate-800 shadow-sm">100</div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-300 border border-slate-400 flex items-center justify-center text-xs text-slate-800 shadow-sm">300</div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-500 border border-slate-600 flex items-center justify-center text-xs text-white shadow-sm">500</div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-700 border border-slate-800 flex items-center justify-center text-xs text-white shadow-sm">700</div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-900 border border-slate-950 flex items-center justify-center text-xs text-white shadow-sm">900</div>
        </div>
      </div>
    </main>
  );
}
