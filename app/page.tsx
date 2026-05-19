'use client';

export default function GTALandingHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white selection:bg-[#ff2d55] selection:text-white">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(#111_0.8px,transparent_1px)] bg-[length:4px_4px]" />
      
      {/* Dark cinematic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black" />

      {/* Top Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-6 py-5 text-sm tracking-[3px] md:px-8">
        <div className="font-black text-2xl tracking-[-1px]">MODELCITIZEN</div>

        <div className="hidden md:flex items-center gap-9 text-[#aaa]">
          <a href="#story" className="hover:text-white transition-colors">STORY</a>
          <a href="#characters" className="hover:text-white transition-colors">CHARACTERS</a>
          <a href="#world" className="hover:text-white transition-colors">WORLD</a>
          <a href="#media" className="hover:text-white transition-colors">MEDIA</a>
        </div>

        <button 
          className="border border-white/50 px-6 py-2 text-xs tracking-[2px] hover:bg-white hover:text-black transition-all active:scale-[0.985]"
          aria-label="Play Model Citizen for free"
        >
          PLAY FREE
        </button>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex min-h-[calc(100vh-80px)] flex-col items-center justify-center px-6 text-center">
        <div className="mb-3 text-[10px] tracking-[5px] text-[#ff2d55] font-medium">
          GRAND THEFT AUTO INSPIRED
        </div>

        <h1 className="text-[78px] leading-[68px] font-black tracking-[-5.5px] md:text-[118px] md:leading-[98px]">
          MODEL<br />CITIZEN
        </h1>

        <p className="mt-6 max-w-[420px] text-lg text-[#ccc] tracking-wide md:text-xl">
          In a city where everyone has a price,<br />some still choose to break the rules.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-md px-4 sm:px-0">
          <button className="group flex h-14 flex-1 items-center justify-center gap-3 bg-white px-8 text-lg font-semibold text-black transition-all active:scale-[0.985]">
            ENTER THE CITY
            <span className="text-xl transition-transform group-hover:translate-x-0.5">→</span>
          </button>
          
          <button className="flex h-14 flex-1 items-center justify-center border border-white/60 px-8 text-lg tracking-[1px] hover:bg-white/5 transition-all">
            WATCH TRAILER
          </button>
        </div>
      </div>

      {/* Bottom Meta */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-[10px] tracking-[3.5px] text-white/40">
        COMING 2026 • 18+ • MATURE CONTENT
      </div>

      {/* Retro scanline effect */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.025)_50%)] bg-[length:100%_5px]" />
    </div>
  );
}
