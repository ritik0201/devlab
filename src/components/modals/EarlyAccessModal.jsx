import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EarlyAccessModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('Full Stack Engineer');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    try {
      confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08090d]/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-[#0f111a] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#121524] border-b border-white/[0.08] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0" />
            <span className="font-semibold text-base text-white truncate">DevLab Pro Early Access</span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <p className="text-sm text-slate-300 leading-relaxed">
                Reserve your spot in the DevLab Pro Early Access cohort. Get priority access to Socratic AI Mentors, Production Sandbox Repos, and Unlimited Voice Interviews.
              </p>

              <div>
                <label className="block font-mono text-xs text-slate-400 uppercase mb-1 font-semibold">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="engineer@company.com"
                  className="w-full px-4 py-3 bg-[#08090d] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-slate-400 uppercase mb-1 font-semibold">Target Engineering Role</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-4 py-3 bg-[#08090d] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
                >
                  <option value="Full Stack Engineer">Full Stack Engineer</option>
                  <option value="Backend Microservices">Backend Microservices</option>
                  <option value="Frontend React Architect">Frontend React Architect</option>
                  <option value="System & Cloud Engineer">System & Cloud Engineer</option>
                  <option value="Student / Entry Level">Student / Entry Level</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 mt-2"
              >
                <span>Reserve My Pro Spot</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 mx-auto flex items-center justify-center border border-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">You're on the Early Access List!</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We've reserved your Pro spot for <strong className="text-white">{email}</strong>. Check your inbox shortly for your invite code.
              </p>
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-white/[0.06] text-white font-semibold text-xs rounded-xl hover:bg-white/[0.1] transition-all border border-white/[0.1]"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
