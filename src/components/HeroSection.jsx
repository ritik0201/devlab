import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Code2, 
  Activity, 
  ShieldCheck, 
  Play, 
  Check, 
  RefreshCw,
  Mic,
  Cpu
} from 'lucide-react';

export default function HeroSection({ onOpenAssessment, onOpenPractice, onOpenInterview }) {
  const [activeTab, setActiveTab] = useState('java');
  const [isRunning, setIsRunning] = useState(false);
  const [testPassed, setTestPassed] = useState(false);

  const codeSnippets = {
    java: {
      filename: 'ConcurrentCache.java',
      lang: 'Java 21',
      badge: 'JVM Lock Fix',
      code: [
        { num: 1, text: 'public class ConcurrentCache<K, V> {', type: 'normal' },
        { num: 2, text: '    private final ConcurrentHashMap<K, V> map = new ConcurrentHashMap<>();', type: 'normal' },
        { num: 3, text: '    ', type: 'normal' },
        { num: 4, text: '    public V computeIfAbsent(K key, Function<K, V> fn) {', type: 'normal' },
        { num: 5, text: '        // FIX: Avoid recursive update deadlock on atomic compute', type: 'comment' },
        { num: 6, text: '        return map.computeIfAbsent(key, fn);', type: 'active' },
        { num: 7, text: '    }', type: 'normal' },
        { num: 8, text: '}', type: 'normal' }
      ]
    },
    go: {
      filename: 'pool_worker.go',
      lang: 'Go 1.22',
      badge: 'Leak Fix',
      code: [
        { num: 1, text: 'func WorkerPool(ctx context.Context, jobs <-chan Job) {', type: 'normal' },
        { num: 2, text: '    for {', type: 'normal' },
        { num: 3, text: '        select {', type: 'normal' },
        { num: 4, text: '        case <-ctx.Done(): return // Prevents goroutine leak', type: 'active' },
        { num: 5, text: '        case job := <-jobs: process(job)', type: 'normal' },
        { num: 6, text: '        }', type: 'normal' },
        { num: 7, text: '    }', type: 'normal' },
        { num: 8, text: '}', type: 'normal' }
      ]
    },
    sql: {
      filename: 'indexing_query.sql',
      lang: 'PostgreSQL 16',
      badge: 'Index Scan',
      code: [
        { num: 1, text: '-- FIX: Convert Sequential Scan to Concurrent Index Scan', type: 'comment' },
        { num: 2, text: 'CREATE INDEX CONCURRENTLY idx_user_sessions_tenant ', type: 'active' },
        { num: 3, text: 'ON user_sessions (tenant_id, created_at DESC);', type: 'normal' },
        { num: 4, text: '', type: 'normal' },
        { num: 5, text: 'EXPLAIN ANALYZE SELECT * FROM user_sessions', type: 'normal' },
        { num: 6, text: 'WHERE tenant_id = \'t_904\'', type: 'normal' },
        { num: 7, text: 'ORDER BY created_at DESC;', type: 'normal' },
        { num: 8, text: '-- Execution Time: 0.8ms (100x speedup)', type: 'comment' }
      ]
    },
    python: {
      filename: 'distributed_lock.py',
      lang: 'Python 3.12',
      badge: 'Redis Redlock',
      code: [
        { num: 1, text: 'import aioredis', type: 'normal' },
        { num: 2, text: 'from contextlib import asynccontextmanager', type: 'normal' },
        { num: 3, text: '@asynccontextmanager', type: 'normal' },
        { num: 4, text: 'async function acquire_lock(redis, key, timeout=10):', type: 'normal' },
        { num: 5, text: '    # FIX: Atomic Lua script prevents split-brain', type: 'comment' },
        { num: 6, text: '    acquired = await redis.set(key, token, nx=True, ex=timeout)', type: 'active' },
        { num: 7, text: '    try: yield acquired', type: 'normal' },
        { num: 8, text: '    finally: await release_lock(redis, key, token)', type: 'normal' }
      ]
    }
  };

  const handleSimulate = () => {
    setIsRunning(true);
    setTestPassed(false);
    setTimeout(() => {
      setIsRunning(false);
      setTestPassed(true);
      setTimeout(() => setTestPassed(false), 3500);
    }, 900);
  };

  return (
    <section className="relative w-full bg-[#08090d] pt-24 sm:pt-32 pb-20 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-white/10 text-left overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] pointer-events-none z-0">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[750px] h-[360px] bg-indigo-600/15 blur-[130px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT: Symmetrical Hero Messaging Column */}
          <div className="lg:col-span-6 flex flex-col items-start justify-center h-full">
            
            {/* Top Eyebrow Badge */}
            <div 
              onClick={onOpenAssessment}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 mb-6 cursor-pointer hover:bg-indigo-500/15 hover:border-indigo-500/35 transition-all group"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono font-medium text-indigo-300">
                DevLab Platform • Production Engineering Gym
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 transition-transform ml-0.5" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              Engineered for real-world systems, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-indigo-200 to-cyan-300">
                not LeetCode trivia.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal">
              Train on multi-file debugging, incident triage, system design, and technical interviews in sandboxed cloud environments with real-time telemetry.
            </p>

            {/* Key Value Highlights */}
            <div className="space-y-3 mb-8 text-sm text-slate-300 font-medium">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Multi-file codebases & production deadlock triage</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Live telemetry tracking (p99 latency, memory & CPU)</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Socratic AI guidance tailored to senior engineering standards</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto mb-6">
              <button
                onClick={onOpenAssessment}
                className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-indigo-600/25 active:scale-[0.98] cursor-pointer"
              >
                <span>Start Free Assessment</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenPractice}
                className="px-6 py-3.5 bg-white/[0.05] hover:bg-white/[0.09] text-slate-200 font-semibold text-sm rounded-xl border border-white/10 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Explore Labs</span>
              </button>

              <button
                onClick={onOpenInterview}
                className="px-5 py-3.5 bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white font-semibold text-sm rounded-xl border border-white/5 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Mic className="w-4 h-4 text-indigo-400" />
                <span>Mock AI Interview</span>
              </button>
            </div>

            {/* Trust Footer */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Free starter tier • No credit card required • Instant telemetry score</span>
            </div>

          </div>

          {/* RIGHT: Fixed-Height Symmetrical Code Preview Window */}
          <div className="lg:col-span-6 w-full flex items-center">
            <div className="w-full h-[470px] min-h-[470px] max-h-[470px] rounded-2xl bg-[#0e1017] border border-white/10 shadow-2xl overflow-hidden flex flex-col justify-between">
              
              {/* Window Header Bar (Fixed Height: 52px) */}
              <div className="h-[52px] shrink-0 px-4 bg-[#131520] border-b border-white/10 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2 hidden sm:flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-indigo-400" />
                    sandbox-vm-01
                  </span>
                </div>

                {/* Tabs */}
                <div className="flex items-center gap-1 bg-[#090a0f] p-1 rounded-lg border border-white/5">
                  {Object.keys(codeSnippets).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-2.5 py-1 rounded font-mono text-xs transition-all cursor-pointer ${
                        activeTab === key
                          ? 'bg-indigo-600 text-white font-medium shadow-sm'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {codeSnippets[key].filename.split('.')[0]}
                    </button>
                  ))}
                </div>

                {/* Run Button */}
                <button
                  onClick={handleSimulate}
                  disabled={isRunning}
                  className={`px-3 py-1 rounded font-mono text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                    testPassed
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : isRunning
                      ? 'bg-indigo-600/50 text-indigo-200'
                      : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                  }`}
                >
                  {isRunning ? (
                    <RefreshCw className="w-3 h-3 animate-spin" />
                  ) : testPassed ? (
                    <Check className="w-3 h-3 text-emerald-400" />
                  ) : (
                    <Play className="w-3 h-3 fill-white" />
                  )}
                  <span>{isRunning ? 'Testing...' : testPassed ? 'Passed' : 'Run'}</span>
                </button>
              </div>

              {/* Code Snippet Area (Flex-1, Fixed Scrollable Body Height) */}
              <div className="flex-1 p-4 sm:p-5 font-mono text-xs bg-[#0b0c12] text-slate-300 flex flex-col justify-between overflow-hidden">
                <div>
                  <div className="flex items-center justify-between mb-3 text-slate-400 text-[11px] pb-2 border-b border-white/5">
                    <span className="flex items-center gap-2 text-slate-200 font-semibold">
                      <Code2 className="w-3.5 h-3.5 text-indigo-400" />
                      {codeSnippets[activeTab].filename}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                      {codeSnippets[activeTab].lang}
                    </span>
                  </div>

                  <div className="space-y-1.5 leading-relaxed">
                    {codeSnippets[activeTab].code.map((line) => (
                      <div
                        key={line.num}
                        className={`flex items-start gap-4 px-2 py-0.5 rounded ${
                          line.type === 'comment'
                            ? 'text-emerald-400/90 font-medium'
                            : line.type === 'active'
                            ? 'bg-indigo-500/15 border-l-2 border-indigo-400 text-indigo-100 font-medium'
                            : 'text-slate-300'
                        }`}
                      >
                        <span className="text-slate-600 select-none w-4 text-right shrink-0">{line.num}</span>
                        <span className="whitespace-pre font-mono">{line.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtle Status Notification Bar if Test Passed */}
                {testPassed && (
                  <div className="mt-2 p-2 rounded bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-between text-emerald-300 text-[11px] font-mono">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      Verification vector complete: 0 leaks
                    </span>
                    <span className="text-[10px] font-bold">100% MATCH</span>
                  </div>
                )}
              </div>

              {/* Minimal Telemetry Footer (Fixed Height: 44px) */}
              <div className="h-[44px] shrink-0 px-4 bg-[#131520] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-emerald-400" />
                    <span>p99: 14ms</span>
                  </span>
                  <span className="hidden sm:inline text-slate-600">|</span>
                  <span className="hidden sm:inline">142/142 vectors passing</span>
                </div>
                
                <span className="text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Telemetry Active
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

