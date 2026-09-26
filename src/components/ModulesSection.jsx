import React from 'react';
import { Code, Bug, GitPullRequest, Bot, Mic, Route, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ModulesSection({ onOpenPractice, onOpenInterview }) {
  const modules = [
    {
      title: 'Sandboxed Coding Labs',
      badge: 'Execution VM',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      desc: 'Solve non-trivial algorithmic and data-structure problems in sandboxed Docker containers with strict test vectors.',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-emerald-400 font-medium flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5" /> 142/142 test vectors passed
          </div>
          <div className="text-slate-400 text-[11px]">
            Execution: 12ms (p95) • Memory Overhead: 18.4MB
          </div>
        </div>
      ),
      icon: Code,
      iconColor: 'text-indigo-400',
      action: onOpenPractice
    },
    {
      title: 'Production Debugging Drills',
      badge: 'Incident Room',
      badgeColor: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      desc: 'Triage live outages, memory leaks, database connection pool exhaustion, and deadlock scenarios with simulated logs.',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-rose-400 font-medium">
            FATAL: HikariPool-1 connection pool exhausted
          </div>
          <div className="text-slate-400 text-[11px]">
            Max connections: 10/10 [unreleased conn in auth.go:84]
          </div>
        </div>
      ),
      icon: Bug,
      iconColor: 'text-rose-400',
      action: onOpenPractice
    },
    {
      title: 'Full-Stack Feature Engineering',
      badge: 'Multi-File Repos',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      desc: 'Implement new endpoints, optimize slow SQL queries, manage schema migrations, and review real pull requests.',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-slate-400">$ git checkout -b feature/jwt-refresh-rotation</div>
          <div className="text-cyan-400 font-medium">
            PR #108: Review 4 modified files (240 additions)
          </div>
        </div>
      ),
      icon: GitPullRequest,
      iconColor: 'text-cyan-400',
      action: onOpenPractice
    },
    {
      title: 'Socratic AI Mentor',
      badge: 'No Spoiler Guidance',
      badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20',
      desc: 'Get architectural nudges and socratic questions that force you to decompose problems without spoiling full answers.',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <span className="text-indigo-300 font-semibold">AI Mentor:</span>{' '}
          <span className="text-slate-300 font-sans italic">
            "Before adding another cache layer, what happens to thread contention on key mutation?"
          </span>
        </div>
      ),
      icon: Bot,
      iconColor: 'text-indigo-400',
      action: onOpenPractice
    },
    {
      title: 'Adaptive AI Interviews',
      badge: 'Voice & Code Sim',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      desc: 'Practice multi-turn system design and backend coding interviews with an AI principal architect that tests trade-offs.',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-emerald-400 font-medium">Real-time Rubric Evaluator</div>
          <div className="text-slate-400 text-[11px]">
            5 Engineering Pillars Scored • Instant Audio Feedback
          </div>
        </div>
      ),
      icon: Mic,
      iconColor: 'text-emerald-400',
      action: onOpenInterview
    },
    {
      title: 'Adaptive Role Roadmaps',
      badge: 'Precision Sprint',
      badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
      desc: 'Get an automated 7-day adaptive practice schedule tailored to your target engineering role and baseline gaps.',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-slate-300">Target Role: Senior Backend Engineer</div>
          <div className="text-amber-400 font-medium">
            Priority: Kafka Partition Locks & Consumer Rebalance
          </div>
        </div>
      ),
      icon: Route,
      iconColor: 'text-amber-400',
      action: onOpenPractice
    }
  ];

  return (
    <section id="modules" className="w-full py-20 sm:py-24 bg-[#090a0f] border-b border-white/[0.08] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-medium mb-3">
            COMPREHENSIVE PLATFORM CAPABILITIES
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            Everything you need to master real engineering.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Purpose-built environments simulating modern production infrastructure and interview rooms.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((mod, index) => {
            const Icon = mod.icon;
            return (
              <div
                key={index}
                onClick={mod.action}
                className="p-6 rounded-2xl bg-[#0f111a] border border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#131624] transition-all cursor-pointer glass-card glass-card-hover flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                      <Icon className={`w-5 h-5 ${mod.iconColor}`} />
                    </div>
                    <span className={`font-mono text-[10px] px-2.5 py-1 rounded-full border ${mod.badgeColor}`}>
                      {mod.badge}
                    </span>
                  </div>

                  <h3 className="font-bold text-lg text-white mb-2 group-hover:text-indigo-300 transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-5">
                    {mod.desc}
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06] overflow-x-auto">
                  {mod.snippet}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
