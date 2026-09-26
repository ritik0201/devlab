import React from 'react';
import { AlertTriangle, Gauge, CheckSquare, Terminal, ArrowRight, Activity, ShieldAlert, Cpu } from 'lucide-react';

export default function DebuggingLabSection({ onOpenPractice }) {
  return (
    <section className="w-full py-20 sm:py-24 bg-[#090a0f] border-b border-white/[0.08] px-4 sm:px-6 md:px-8">
      <div className="max-w-[1240px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-16">
          <span className="font-mono text-xs text-rose-400 uppercase tracking-widest font-medium mb-3">
            PRODUCTION DRILLS
          </span>
          <h2 className="font-bold text-3xl sm:text-5xl text-white mb-4 tracking-tight">
            Real engineers don't just write code. They fix it.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            No toy leetcode puzzles. Experience true production triage with simulated telemetry, traces, and latency spikes.
          </p>
        </div>

        {/* APM Incident Widget Container */}
        <div className="rounded-2xl bg-[#0f111a] border border-white/[0.08] shadow-2xl overflow-hidden glass-card mb-10">
          
          {/* Incident Alert Bar */}
          <div className="px-6 py-4 bg-rose-500/10 border-b border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="px-2.5 py-1 rounded bg-rose-500/20 text-rose-300 font-mono text-xs font-semibold flex items-center gap-2 border border-rose-500/30">
                <span className="w-2 h-2 rounded-full bg-rose-400 animate-ping"></span>
                INCIDENT #8402
              </span>
              <span className="text-white font-semibold text-sm">P99 Latency Regression: auth-service</span>
            </div>
            <div className="font-mono text-xs text-rose-300 flex items-center gap-2">
              <Gauge className="w-4 h-4 text-rose-400 shrink-0" />
              <span>Latency: 210ms → 4,800ms</span>
            </div>
          </div>

          {/* Incident Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 p-6 gap-6">
            
            {/* Left: Telemetry Checklist & Logs */}
            <div className="lg:col-span-7 space-y-3">
              <div className="font-mono text-xs text-slate-400 uppercase tracking-wider mb-2 font-semibold">
                TELEMETRY & LOG TRACES
              </div>
              
              <div className="p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06] flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Application Logs</div>
                  <div className="font-mono text-xs text-slate-400 mt-0.5">
                    Connection pool exhausted in auth-service (max_active: 50)
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06] flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Database Query Execution</div>
                  <div className="font-mono text-xs text-slate-400 mt-0.5">
                    Missing composite index on user_sessions.tenant_id (Sequential Scan 840ms)
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06] flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">API Implementation</div>
                  <div className="font-mono text-xs text-slate-400 mt-0.5">
                    Unbounded worker loop leak in webhook dispatcher thread pool
                  </div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#08090d] border border-white/[0.06] flex items-start gap-3">
                <CheckSquare className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-white">Recent Git Changes</div>
                  <div className="font-mono text-xs text-slate-400 mt-0.5">
                    PR #419: Added eager-loading for team members (merged 14m ago)
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Container Sandbox Callout */}
            <div className="lg:col-span-5 p-6 rounded-xl bg-[#08090d] border border-white/[0.08] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 text-cyan-400 font-mono text-xs font-semibold uppercase tracking-wider mb-2">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  KUBERNETES REPL SANDBOX
                </div>
                <h4 className="font-bold text-lg text-white mb-2">Simulated Kubernetes Pod</h4>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                  Spin up an isolated REPL container with the exact environment, reproduce the outage, patch the connection leak, and verify health checks.
                </p>

                <div className="p-3.5 rounded-lg bg-[#0b0c12] border border-white/[0.08] font-mono text-xs text-slate-300 space-y-1 mb-4 overflow-x-auto">
                  <div className="whitespace-nowrap">$ kubectl logs -f auth-service-7f98b-2x</div>
                  <div className="text-rose-400 whitespace-nowrap">ERROR: HikariPool-1 - Connection timed out (30000ms).</div>
                </div>
              </div>

              <button
                onClick={onOpenPractice}
                className="w-full py-3.5 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-semibold text-sm rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg active:scale-[0.98]"
              >
                <span>Start Incident Triage</span>
                <Terminal className="w-4 h-4 text-indigo-200" />
              </button>
            </div>

          </div>
        </div>

        {/* Category tags */}
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {['Broken REST APIs', 'Slow SQL Indexing', 'React State Memory Leaks', 'Auth Token Race Conditions', 'Goroutine Deadlocks', 'Kafka Consumer Locks', 'Zero-Day Security Holes'].map((tag, i) => (
            <span key={i} className="px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-slate-300 font-mono text-xs hover:border-indigo-500/30 transition-colors">
              {tag}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
