import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import {
  signupUser,
  clearError,
  clearSuccess,
} from "../redux/slices/authSlice";

const CyberQuestLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isUsernameFocused, setIsUsernameFocused] = useState(false);

  const dispatch = useDispatch();
  const { loading, error, success } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        dispatch(clearError());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [error, dispatch]);

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        dispatch(clearSuccess());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, dispatch]);

  const handleEmailSignup = () => {
    if (!email || !password || !username) {
      return;
    }

    dispatch(signupUser({ email, password, username }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const robotVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex">
      <motion.div
        className="w-full lg:w-1/2 flex items-center justify-center px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full max-w-md">
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-white mb-3"
            variants={itemVariants}
          >
            Welcome to
            <br />
            CyberQuest
          </motion.h1>

          <motion.p
            className="text-slate-400 text-lg mb-12"
            variants={itemVariants}
          >
            Your adventure in cybersecurity starts here.
          </motion.p>
          <motion.div variants={itemVariants}>
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
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block text-slate-300 text-sm font-medium mb-3"
              >
                Username
              </label>
              <motion.div
                className={`relative transition-all duration-300 ${
                  isUsernameFocused ? "transform scale-[1.01]" : ""
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
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onFocus={() => setIsUsernameFocused(true)}
                  onBlur={() => setIsUsernameFocused(false)}
                  placeholder="cyberwarrior"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>
            </div>
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
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-slate-300 text-sm font-medium mb-3"
              >
                Password
              </label>
              <motion.div
                className={`relative transition-all duration-300 ${
                  isPasswordFocused ? "transform scale-[1.01]" : ""
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
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setIsPasswordFocused(true)}
                  onBlur={() => setIsPasswordFocused(false)}
                  placeholder="••••••••"
                  className="w-full bg-slate-800 border border-slate-700 text-white placeholder-slate-500 rounded-xl py-4 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                />
              </motion.div>
            </div>
            <motion.button
              onClick={handleEmailSignup}
              disabled={loading || !email || !password || !username}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-semibold py-4 px-6 rounded-xl shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{
                scale: loading ? 1 : 1.02,
                boxShadow: loading ? "" : "0 10px 40px rgba(59, 130, 246, 0.4)",
              }}
              whileTap={{ scale: loading ? 1 : 0.98 }}
            >
              {loading ? "Loading..." : "Continue with Email"}
            </motion.button>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-green-900 border border-green-700 rounded-xl"
              >
                <p className="text-green-300 text-sm font-medium">
                  Account created successfully!
                </p>
              </motion.div>
            )}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-900 border border-red-700 rounded-xl"
              >
                <p className="text-red-300 text-sm font-medium">{error}</p>
              </motion.div>
            )}
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
        </div>
      </motion.div>
      <motion.div
        className="hidden lg:flex lg:w-1/2 items-center justify-center p-12"
        variants={imageVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="relative"
          variants={robotVariants}
          whileHover="hover"
        >
          <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
            <svg
              viewBox="0 0 200 200"
              className="w-56 h-56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
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
              <rect
                x="65"
                y="45"
                width="70"
                height="50"
                rx="10"
                fill="#F7FAFC"
              />
              <circle cx="85" cy="70" r="8" fill="#2D3748" />
              <circle cx="115" cy="70" r="8" fill="#2D3748" />
              <circle cx="87" cy="68" r="3" fill="#F7FAFC" />
              <circle cx="117" cy="68" r="3" fill="#F7FAFC" />
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
              <g>
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
              <g>
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
            className="absolute -bottom-2 -right-2 w-20 h-20 bg-blue-500 rounded-full blur-xl opacity-50"
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
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CyberQuestLogin;
