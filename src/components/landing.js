import React from "react";

export default function CyberQuestLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-center">
          CyberQuest
        </h1>
        <p className="text-slate-400 text-lg mb-8 text-center">
          Gamify Cybersecurity Awareness
        </p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300">
            Play Now
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded-lg border border-slate-700 transition-all duration-300">
            Join Challenge
          </button>
        </div>
      </div>
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Master Your Digital Defenses
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
            <div className="bg-gradient-to-br from-teal-900 to-teal-700 rounded-xl h-48 mb-4 flex items-center justify-center overflow-hidden">
              <svg
                className="w-32 h-32"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="40"
                  y="80"
                  width="120"
                  height="90"
                  rx="4"
                  fill="#F5E6D3"
                  stroke="#8B7355"
                  strokeWidth="3"
                />
                <path
                  d="M40 80 L100 130 L160 80"
                  stroke="#8B7355"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M100 70 Q100 50, 120 50 Q130 50, 130 60"
                  stroke="#DC2626"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
                <circle cx="125" cy="65" r="3" fill="#DC2626" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Phishing Detective</h3>
            <p className="text-slate-400 text-sm">
              Identify and neutralize malicious emails in a gamified
              environment.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
            <div className="bg-gradient-to-br from-slate-700 to-slate-600 rounded-xl h-48 mb-4 flex items-center justify-center overflow-hidden">
              <svg
                className="w-32 h-32"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="50"
                  y="80"
                  width="60"
                  height="70"
                  rx="8"
                  fill="#94A3B8"
                  opacity="0.3"
                />
                <rect
                  x="55"
                  y="90"
                  width="50"
                  height="15"
                  rx="4"
                  fill="#475569"
                />
                <rect
                  x="55"
                  y="110"
                  width="50"
                  height="15"
                  rx="4"
                  fill="#475569"
                />
                <rect
                  x="55"
                  y="130"
                  width="50"
                  height="15"
                  rx="4"
                  fill="#475569"
                />
                <path
                  d="M90 80 L90 60 Q90 40, 110 40 Q130 40, 130 60 L130 80"
                  stroke="#64748B"
                  strokeWidth="8"
                  fill="none"
                />
                <circle cx="80" cy="100" r="3" fill="#10B981" />
                <circle cx="80" cy="120" r="3" fill="#10B981" />
                <circle cx="80" cy="140" r="3" fill="#10B981" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Password Arena</h3>
            <p className="text-slate-400 text-sm">
              Strengthen your password creation skills against brute-force
              attacks.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all duration-300">
            <div className="bg-gradient-to-br from-cyan-400 to-cyan-300 rounded-xl h-48 mb-4 flex items-center justify-center overflow-hidden">
              <svg
                className="w-32 h-32"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="100"
                  cy="90"
                  r="35"
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth="8"
                />
                <line
                  x1="125"
                  y1="115"
                  x2="150"
                  y2="140"
                  stroke="#1E293B"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <circle
                  cx="100"
                  cy="90"
                  r="20"
                  fill="none"
                  stroke="#1E293B"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">URL Inspector</h3>
            <p className="text-slate-400 text-sm">
              Learn to spot dangerous links before you click.
            </p>
          </div>
        </div>
      </div>
      <div className="px-6 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Our Global Impact
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <p className="text-slate-400 text-sm mb-2">Players Active</p>
            <p className="text-4xl font-bold">150,000+</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center">
            <p className="text-slate-400 text-sm mb-2">Threats Neutralized</p>
            <p className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-purple-400 bg-clip-text text-transparent">
              2.1 Million
            </p>
          </div>

          {/* Skills Mastered */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center md:col-span-3">
            <p className="text-slate-400 text-sm mb-2">Skills Mastered</p>
            <p className="text-4xl font-bold">850,000+</p>
          </div>
        </div>
      </div>

      {/* What Our Agents Are Saying */}
      <div className="px-6 py-16 max-w-4xl mx-auto mb-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          What Our Agents Are Saying
        </h2>

        <div className="space-y-6">
          {/* Testimonial 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                S
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <h4 className="font-bold">Sarah K.</h4>
                  <p className="text-slate-400 text-sm">Security Analyst</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "CyberQuest made learning about cybersecurity fun and
                  engaging. Now I feel much more confident spotting phishing
                  attempts now!"
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                M
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <h4 className="font-bold">Mark T.</h4>
                  <p className="text-slate-400 text-sm">IT Manager</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "The competitive challenges are a great way to keep our team
                  sharp. We've seen a noticeable drop in security incidents."
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex-shrink-0 flex items-center justify-center text-xl font-bold">
                E
              </div>
              <div className="flex-1">
                <div className="mb-2">
                  <h4 className="font-bold">Emily J.</h4>
                  <p className="text-slate-400 text-sm">Student</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  "I never thought I'd say this, but cybersecurity training is
                  fun! The various levels and challenges make it easy to learn
                  at my own pace. The Password Arena is my favorite!"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
