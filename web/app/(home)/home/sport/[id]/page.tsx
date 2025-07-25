import { useState } from "react";
import MatchHeader from "../_components/MatchHeader";
import { PageDetail } from "./_component/PageDetail";

const match = {
  home: "Venezia",
  away: "AC Dolomiti Bellunesi",
  date: "July 23, 2025",
  time: "03:30 PM",
};

const tabs = [
  "Betbooster",
  "All",
  "Favorites",
  "Parlay Builder",
  "Main",
  "Goals",
  "Players",
  "Corners",
  "Cards",
  "Score",
  "Halves",
  "Asians",
];

const matchResultOdds = [
  { label: "Venezia", value: "1.07" },
  { label: "Draw", value: "10.00" },
  { label: "AC Dolomiti Bellunesi", value: "23.00" },
];

export default async function MatchScreenDetail({
  params,
}: Readonly<{
  params: Promise<Record<"id", string>>;
}>) {
  const id = (await params).id;
  return (
    <PageDetail id={id} />
    // <section className="p-1">
    //   <div className="bg-[#1a1a1a] text-white min-h-screen p-4">
    //     {/* Match Header */}
    //     {/* <div className="bg-[#2a2a2a] rounded-md p-4 mb-4">
    //     <div className="flex justify-between items-center text-center">
    //       <div className="text-lg font-semibold">{match.home}</div>
    //       <div className="text-sm text-gray-400">
    //         <div>Club Friendlies</div>
    //         <div>{match.date}</div>
    //         <div>{match.time}</div>
    //       </div>
    //       <div className="text-lg font-semibold">{match.away}</div>
    //     </div>
    //   </div> */}
    //     <MatchHeader />

    //     {/* Tabs */}
    //     <div className="flex gap-2 overflow-x-auto mb-4">
    //       {tabs.map((tab) => (
    //         <button
    //           key={tab}
    //           onClick={() => setActiveTab(tab)}
    //           className={`px-4 py-2 text-sm rounded ${
    //             activeTab === tab
    //               ? "bg-lime-400 text-black font-semibold"
    //               : "bg-[#2f2f2f] text-gray-300 hover:bg-[#444]"
    //           }`}
    //         >
    //           {tab}
    //         </button>
    //       ))}
    //     </div>

    //     {/* Match Result Odds */}
    //     <div className="bg-[#2a2a2a] p-4 rounded-md mb-4">
    //       <h3 className="text-md font-semibold mb-2">Match Result</h3>
    //       <div className="grid grid-cols-3 gap-2">
    //         {matchResultOdds.map((item) => (
    //           <div
    //             key={item.label}
    //             className="bg-[#1f1f1f] p-3 rounded text-center"
    //           >
    //             <div>{item.label}</div>
    //             <div className="text-lime-300 text-lg font-bold">
    //               {item.value}
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>

    //     {/* Placeholder for other betting sections */}
    //     <div className="bg-[#2a2a2a] p-4 rounded-md mb-4">
    //       <h3 className="text-md font-semibold mb-2">Total Goals</h3>
    //       <div className="flex justify-between text-sm text-gray-300">
    //         <span>
    //           Over 2.5 - <span className="text-white font-bold">1.22</span>
    //         </span>
    //         <span>
    //           Under 2.5 - <span className="text-white font-bold">4.00</span>
    //         </span>
    //       </div>
    //     </div>

    //     <div className="bg-[#2a2a2a] p-4 rounded-md mb-4">
    //       <h3 className="text-md font-semibold mb-2">Double Chance</h3>
    //       <div className="grid grid-cols-2 gap-2">
    //         <div className="bg-[#1f1f1f] p-3 rounded text-center">
    //           <div>X2</div>
    //           <div className="text-lime-300 text-lg font-bold">7.50</div>
    //         </div>
    //         <div className="bg-[#1f1f1f] p-3 rounded text-center">
    //           <div>12</div>
    //           <div className="text-lime-300 text-lg font-bold">1.03</div>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Add other sections like Correct Score and Half/Full Time similarly */}
    //   </div>
    // </section>
  );
}
