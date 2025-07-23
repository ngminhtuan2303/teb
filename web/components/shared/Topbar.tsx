import Link from "next/link";
import { getSession } from "@/server/actions/session";
import { AvatarDropdown } from "./AvatarDropdown";
import { UserAvatar } from "./UserAvatar";
import { ComponentPropsWithRef } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { label: "Sports", path: "/sports" },
  { label: "In-Play", path: "/in-play" },
  { label: "Racing", path: "/racing" },
  { label: "Casino", path: "/casino" },
  { label: "Live Casino", path: "/live-casino" },
  { label: "Virtuals", path: "/virtuals" },
  { label: "Promotions", path: "/promotions" },
];

const SHOW_AVATAR_NAME = true;

export async function Topbar({
  className,
  ...props
}: ComponentPropsWithRef<"div">) {
  const session = await getSession();

  return (
    <div
      className={cn(
        "bg-[#1a1a1a] text-white border-b border-neutral-800 h-[10vh]",
        className
      )}
      {...props}
    >
      {/* Wrapper: flex-col để chia top/bottom */}
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo bên trái */}
        <div className="flex items-center text-2xl font-bold">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/brand-new.png"
              alt="brand"
              width="120"
              height="60"
              className="w-full"
            />
          </Link>
        </div>

        {/* Right-side: Auth & Lang */}
        <div className="flex items-center gap-4 text-sm">
          {session?.user ? (
            <AvatarDropdown
              className="rounded-l-4xl flex items-center gap-1 rounded-r-md"
              showName={SHOW_AVATAR_NAME}
              user={session.user}
              variant="outline"
            >
              <UserAvatar className="h-8 w-8" user={session.user} />
              {SHOW_AVATAR_NAME ? session.user.name : null}
            </AvatarDropdown>
          ) : (
            <>
              <Link href="/login" className="hover:underline">
                Log in
              </Link>
              <Link
                href="/register"
                className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-1 rounded"
              >
                Register
              </Link>
            </>
          )}
          {/* Language Dropdown */}
          <select className="bg-transparent text-white outline-none">
            <option value="en">English</option>
          </select>
        </div>
      </div>

      {/* Bottom Nav Row */}
      <div className="border-t border-neutral-800 px-6 pb-2">
        <nav className="flex justify-center gap-5 text-sm font-medium">
          {navLinks.map(({ label, path }) => (
            <Link
              key={path}
              href={path}
              className={cn(
                "hover:text-lime-300 px-2 py-1 rounded transition",
                label === "Sports" && "bg-lime-400 text-black font-bold"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
