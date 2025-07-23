"use client";

import { FaCalendarAlt, FaCrown, FaStar, FaSearch } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const sidebarItems = [
  { label: "Prematch", icon: <FaCalendarAlt />, href: "/in-play" },
  { label: "Top Leagues", icon: <FaCrown />, href: "/top-leagues" },
  { label: "Favourites", icon: <FaStar />, href: "/favourites" },
  { label: "Search", icon: <FaSearch />, href: "/search" },
];

export function Sidebar() {
  const [isSubSidebarOpen, setIsSubSidebarOpen] = useState(false);

  return (
    <aside className="relative w-24 bg-[#1f1f1f] h-[90vh] flex flex-col border-r border-neutral-800 pt-4">
      <nav className="flex-1 flex flex-col items-center space-y-6 text-xs text-gray-300">
        {/* Menu button */}
        <button
          onClick={() => setIsSubSidebarOpen(!isSubSidebarOpen)}
          className="flex flex-col items-center space-y-1 text-white"
        >
          <Menu size={20} />
        </button>

        {/* Sidebar items */}
        {sidebarItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex flex-col items-center space-y-1 hover:text-white transition-colors"
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-[11px]">{item.label}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
