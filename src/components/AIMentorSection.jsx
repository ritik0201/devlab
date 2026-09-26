import React, { useState } from 'react';
import { Bot, Sparkles, Code2, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';

export default function AIMentorSection({ onOpenPractice }) {
  const [selectedStage, setSelectedStage] = useState(1);

  const stages = [
    {
      num: 'Stage 1',
      title: 'Raw Sandbox',
      desc: 'Pure baseline diagnostic execution under standard constraints without hints.',
      tag: 'Diagnostic baseline',
      dialogue: 'Code fails with concurrent mutation error in thread pool.',
      aiResponse: 'No hints active. Rely on stack trace and debugging tools.'
    },
    {
      num: 'Stage 2',
      title: 'Socratic Nudge',
      desc: 'A conceptual question that points out memory or locking bounds.',
      tag: 'Conceptual guidance',
      dialogue: 'Candidate asks: "Why is ConcurrentHashMap hanging on line 42?"',
      aiResponse: 'Socratic Hint: "What happens if a computeIfAbsent mapping function updates the same hash key recursively?"'
    },
    {
      num: 'Stage 3',
      title: 'Architecture Guide',
      desc: 'Guided problem breakdown separating data structures from system bounds.',
      tag: 'Decomposition mode',
      dialogue: 'Candidate asks: "Should I use Redis or In-Memory Cache?"',
      aiResponse: 'Socratic Guide: "Consider two vectors: 1) What is your p99 target? 2) Do you need atomic increments across 3 nodes?"'
    },
    {
      num: 'Stage 4',
      title: 'Pair Programming',
      desc: 'Dual-cursor assistance with real-time reasoning & linting check.',
      tag: 'Dual-cursor sync',
      dialogue: 'Candidate writes worker loop without cancel context.',
      aiResponse: 'Pair Lint: "Warning: Missing select case <-ctx.Done(). This worker will leak on server shutdown."'
    },
    {
      num: 'Stage 5',
      title: 'PR Review Defense',
      desc: 'Defend your architectural implementation against AI senior reviewers.',
      tag: 'PR defense sim',
      dialogue: 'Candidate submits PR for new API endpoint.',
      aiResponse: 'Senior PR Reviewer: "Why did you choose eager fetching over lazy pagination for tenant team members?"'
    }
  ];

  return (
    <section className="w-full py-20 sm:py-24 bg-[#08090d] border-b border-white/[0.08] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-medium mb-3">
            SOCRATIC INTELLIGENCE
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            AI that teaches you how to think — not just copy code.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            The goal isn't to prevent developers from using AI. It's to build engineers who can reason, debug, and defend their code.
          </p>
        </div>

        {/* Interactive 5-Stage Visualizer */}
        <div className="rounded-2xl bg-[#0f111a] border border-white/[0.08] p-6 sm:p-8 glass-card shadow-2xl mb-8">
          
          {/* Stage selector grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 mb-8">
            {stages.map((st, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedStage(idx)}
                className={`p-4 rounded-xl transition-all cursor-pointer flex flex-col justify-between ${
                  selectedStage === idx
                    ? 'bg-indigo-600/15 border-2 border-indigo-500 shadow-lg scale-[1.02]'
                    : 'bg-[#08090d] border border-white/[0.06] hover:bg-white/[0.03]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] text-indigo-300 uppercase font-semibold">
                      {st.num}
                    </span>
                    {selectedStage === idx && (
                      <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
                    )}
                  </div>
                  <h4 className="font-bold text-sm text-white mb-1">{st.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
                <div className="mt-3 pt-2 border-t border-white/[0.06] font-mono text-[10px] text-slate-400 truncate">
                  {st.tag}
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Live Dialogue Box */}
          <div className="p-5 rounded-xl bg-[#08090d] border border-white/[0.08] space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 text-slate-400">
              <span className="flex items-center gap-2 text-indigo-400 font-semibold">
                <Bot className="w-4 h-4 text-indigo-400" />
                Active Socratic Engine Mode: {stages[selectedStage].title}
              </span>
              <span className="text-[11px] text-emerald-400">Socratic Protocol Active</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-slate-300">
                <span className="text-slate-500 font-semibold uppercase text-[10px] block mb-1">Developer Context</span>
                {stages[selectedStage].dialogue}
              </div>

              <div className="p-3.5 rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-200">
                <span className="text-indigo-400 font-semibold uppercase text-[10px] block mb-1">Socratic Guidance</span>
                {stages[selectedStage].aiResponse}
              </div>
            </div>
          </div>

          {/* Bottom Protocol Banner */}
          <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Terminal className="w-5 h-5 text-indigo-400 shrink-0" />
              <div className="text-xs">
                <span className="text-white font-semibold">DevLab Socratic Invariant:</span>{' '}
                <span className="text-slate-400">"No code generation until engineer explains complexity trade-off."</span>
              </div>
            </div>

            <button
              onClick={onOpenPractice}
              className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-mono text-xs rounded-lg transition-all font-medium whitespace-nowrap text-center"
            >
              Test Socratic Mode →
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
