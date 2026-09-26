import React, { useState } from 'react';
import { X, Mic, Send, Bot, User, Award, Sparkles, Volume2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { MOCK_INTERVIEW_DIALOGUE } from '../../data/mockData';

export default function InterviewModal({ isOpen, onClose }) {
  const [messages, setMessages] = useState(MOCK_INTERVIEW_DIALOGUE);
  const [inputText, setInputText] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);

  if (!isOpen) return null;

  const handleSend = (e) => {
    e?.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = {
      role: 'candidate',
      speaker: 'Candidate (You)',
      text: inputText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');

    setTimeout(() => {
      const aiFollowup = {
        role: 'interviewer',
        speaker: 'AI Interviewer (Adaptive Follow-up)',
        text: `Great point regarding "${inputText.slice(0, 30)}...". How would you configure your connection pool retry backoff strategy under high network jitter?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiFollowup]);
    }, 1000);
  };

  const toggleMic = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      setTimeout(() => {
        setInputText("I would configure an Exponential Backoff with Full Jitter algorithm to prevent thundering herd spikes during database failover.");
      }, 1200);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#08090d]/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-4xl bg-[#0f111a] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[88vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#121524] border-b border-white/[0.08] flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20 shrink-0">
              <Mic className="w-4 h-4" />
            </div>
            <div>
              <div className="font-semibold text-sm text-white">AI Technical Interview Simulator</div>
              <div className="font-mono text-xs text-slate-400">System Design & High Availability Invariants</div>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Feed */}
        <div className="flex-1 p-6 overflow-y-auto space-y-4 bg-[#08090d] touch-scroll">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-2xl border flex items-start gap-3 transition-all ${
                msg.role === 'interviewer'
                  ? 'bg-[#0f111a] border-white/[0.08] text-white'
                  : 'bg-indigo-950/30 border-indigo-500/30 text-white ml-6 sm:ml-12'
              }`}
            >
              {msg.role === 'interviewer' ? (
                <Bot className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              ) : (
                <User className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              )}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className={`font-mono text-[10px] uppercase font-bold ${
                    msg.role === 'interviewer' ? 'text-indigo-400' : 'text-cyan-400'
                  }`}>
                    {msg.speaker}
                  </span>
                  <span className="font-mono text-[10px] text-slate-500">{msg.timestamp}</span>
                </div>
                <p className="text-sm leading-relaxed">{msg.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Input */}
        <div className="p-4 bg-[#121524] border-t border-white/[0.08]">
          <form onSubmit={handleSend} className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleMic}
              className={`p-3 rounded-xl border transition-all shrink-0 ${
                isSpeaking
                  ? 'bg-rose-500/20 border-rose-500 text-rose-300 animate-pulse'
                  : 'bg-[#08090d] border-white/[0.08] text-emerald-400 hover:bg-white/[0.04]'
              }`}
              title="Toggle Microphone"
            >
              <Mic className="w-5 h-5" />
            </button>
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type your answer or click mic..."
              className="flex-1 px-4 py-3 bg-[#08090d] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              disabled={!inputText.trim()}
              className="p-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
