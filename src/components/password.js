import { useState, useMemo } from "react";

export default function PasswordStrengthArena() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const analyzePassword = (pwd) => {
    if (!pwd) {
      return {
        length: 0,
        hasLower: false,
        hasUpper: false,
        hasDigits: false,
        hasSymbols: false,
        entropy: 0,
        strength: 0,
        strengthLabel: "Weak",
        timeToCrack: "N/A",
      };
    }

    const length = pwd.length;
    const hasLower = /[a-z]/.test(pwd);
    const hasUpper = /[A-Z]/.test(pwd);
    const hasDigits = /\d/.test(pwd);
    // ✅ Fixed regex (removed useless escapes)
    // eslint-disable-next-line no-useless-escape
    const hasSymbols = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?`~]/.test(pwd);

    let charsetSize = 0;
    if (hasLower) charsetSize += 26;
    if (hasUpper) charsetSize += 26;
    if (hasDigits) charsetSize += 10;
    if (hasSymbols) charsetSize += 32;

    let entropy = length * Math.log2(charsetSize || 1);

    const hasRepeats = /(.)\1{2,}/.test(pwd);
    const hasSequence =
      /(abc|bcd|cde|def|123|234|345|456|567|678|789|qwe|wer|ert|rty|tyu|yui|uio|iop|asd|sdf|dfg|fgh|ghj|hjk|jkl|zxc|xcv|cvb|vbn|bnm)/i.test(
        pwd
      );

    if (hasRepeats) entropy *= 0.75;
    if (hasSequence) entropy *= 0.8;

    let strength = 0;
    let strengthLabel = "Weak";
    if (entropy >= 80) {
      strength = 3;
      strengthLabel = "Unbreakable";
    } else if (entropy >= 60) {
      strength = 2;
      strengthLabel = "Strong";
    } else if (entropy >= 36) {
      strength = 1;
      strengthLabel = "Moderate";
    }

    const possibleCombinations = Math.pow(charsetSize, length);
    const guessesPerSecond = 1e10;
    const secondsToCrack = possibleCombinations / (2 * guessesPerSecond);

    let timeToCrack = "Instantly";
    if (secondsToCrack < 1) timeToCrack = "Instantly";
    else if (secondsToCrack < 60) timeToCrack = "Seconds";
    else if (secondsToCrack < 3600) timeToCrack = "Minutes";
    else if (secondsToCrack < 86400) timeToCrack = "Hours";
    else if (secondsToCrack < 2592000) timeToCrack = "Days";
    else if (secondsToCrack < 31536000) timeToCrack = "Months";
    else if (secondsToCrack < 3153600000) timeToCrack = "Years";
    else timeToCrack = "Centuries+";

    return {
      length,
      hasLower,
      hasUpper,
      hasDigits,
      hasSymbols,
      entropy,
      strength,
      strengthLabel,
      timeToCrack,
    };
  };

  const analysis = useMemo(() => analyzePassword(password), [password]);

  const suggestions = useMemo(() => {
    const hints = [];
    if (analysis.length < 12) {
      hints.push("Longer is better: aim for 12+ characters");
    }
    if (!analysis.hasDigits) {
      hints.push("Add a number to make it stronger");
    }
    if (!analysis.hasUpper || !analysis.hasLower) {
      hints.push("Mix uppercase and lowercase letters");
    }
    if (!analysis.hasSymbols) {
      hints.push("Include special symbols (!@#$%^&*)");
    }
    if (hints.length === 0) {
      hints.push("Excellent! Your password is very strong");
    }
    return hints.slice(0, 3);
  }, [analysis]);

  const strengthLevels = ["Weak", "Moderate", "Strong", "Unbreakable"];
  const strengthColors = ["#EF4444", "#F59E0B", "#10B981", "#2B6CFF"];

  return (
    <main className="min-h-screen" style={{ backgroundColor: "#0B1220" }}>
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex items-center gap-4 mb-8">
          <button
            className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B6CFF] rounded-lg"
            aria-label="Go back"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <h1 className="text-2xl font-bold text-white">
            Password Strength Arena
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* LEFT SIDE */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2
                className="text-3xl md:text-4xl font-bold text-center lg:text-left mb-2"
                style={{ color: "#E7ECF5" }}
              >
                Test Your Password's Strength
              </h2>
              <p
                className="text-center lg:text-left"
                style={{ color: "#9FB1CC" }}
              >
                Enter your password to see how secure it really is
              </p>
            </div>

            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#0F1422",
                borderWidth: "1px",
                borderColor: "#1F2A44",
                boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
              }}
            >
              <label
                className="block text-sm font-medium mb-3"
                style={{ color: "#E7ECF5" }}
              >
                Enter Password
              </label>

              <div
                className="flex items-center gap-3 px-4 rounded-xl mb-6 focus-within:ring-2 focus-within:ring-[#2B6CFF] focus-within:ring-offset-2"
                style={{
                  backgroundColor: "#0B1220",
                  borderWidth: "1px",
                  borderColor: "#1F2A44",
                  height: "48px",
                  ringOffsetColor: "#0F1422",
                }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password..."
                  className="flex-1 bg-transparent outline-none text-white placeholder-slate-500"
                  aria-label="Password input"
                />
                <button
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-white transition-colors focus-visible:outline-none"
                  aria-pressed={showPassword}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {strengthLevels.map((level, idx) => (
                  <button
                    key={level}
                    className="py-3 px-2 rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2B6CFF]"
                    style={{
                      backgroundColor:
                        idx <= analysis.strength
                          ? strengthColors[idx]
                          : "#0B1220",
                      color: idx <= analysis.strength ? "#fff" : "#9FB1CC",
                      borderWidth: "1px",
                      borderColor:
                        idx <= analysis.strength
                          ? strengthColors[idx]
                          : "#1F2A44",
                      opacity: idx <= analysis.strength ? 1 : 0.5,
                    }}
                  >
                    {level}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#0F1422",
                borderWidth: "1px",
                borderColor: "#1F2A44",
                boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
              }}
            >
              <div className="mb-6 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop"
                  alt="Cybersecurity visualization"
                  className="w-full h-48 object-cover"
                />
              </div>

              <div className="text-center">
                <p
                  className="text-sm font-medium mb-2"
                  style={{ color: "#9FB1CC" }}
                >
                  Estimated Time to Crack:
                </p>
                <p
                  className="text-4xl font-bold transition-all duration-300"
                  style={{
                    color: "#FF2E8B",
                    textShadow: "0 0 20px rgba(255, 46, 139, 0.3)",
                  }}
                  aria-live="polite"
                >
                  {analysis.timeToCrack}
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-5 space-y-6">
            {/* Checklist */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#0F1422",
                borderWidth: "1px",
                borderColor: "#1F2A44",
                boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "#E7ECF5" }}
              >
                Password Checklist
              </h3>

              <div className="space-y-4">
                {[
                  {
                    label: "At least 12 characters",
                    pass: analysis.length >= 12,
                  },
                  {
                    label: "Includes uppercase letters",
                    pass: analysis.hasUpper,
                  },
                  {
                    label: "Includes lowercase letters",
                    pass: analysis.hasLower,
                  },
                  { label: "Includes numbers", pass: analysis.hasDigits },
                  { label: "Includes symbols", pass: analysis.hasSymbols },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition"
                  >
                    <div className="flex-shrink-0">
                      {item.pass ? (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle cx="12" cy="12" r="10" fill="#10B981" />
                          <path
                            d="M8 12l2 2 4-4"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle cx="12" cy="12" r="10" fill="#EF4444" />
                          <path
                            d="M8 8l8 8M16 8l-8 8"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: item.pass ? "#10B981" : "#9FB1CC" }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Suggestions */}
            <div
              className="rounded-2xl p-6 md:p-8"
              style={{
                backgroundColor: "#0F1422",
                borderWidth: "1px",
                borderColor: "#1F2A44",
                boxShadow: "0 12px 36px rgba(0,0,0,0.45)",
              }}
            >
              <h3
                className="text-xl font-bold mb-6"
                style={{ color: "#E7ECF5" }}
              >
                Improve Your Shield
              </h3>

              <div className="space-y-3">
                {suggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl hover:scale-[1.02] hover:shadow-lg transition"
                    style={{
                      backgroundColor: "rgba(139, 92, 246, 0.1)",
                      borderWidth: "1px",
                      borderColor: "rgba(139, 92, 246, 0.2)",
                    }}
                  >
                    <p className="text-sm" style={{ color: "#C4B5FD" }}>
                      {suggestion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
