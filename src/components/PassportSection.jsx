import React, { useState } from 'react';
import { ShieldCheck, Share2, Check, Copy, Sparkles, QrCode, Cpu, ArrowRight, Award, CheckCircle2, Code2, Layers, Database, Bug, Bot } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function PassportSection({ skills }) {
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // ignore fallback
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const skillIcons = {
    java: Code2,
    react: Layers,
    sql: Database,
    debugging: Bug,
    system: Cpu,
    ai: Bot
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-[#08090d] border-b border-white/[0.08] px-4 sm:px-6 md:px-8 relative overflow-hidden">
      
      {/* Background Ambient Lighting Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/10 blur-[170px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-medium mb-3">
            PROOF OF WORK CREDENTIAL
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            Don't just claim your skills. Prove them.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Your DevLab profile grows from demonstrated engineering performance, not self-declared resume bullets.
          </p>
        </div>

        {/* Identity & Verification Bar (Free on section canvas, no outer wrapping card) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-10 border-b border-white/[0.08] gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-indigo-400 font-semibold tracking-wider">
                DEVLAB OFFICIAL PASSPORT
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 font-medium">
                ID #DEV-94821
              </span>
            </div>
            <h3 className="text-2xl text-white font-bold mt-1">Senior Full-Stack Software Engineer Credential</h3>
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold border border-emerald-500/30 self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Cryptographically Verified</span>
          </div>
        </div>

        {/* 6 Skill Matrix Cards Grid (Free floating cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skills.map((s) => {
            const IconComp = skillIcons[s.id] || Award;
            return (
              <div
                key={s.id}
                className="p-6 rounded-2xl bg-[#0f111a] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#131624] transition-all flex flex-col justify-between glass-card glass-card-hover group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <IconComp className="w-5 h-5" style={{ color: s.color }} />
                    </div>
                    <span className="font-mono text-xs font-bold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]" style={{ color: s.color }}>
                      {s.score}% Competency
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {s.name}
                  </h3>
                </div>

                <div className="pt-3 mt-4 border-t border-white/[0.06] flex items-center justify-between font-mono text-xs text-slate-400">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
                  </span>
                  <span>{s.status}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Audit Stats & Validation Bar (Free on section canvas) */}
        <div className="p-6 rounded-2xl bg-[#0f111a] border border-white/[0.08] glass-card flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* 4 Stats Items */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 font-mono text-xs text-slate-300 w-full lg:w-auto text-center sm:text-left">
            <div>
              <div className="text-2xl font-bold text-white mb-0.5">47</div>
              <div className="text-slate-400 text-xs">Solved Labs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-0.5">8</div>
              <div className="text-slate-400 text-xs">Production Repos</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-0.5">4</div>
              <div className="text-slate-400 text-xs">AI Mock Interviews</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white mb-0.5">12</div>
              <div className="text-slate-400 text-xs">Passed Audits</div>
            </div>
          </div>

          {/* Validation Hash & Export CTA */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full lg:w-auto">
            <div className="font-mono text-xs text-slate-400 flex items-center gap-2 truncate">
              <Cpu className="w-4 h-4 text-indigo-400 shrink-0" />
              <span className="truncate">SHA-256: 0x8f4e2d...c912a</span>
            </div>

            <button
              onClick={handleShare}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-xs sm:text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 whitespace-nowrap"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-300" /> : <Share2 className="w-4 h-4 text-indigo-200" />}
              <span>{copied ? 'Copied Verified Link!' : 'Export Proof to LinkedIn'}</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
