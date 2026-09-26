import React from 'react';
import { GraduationCap, Layers, Briefcase, Rocket } from 'lucide-react';

export default function AudienceSection({ onOpenAssessment }) {
  const personas = [
    {
      title: 'Starting Out',
      desc: 'For B.E./B.Tech, CS students, and self-taught coders building rock-solid foundations for their first engineering role.',
      meta: 'Core Syntax & OOP Mastery',
      icon: GraduationCap,
      accent: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20'
    },
    {
      title: 'Becoming Full-Stack',
      desc: 'For single-language developers mastering REST APIs, SQL indexing, microservice wiring, and modern frontends.',
      meta: 'Service Wiring & DB Design',
      icon: Layers,
      accent: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      title: 'Switching Companies',
      desc: 'For 0–3 YOE engineers preparing for competitive technical rounds without blind spots and ghosting.',
      meta: 'Mock Drills & System Defense',
      icon: Briefcase,
      accent: 'text-amber-400 bg-amber-500/10 border-amber-500/20'
    },
    {
      title: 'Leveling Up Senior/Staff',
      desc: 'For senior candidates solidifying distributed architecture, high-throughput partitioning, and incident response.',
      meta: 'High-Scale Distributed Systems',
      icon: Rocket,
      accent: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20'
    }
  ];

  return (
    <section className="w-full py-20 sm:py-24 bg-[#08090d] border-b border-white/[0.08] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-medium mb-3">
            TAILORED FOR CAREER MILESTONES
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            Built for every stage of your engineering journey.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Whether stepping into software engineering or aiming for Staff level, DevLab adapts to your benchmark.
          </p>
        </div>

        {/* 4 Persona Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                onClick={onOpenAssessment}
                className="p-6 rounded-2xl bg-[#0f111a] border border-white/[0.08] hover:border-indigo-500/30 hover:bg-[#131624] transition-all cursor-pointer glass-card glass-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${p.accent} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06] font-mono text-xs text-slate-400">
                  {p.meta}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
