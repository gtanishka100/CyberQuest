import React, { useState } from "react";
const Header = ({ onBack, onHelp }) => (
  <div className="flex items-center justify-between px-4 py-6">
    <button
      onClick={onBack}
      className="text-slate-400 hover:text-white transition-colors p-2"
    >
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>

    <h1 className="text-xl md:text-2xl font-bold text-slate-400">
      Phishing Detective
    </h1>

    <button
      onClick={onHelp}
      className="text-slate-400 hover:text-white transition-colors p-2"
    >
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" strokeWidth={2} />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"
        />
        <circle cx="12" cy="17" r="0.5" fill="currentColor" strokeWidth={0} />
      </svg>
    </button>
  </div>
);
const ProgressBar = ({ level, progress, total }) => {
  const percentage = (progress / total) * 100;

  return (
    <div className="px-4 mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-slate-400 text-sm md:text-base font-semibold">
          Level {level}
        </span>
        <span className="text-slate-400 text-sm md:text-base font-semibold">
          {progress}/{total}
        </span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-400 rounded-full transition-all duration-500 shadow-lg shadow-teal-500/50"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
const ScoreDisplay = ({ score }) => (
  <div className="text-center mb-6">
    <h2
      className="text-4xl md:text-5xl font-bold text-teal-400 mb-4 animate-pulse"
      style={{
        textShadow:
          "0 0 20px rgba(20, 184, 166, 0.5), 0 0 40px rgba(20, 184, 166, 0.3)",
      }}
    >
      Score: {score}
    </h2>
    <p className="text-slate-500 text-lg md:text-xl">
      Is this Safe or Phishing?
    </p>
  </div>
);
const LevelCompleteModal = ({
  isOpen,
  onContinue,
  threatsIdentified,
  totalThreats,
  tip,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div className="bg-slate-800 rounded-3xl p-6 md:p-8 max-w-lg w-full border border-slate-700 shadow-2xl animate-scaleIn">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-6">
          Level Complete!
        </h2>
        <p
          className="text-2xl md:text-3xl font-bold text-center mb-8 text-cyan-400 animate-pulse"
          style={{
            textShadow:
              "0 0 20px rgba(34, 211, 238, 0.6), 0 0 40px rgba(34, 211, 238, 0.4)",
          }}
        >
          You identified {threatsIdentified}/{totalThreats} threats!
        </p>
        <div className="bg-slate-900 rounded-2xl p-6 mb-8 border border-slate-700">
          <p className="text-base md:text-lg leading-relaxed text-slate-300">
            <span className="text-red-500 font-bold">Tip:</span> {tip}
          </p>
        </div>
        <button
          onClick={onContinue}
          className="w-full bg-cyan-400 hover:bg-cyan-300 text-slate-900 font-bold text-xl py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-cyan-400/50 hover:shadow-cyan-400/70 hover:scale-105"
        >
          Continue
        </button>
      </div>
    </div>
  );
};
const EmailPreview = ({ from, subject, content, link }) => (
  <div className="bg-slate-900 rounded-2xl p-6 border border-slate-700 max-w-2xl mx-auto">
    <div className="mb-4">
      <p className="text-slate-400 text-sm mb-1">From:</p>
      <p className="text-slate-300 text-base">{from}</p>
    </div>

    <div className="mb-4">
      <p className="text-slate-400 text-sm mb-1">Subject:</p>
      <p className="text-white text-lg font-semibold">{subject}</p>
    </div>

    <div className="mb-4">
      <p className="text-slate-300 text-base leading-relaxed">{content}</p>
    </div>

    {link && (
      <div className="mt-4">
        <p className="text-slate-400 text-sm mb-2">Click here:</p>
        <a
          href="#"
          className="text-cyan-400 hover:text-cyan-300 underline break-all text-sm"
          onClick={(e) => e.preventDefault()}
        >
          {link}
        </a>
      </div>
    )}
  </div>
);
const ActionButtons = ({ onSafe, onPhishing }) => (
  <div className="flex gap-4 max-w-2xl mx-auto mt-8">
    <button
      onClick={onSafe}
      className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold text-lg py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-green-600/50 hover:shadow-green-600/70 hover:scale-105"
    >
      ✓ Safe
    </button>
    <button
      onClick={onPhishing}
      className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold text-lg py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-red-600/50 hover:shadow-red-600/70 hover:scale-105"
    >
      ⚠ Phishing
    </button>
  </div>
);
export default function PhishingDetective() {
  const [showModal, setShowModal] = useState(true);
  const [score, setScore] = useState(250);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(3);
  const [threatsIdentified, setThreatsIdentified] = useState(8);

  const emailData = {
    from: "security@yourbank-update.com",
    subject: "Action Required: Suspicious Activity on Your Account",
    content:
      "We have detected unusual login attempts. Please verify your identity immediately to avoid account suspension.",
    link: "http://your-bank-update.co/login",
  };

  const tip =
    "Legitimate companies rarely ask for passwords or personal info via email. Always check the sender's address for inconsistencies.";

  const handleBack = () => {
    console.log("Back clicked");
  };

  const handleHelp = () => {
    console.log("Help clicked");
  };

  const handleContinue = () => {
    setShowModal(false);
  };

  const handleSafe = () => {
    console.log("Safe clicked");
  };

  const handlePhishing = () => {
    console.log("Phishing clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pb-8">
      <Header onBack={handleBack} onHelp={handleHelp} />
      <ProgressBar level={level} progress={progress} total={10} />
      <ScoreDisplay score={score} />
      <div className="px-4 mb-8">
        <EmailPreview {...emailData} />
      </div>
      <div className="px-4">
        <ActionButtons onSafe={handleSafe} onPhishing={handlePhishing} />
      </div>
      <LevelCompleteModal
        isOpen={showModal}
        onContinue={handleContinue}
        threatsIdentified={threatsIdentified}
        totalThreats={10}
        tip={tip}
      />
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
