"use client";

import { SPORT } from "@/lib/fake_data/sports";
import { useState } from "react";
import {
  FaFutbol,
  FaBasketballBall,
  FaBaseballBall,
  FaTableTennis,
} from "react-icons/fa";
import {
  GiTennisCourt,
  GiAmericanFootballBall,
  GiCricketBat,
  GiVolleyballBall,
//   GiHandball,
} from "react-icons/gi";

const topTabs = ["Top Leagues", "Starting soon", "In-Play", "Search"];

const sportsTabs = [
  { label: "Football", icon: <FaFutbol /> },
  { label: "Basketball", icon: <FaBasketballBall /> },
  { label: "Baseball", icon: <FaBaseballBall /> },
  { label: "Tennis", icon: <GiTennisCourt /> },
//   { label: "Handball", icon: <GiHandball /> },
  { label: "American ...", icon: <GiAmericanFootballBall /> },
  { label: "Table Tennis", icon: <FaTableTennis /> },
  { label: "Cricket", icon: <GiCricketBat /> },
  { label: "Volleyball", icon: <GiVolleyballBall /> },
];

const timeFilters = ["Today", "1h", "3h", "6h", "12h", "4 days"];

export function SportsNav() {
  const [activeTopTab, setActiveTopTab] = useState("Top Leagues");
  const [activeSport, setActiveSport] = useState("Football");
  const [activeTime, setActiveTime] = useState("Today");

  return (
    <div className="bg-[#1a1a1f] px-4 py-3 space-y-3">
      {/* Top Tabs */}
      <div className="flex gap-2">
        {topTabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTopTab(tab)}
            className={`px-4 py-1.5 rounded-md text-sm font-medium transition ${
              activeTopTab === tab
                ? tab === "Starting soon"
                  ? "bg-lime-400 text-black"
                  : "bg-neutral-700 text-white"
                : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sports Tabs */}
      <div className="flex overflow-x-auto gap-4 py-2">
        {SPORT.map((sport) => (
          <button
            key={sport.group}
            onClick={() => setActiveSport(sport.group)}
            className={`flex flex-col items-center justify-center cursor-pointer px-4 py-2 rounded-md min-w-[80px] transition ${
              activeSport === sport.group
                ? "bg-[#2a2a35] text-lime-300"
                : "bg-[#1f1f28] text-gray-300 hover:bg-[#2a2a35]"
            }`}
          >
            <div className="text-xl mb-1"><FaFutbol /></div>
            <div className="text-[13px] font-medium truncate text-center">
              {sport.group}
            </div>
          </button>
        ))}
      </div>

      {/* Time Filters */}
      <div className="flex gap-2">
        {timeFilters.map((time) => (
          <button
            key={time}
            onClick={() => setActiveTime(time)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition ${
              activeTime === time
                ? "bg-[#fa5021] text-white"
                : "bg-[#2c2c33] text-gray-300 hover:bg-[#3c3c44]"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
}
