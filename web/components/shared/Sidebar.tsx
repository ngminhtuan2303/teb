"use client";

import { FaFutbol } from "react-icons/fa";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { Tooltip, TooltipContent } from "../ui/tooltip";
import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { api } from "@/protocol/trpc/client";
import { useAtom } from "jotai";
import { selectScoreAtom } from "@/app/(home)/store";
import { useRouter } from "next/navigation";

export function Sidebar() {
  const router = useRouter();
  const { data: queryData } = api.sports.list_sport.useQuery();
  console.log("data", queryData);
  const [selectedSport, setSelectedSport] = useState("");

  const [selectScore, setSelectScore] = useAtom(selectScoreAtom);

  // const { data: list_score } = api.sports.list_score.useQuery({
  //   sport_key: selectScore,
  // });

  useEffect(() => {
    if (queryData && queryData.length > 0 && !selectedSport) {
      setSelectedSport(queryData[0].group);
    }
  }, [queryData, selectedSport]);
  return (
    <div className="flex h-[90vh]">
      {/* Left Sidebar */}
      <aside className="w-20 bg-[#1a1923] flex flex-col overflow-y-auto items-center pt-4 text-gray-400 text-[13px] border-r border-neutral-800">
        <div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-[#2a2935] mb-6">
          <Menu size={18} />
        </div>

        {/* Navigation icons */}
        <nav className="flex flex-col gap-6 items-center w-full">
          {queryData?.map((groupName) => {
            const isActive = selectedSport === groupName.group;
            return (
              <button
                key={groupName.group}
                onClick={() => {
                  setSelectedSport(groupName.group);
                  router.push("/home");
                }}
                className={clsx(
                  "flex flex-col items-center justify-center cursor-pointer gap-1 hover:text-white transition-colors w-full",
                  isActive
                    ? "bg-[#323043] text-green-400"
                    : "hover:bg-[#2a2935] text-gray-400"
                )}
              >
                <div className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-[#2a2935] mx-auto">
                  <FaFutbol />
                </div>
                <span className="text-[12px] font-medium text-center px-1">
                  {groupName.group}
                </span>
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Right Sidebar */}
      <aside className="w-64 bg-[#252433] border-r border-neutral-800 p-4 text-white overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">{selectedSport}</h2>
        <div className="flex flex-col gap-2">
          {queryData
            ?.find((f) => f.group === selectedSport)
            ?.sports.map((item) => (
              <Tooltip key={item.key}>
                <TooltipTrigger
                  onClick={() => {
                    setSelectScore(item.key);
                    router.push("/home");
                  }}
                  className="flex items-center w-full cursor-pointer gap-3 text-left px-3 py-2 bg-[#1f1e2a] hover:bg-[#323043] rounded-md text-sm text-gray-300 hover:text-white transition"
                >
                  <span className="text-lg">🌐</span>
                  <span>{item.title}</span>
                </TooltipTrigger>
                <TooltipContent>{item.description}</TooltipContent>
              </Tooltip>
            ))}
        </div>
      </aside>
    </div>
  );
}
