import React from 'react';
import { Terminal, ShieldCheck } from 'lucide-react';

export default function Footer({ onOpenAssessment, onOpenPractice, onOpenInterview }) {
  return (
    <footer className="w-full bg-[#08090d] border-t border-white/[0.08] py-12 sm:py-16">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-xl text-white tracking-tight">DevLab</span>
              <span className="font-mono text-xs text-slate-400 uppercase tracking-wider">by Mikado Solutions</span>
            </div>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed">
              The developer practice gym for real production skills. Master multi-file debugging, incident triage, system design, and AI interviews.
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Engine Operational (99.99%)
              </span>
            </div>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">Platform</span>
            <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-left text-xs text-slate-300 hover:text-white transition-colors">Product Overview</button>
            <button onClick={onOpenPractice} className="text-left text-xs text-slate-300 hover:text-white transition-colors">Practice Labs</button>
            <button onClick={onOpenInterview} className="text-left text-xs text-slate-300 hover:text-white transition-colors">AI Interviews</button>
            <button onClick={onOpenAssessment} className="text-left text-xs text-slate-300 hover:text-white transition-colors">Skill Diagnostic</button>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">Resources</span>
            <a href="https://mikadosolutions.com" target="_blank" rel="noopener noreferrer" className="text-xs text-slate-300 hover:text-white transition-colors">Mikado Solutions</a>
            <a href="#pricing-section" className="text-xs text-slate-300 hover:text-white transition-colors">Pricing & Plans</a>
            <a href="#growth-loop" className="text-xs text-slate-300 hover:text-white transition-colors">Growth Loop Methodology</a>
          </div>

          {/* Links 3 */}
          <div className="flex flex-col gap-2.5">
            <span className="font-mono text-xs text-slate-400 uppercase tracking-wider font-semibold">Legal & Trust</span>
            <span className="text-xs text-slate-300 cursor-pointer hover:text-white transition-colors">Privacy Policy</span>
            <span className="text-xs text-slate-300 cursor-pointer hover:text-white transition-colors">Terms of Service</span>
            <span className="text-xs text-slate-300 cursor-pointer hover:text-white transition-colors">Security Disclosures</span>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-center sm:text-left">
          <p className="font-mono text-xs">© 2026 DevLab by Mikado Solutions. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-xs text-slate-400">
            <span>sys.status: operational</span>
            <span>latency: 18ms</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
