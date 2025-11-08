import React, { useState } from "react";
const AvatarIcon = ({ type, username }) => {
  const avatars = {
    male: "👨‍💻",
    female: "👩‍💻",
    cat: "🐱",
    dog: "🐶",
    fox: "🦊",
    bear: "🐻",
    panda: "🐼",
    koala: "🐨",
  };

  const gradients = {
    male: "from-blue-500 to-blue-600",
    female: "from-pink-500 to-pink-600",
    cat: "from-orange-500 to-orange-600",
    dog: "from-amber-500 to-amber-600",
    fox: "from-red-500 to-red-600",
    bear: "from-brown-500 to-brown-600",
    panda: "from-slate-500 to-slate-600",
    koala: "from-gray-500 to-gray-600",
  };

  return (
    <div
      className={`w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${gradients[type]} flex items-center justify-center text-2xl md:text-3xl`}
    >
      {avatars[type]}
    </div>
  );
};
const leaderboardData = {
  daily: [
    {
      id: 1,
      rank: 1,
      username: "CyberNinja",
      score: 98500,
      avatarType: "female",
      badges: ["🛡️", "⚡"],
      trend: "up",
    },
    {
      id: 2,
      rank: 2,
      username: "GlitchHunter",
      score: 97200,
      avatarType: "male",
      badges: ["⚙️"],
      trend: "down",
    },
    {
      id: 3,
      rank: 3,
      username: "FireWall",
      score: 96850,
      avatarType: "fox",
      badges: ["🛡️"],
      trend: "up",
    },
    {
      id: 4,
      rank: 4,
      username: "CodeBreaker",
      score: 95100,
      avatarType: "male",
      badges: [],
      trend: "same",
    },
    {
      id: 5,
      rank: 5,
      username: "NetSpecter",
      score: 94330,
      avatarType: "cat",
      badges: ["🌐"],
      trend: "up",
    },
  ],
  weekly: [
    {
      id: 1,
      rank: 1,
      username: "CodeBreaker",
      score: 450000,
      avatarType: "male",
      badges: ["🏆"],
      trend: "up",
    },
    {
      id: 2,
      rank: 2,
      username: "CyberNinja",
      score: 445000,
      avatarType: "female",
      badges: ["🛡️", "⚡"],
      trend: "down",
    },
    {
      id: 3,
      rank: 3,
      username: "FireWall",
      score: 430000,
      avatarType: "fox",
      badges: ["🛡️"],
      trend: "up",
    },
    {
      id: 4,
      rank: 4,
      username: "NetSpecter",
      score: 420000,
      avatarType: "cat",
      badges: ["🌐"],
      trend: "same",
    },
    {
      id: 5,
      rank: 5,
      username: "GlitchHunter",
      score: 410000,
      avatarType: "dog",
      badges: ["⚙️"],
      trend: "down",
    },
  ],
  alltime: [
    {
      id: 1,
      rank: 1,
      username: "FireWall",
      score: 2500000,
      avatarType: "fox",
      badges: ["🛡️", "👑"],
      trend: "up",
    },
    {
      id: 2,
      rank: 2,
      username: "CyberNinja",
      score: 2400000,
      avatarType: "female",
      badges: ["🛡️", "⚡"],
      trend: "same",
    },
    {
      id: 3,
      rank: 3,
      username: "CodeBreaker",
      score: 2300000,
      avatarType: "male",
      badges: ["🏆"],
      trend: "up",
    },
    {
      id: 4,
      rank: 4,
      username: "GlitchHunter",
      score: 2200000,
      avatarType: "bear",
      badges: ["⚙️"],
      trend: "down",
    },
    {
      id: 5,
      rank: 5,
      username: "NetSpecter",
      score: 2100000,
      avatarType: "panda",
      badges: ["🌐"],
      trend: "up",
    },
  ],
};

const currentUser = {
  rank: 214,
  username: "You",
  score: 45670,
  avatarType: "koala",
  badges: ["🛡️"],
  trend: "up",
};
const LeaderboardCard = ({
  player,
  isCurrentUser = false,
  isTopPlayer = false,
}) => {
  const trendIcon =
    player.trend === "up" ? "▲" : player.trend === "down" ? "▼" : "";
  const trendColor =
    player.trend === "up"
      ? "text-green-400"
      : player.trend === "down"
      ? "text-red-400"
      : "text-slate-500";

  return (
    <div
      className={`
        relative rounded-2xl p-4 md:p-6 mb-3 md:mb-4 transition-all duration-300
        ${
          isCurrentUser
            ? "bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-2 border-purple-500 shadow-lg shadow-purple-500/30"
            : isTopPlayer
            ? "bg-gradient-to-r from-teal-900/30 to-cyan-900/30 border-2 border-teal-500/50 hover:border-teal-400 hover:shadow-lg hover:shadow-teal-500/20"
            : "bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/70"
        }
        hover:scale-[1.02] cursor-pointer
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 md:gap-4 flex-1">
          <div
            className={`
            text-2xl md:text-3xl font-bold
            ${isCurrentUser ? "text-purple-400" : "text-slate-400"}
            min-w-[40px] md:min-w-[50px]
          `}
          >
            {player.rank}
          </div>
          <div
            className={`relative ${
              isCurrentUser
                ? "ring-4 ring-purple-500 rounded-full"
                : "ring-2 ring-teal-500/50 rounded-full"
            }`}
          >
            <AvatarIcon type={player.avatarType} username={player.username} />
          </div>
          <div className="flex flex-col">
            <h3 className="text-lg md:text-xl font-bold text-white">
              {player.username}
            </h3>
            <div className="flex gap-1 text-sm md:text-base">
              {player.badges.map((badge, idx) => (
                <span key={idx}>{badge}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-xl md:text-2xl font-bold text-white">
            {player.score.toLocaleString()}
          </span>
          <span className={`text-lg md:text-xl ${trendColor}`}>
            {trendIcon}
          </span>
        </div>
      </div>
    </div>
  );
};
const TabButton = ({ active, onClick, children }) => (
  <button
    onClick={onClick}
    className={`
      px-6 py-2 md:px-8 md:py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300
      ${
        active
          ? "bg-teal-500 text-white shadow-lg shadow-teal-500/50"
          : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-200"
      }
    `}
  >
    {children}
  </button>
);
export default function Leaderboard() {
  const [activeTab, setActiveTab] = useState("global");
  const [timeFilter, setTimeFilter] = useState("daily");

  const currentLeaderboard =
    leaderboardData[timeFilter] || leaderboardData.daily;

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="sticky top-0 z-10 bg-slate-950/80 backdrop-blur-lg border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-4 md:px-6 py-4 md:py-6">
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <button className="text-slate-400 hover:text-white transition-colors p-2">
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
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
            <h1 className="text-2xl md:text-4xl font-bold">Leaderboard</h1>
            <button className="text-slate-400 hover:text-white transition-colors p-2">
              <svg
                className="w-6 h-6 md:w-8 md:h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
                />
              </svg>
            </button>
          </div>
          <div className="flex gap-4 md:gap-8 mb-6 border-b border-slate-800">
            <button
              onClick={() => setActiveTab("global")}
              className={`
                pb-3 md:pb-4 px-2 text-base md:text-lg font-semibold transition-all duration-300 relative
                ${
                  activeTab === "global"
                    ? "text-teal-400"
                    : "text-slate-500 hover:text-slate-300"
                }
              `}
            >
              Global
              {activeTab === "global" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-400 rounded-t-full" />
              )}
            </button>
            <button
              onClick={() => setActiveTab("community")}
              className={`
                pb-3 md:pb-4 px-2 text-base md:text-lg font-semibold transition-all duration-300 relative
                ${
                  activeTab === "community"
                    ? "text-teal-400"
                    : "text-slate-500 hover:text-slate-300"
                }
              `}
            >
              Community
              {activeTab === "community" && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-400 rounded-t-full" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-6 md:py-8">
        <div className="flex gap-3 md:gap-4 mb-6 md:mb-8 overflow-x-auto pb-2">
          <TabButton
            active={timeFilter === "daily"}
            onClick={() => setTimeFilter("daily")}
          >
            Daily
          </TabButton>
          <TabButton
            active={timeFilter === "weekly"}
            onClick={() => setTimeFilter("weekly")}
          >
            Weekly
          </TabButton>
          <TabButton
            active={timeFilter === "alltime"}
            onClick={() => setTimeFilter("alltime")}
          >
            All-Time
          </TabButton>
        </div>
        <div className="space-y-2">
          {currentLeaderboard.map((player) => (
            <LeaderboardCard
              key={player.id}
              player={player}
              isTopPlayer={player.rank === 1}
            />
          ))}
        </div>
        <div className="flex justify-center gap-2 my-6 md:my-8">
          <div className="w-2 h-2 rounded-full bg-teal-400"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
          <div className="w-2 h-2 rounded-full bg-slate-600"></div>
        </div>
        <div className="mt-8 md:mt-12">
          <LeaderboardCard player={currentUser} isCurrentUser={true} />
        </div>
      </div>
    </div>
  );
}
