import React, { useState, useEffect, useRef } from 'react';
import { Radar, Code2, Terminal, Mic, ShieldCheck, ArrowRight, Sparkles, Activity, Play } from 'lucide-react';

export default function GrowthLoopSection({ onOpenAssessment }) {
  const [activeStep, setActiveStep] = useState(0);
  const stepRefs = useRef([]);

  const steps = [
    {
      num: '01',
      stage: 'Telemetry Baseline',
      title: 'Diagnostic Telemetry Scan',
      desc: 'Run a 15-minute diagnostic scan to isolate syntax flaws, concurrency gaps, and SQL query indexing anti-patterns.',
      detail: 'Maps 5 Core Pillars • Instant Baseline Competency Score',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-indigo-400 font-semibold flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 animate-pulse" /> Diagnostic Scan Completed (15m)
          </div>
          <div className="text-slate-400 text-[11px]">
            Primary Gap: HikariPool Exhaustion & Composite SQL Indexes
          </div>
        </div>
      ),
      icon: Radar
    },
    {
      num: '02',
      stage: 'Targeted Precision',
      title: 'Adaptive Skill Drills',
      desc: 'Practice targeted exercises strictly focused on your identified weak spots without tutorial fluff or repetitive puzzles.',
      detail: 'Zero Tutorial Hell • Socratic Hints Unlocked',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-cyan-400 font-semibold flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5" /> ConcurrentHashMap Deadlock Drill
          </div>
          <div className="text-slate-400 text-[11px]">
            Socratic Hint: "Check key mutation bounds during computeIfAbsent()"
          </div>
        </div>
      ),
      icon: Code2
    },
    {
      num: '03',
      stage: 'Production Sandbox',
      title: 'Multi-File Sandbox Repos',
      desc: 'Build features and triage incidents in sandboxed Docker containers with real dependencies, DB locks, and pull request audits.',
      detail: 'Docker REPL Containers • Git PR Review Simulator',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-emerald-400 font-semibold flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5" /> $ kubectl logs -f auth-service-pod
          </div>
          <div className="text-slate-400 text-[11px]">
            ✓ 142/142 test vectors passed • p99 latency: 18ms
          </div>
        </div>
      ),
      icon: Terminal
    },
    {
      num: '04',
      stage: 'High-Pressure Simulation',
      title: 'Voice & Code AI Interviews',
      desc: 'Practice multi-turn technical rounds with an AI Principal Architect that challenges your architectural trade-offs.',
      detail: 'Audio Voice Stream • Real-Time Rubric Scoring',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-amber-400 font-semibold flex items-center gap-1.5">
            <Mic className="w-3.5 h-3.5 animate-pulse text-amber-400" /> AI Interviewer Follow-up
          </div>
          <div className="text-slate-400 text-[11px]">
            "Why did you choose Redis pub/sub over Kafka partitions for rate limiting?"
          </div>
        </div>
      ),
      icon: Mic
    },
    {
      num: '05',
      stage: 'Cryptographic Proof',
      title: 'Verified Skill Passport',
      desc: 'Earn a cryptographically signed developer credential backed by actual sandboxed code executions and test vector passes.',
      detail: 'Cryptographic SHA-256 Hash • LinkedIn Export Ready',
      snippet: (
        <div className="font-mono text-xs text-slate-300 space-y-1">
          <div className="text-indigo-400 font-semibold flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Passport ID #DEV-94821
          </div>
          <div className="text-slate-400 text-[11px]">
            Hash: 8f4e2d...c912a • Validated via Mikado Engine
          </div>
        </div>
      ),
      icon: ShieldCheck
    }
  ];

  // Scroll Intersection Observer to update active timeline step as user scrolls
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-step-index'));
            if (!isNaN(index)) {
              setActiveStep(index);
            }
          }
        });
      },
      { threshold: 0.5, rootMargin: '-10% 0px -20% 0px' }
    );

    stepRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="growth-loop" className="w-full py-20 sm:py-28 bg-[#08090d] border-b border-white/[0.08] px-4 sm:px-6 md:px-8 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[550px] bg-indigo-600/10 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-[1100px] mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
          <span className="font-mono text-xs text-cyan-400 uppercase tracking-widest font-medium mb-3">
            CONTINUOUS MASTERY TIMELINE
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            The 5-Step Developer Growth Loop
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Replace passive video tutorials with an instrumented timeline feedback loop that continuously diagnoses and fixes technical gaps.
          </p>
        </div>

        {/* VERTICAL TIMELINE SCROLL STRUCTURE */}
        <div className="relative">
          
          {/* Central Vertical Line Track */}
          <div className="absolute left-6 lg:left-1/2 top-6 bottom-6 w-0.5 -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-cyan-500 via-emerald-500 to-amber-500 opacity-30 pointer-events-none" />
          
          {/* Timeline Steps List */}
          <div className="space-y-12 sm:space-y-16">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isEven = idx % 2 === 0;
              const isActive = activeStep === idx;

              return (
                <div
                  key={idx}
                  ref={(el) => (stepRefs.current[idx] = el)}
                  data-step-index={idx}
                  className={`relative flex flex-col lg:flex-row items-start lg:items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Glowing Node Marker */}
                  <div
                    onClick={() => setActiveStep(idx)}
                    className="absolute left-6 lg:left-1/2 -translate-x-1/2 top-0 lg:top-1/2 lg:-translate-y-1/2 z-20 flex items-center justify-center cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-2xl border-2 transition-all duration-300 flex items-center justify-center ${
                        isActive
                          ? 'bg-indigo-600 border-indigo-400 shadow-[0_0_30px_rgba(99,102,241,0.7)] scale-110 ring-4 ring-cyan-500/30'
                          : 'bg-[#0b0c12] border-white/[0.12] shadow-md hover:border-indigo-500/50 hover:scale-105'
                      }`}
                    >
                      <Icon className={`w-5 h-5 transition-colors ${isActive ? 'text-white' : 'text-indigo-400'}`} />
                    </div>
                  </div>

                  {/* Content Card with Scroll Activation */}
                  <div className="w-full lg:w-[calc(50%-3rem)] pl-16 lg:pl-0">
                    <div
                      onClick={() => {
                        setActiveStep(idx);
                        onOpenAssessment();
                      }}
                      className={`p-6 sm:p-7 rounded-3xl border transition-all duration-500 cursor-pointer glass-card group flex flex-col justify-between ${
                        isActive
                          ? 'bg-[#131628] border-indigo-500/60 shadow-[0_15px_40px_rgba(99,102,241,0.2)] scale-[1.02] -translate-y-1'
                          : 'bg-[#0f111a] border-white/[0.08] hover:border-indigo-500/40 hover:bg-[#131624]'
                      }`}
                    >
                      <div>
                        {/* Header Badges */}
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-full border transition-colors ${
                            isActive
                              ? 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40 font-extrabold'
                              : 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20 font-semibold'
                          }`}>
                            STEP {step.num}
                          </span>
                          <span className="font-mono text-xs text-slate-400 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.06]">
                            {step.stage}
                          </span>
                        </div>

                        {/* Step Title & Description */}
                        <h3 className={`font-bold text-xl mb-2 transition-colors ${
                          isActive ? 'text-white' : 'text-white group-hover:text-indigo-300'
                        }`}>
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed mb-5">
                          {step.desc}
                        </p>

                        {/* Interactive Snippet Box */}
                        <div className={`p-4 rounded-2xl border transition-colors ${
                          isActive ? 'bg-[#0b0c14] border-indigo-500/30' : 'bg-[#08090d] border-white/[0.06]'
                        }`}>
                          {step.snippet}
                        </div>
                      </div>

                      {/* Card Footer Detail */}
                      <div className="pt-3.5 border-t border-white/[0.06] font-mono text-xs text-slate-400 flex items-center justify-between">
                        <span>{step.detail}</span>
                        <ArrowRight className={`w-4 h-4 transition-all ${
                          isActive
                            ? 'text-indigo-300 translate-x-1'
                            : 'text-slate-500 group-hover:translate-x-1 group-hover:text-indigo-400'
                        }`} />
                      </div>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-16 sm:mt-20 text-center">
          <button
            onClick={onOpenAssessment}
            className="px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-indigo-600 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm transition-all shadow-[0_0_25px_rgba(99,102,241,0.4)] active:scale-95 inline-flex items-center gap-2 group"
          >
            <Sparkles className="w-4 h-4 text-indigo-200" />
            <span>Enter the 5-Step Continuous Gym</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
