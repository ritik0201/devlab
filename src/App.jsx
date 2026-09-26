import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import GrowthLoopSection from './components/GrowthLoopSection';
import ModulesSection from './components/ModulesSection';
import AIMentorSection from './components/AIMentorSection';
import DebuggingLabSection from './components/DebuggingLabSection';
import InterviewSimulatorSection from './components/InterviewSimulatorSection';
import RoadmapSection from './components/RoadmapSection';
import PassportSection from './components/PassportSection';
import AudienceSection from './components/AudienceSection';
import MikadoHeritageSection from './components/MikadoHeritageSection';
import PricingSection from './components/PricingSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

// Modals
import AssessmentModal from './components/modals/AssessmentModal';
import InteractiveIDEModal from './components/modals/InteractiveIDEModal';
import InterviewModal from './components/modals/InterviewModal';
import EarlyAccessModal from './components/modals/EarlyAccessModal';

// Initial Data
import { INITIAL_SKILLS, PRACTICE_QUEUE } from './data/mockData';

export default function App() {
  const [skills, setSkills] = useState(INITIAL_SKILLS);
  const [queue, setQueue] = useState(PRACTICE_QUEUE);

  // Modal Visibility States
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [isIDEOpen, setIsIDEOpen] = useState(false);
  const [isInterviewOpen, setIsInterviewOpen] = useState(false);
  const [isEarlyAccessOpen, setIsEarlyAccessOpen] = useState(false);

  // Handle Assessment Completion
  const handleCompleteAssessment = (scoreBoost) => {
    setSkills((prev) =>
      prev.map((s) => ({
        ...s,
        score: Math.min(99, s.score + Math.floor(Math.random() * 4) + 2)
      }))
    );
  };

  // Handle Passing Task in IDE
  const handlePassTask = () => {
    setQueue((prev) =>
      prev.map((item) =>
        item.id === 2 ? { ...item, status: 'passed', time: 'Passed in 14m' } : item
      )
    );
    setSkills((prev) =>
      prev.map((s) => (s.id === 'debugging' ? { ...s, score: Math.min(99, s.score + 8), status: 'Strong' } : s))
    );
  };

  return (
    <div className="min-h-screen bg-[#08090d] text-[#f8fafc] font-['Inter',sans-serif] selection:bg-indigo-500/30 selection:text-white flex flex-col">
      {/* Global Navigation */}
      <Navbar
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenPractice={() => setIsIDEOpen(true)}
        onOpenInterview={() => setIsInterviewOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <HeroSection
          skills={skills}
          queue={queue}
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenPractice={() => setIsIDEOpen(true)}
          onOpenInterview={() => setIsInterviewOpen(true)}
        />

        <ProblemSection onOpenAssessment={() => setIsAssessmentOpen(true)} />

        <GrowthLoopSection onOpenAssessment={() => setIsAssessmentOpen(true)} />

        <ModulesSection
          onOpenPractice={() => setIsIDEOpen(true)}
          onOpenInterview={() => setIsInterviewOpen(true)}
        />

        <AIMentorSection onOpenPractice={() => setIsIDEOpen(true)} />

        <DebuggingLabSection onOpenPractice={() => setIsIDEOpen(true)} />

        <InterviewSimulatorSection onOpenInterview={() => setIsInterviewOpen(true)} />

        <RoadmapSection onOpenAssessment={() => setIsAssessmentOpen(true)} />

        <PassportSection skills={skills} />

        <AudienceSection onOpenAssessment={() => setIsAssessmentOpen(true)} />

        <MikadoHeritageSection />

        <PricingSection
          onOpenAssessment={() => setIsAssessmentOpen(true)}
          onOpenEarlyAccess={() => setIsEarlyAccessOpen(true)}
        />

        <FinalCTASection onOpenAssessment={() => setIsAssessmentOpen(true)} />
      </main>

      {/* Footer */}
      <Footer
        onOpenAssessment={() => setIsAssessmentOpen(true)}
        onOpenPractice={() => setIsIDEOpen(true)}
        onOpenInterview={() => setIsInterviewOpen(true)}
      />

      {/* Modals */}
      <AssessmentModal
        isOpen={isAssessmentOpen}
        onClose={() => setIsAssessmentOpen(false)}
        onCompleteAssessment={handleCompleteAssessment}
      />

      <InteractiveIDEModal
        isOpen={isIDEOpen}
        onClose={() => setIsIDEOpen(false)}
        onPassTask={handlePassTask}
      />

      <InterviewModal
        isOpen={isInterviewOpen}
        onClose={() => setIsInterviewOpen(false)}
      />

      <EarlyAccessModal
        isOpen={isEarlyAccessOpen}
        onClose={() => setIsEarlyAccessOpen(false)}
      />
    </div>
  );
}
