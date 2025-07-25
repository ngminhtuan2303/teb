"use client";

import Image from "next/image";

const match = {
  home: "Brann",
  away: "FC Red Bull Salzburg",
  date: "July 23, 2025",
  time: "05:00 PM",
  competition: "UEFA Champions League",
  homeLogo:
    "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg", // Cờ Anh
  awayLogo: "https://upload.wikimedia.org/wikipedia/en/0/03/Flag_of_Italy.svg", // Cờ Ý
};

export default function MatchHeader({
  home_team,
  away_team,
  sport_title,
  commence_time,
}: {
  home_team: string;
  away_team: string;
  sport_title: string;
  commence_time: string;
}) {
  return (
    <div className="bg-black text-white h-full">
      {/* Title bar */}
      <div className="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 text-sm font-semibold">
        <button
          aria-label="Favorite match"
          className="text-gray-400 hover:text-yellow-400 cursor-pointer select-none"
          type="button"
        >
          ★
        </button>
        <span>
          {home_team} vs {away_team}
        </span>
      </div>

      {/* Background image with overlay */}
      <div className="relative w-full h-36">
        <Image
          src="/images/1.jpg" // Đường dẫn ảnh sân vận động đen trắng của bạn
          alt="Stadium"
          fill
          className="object-cover opacity-30"
          priority
        />

        {/* Centered match info card */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#22222a] bg-opacity-95 rounded-md px-8 py-4 flex items-center gap-16 w-fit">
            {/* Home team */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 relative">
                <Image
                  src={match.homeLogo}
                  alt="United Kingdom"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <div className="text-sm font-semibold">{home_team}</div>
            </div>

            {/* Match info */}
            <div className="flex flex-col items-center text-center text-gray-400 text-xs space-y-1">
              <div>{sport_title}</div>
              <div>{commence_time}</div>
              {/* <div>{match.time}</div> */}
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-4 w-4 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17v-6a2 2 0 114 0v6m-4 0h4"
                  />
                </svg>
              </div>
            </div>

            {/* Away team */}
            <div className="flex flex-col items-center space-y-2">
              <div className="w-16 h-16 relative">
                <Image
                  src={match.awayLogo}
                  alt="Italy"
                  fill
                  className="object-contain rounded"
                />
              </div>
              <div className="text-sm font-semibold">{away_team}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
