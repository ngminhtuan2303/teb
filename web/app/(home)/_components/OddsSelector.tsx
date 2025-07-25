"use client";

import { useState } from "react";

const fullTimeOptions = ["1", "x", "2"];
const goalsOptions = ["Over", "Under", "GL"];
const bothScoreOptions = ["Yes", "No"];

export function OddsSelector() {
  const [selectedMarket1, setSelectedMarket1] = useState("Full Time");
  const [selectedMarket2, setSelectedMarket2] = useState("Total Goals (ML)");
  const [selectedMarket3, setSelectedMarket3] = useState("Both Teams To Score");

  return (
    <div className="bg-[#1a1a1f] p-4 text-sm text-white w-full">
      {/* Dùng flex justify-end để căn phải */}
      <div className="flex justify-end">
        {/* Container chia 3 cột đều nhau */}
        <div className="grid grid-cols-3 gap-x-6 w-full max-w-3xl">
          {/* Column 1 */}
          <div>
            <select
              value={selectedMarket1}
              onChange={(e) => setSelectedMarket1(e.target.value)}
              className="w-full bg-[#2c2c33] text-white px-3 py-2 rounded-md mb-2"
            >
              <option>Full Time</option>
              <option>1st Half</option>
              <option>2nd Half</option>
            </select>
            <div className="flex justify-around bg-[#2a2a33] rounded-md py-2 text-gray-300 font-medium">
              {fullTimeOptions.map((opt) => (
                <div key={opt} className="w-8 text-center cursor-pointer hover:text-white">
                  {opt}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <select
              value={selectedMarket2}
              onChange={(e) => setSelectedMarket2(e.target.value)}
              className="w-full bg-[#2c2c33] text-white px-3 py-2 rounded-md mb-2"
            >
              <option>Total Goals (ML)</option>
              <option>Over/Under</option>
              <option>Exact Goals</option>
            </select>
            <div className="flex justify-around bg-[#2a2a33] rounded-md py-2 text-gray-300 font-medium">
              {goalsOptions.map((opt) => (
                <div key={opt} className="w-14 text-center cursor-pointer hover:text-white">
                  {opt}
                </div>
              ))}
            </div>
          </div>

          {/* Column 3 */}
          <div>
            <select
              value={selectedMarket3}
              onChange={(e) => setSelectedMarket3(e.target.value)}
              className="w-full bg-[#2c2c33] text-white px-3 py-2 rounded-md mb-2"
            >
              <option>Both Teams To Score</option>
              <option>Clean Sheet</option>
              <option>First To Score</option>
            </select>
            <div className="flex justify-around bg-[#2a2a33] rounded-md py-2 text-gray-300 font-medium">
              {bothScoreOptions.map((opt) => (
                <div key={opt} className="w-10 text-center cursor-pointer hover:text-white">
                  {opt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
