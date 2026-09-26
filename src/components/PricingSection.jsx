import React, { useState } from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';

export default function PricingSection({ onOpenAssessment, onOpenEarlyAccess }) {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing-section" className="w-full py-20 sm:py-24 bg-[#08090d] border-b border-white/[0.08] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="font-mono text-xs text-indigo-400 uppercase tracking-widest font-medium mb-3">
            EARLY ACCESS PROGRAM
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            Flexible plans for serious software engineers.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mb-6">
            Join thousands of developers using DevLab to prepare for top-tier engineering roles.
          </p>

          {/* Monthly vs Annual Toggle */}
          <div className="flex items-center gap-3 p-1 rounded-full bg-white/[0.04] border border-white/[0.08]">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                !annual ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                annual ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded-full font-mono">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Tier 1: Free Diagnostic */}
          <div className="p-8 rounded-3xl bg-[#0f111a] border border-white/[0.08] shadow-sm flex flex-col justify-between hover:border-white/[0.15] transition-all glass-card">
            <div>
              <div className="text-xl text-white font-bold mb-1">Developer Starter</div>
              <p className="text-xs text-slate-400 mb-6">Test your engineering baseline immediately.</p>
              
              <div className="text-4xl font-extrabold text-white mb-6">₹0</div>

              <ul className="space-y-3.5 text-xs text-slate-200 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Full Baseline Skill Diagnostic & Gap Telemetry</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>15 Standard Sandboxed Coding Challenges</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Basic Cryptographic Developer Passport</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>1 Adaptive AI Mock Technical Interview</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenAssessment}
              className="w-full py-3.5 rounded-xl bg-white/[0.06] text-white hover:bg-white/[0.1] font-semibold text-sm transition-all border border-white/[0.1]"
            >
              Start Free Assessment
            </button>
          </div>

          {/* Tier 2: DevLab Pro */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0f111a] via-[#121524] to-[#0a0b10] border-2 border-indigo-500 shadow-2xl flex flex-col justify-between relative overflow-hidden glass-card">
            
            <div className="absolute top-0 right-0 bg-indigo-600 text-white px-3.5 py-1 font-mono text-[10px] font-bold uppercase rounded-bl-xl">
              EARLY ACCESS
            </div>

            <div>
              <div className="text-xl text-white font-bold mb-1">DevLab Pro</div>
              <p className="text-xs text-slate-400 mb-6">For engineers aiming for high-growth tech transitions.</p>
              
              <div className="text-4xl font-extrabold text-white mb-6">
                ₹{annual ? '1,999' : '2,499'}{' '}
                <span className="text-sm font-normal text-slate-400">/ month</span>
              </div>

              <ul className="space-y-3.5 text-xs text-slate-200 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Unlimited Sandboxed Coding & Debugging Incident Rooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Socratic AI Mentor with 5 Adjustable Hint Levels</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Full-Stack Multi-File Production Repos & PR Audits</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Unlimited AI Technical Interviews (Voice & Code)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Personalized Dynamic 7-Day & 30-Day Adaptive Roadmaps</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Verified Skill Passport LinkedIn Export & GitHub Sync</span>
                </li>
              </ul>
            </div>

            <button
              onClick={onOpenEarlyAccess}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Get Early Access Pro</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
