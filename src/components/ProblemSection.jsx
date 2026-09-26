import React from 'react';
import { Brain, Share2, AlertCircle, Compass, ShieldAlert, AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProblemSection({ onOpenAssessment }) {
  const problems = [
    {
      category: 'Concept vs Memory',
      title: 'Memorized vs. Understood',
      desc: 'Engineers often confuse recognizing syntax with understanding underlying memory models, thread synchronization, and database locking.',
      icon: Brain,
      accent: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10'
    },
    {
      category: 'System Integration',
      title: 'Real Multi-Service Silos',
      desc: 'Tutorials teach isolated 10-line scripts. Production engineering requires triaging messy multi-service codebases with async queues and latency spikes.',
      icon: Share2,
      accent: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10'
    },
    {
      category: 'Interview Friction',
      title: 'The Mid-Round Drop',
      desc: 'Candidates fail senior interviews not because they can\'t code, but because they panic when asked to justify architectural trade-offs.',
      icon: AlertCircle,
      accent: 'border-rose-500/30 text-rose-400 bg-rose-500/10'
    },
    {
      category: 'Curriculum Fatigue',
      title: 'Randomized Grind Tax',
      desc: 'Wasting months solving random dynamic programming puzzles instead of systematically targeting demonstrated skill gaps.',
      icon: Compass,
      accent: 'border-amber-500/30 text-amber-400 bg-amber-500/10'
    },
    {
      category: 'Production Resilience',
      title: 'Brittleness Under Load',
      desc: 'Writing code that works for 1 test case but shatters under concurrent traffic, connection pool exhaustion, or unexpected null vectors.',
      icon: ShieldAlert,
      accent: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10'
    },
    {
      category: 'Incident Response',
      title: 'Outage Triage Paralysis',
      desc: 'Struggling to isolate root causes in real production telemetry without relying on copy-pasting StackOverflow or AI generator answers.',
      icon: AlertTriangle,
      accent: 'border-indigo-500/30 text-indigo-400 bg-indigo-500/10'
    }
  ];

  return (
    <section className="w-full py-20 sm:py-24 bg-[#090a0f] border-b border-white/[0.08] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-medium mb-3">
            THE REASON ENGINEERS HIT A CAREER CEILING
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            Knowing what to practice is half the battle.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Passive video courses and rote memorization leave critical blind spots. DevLab replaces guesswork with precision telemetry.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {problems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#0f111a] border border-white/[0.08] hover:border-indigo-500/30 hover:bg-[#131624] transition-all glass-card glass-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${item.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] text-slate-400 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                      {item.category}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparative Callout Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-indigo-950/50 via-[#0d0e17] to-cyan-950/40 border border-indigo-500/30 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-lg sm:text-xl text-white">The DevLab Solution</h4>
              <p className="text-sm text-slate-300 mt-0.5">
                Turn uncertainty into an automated, data-driven practice curriculum tailored to your exact weaknesses.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAssessment}
            className="px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg active:scale-95 whitespace-nowrap flex items-center justify-center gap-2"
          >
            <span>Diagnose My Gaps</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
