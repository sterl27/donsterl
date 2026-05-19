'use client';

import React, { useState } from 'react';

export default function MusaixPro() {
  const [volume, setVolume] = useState(4);
  const [treble, setTreble] = useState(0);
  const [bass, setBass] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(67);

  // Simple knob component with mouse drag
  const Knob = ({ value, setValue, min, max, label, size = 120 }: any) => {
    const handleMouseMove = (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX) * (180 / Math.PI);
      let newValue = Math.round(((angle + 135) / 270) * (max - min) + min);
      newValue = Math.max(min, Math.min(max, newValue));
      setValue(newValue);
    };

    const rotation = ((value - min) / (max - min)) * 270 - 135;

    return (
      <div className="flex flex-col items-center gap-2">
        <div 
          className="relative cursor-pointer select-none"
          style={{ width: size, height: size }}
          onMouseDown={handleMouseMove}
          onMouseMove={(e) => e.buttons === 1 && handleMouseMove(e)}
        >
          {/* Outer metallic ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#a1a1a1] via-[#e5e5e5] to-[#8a8a8a] shadow-xl border border-[#666]" />
          {/* Inner dark face */}
          <div className="absolute inset-[8px] rounded-full bg-[#1a1a1a] shadow-inner" />
          {/* Indicator dot/line */}
          <div 
            className="absolute top-1/2 left-1/2 w-1.5 h-8 bg-orange-500 rounded-full origin-bottom shadow-lg"
            style={{ 
              transform: `translate(-50%, -100%) rotate(${rotation}deg)`,
              transformOrigin: 'bottom center'
            }}
          />
          {/* Center cap */}
          <div className="absolute inset-[28px] rounded-full bg-gradient-to-br from-[#444] to-[#111] border border-[#222]" />
        </div>
        <div className="text-center">
          <div className="text-[#d4af37] text-sm tracking-[2px] font-medium">{label}</div>
          <div className="text-white text-xs mt-0.5 tabular-nums">{value}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-[#222] bg-[#111]">
        <div className="flex items-center gap-3">
          <div className="text-[#d4af37] text-2xl">☰</div>
          <div className="text-[#d4af37] text-xl tracking-[3px] font-semibold">MUSAIX PRO v1.0.0</div>
        </div>

        <div className="flex items-center gap-3">
          <button className="px-5 py-1.5 text-sm bg-[#1f1f1f] hover:bg-[#2a2a2a] border border-[#444] rounded-full flex items-center gap-2 transition-colors">
            CLASSIC <span className="text-xs">▼</span>
          </button>
        </div>

        <div className="flex items-center gap-4 text-[#aaa]">
          <div className="cursor-pointer hover:text-white">⚙</div>
          <div className="cursor-pointer hover:text-white">☀</div>
          <div className="text-xs text-[#d4af37] tracking-widest">96kHz / 24bit</div>
        </div>
      </div>

      {/* Title */}
      <div className="flex items-center justify-center gap-4 pt-8 pb-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
        <div className="text-[#d4af37] text-2xl tracking-[6px] font-light">VINTAGE AUDIO DASHBOARD</div>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent via-[#d4af37] to-transparent" />
      </div>

      {/* Main Content */}
      <div className="max-w-[1100px] mx-auto px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* LEFT: VOLUME + AUTO GAIN */}
          <div className="lg:col-span-3 flex flex-col items-center pt-4">
            <Knob 
              value={volume} 
              setValue={setVolume} 
              min={0} 
              max={10} 
              label="VOLUME" 
              size={140}
            />
            <button className="mt-6 px-8 py-2 text-sm bg-[#d4af37] text-black font-medium rounded-full hover:bg-[#c5a030] active:scale-[0.985] transition-all">
              AUTO GAIN
            </button>
          </div>

          {/* CENTER: VU METERS + WAVEFORM */}
          <div className="lg:col-span-6">
            <div className="flex justify-center gap-12 mb-6">
              {/* LEFT VU */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-28 bg-[#f4f1e9] rounded border-4 border-[#3a2f1f] shadow-[0_0_20px_rgba(244,241,233,0.6)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                  {/* Needle */}
                  <div 
                    className="absolute bottom-2 left-1/2 w-0.5 h-20 bg-red-600 origin-bottom shadow-md"
                    style={{ transform: `rotate(${-20 + (volume * 3.5)}deg)` }}
                  />
                  <div className="absolute bottom-1 left-1/2 w-3 h-3 bg-red-600 rounded-full -translate-x-1/2" />
                </div>
                <div className="mt-1 text-xs tracking-widest text-[#d4af37]">LEFT</div>
              </div>

              {/* RIGHT VU */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-28 bg-[#f4f1e9] rounded border-4 border-[#3a2f1f] shadow-[0_0_20px_rgba(244,241,233,0.6)] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10" />
                  <div 
                    className="absolute bottom-2 left-1/2 w-0.5 h-20 bg-red-600 origin-bottom shadow-md"
                    style={{ transform: `rotate(${-18 + (volume * 3.8)}deg)` }}
                  />
                  <div className="absolute bottom-1 left-1/2 w-3 h-3 bg-red-600 rounded-full -translate-x-1/2" />
                </div>
                <div className="mt-1 text-xs tracking-widest text-[#d4af37]">RIGHT</div>
              </div>
            </div>

            {/* Waveform Visualizer */}
            <div className="h-20 bg-[#111] border border-[#333] rounded flex items-center justify-center overflow-hidden relative">
              <div className="w-full h-12 flex items-center gap-px px-4">
                {Array.from({ length: 48 }).map((_, i) => (
                  <div 
                    key={i}
                    className="flex-1 bg-gradient-to-t from-orange-400 to-yellow-400 rounded-sm"
                    style={{ 
                      height: `${20 + Math.sin(i / 3) * 35 + Math.random() * 15}%`,
                      opacity: 0.85 + Math.sin(i) * 0.1 
                    }}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40 pointer-events-none" />
            </div>
          </div>

          {/* RIGHT: TREBLE + BASS */}
          <div className="lg:col-span-3 flex flex-col items-center gap-8 pt-2">
            <Knob value={treble} setValue={setTreble} min={-10} max={10} label="TREBLE" size={100} />
            <Knob value={bass} setValue={setBass} min={-10} max={10} label="BASS" size={100} />
          </div>
        </div>

        {/* Transport Bar */}
        <div className="mt-8 flex items-center justify-between bg-[#111] border border-[#222] rounded-2xl px-8 py-4">
          {/* Source */}
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-[#1a1a1a] hover:bg-[#222] border border-[#333] rounded-full transition-colors">
            <span>SOURCE</span> <span className="text-orange-400">◉</span>
          </button>

          {/* Transport Controls */}
          <div className="flex items-center gap-3">
            <button className="px-3 py-1 text-[#888] hover:text-white active:text-[#d4af37]">⏮</button>
            <button className="px-3 py-1 text-[#888] hover:text-white active:text-[#d4af37]">⏭</button>
            
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className="mx-3 w-14 h-14 rounded-full bg-gradient-to-br from-[#d4af37] to-[#b8972e] flex items-center justify-center shadow-xl active:scale-95 transition-all border-2 border-[#f0d78a]"
            >
              {isPlaying ? (
                <div className="flex gap-1.5"><div className="w-1.5 h-5 bg-black rounded" /><div className="w-1.5 h-5 bg-black rounded" /></div>
              ) : (
                <div className="w-0 h-0 border-l-[18px] border-l-black border-y-[12px] border-y-transparent ml-1" />
              )}
            </button>

            <button className="px-3 py-1 text-[#888] hover:text-white active:text-[#d4af37]">⏮</button>
            <button className="px-3 py-1 text-[#888] hover:text-white active:text-[#d4af37]">⏭</button>
          </div>

          {/* Shuffle */}
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-[#1a1a1a] hover:bg-[#222] border border-[#333] rounded-full transition-colors">
            SHUFFLE <span className="text-yellow-400">↔</span>
          </button>
        </div>

        {/* Status Bar */}
        <div className="mt-4 flex items-center justify-between text-sm text-[#999] px-2">
          <div className="flex items-center gap-2">
            <span>▦</span> <span>Track 07 - Midnight Groove</span>
          </div>
          
          <div className="flex items-center gap-3">
            <span>◉</span>
            <span className="tabular-nums">03:42 / 05:18</span>
            <div className="w-40 h-1 bg-[#222] rounded-full overflow-hidden">
              <div 
                className="h-full bg-orange-400 rounded-full transition-all" 
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span>🔊 72%</span>
            <span>♡</span>
            <span>⋯</span>
          </div>
        </div>
      </div>
    </div>
  );
}
