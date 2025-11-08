import React, { useState } from "react";
import { Menu, Bell, Shield, AlertTriangle, TrendingUp } from "lucide-react";

export default function ProfileAnalytics() {
  const [score] = useState(88);

  const strengths = ["Phishing Detection", "Password Security"];
  const weaknesses = ["Data Privacy", "Social Engineering"];

  const achievements = [
    { title: "Phishing Master Badge", unlocked: "2 days ago" },
    { title: "10-Day Streak Achieved", unlocked: "5 days ago" },
    { title: "Completed Password Module", unlocked: "1 week ago" },
  ];

  const benchmarks = [
    { category: "Phishing", yourScore: 92, communityAvg: 73 },
    { category: "Password Security", yourScore: 85, communityAvg: 68 },
    { category: "Data Privacy", yourScore: 75, communityAvg: 80 },
  ];

  const activityData = [
    { day: 0, height: 20 },
    { day: 1, height: 40 },
    { day: 2, height: 60 },
    { day: 3, height: 30 },
    { day: 4, height: 80 },
    { day: 5, height: 45 },
    { day: 6, height: 70 },
    { day: 7, height: 35 },
    { day: 8, height: 55 },
    { day: 9, height: 90 },
    { day: 10, height: 25 },
    { day: 11, height: 65 },
    { day: 12, height: 50 },
    { day: 13, height: 85 },
    { day: 14, height: 40 },
    { day: 15, height: 75 },
    { day: 16, height: 60 },
    { day: 17, height: 45 },
    { day: 18, height: 95 },
    { day: 19, height: 30 },
  ];

  const circumference = 2 * Math.PI * 85;
  const offset = circumference - (score / 100) * circumference;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-6 border-b border-blue-900/30 backdrop-blur-sm">
        <button className="p-2 hover:bg-blue-900/20 rounded-lg transition-colors">
          <Menu size={24} />
        </button>
        <h1 className="text-xl font-bold">Profile & Analytics</h1>
        <button className="p-2 hover:bg-blue-900/20 rounded-lg transition-colors relative">
          <Bell size={24} />
          <span className="absolute top-1 right-1 w-2 h-2 bg-cyan-400 rounded-full"></span>
        </button>
      </header>

      <div className="max-w-7xl mx-auto p-6 space-y-8">
        {/* Profile Section */}
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-blue-500 overflow-hidden bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center text-3xl">
                🤖
              </div>
            </div>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
              Level 12
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-bold">Cyber Agent</h2>
          </div>

          {/* Score Circle */}
          <div className="relative">
            <svg width="220" height="220" className="transform -rotate-90">
              <circle
                cx="110"
                cy="110"
                r="85"
                stroke="rgba(59, 130, 246, 0.2)"
                strokeWidth="16"
                fill="none"
              />
              <circle
                cx="110"
                cy="110"
                r="85"
                stroke="url(#gradient)"
                strokeWidth="16"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-1000"
              />
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold">{score}</span>
              <span className="text-slate-400 text-sm">/ 100</span>
            </div>
          </div>

          <p className="text-slate-300 text-sm">Overall Security Score</p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Skill Radar */}
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/30 hover:border-blue-700/50 transition-all">
            <h3 className="text-lg font-bold mb-4">Skill Radar</h3>
            <div className="flex justify-center items-center h-64 bg-gradient-to-br from-cyan-950/30 to-blue-950/30 rounded-xl relative overflow-hidden">
              <svg width="200" height="200" className="relative z-10">
                <defs>
                  <radialGradient id="radarGlow">
                    <stop offset="0%" stopColor="rgba(6, 182, 212, 0.4)" />
                    <stop offset="100%" stopColor="rgba(6, 182, 212, 0)" />
                  </radialGradient>
                </defs>
                {[40, 60, 80].map((r, i) => (
                  <circle
                    key={i}
                    cx="100"
                    cy="100"
                    r={r}
                    fill="none"
                    stroke="rgba(6, 182, 212, 0.2)"
                    strokeWidth="1"
                  />
                ))}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
                  const rad = (angle * Math.PI) / 180;
                  const x = 100 + 80 * Math.cos(rad);
                  const y = 100 + 80 * Math.sin(rad);
                  return (
                    <line
                      key={i}
                      x1="100"
                      y1="100"
                      x2={x}
                      y2={y}
                      stroke="rgba(6, 182, 212, 0.3)"
                      strokeWidth="1"
                    />
                  );
                })}
                <polygon
                  points="100,30 150,60 170,100 140,150 100,170 60,150 30,100 70,60"
                  fill="url(#radarGlow)"
                  stroke="rgb(6, 182, 212)"
                  strokeWidth="2"
                />
                <circle
                  cx="100"
                  cy="100"
                  r="8"
                  fill="rgb(6, 182, 212)"
                  className="animate-pulse"
                />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent"></div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/30 hover:border-green-700/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="text-green-400" size={20} />
                <h3 className="text-lg font-bold">Strengths</h3>
              </div>
              <ul className="space-y-2">
                {strengths.map((strength, i) => (
                  <li
                    key={i}
                    className="text-slate-300 text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    {strength}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/30 hover:border-red-700/50 transition-all">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="text-red-400" size={20} />
                <h3 className="text-lg font-bold">Weaknesses</h3>
              </div>
              <ul className="space-y-2">
                {weaknesses.map((weakness, i) => (
                  <li
                    key={i}
                    className="text-slate-300 text-sm flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                    {weakness}
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-700 hover:from-blue-500 hover:to-purple-600 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50">
              Train Now
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/30 hover:border-blue-700/50 transition-all">
          <h3 className="text-lg font-bold mb-6">Daily Activity</h3>
          <div className="flex items-end justify-between gap-1 h-32">
            {activityData.map((data, i) => (
              <div
                key={i}
                className="flex-1 bg-gradient-to-t from-blue-600 to-purple-600 rounded-t hover:from-blue-500 hover:to-purple-500 transition-all cursor-pointer"
                style={{ height: `${data.height}%` }}
              ></div>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/30 hover:border-blue-700/50 transition-all">
            <h3 className="text-lg font-bold mb-4">Achievements</h3>
            <div className="space-y-4">
              {achievements.map((achievement, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/80 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{achievement.title}</p>
                    <p className="text-xs text-slate-400">
                      Unlocked {achievement.unlocked}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-900/30 hover:border-blue-700/50 transition-all">
            <h3 className="text-lg font-bold mb-4">Community Benchmark</h3>
            <div className="space-y-6">
              {benchmarks.map((benchmark, i) => (
                <div key={i}>
                  <h4 className="text-sm font-semibold mb-3">
                    {benchmark.category}
                  </h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 w-24">
                        Your Score
                      </span>
                      <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full transition-all duration-1000"
                          style={{ width: `${benchmark.yourScore}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold w-8">
                        {benchmark.yourScore}
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-400 w-24">
                        Community Avg.
                      </span>
                      <div className="flex-1 bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-pink-600 to-purple-600 rounded-full transition-all duration-1000"
                          style={{ width: `${benchmark.communityAvg}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-bold w-8">
                        {benchmark.communityAvg}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
