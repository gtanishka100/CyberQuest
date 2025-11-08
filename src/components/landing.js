import React from "react";

export default function CyberQuestLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-center">
          CyberQuest
        </h1>
        <p className="text-slate-400 text-xl md:text-2xl mb-12 text-center">
          Gamify Cybersecurity Awareness
        </p>
        <div className="flex gap-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:scale-105">
            Play Now
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-10 py-4 rounded-2xl border border-slate-700 transition-all duration-300 hover:shadow-[0_0_30px_rgba(148,163,184,0.4)] hover:scale-105">
            Join Challenge
          </button>
        </div>
      </div>
      <div className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
          Master Your Digital Defenses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-gradient-to-br from-teal-900 to-teal-700 rounded-2xl h-64 mb-6 flex items-center justify-center overflow-hidden">
              <img
                src="/images/img1.png"
                alt="Phishing Detective"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Phishing Detective</h3>
            <p className="text-slate-400 text-base leading-relaxed">
              Identify and neutralize malicious emails in a gamified
              environment.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-2xl h-64 mb-6 flex items-center justify-center overflow-hidden">
              <img
                src="/images/img3.png"
                alt="Password Arena"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">Password Arena</h3>
            <p className="text-slate-400 text-base leading-relaxed">
              Strengthen your password creation skills against brute-force
              attacks.
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300 hover:transform hover:scale-105">
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-300 rounded-2xl h-64 mb-6 flex items-center justify-center overflow-hidden">
              <img
                src="/images/img2.png"
                alt="URL Inspector"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold mb-3">URL Inspector</h3>
            <p className="text-slate-400 text-base leading-relaxed">
              Learn to spot dangerous links before you click.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-20 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
          Our Global Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-slate-700 transition-all duration-300">
            <p className="text-slate-400 text-lg mb-4">Players Active</p>
            <p className="text-5xl md:text-6xl font-bold">150,000+</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-slate-700 transition-all duration-300">
            <p className="text-slate-400 text-lg mb-4">Threats Neutralized</p>
            <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent">
              2.1 Million
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center hover:border-slate-700 transition-all duration-300">
            <p className="text-slate-400 text-lg mb-4">Skills Mastered</p>
            <p className="text-5xl md:text-6xl font-bold">850,000+</p>
          </div>
        </div>
      </div>
      <div className="px-6 py-20 max-w-7xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
          What Our Agents Are Saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                S
              </div>
              <div>
                <h4 className="font-bold text-lg">Sarah K.</h4>
                <p className="text-slate-400 text-sm">Security Analyst</p>
              </div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              "CyberQuest made learning about cybersecurity fun and engaging.
              Now I feel much more confident spotting phishing attempts now!"
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                M
              </div>
              <div>
                <h4 className="font-bold text-lg">Mark T.</h4>
                <p className="text-slate-400 text-sm">IT Manager</p>
              </div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              "The competitive challenges are a great way to keep our team
              sharp. We've seen a noticeable drop in security incidents."
            </p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-slate-700 transition-all duration-300">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                E
              </div>
              <div>
                <h4 className="font-bold text-lg">Emily J.</h4>
                <p className="text-slate-400 text-sm">Student</p>
              </div>
            </div>
            <p className="text-slate-300 text-base leading-relaxed">
              "I never thought I'd say this, but cybersecurity training is fun!
              The various levels and challenges make it easy to learn at my own
              pace. The Password Arena is my favorite!"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
