"use client";

import { FaLock, FaCalendarAlt, FaChartBar } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { ChevronsRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { selectScoreAtom } from "../store";
import { api } from "@/protocol/trpc/client";

const matches = [
  {
    country: "Tanzania",
    league: "Tanzanian Premier League",
    leagueId: 1, // Thêm id cho league để quản lý trạng thái favorite riêng
    matches: [
      {
        id: 1,
        date: "Jul 8",
        time: "13:00",
        homeTeam: "Fountain Gate FC",
        awayTeam: "Stand United",
        odds: [
          { value: "1.50", trend: "down" },
          { value: "4.10", trend: "down" },
          { value: "4.75", trend: "down" },
          { value: "1.80", trend: "up" },
          { value: "2.00", trend: "down" },
        ],
      },
    ],
  },
  {
    country: "Lebanon",
    league: "Premier League",
    leagueId: 2,
    matches: [
      {
        id: 2,
        date: "Jul 8",
        time: "12:00",
        homeTeam: "Al Ahed Beirut",
        awayTeam: "Tripoli SC",
        odds: [
          { value: "1.22", trend: "up" },
          { value: "5.00", trend: "down" },
          { value: "10.00", trend: "down" },
          { value: "1.57", trend: "down" },
          { value: "2.35", trend: "down" },
        ],
      },
    ],
  },
];

export function MatchList() {
  const router = useRouter();
  const [selectScore] = useAtom(selectScoreAtom);
  // trạng thái favorite league lưu array các leagueId
  const [favoriteLeagues, setFavoriteLeagues] = useState<string>("");
  // trạng thái favorite match lưu array các match id
  const [favoriteMatches, setFavoriteMatches] = useState<string[]>([]);
  const { data: list_score } = api.sports.list_score.useQuery(
    {
      sport_key: selectScore,
    },
    {
      enabled: !!selectScore, // ✅ ngăn gọi API nếu selectScore là falsy
    }
  );
  if (!selectScore) return null;

  const toggleFavoriteLeague = (leagueId: string) => {
    setFavoriteLeagues(leagueId);
  };

  const toggleFavoriteMatch = (matchId: string) => {
    setFavoriteMatches((prev) =>
      prev.includes(matchId)
        ? prev.filter((id) => id !== matchId)
        : [...prev, matchId]
    );
  };
  console.log("lidy", list_score);

  const isLeagueFav = favoriteLeagues.includes(list_score?.[0].id ?? "");
  return (
    <div className="bg-[#1a1a1f] text-white text-sm w-full p-4 space-y-4">
      {/* {list_score?.map((score) => {

        return ( */}
      <div className="gap-4">
        {/* League title with clickable star */}
        <div className="flex justify-between items-center min-w-[220px] pt-2 text-gray-300 font-semibold text-[13px] mb-1">
          {/* Left section: star, country, league */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => toggleFavoriteLeague(list_score?.[0].id ?? "")}
              className={`text-sm px-4 cursor-pointer select-none ${
                isLeagueFav ? "text-yellow-400" : "text-gray-600"
              }`}
              aria-label={isLeagueFav ? "Unfavorite league" : "Favorite league"}
              title={isLeagueFav ? "Unfavorite league" : "Favorite league"}
              type="button"
            >
              ★
            </button>
            <span className="mr-1">🌍</span>
            {list_score?.[0].sport_title}
          </div>

          {/* Right section: icon */}
          <ChevronsRight className="w-4 h-4 text-gray-400 mr-2" />
        </div>

        {/* Matches list */}
        <div className="flex flex-col flex-1 space-y-2">
          {list_score?.map((match) => {
            const isMatchFav = favoriteMatches.includes(match.id);

            return (
              <div
                key={match.id}
                className="bg-[#26262d] rounded-md px-4 py-3 flex items-center justify-between"
              >
                {/* Left: Star + match info */}
                <div className="flex items-start gap-3 min-w-[260px]">
                  <button
                    onClick={() => toggleFavoriteMatch(match.id)}
                    className={`text-md cursor-pointer leading-none select-none ${
                      isMatchFav ? "text-yellow-400" : "text-gray-600"
                    }`}
                    aria-label={
                      isMatchFav ? "Unfavorite match" : "Favorite match"
                    }
                    title={isMatchFav ? "Unfavorite" : "Favorite"}
                    type="button"
                  >
                    ★
                  </button>

                  {/* <button
                        onClick={() => alert("Chart icon clicked!")}
                        className="text-gray-600 hover:text-gray-300 text-lg mt-1 select-none"
                        aria-label="Match statistics"
                        title="Match statistics"
                        type="button"
                      >
                        <FaChartBar />
                      </button> */}

                  <div className="flex flex-col items-center text-gray-400 text-xs pt-1">
                    {/* <FaCalendarAlt className="mb-1 text-[12px]" /> */}
                    {/* <div>{match.date}</div>
                        <div>{match.time}</div> */}
                    <div>{match.commence_time}</div>
                  </div>

                  <div
                    className="flex flex-col items-start cursor-pointer"
                    onClick={() => router.push(`/home/sport/${match.id}`)}
                  >
                    <div className="font-medium text-[13px]">
                      {match.home_team}
                    </div>
                    <div className="text-gray-400 text-[13px]">
                      {match.away_team}
                    </div>
                  </div>
                </div>

                {/* Odds */}
                <div className="flex gap-2 items-center flex-wrap">
                  {match.scores.map((odd, k) => (
                    <div
                      key={k}
                      className="bg-[#1f1f27] px-3 py-1 rounded-md text-center flex flex-col items-center w-12"
                    >
                      <span className="text-sm">{odd.score}</span>
                      {odd.name === "up" ? (
                        <IoMdArrowDropup className="text-green-400 text-lg" />
                      ) : (
                        <IoMdArrowDropdown className="text-red-400 text-lg" />
                      )}
                    </div>
                  ))}

                  {/* Ratio */}
                  <div className="bg-[#1f1f27] px-2 py-1 rounded-md text-gray-400 text-xs min-w-[48px] text-center">
                    2.5 ▼
                  </div>

                  {/* Locked odds */}
                  <div className="bg-[#1f1f27] px-3 py-2 rounded-md text-center w-12 flex justify-center items-center text-gray-500">
                    <FaLock size={12} />
                  </div>
                  <div className="bg-[#1f1f27] px-3 py-2 rounded-md text-center w-12 flex justify-center items-center text-gray-500">
                    <FaLock size={12} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* );
      })} */}
    </div>
  );
}
