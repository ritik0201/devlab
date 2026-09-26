import React, { useState } from 'react';
import { Terminal, Menu, X, Sparkles } from 'lucide-react';
import HamburgerMenuOverlay from './lightswind/hamburger-menu-overlay';

export default function Navbar({ onOpenAssessment, onOpenPractice, onOpenInterview }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('product');

  const navLinks = [
    {
      id: 'product',
      label: 'Platform',
      action: () => { setActiveTab('product'); window.scrollTo({ top: 0, behavior: 'smooth' }); }
    },
    {
      id: 'growth-loop',
      label: 'Methodology',
      action: () => { setActiveTab('growth-loop'); document.getElementById('growth-loop')?.scrollIntoView({ behavior: 'smooth' }); }
    },
    {
      id: 'practice',
      label: 'Practice Labs',
      action: onOpenPractice
    },
    {
      id: 'ai-interviews',
      label: 'AI Interviews',
      action: onOpenInterview
    },
    {
      id: 'pricing',
      label: 'Pricing',
      action: () => { setActiveTab('pricing'); document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' }); }
    }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 w-full z-50 bg-[#08090d]/80 backdrop-blur-xl border-b border-white/[0.08] transition-all">
        <div className="h-16 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between gap-4">

          {/* Text Brand */}
          <div className="flex items-center gap-3 shrink-0">
            <a className="flex items-center gap-2 group" href="#">
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-xl text-white tracking-tight leading-none group-hover:text-indigo-300 transition-colors">
                    DevLab
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-medium">
                    v2.4
                  </span>
                </div>
                <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest leading-none mt-1">
                  by Mikado Solutions
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 px-3 py-1 bg-white/[0.03] rounded-full border border-white/[0.08]">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={link.action}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all ${activeTab === link.id
                    ? 'text-white bg-white/[0.08] font-semibold shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.04]'
                  }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Actions & Telemetry Indicator */}
          <div className="flex items-center gap-2.5 sm:gap-4">

            <button
              onClick={onOpenAssessment}
              className="hidden sm:inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-medium text-xs rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.35)] transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <Sparkles className="w-3.5 h-3.5 text-indigo-200 shrink-0" />
              <span>Start Assessment</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg bg-white/[0.04] border border-white/[0.08] active:scale-95"
              aria-label="Toggle navigation menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Lightswind Fullscreen Hamburger Menu Overlay */}
      <HamburgerMenuOverlay
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        activeTab={activeTab}
        onOpenAssessment={onOpenAssessment}
      />
    </>
  );
}
