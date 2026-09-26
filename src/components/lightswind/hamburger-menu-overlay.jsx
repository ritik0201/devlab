import React, { useEffect } from 'react';
import { X, ArrowUpRight, Terminal, Sparkles, ShieldCheck, Activity, Cpu } from 'lucide-react';

export default function HamburgerMenuOverlay({
  isOpen,
  onClose,
  navLinks,
  activeTab,
  onOpenAssessment
}) {
  // Prevent background scrolling when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-[#08090d]/95 backdrop-blur-2xl text-white flex flex-col justify-between p-6 sm:p-12 animate-fadeIn overflow-y-auto">
      
      {/* Ambient background lighting */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Top Bar */}
      <div className="flex items-center justify-between gap-4 relative z-10">
        <div>
          <div className="font-bold text-2xl text-white flex items-center gap-2 tracking-tight">
            DevLab
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 font-medium">
              v2.4
            </span>
          </div>
          <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block mt-0.5">
            by Mikado Solutions
          </span>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="p-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-slate-300 hover:text-white transition-all active:scale-95"
          aria-label="Close Navigation Menu"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Navigation Links List */}
      <div className="my-auto py-8 relative z-10 max-w-4xl mx-auto w-full">
        <div className="space-y-3 sm:space-y-4">
          {navLinks.map((link, index) => (
            <div
              key={link.id}
              onClick={() => {
                link.action();
                onClose();
              }}
              className="group cursor-pointer p-4 sm:p-5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.06] border border-transparent hover:border-white/[0.1] transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-4 sm:gap-6">
                <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider">
                  0{index + 1}
                </span>
                <span className={`text-2xl sm:text-4xl font-bold tracking-tight transition-all ${
                  activeTab === link.id
                    ? 'text-white font-extrabold'
                    : 'text-slate-300 group-hover:text-white group-hover:translate-x-1'
                }`}>
                  {link.label}
                </span>
              </div>

              <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center opacity-70 group-hover:opacity-100 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-500 transition-all">
                <ArrowUpRight className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer Actions */}
      <div className="pt-6 border-t border-white/[0.08] relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>All Systems Operational (18ms)</span>
          </div>
          <span className="font-mono text-xs text-slate-400 hidden xs:inline">
            Mikado Telemetry Active
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              onOpenAssessment();
              onClose();
            }}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <Sparkles className="w-4 h-4 text-indigo-200 shrink-0" />
            <span>Start Assessment</span>
          </button>
        </div>

      </div>

    </div>
  );
}
