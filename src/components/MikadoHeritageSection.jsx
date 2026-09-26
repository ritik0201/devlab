import React from 'react';
import { ExternalLink, Award, Plus, Equal } from 'lucide-react';

export default function MikadoHeritageSection() {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#090a0f] border-b border-white/[0.08] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        <div className="rounded-3xl bg-[#0f111a] border border-white/[0.08] p-8 sm:p-12 glass-card shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest font-medium mb-2 block">
                ENGINEERING HERITAGE
              </span>
              <h2 className="font-bold text-3xl sm:text-4xl text-white mb-4 tracking-tight">
                Learn deeply. Practice continuously.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                DevLab is engineered by the team behind Mikado Solutions, bringing years of enterprise software training and hands-on engineering mentorship into an automated developer gym platform.
              </p>
              <a
                href="https://mikadosolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-2 font-semibold group"
              >
                <span>Explore Mikado Solutions</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            {/* Formula Box */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#08090d] border border-white/[0.08] font-mono text-xs space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white">
                <span className="text-indigo-400 font-bold block mb-0.5">MIKADO ACADEMY</span>
                <span className="text-slate-400 text-xs">Deep conceptual mental models</span>
              </div>

              <div className="text-center font-bold text-slate-500">+</div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-white">
                <span className="text-cyan-400 font-bold block mb-0.5">DEVLAB GYM</span>
                <span className="text-slate-400 text-xs">Hands-on telemetry & incident drills</span>
              </div>

              <div className="text-center font-bold text-slate-500">=</div>

              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-center text-sm">
                PRODUCTION-READY ENGINEER
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
