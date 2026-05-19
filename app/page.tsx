'use client';

export default function GTALandingHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#111_0.8px,transparent_1px)] bg-[length:4px_4px]" />
      
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Top Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-8 py-6 text-sm tracking-[3px]">
        <div className="font-bold text-2xl text-white">MODELCITIZEN</div>
        <div className="flex gap-8 text-[#aaa]">
          <a href="#" className="hover:text-white transition-colors">STORY</a>
          <a href="#" className="hover:text-white transition-colors">CHARACTERS</a>
          <a href="#" className="hover:text-white transition-colors">WORLD</a>
          <a href="#" className="hover:text-white transition-colors">MEDIA</a>
        </div>
        <button className="border border-white/60 px-6 py-2 text-xs tracking-[2px] hover:bg-white hover:text-black transition-all">
          PLAY FREE
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 text-[11px] tracking-[6px] text-[#ff2d55] font-medium">
          GRAND THEFT AUTO INSPIRED
        </div>

        <h1 className="text-[92px] leading-[82px] font-black tracking-[-6px] md:text-[120px] md:leading-[100px]">
          MODEL<br />CITIZEN
        </h1>

        <p className="mt-6 max-w-md text-lg text-[#ccc] tracking-wide">
          In a city where everyone has a price,<br />some still choose to break the rules.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <button className="group flex h-14 items-center justify-center gap-3 bg-white px-10 text-lg font-semibold text-black transition-all active:scale-[0.985]">
            ENTER THE CITY
            <span className="text-xl transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          
          <button className="flex h-14 items-center justify-center border border-white/70 px-10 text-lg tracking-[1px] hover:bg-white/5 transition-all">
            WATCH TRAILER
          </button>
        </div>

        {/* Bottom Meta */}
        <div className="absolute bottom-10 text-xs tracking-[4px] text-white/50">
          COMING 2026 • 18+ • MATURE CONTENT
        </div>
      </div>

      {/* Subtle scanline effect */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.03)_50%)] bg-[length:100%_6px]" />
    </div>
  );
}
