import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Target, 
  Trophy, 
  Award, 
  User, 
  Settings,
  CheckCircle2,
  Plus,
  Lock
} from 'lucide-react';

export default function CyberQuestDashboard() {
  const [activeNav, setActiveNav] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'challenges', label: 'Challenges', icon: Target },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'achievements', label: 'Achievements', icon: Award },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  const stats = [
    { label: 'Points Earned', value: '12,450' },
    { label: 'Current Streak', value: '15 Days' },
    { label: 'Badges Unlocked', value: '8' },
  ];

  const activities = [
    {
      icon: CheckCircle2,
      iconColor: 'text-green-500',
      iconBg: 'bg-green-500/10',
      text: 'Completed',
      highlight: 'Phishing Challenge',
      time: '2 hours ago',
    },
    {
      icon: Award,
      iconColor: 'text-yellow-500',
      iconBg: 'bg-yellow-500/10',
      text: 'Unlocked the',
      highlight: 'Firewall Architect',
      suffix: 'Badge.',
      time: '1 day ago',
    },
    {
      icon: Plus,
      iconColor: 'text-blue-500',
      iconBg: 'bg-blue-500/10',
      text: 'Earned',
      highlight: '150 points',
      suffix: 'from the daily quiz.',
      time: '1 day ago',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex">
      <motion.aside
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 bg-slate-900/50 border-r border-slate-800 flex flex-col"
      >
        <div className="p-6 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
              <Lock className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold">CyberQuest</h1>
              <p className="text-xs text-slate-400">Cybersecurity Training</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeNav === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveNav(item.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-800">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-slate-400 hover:bg-slate-800 hover:text-white transition-all"
          >
            <Settings className="w-5 h-5" />
            <span className="font-medium">Settings</span>
          </motion.button>
        </div>
      </motion.aside>

      <main className="flex-1 overflow-y-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto p-8 space-y-6"
        >
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center gap-6 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 flex items-center justify-center text-2xl font-bold">
                AM
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-1">AlexMatrix</h2>
                <p className="text-slate-400">Level 12 - Cyber Sentinel</p>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-400">Next Level XP</span>
                <span className="text-sm font-semibold">4,500 / 8,000</span>
              </div>
              <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '56.25%' }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"
                />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-all"
              >
                <p className="text-slate-400 text-sm mb-2">{stat.label}</p>
                <p className="text-4xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-6">Skills Breakdown</h3>
              <div className="bg-white rounded-xl p-8 flex items-center justify-center">
                <svg
                  viewBox="0 0 400 400"
                  className="w-full max-w-sm"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <polygon
                        key={i}
                        points="200,200 200,50 346,125 346,275 200,350 54,275 54,125"
                        fill="none"
                        stroke="#94a3b8"
                        strokeWidth="1"
                        transform={`scale(${0.2 + i * 0.2}) translate(${
                          100 - i * 20
                        }, ${100 - i * 20})`}
                      />
                    ))}
                  </g>
                  <g opacity="0.2">
                    <line
                      x1="200"
                      y1="200"
                      x2="200"
                      y2="50"
                      stroke="#94a3b8"
                      strokeWidth="1"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="346"
                      y2="125"
                      stroke="#94a3b8"
                      strokeWidth="1"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="346"
                      y2="275"
                      stroke="#94a3b8"
                      strokeWidth="1"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="200"
                      y2="350"
                      stroke="#94a3b8"
                      strokeWidth="1"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="54"
                      y2="275"
                      stroke="#94a3b8"
                      strokeWidth="1"
                    />
                    <line
                      x1="200"
                      y1="200"
                      x2="54"
                      y2="125"
                      stroke="#94a3b8"
                      strokeWidth="1"
                    />
                  </g>
                  <polygon
                    points="200,90 290,140 290,260 200,310 110,260 110,140"
                    fill="#fbbf24"
                    opacity="0.6"
                  />
                  <polygon
                    points="200,120 260,155 260,245 200,280 140,245 140,155"
                    fill="#f97316"
                    opacity="0.6"
                  />
                  <polygon
                    points="200,150 230,170 230,230 200,250 170,230 170,170"
                    fill="#06b6d4"
                    opacity="0.6"
                  />
                  <text
                    x="200"
                    y="40"
                    textAnchor="middle"
                    className="text-xs fill-slate-600 font-medium"
                  >
                    Phishing
                  </text>
                  <text
                    x="360"
                    y="130"
                    textAnchor="start"
                    className="text-xs fill-slate-600 font-medium"
                  >
                    Password
                  </text>
                  <text
                    x="360"
                    y="280"
                    textAnchor="start"
                    className="text-xs fill-slate-600 font-medium"
                  >
                    Network
                  </text>
                  <text
                    x="200"
                    y="370"
                    textAnchor="middle"
                    className="text-xs fill-slate-600 font-medium"
                  >
                    Encryption
                  </text>
                  <text
                    x="40"
                    y="280"
                    textAnchor="end"
                    className="text-xs fill-slate-600 font-medium"
                  >
                    Social Eng
                  </text>
                  <text
                    x="40"
                    y="130"
                    textAnchor="end"
                    className="text-xs fill-slate-600 font-medium"
                  >
                    Malware
                  </text>
                </svg>
              </div>
            </motion.div>
            <motion.div
              variants={itemVariants}
              className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-bold mb-6">Featured Challenge</h3>
              <div className="flex flex-col items-center text-center space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-600 to-purple-500 flex items-center justify-center shadow-2xl shadow-purple-600/30"
                >
                  <Lock className="w-16 h-16 text-white" />
                </motion.div>
                <div>
                  <h4 className="text-lg font-bold mb-2">
                    The Social Engineering Module
                  </h4>
                  <p className="text-sm text-slate-400 max-w-xs mx-auto">
                    Master the art of psychological manipulation used by
                    attackers.
                  </p>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg shadow-blue-600/30 transition-all"
                >
                  Start Now
                </motion.button>
              </div>
            </motion.div>
          </div>
          <motion.div
            variants={itemVariants}
            className="bg-slate-900/50 backdrop-blur border border-slate-800 rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {activities.map((activity, index) => {
                const Icon = activity.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-slate-800/50 transition-all"
                  >
                    <div
                      className={`w-10 h-10 rounded-full ${activity.iconBg} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className={`w-5 h-5 ${activity.iconColor}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm">
                        {activity.text}{' '}
                        <span className="text-blue-400 font-semibold">
                          {activity.highlight}
                        </span>
                        {activity.suffix && (
                          <span className="text-slate-300">
                            {' '}
                            {activity.suffix}
                          </span>
                        )}
                      </p>
                    </div>
                    <span className="text-xs text-slate-500 flex-shrink-0">
                      {activity.time}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}