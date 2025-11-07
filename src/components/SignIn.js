import React, { useState } from "react";
import { motion } from "framer-motion";

const CyberQuestLogin = () => {
  const [email, setEmail] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const robotVariants = {
    hidden: { opacity: 0, scale: 0.8, y: -30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center px-4 py-8">
      <motion.div
        className="w-full max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Robot Image */}
        <motion.div
          className="flex justify-center mb-8"
          variants={robotVariants}
          whileHover="hover"
        >
          <div className="relative">
            <div className="w-56 h-56 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
              {/* Robot SVG */}
              <svg
                viewBox="0 0 200 200"
                className="w-40 h-40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Antenna */}
                <line
                  x1="85"
                  y1="35"
                  x2="85"
                  y2="45"
                  stroke="#4A5568"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <line
                  x1="115"
                  y1="35"
                  x2="115"
                  y2="45"
                  stroke="#4A5568"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <circle cx="85" cy="32" r="4" fill="#4A5568" />
                <circle cx="115" cy="32" r="4" fill="#4A5568" />

                {/* Head */}
                <rect
                  x="65"
                  y="45"
                  width="70"
                  height="50"
                  rx="10"
                  fill="#F7FAFC"
                />

                {/* Eyes */}
                <circle cx="85" cy="70" r="8" fill="#2D3748" />
                <circle cx="115" cy="70" r="8" fill="#2D3748" />
                <circle cx="87" cy="68" r="3" fill="#F7FAFC" />
                <circle cx="117" cy="68" r="3" fill="#F7FAFC" />

                {/* Body */}
                <rect
                  x="70"
                  y="100"
                  width="60"
                  height="60"
                  rx="8"
                  fill="#F7FAFC"
                />
                <circle
                  cx="100"
                  cy="130"
                  r="12"
                  fill="#CBD5E0"
                  stroke="#4A5568"
                  strokeWidth="2"
                />
                <circle cx="100" cy="130" r="6" fill="#4A5568" />

                {/* Arms */}
                <g>
                  {/* Left Arm */}
                  <rect
                    x="50"
                    y="105"
                    width="15"
                    height="8"
                    rx="4"
                    fill="#CBD5E0"
                  />
                  <rect
                    x="48"
                    y="113"
                    width="8"
                    height="25"
                    rx="4"
                    fill="#CBD5E0"
                  />
                  <ellipse cx="52" cy="140" rx="6" ry="8" fill="#F7FAFC" />

                  {/* Right Arm */}
                  <rect
                    x="135"
                    y="105"
                    width="15"
                    height="8"
                    rx="4"
                    fill="#CBD5E0"
                  />
                  <rect
                    x="144"
                    y="113"
                    width="8"
                    height="25"
                    rx="4"
                    fill="#CBD5E0"
                  />
                  <ellipse cx="148" cy="140" rx="6" ry="8" fill="#F7FAFC" />
                </g>

                {/* Legs */}
                <g>
                  {/* Left Leg */}
                  <rect
                    x="78"
                    y="160"
                    width="12"
                    height="10"
                    rx="2"
                    fill="#CBD5E0"
                  />
                  <rect
                    x="78"
                    y="170"
                    width="12"
                    height="8"
                    rx="6"
                    fill="#F7FAFC"
                  />

                  {/* Right Leg */}
                  <rect
                    x="110"
                    y="160"
                    width="12"
                    height="10"
                    rx="2"
                    fill="#CBD5E0"
                  />
                  <rect
                    x="110"
                    y="170"
                    width="12"
                    height="8"
                    rx="6"
                    fill="#F7FAFC"
                  />
                </g>
              </svg>
            </div>
            <motion.div
              className="absolute -bottom-2 -right-2 w-16 h-16 bg-blue-500 rounded-full blur-xl opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>

        {/* Welcome Text */}
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-white text-center mb-3"
          variants={itemVariants}
        >
          Welcome to
          <br />
          CyberQuest
        </motion.h1>

        <motion.p
          className="text-slate-400 text-center text-lg mb-12"
          variants={itemVariants}
        >
          Your adventure in cybersecurity starts here.
        </motion.p>

        {/* Login Form */}
        <motion.div variants={itemVariants}>
          {/* Google Sign In Button */}
          <motion.button
            className="w-full bg-slate-800 hover:bg-slate-700 text-white font-semibold py-4 px-6 rounded-xl flex items-center justify-center gap-3 mb-6 shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 40px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            <span>Continue with Google</span>
          </motion.button>

          {/* OR Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-700"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="bg-slate-900 px-4 text-slate-500 text-sm">
                OR
              </span>
            </div>
          </div>

          {/* Email Input */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-slate-300 text-sm font-medium mb-3"
            >
              Email Address
            </label>
            <motion.div
              className={`relative transition-all duration-300 ${
                isEmailFocused ? "transform scale-[1.01]" : ""
              }`}
              whileHover={{ scale: 1.01 }}
            >
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <svg
                  className="w-5 h-5 text-slate-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsEmailFocused(true)}
                onBlur={() => setIsEmailFocused(false)}
                placeholder="you@email.com"
                className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </motion.div>
          </div>

          {/* Continue Button */}
          <motion.button
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300"
            whileHover={{
              scale: 1.02,
              boxShadow: "0 10px 40px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            Continue with Email
          </motion.button>

          {/* Terms and Privacy */}
          <motion.p
            className="text-center text-sm text-slate-500 mt-6"
            variants={itemVariants}
          >
            By continuing, you agree to our{" "}
            <motion.a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>{" "}
            and{" "}
            <motion.a
              href="#"
              className="text-blue-400 hover:text-blue-300 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            .
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CyberQuestLogin;
