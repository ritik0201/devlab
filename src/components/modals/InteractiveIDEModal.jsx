import React, { useState } from 'react';
import { X, Play, Bot, CheckCircle2, AlertTriangle, Terminal as TermIcon, RotateCcw, Cpu, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DEBUGGING_INCIDENTS } from '../../data/mockData';

export default function InteractiveIDEModal({ isOpen, onClose, onPassTask }) {
  const incident = DEBUGGING_INCIDENTS[0];
  const [code, setCode] = useState(incident.initialCode);
  const [activeTab, setActiveTab] = useState('editor');
  const [mobileView, setMobileView] = useState('code');

  const [testOutput, setTestOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [aiHint, setAiHint] = useState('');
  const [isPatched, setIsPatched] = useState(false);

  if (!isOpen) return null;

  const handleRunTests = () => {
    setIsRunning(true);
    setTestOutput(null);

    setTimeout(() => {
      setIsRunning(false);
      if (code.includes('try (Connection') || code.includes('@Transactional') || isPatched) {
        setTestOutput({
          success: true,
          message: '✓ All 142 Integration Assertions PASSED',
          latency: 'p99 latency restored from 4.8s -> 18ms',
          details: 'Connection pool handle safely closed via try-with-resources. N+1 queries eliminated via batched fetch.'
        });
        setIsPatched(true);
        setMobileView('results');
        try {
          confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
        } catch (e) {}
        onPassTask();
      } else {
        setTestOutput({
          success: false,
          message: '✕ FAILED: HikariPool-1 Connection Timeout',
          latency: 'p99 latency: 4,820ms (EXCEEDED THRESHOLD)',
          details: 'Connection leaked in line 5. Maximum active pool size (50/50) exhausted after 15 requests.'
        });
        setMobileView('results');
      }
    }, 1200);
  };

  const handleAskMentor = () => {
    setActiveTab('ai');
    setMobileView('ai');
    setAiHint('Mentor (Socratic): Notice line 5 where dbPool.getConnection() is called. Is that connection handle wrapped in a try-with-resources statement or closed in a finally block?');
  };

  const handleApplyFix = () => {
    setCode(incident.solutionCode);
    setIsPatched(true);
    setTestOutput({
      success: true,
      message: '✓ All 142 Integration Assertions PASSED',
      latency: 'p99 latency restored from 4.8s -> 18ms',
      details: 'Connection pool handle safely closed via try-with-resources. N+1 queries eliminated via batched fetch.'
    });
    setMobileView('results');
    try {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    } catch (e) {}
    onPassTask();
  };

  const handleReset = () => {
    setCode(incident.initialCode);
    setTestOutput(null);
    setIsPatched(false);
    setAiHint('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-[#08090d]/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-5xl bg-[#0f111a] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[92vh]">
        
        {/* Top Header */}
        <div className="px-4 py-3 bg-[#121524] border-b border-white/[0.08] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5 min-w-0">
            <span className="px-2.5 py-0.5 rounded bg-rose-500/10 text-rose-300 font-mono text-xs font-semibold flex items-center gap-1.5 border border-rose-500/20 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-400 animate-ping"></span>
              {incident.id.toUpperCase()}
            </span>
            <span className="text-sm font-semibold text-white truncate hidden xs:inline">{incident.title}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleAskMentor}
              className="px-3 py-1.5 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600/30 font-mono text-xs flex items-center gap-1.5 transition-colors"
            >
              <Bot className="w-3.5 h-3.5 text-indigo-400" />
              <span className="hidden sm:inline">Ask AI Mentor</span>
              <span className="sm:hidden">AI</span>
            </button>
            <button
              onClick={handleApplyFix}
              className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 hover:bg-emerald-500/20 font-mono text-xs flex items-center gap-1.5 transition-colors font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Auto-Patch Bug</span>
              <span className="sm:hidden">Patch</span>
            </button>
            <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] ml-1">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="flex lg:hidden bg-[#08090d] border-b border-white/[0.08] font-mono text-xs">
          <button
            onClick={() => setMobileView('code')}
            className={`flex-1 py-2 text-center font-medium border-b-2 transition-colors ${
              mobileView === 'code' ? 'border-indigo-500 text-white bg-white/[0.04]' : 'border-transparent text-slate-400'
            }`}
          >
            Code Editor
          </button>
          <button
            onClick={() => setMobileView('results')}
            className={`flex-1 py-2 text-center font-medium border-b-2 transition-colors ${
              mobileView === 'results' ? 'border-indigo-500 text-white bg-white/[0.04]' : 'border-transparent text-slate-400'
            }`}
          >
            Results {testOutput ? (testOutput.success ? '✓' : '✕') : ''}
          </button>
          <button
            onClick={() => setMobileView('ai')}
            className={`flex-1 py-2 text-center font-medium border-b-2 transition-colors ${
              mobileView === 'ai' ? 'border-indigo-500 text-white bg-white/[0.04]' : 'border-transparent text-slate-400'
            }`}
          >
            AI Mentor
          </button>
        </div>

        {/* IDE Layout */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Left Editor Panel */}
          <div className={`lg:col-span-7 border-r border-white/[0.08] flex-col bg-[#08090d] ${
            mobileView === 'code' ? 'flex' : 'hidden lg:flex'
          }`}>
            <div className="px-4 py-2 bg-[#121524] border-b border-white/[0.08] flex items-center justify-between font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-cyan-400 font-medium">AuthServiceImpl.java</span>
                <span>•</span>
                <span>Java 21</span>
              </div>
              <button onClick={handleReset} title="Reset code" className="hover:text-white p-1">
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="flex-1 relative font-mono text-xs p-4 bg-[#08090d] text-slate-200 overflow-auto touch-scroll">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full bg-transparent resize-none focus:outline-none font-mono text-xs leading-relaxed text-slate-200 selection:bg-indigo-500/30 min-h-[220px]"
                spellCheck={false}
              />
            </div>

            <div className="p-3 bg-[#121524] border-t border-white/[0.08] flex items-center justify-between gap-2">
              <span className="font-mono text-xs text-slate-400">Press Run to execute test vectors</span>
              <button
                onClick={handleRunTests}
                disabled={isRunning}
                className="px-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
              >
                <Play className={`w-3.5 h-3.5 ${isRunning ? 'animate-spin' : ''}`} />
                <span>{isRunning ? 'Running Diagnostics...' : 'Run Diagnostics & Tests'}</span>
              </button>
            </div>
          </div>

          {/* Right Output & Logs Panel */}
          <div className={`lg:col-span-5 flex-col bg-[#0f111a] ${
            mobileView !== 'code' ? 'flex' : 'hidden lg:flex'
          }`}>
            <div className="hidden lg:flex items-center bg-[#121524] border-b border-white/[0.08] font-mono text-xs">
              <button
                onClick={() => setActiveTab('editor')}
                className={`px-4 py-2.5 font-medium border-b-2 transition-colors ${
                  activeTab === 'editor' ? 'border-indigo-500 text-white bg-white/[0.04]' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                TEST RESULTS
              </button>
              <button
                onClick={() => setActiveTab('logs')}
                className={`px-4 py-2.5 font-medium border-b-2 transition-colors ${
                  activeTab === 'logs' ? 'border-indigo-500 text-white bg-white/[0.04]' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                APM LOGS
              </button>
              <button
                onClick={() => setActiveTab('ai')}
                className={`px-4 py-2.5 font-medium border-b-2 transition-colors ${
                  activeTab === 'ai' ? 'border-indigo-500 text-white bg-white/[0.04]' : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                AI MENTOR
              </button>
            </div>

            <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-4 touch-scroll">
              {(activeTab === 'editor' || mobileView === 'results') && (
                <div>
                  {testOutput ? (
                    <div className={`p-4 rounded-xl border space-y-2 ${
                      testOutput.success ? 'bg-emerald-500/10 border-emerald-500/30 text-white' : 'bg-rose-500/10 border-rose-500/30 text-white'
                    }`}>
                      <div className={`font-bold flex items-center gap-2 ${testOutput.success ? 'text-emerald-400' : 'text-rose-400'}`}>
                        {testOutput.success ? <CheckCircle2 className="w-4 h-4 shrink-0" /> : <AlertTriangle className="w-4 h-4 shrink-0" />}
                        <span>{testOutput.message}</span>
                      </div>
                      <div className="text-xs text-slate-300">{testOutput.latency}</div>
                      <div className="pt-2 text-[11px] text-slate-400 border-t border-white/[0.06] leading-relaxed">
                        {testOutput.details}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-12 text-slate-400">
                      <TermIcon className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                      <div>Click "Run Diagnostics & Tests" to execute test vectors.</div>
                    </div>
                  )}

                  <div className="mt-6 space-y-2">
                    <div className="text-slate-400 font-semibold">// APM TRACE LOGS</div>
                    {incident.logs.map((log, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-[#08090d] border border-white/[0.06] text-slate-300 leading-relaxed font-mono text-[11px]">
                        {log}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(activeTab === 'ai' || mobileView === 'ai') && (
                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-start gap-3">
                    <Bot className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-indigo-300 mb-1">Socratic Guidance Mode</div>
                      <p className="text-slate-300 text-xs leading-relaxed">
                        {aiHint || "Ask the AI Mentor for a conceptual hint regarding connection pool bounds."}
                      </p>
                    </div>
                  </div>
                  {!aiHint && (
                    <button
                      onClick={handleAskMentor}
                      className="w-full py-2.5 rounded-xl bg-white/[0.06] text-white border border-white/[0.08] hover:bg-white/[0.1] transition-all"
                    >
                      Generate Socratic Hint
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
