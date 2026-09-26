import React from 'react';
import { Calendar, CheckCircle2, AlertCircle, XCircle, ArrowRight } from 'lucide-react';

export default function RoadmapSection({ onOpenAssessment }) {
  const roleGaps = [
    { name: 'Java Core & Concurrency', status: 'verified', label: '✓ Verified' },
    { name: 'Relational SQL & Indexing', status: 'verified', label: '✓ Verified' },
    { name: 'REST API Standards', status: 'verified', label: '✓ Verified' },
    { name: 'Spring Boot Microservices', status: 'developing', label: '△ Developing' },
    { name: 'React & State Management', status: 'developing', label: '△ Developing' },
    { name: 'Distributed System Sharding', status: 'gap', label: '✕ Critical Gap' },
    { name: 'Docker & Cloud Sandboxes', status: 'gap', label: '✕ Critical Gap' }
  ];

  const sprintDays = [
    { day: 'D1', title: 'Spring Boot Dependency Injection & Lifecycle Invariants', color: 'text-indigo-400' },
    { day: 'D2', title: 'REST API Global Exception Handling & ControllerAdvice', color: 'text-indigo-400' },
    { day: 'D3', title: 'SQL Query Optimization & Composite Index Triage', color: 'text-indigo-400' },
    { day: 'D4', title: 'Live Incident Room: Hikari Connection Pool Leaks', color: 'text-indigo-400' },
    { day: 'D5', title: 'React Query & Client-Side Cache Synchronization', color: 'text-cyan-400' },
    { day: 'D6', title: 'Docker Containerization & Network Bridge Sandboxes', color: 'text-cyan-400' },
    { day: 'D7', title: 'Full Stack AI Mock Technical System Design Interview', color: 'text-emerald-400' }
  ];

  return (
    <section className="w-full py-20 sm:py-24 bg-[#090a0f] border-b border-white/[0.08] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-medium mb-3">
            PRECISION CURRICULUM
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            Don't learn everything. Learn what you're missing.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            DevLab generates an adaptive sprint tailored specifically to your target engineering role and verified baseline weaknesses.
          </p>
        </div>

        {/* Side by Side Grid - Equal Height */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-10">
          
          {/* Left: Role Gap Breakdown */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0f111a] border border-white/[0.08] p-6 glass-card shadow-2xl h-full flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
                <span className="font-mono text-xs text-slate-400 uppercase font-semibold">TARGET ROLE</span>
                <span className="text-base text-white font-bold">Full Stack Java & Cloud Engineer</span>
              </div>

              <div className="space-y-2.5 mt-4">
                {roleGaps.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-[#08090d] border border-white/[0.06] font-mono text-xs">
                    <span className="text-slate-200 font-medium truncate">{item.name}</span>
                    <span className={`font-semibold shrink-0 ${
                      item.status === 'verified' ? 'text-emerald-400' : item.status === 'developing' ? 'text-amber-400' : 'text-rose-400'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Calculated 7-Day Sprint */}
          <div className="lg:col-span-6 rounded-2xl bg-[#0f111a] border border-white/[0.08] p-6 glass-card shadow-2xl h-full flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
                <span className="font-mono text-xs text-cyan-400 uppercase font-semibold">CALCULATED SPRINT</span>
                <span className="text-base text-white font-bold">Adaptive 7-Day Sprint</span>
              </div>

              <div className="space-y-2.5 mt-4">
                {sprintDays.map((d, i) => (
                  <div key={i} className={`p-3 rounded-xl border flex items-center gap-3 ${
                    d.day === 'D7' ? 'bg-emerald-500/10 border-emerald-500/30' : 'bg-[#08090d] border-white/[0.06]'
                  }`}>
                    <span className={`font-mono text-xs font-bold shrink-0 ${d.color}`}>{d.day}</span>
                    <span className={`text-xs ${d.day === 'D7' ? 'text-emerald-300 font-semibold' : 'text-slate-200'}`}>
                      {d.title}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            onClick={onOpenAssessment}
            className="px-8 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            <span>Build My Personalized Roadmap</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
