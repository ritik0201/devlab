import React from 'react';
import { Bot, User, Mic, ArrowRight, Award, ShieldCheck, Activity } from 'lucide-react';

export default function InterviewSimulatorSection({ onOpenInterview }) {
  return (
    <section id="ai-interviews" className="w-full py-20 sm:py-24 bg-[#08090d] border-b border-white/[0.08] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest font-medium mb-3">
            MOCK INTERVIEW SIMULATOR
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            Your next interview shouldn't be your first.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            DevLab simulates multi-turn system design and backend technical rounds with adaptive follow-ups based on your exact proposed trade-offs.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Live Feed Conversation Stream */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0f111a] border border-white/[0.08] p-6 glass-card shadow-2xl space-y-4">
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 border-b border-white/[0.08] gap-2">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-xs text-white font-semibold">Live AI Interview Session #042</span>
              </div>
              <span className="font-mono text-xs text-slate-400">System Design: Caching Layer</span>
            </div>

            {/* AI Msg 1 */}
            <div className="p-4 rounded-xl bg-[#08090d] border border-white/[0.06] flex items-start gap-3">
              <Bot className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-mono text-[10px] text-indigo-400 uppercase font-bold mb-1">
                  AI Interviewer (Principal Architect)
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  "You mentioned using Redis in your distributed caching layer. Why did you choose Redis over a relational read replica or Memcached?"
                </p>
              </div>
            </div>

            {/* Candidate Msg */}
            <div className="p-4 rounded-xl bg-indigo-950/30 border border-indigo-500/30 ml-4 sm:ml-8 flex items-start gap-3">
              <User className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-mono text-[10px] text-cyan-400 uppercase font-bold mb-1">
                  Candidate (You)
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  "We needed atomic increment operations for rate limiting and pub/sub capabilities alongside sub-millisecond in-memory lookups."
                </p>
              </div>
            </div>

            {/* AI Msg 2 */}
            <div className="p-4 rounded-xl bg-[#08090d] border border-white/[0.06] flex items-start gap-3">
              <Bot className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <div className="font-mono text-[10px] text-indigo-400 uppercase font-bold mb-1">
                  AI Interviewer (Adaptive Follow-up)
                </div>
                <p className="text-sm text-slate-200 leading-relaxed">
                  "Good rationale. What happens if the primary Redis node fails during peak traffic before replication completes?"
                </p>
              </div>
            </div>

            {/* Action Bar */}
            <div className="pt-3 border-t border-white/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <span className="font-mono text-xs text-slate-400 flex items-center gap-2">
                <Mic className="w-4 h-4 text-emerald-400 shrink-0 animate-pulse" />
                Voice stream active • 44.1kHz PCM
              </span>
              <button
                onClick={onOpenInterview}
                className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs transition-all shadow-md active:scale-95 text-center"
              >
                Practice an AI Interview →
              </button>
            </div>
          </div>

          {/* Right: Rubric Breakdown */}
          <div className="lg:col-span-5 rounded-2xl bg-[#0f111a] border border-white/[0.08] p-6 glass-card shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">
                REAL-TIME EVALUATION RUBRIC
              </span>
              <span className="font-mono text-xs text-emerald-400 font-semibold px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                Staff Ready
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-slate-200">Backend Fundamentals</span>
                  <span className="text-emerald-400 font-semibold">94% [Strong]</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '94%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-slate-200">Trade-off & Architecture Defense</span>
                  <span className="text-emerald-400 font-semibold">88% [Strong]</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-400 rounded-full" style={{ width: '88%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-slate-200">System Design & Scalability</span>
                  <span className="text-amber-400 font-semibold">62% [Developing]</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-amber-400 rounded-full" style={{ width: '62%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-slate-200">Incident Debugging</span>
                  <span className="text-rose-400 font-semibold">55% [Critical Gap]</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-rose-400 rounded-full" style={{ width: '55%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-mono text-xs mb-1.5">
                  <span className="text-slate-200">Engineering Communication</span>
                  <span className="text-cyan-400 font-semibold">85% [Good]</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div className="h-full bg-cyan-400 rounded-full" style={{ width: '85%' }} />
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06] font-mono text-xs text-slate-400 leading-relaxed">
              Synthesis: Sharp on data store primitives; tighten failover replication invariants under split-brain scenario.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
