import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function FinalCTASection({ onOpenAssessment }) {
  return (
    <section id="assessment" className="w-full py-20 sm:py-24 bg-[#090a0f] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-indigo-950/60 via-[#0f111a] to-[#08090d] border border-indigo-500/30 p-8 sm:p-14 md:p-16 text-center relative overflow-hidden shadow-2xl glass-card">
          
          {/* Ambient Lighting Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <span className="w-3 h-3 rounded-full bg-indigo-500 mb-6 animate-pulse"></span>
            
            <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 leading-tight tracking-tight">
              Stop collecting courses. <br className="hidden sm:inline" />Start building skills.
            </h2>
            
            <p className="text-base sm:text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
              Take your first 15-minute developer skill assessment and discover what you should practice next.
            </p>

            <button
              onClick={onOpenAssessment}
              className="py-4 px-8 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(99,102,241,0.4)] active:scale-95 group"
            >
              <span>Start Your Free Assessment</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <p className="font-mono text-xs text-slate-400 mt-6">
              Free starter tier • No credit card required • Instant telemetry score
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
