import React, { useState } from 'react';
import { X, CheckCircle2, Radar, ArrowRight, Award, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { DIAGNOSTIC_QUESTIONS } from '../../data/mockData';

export default function AssessmentModal({ isOpen, onClose, onCompleteAssessment }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isFinished, setIsFinished] = useState(false);

  if (!isOpen) return null;

  const handleSelectOption = (questionId, optionIdx) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: optionIdx });
  };

  const handleNext = () => {
    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsFinished(true);
      try {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      } catch (e) {}
    }
  };

  const handleApplyResults = () => {
    let scoreBoost = 0;
    DIAGNOSTIC_QUESTIONS.forEach((q) => {
      if (selectedAnswers[q.id] === q.correct) {
        scoreBoost += 5;
      }
    });
    onCompleteAssessment(scoreBoost);
    onClose();
  };

  const q = DIAGNOSTIC_QUESTIONS[currentStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#08090d]/85 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-2xl bg-[#0f111a] border border-white/[0.1] rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-[#121524] border-b border-white/[0.08] flex items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <Radar className="w-5 h-5 text-indigo-400 shrink-0" />
            <span className="font-semibold text-base text-white truncate">
              Skill Baseline Diagnostic
            </span>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {!isFinished ? (
            <div>
              {/* Progress */}
              <div className="flex items-center justify-between font-mono text-xs text-slate-400 mb-2">
                <span>Question {currentStep + 1} of {DIAGNOSTIC_QUESTIONS.length}</span>
                <span className="text-cyan-400 font-medium truncate">{q.skill}</span>
              </div>
              <div className="w-full h-1.5 bg-[#08090d] rounded-full overflow-hidden mb-6">
                <div
                  className="h-full bg-indigo-500 transition-all duration-300"
                  style={{ width: `${((currentStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-lg font-semibold text-white mb-6 leading-snug">
                {q.question}
              </h3>

              {/* Options */}
              <div className="space-y-3">
                {q.options.map((opt, idx) => {
                  const isSelected = selectedAnswers[q.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(q.id, idx)}
                      className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start justify-between gap-3 ${
                        isSelected
                          ? 'bg-indigo-600/20 border-indigo-500 text-white shadow-md'
                          : 'bg-[#08090d] border-white/[0.06] text-slate-300 hover:bg-white/[0.03]'
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center font-mono text-xs shrink-0 mt-0.5 ${
                          isSelected ? 'bg-indigo-600 text-white' : 'bg-white/[0.06] text-slate-400'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="leading-relaxed">{opt}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Next button */}
              <div className="mt-8 flex justify-end">
                <button
                  disabled={selectedAnswers[q.id] === undefined}
                  onClick={handleNext}
                  className="w-full sm:w-auto px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md"
                >
                  <span>{currentStep === DIAGNOSTIC_QUESTIONS.length - 1 ? 'Calculate Score' : 'Next Question'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results Screen */
            <div className="text-center py-4 space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mx-auto flex items-center justify-center">
                <Sparkles className="w-8 h-8" />
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Assessment Complete!</h3>
                <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Your baseline was evaluated against production engineering benchmarks. Your custom 7-day adaptive sprint is ready.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#08090d] border border-white/[0.08] max-w-md mx-auto text-left font-mono text-xs space-y-2">
                <div className="flex justify-between text-white">
                  <span>Competency Score:</span>
                  <span className="text-emerald-400 font-bold">78.4 / 100</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Primary Strength:</span>
                  <span className="text-cyan-400">Incident Triage & SQL</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Priority Focus Area:</span>
                  <span className="text-amber-400">System Design & Sharding</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={handleApplyResults}
                  className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm rounded-xl transition-all shadow-lg active:scale-95"
                >
                  Apply Diagnostic to Dashboard
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
