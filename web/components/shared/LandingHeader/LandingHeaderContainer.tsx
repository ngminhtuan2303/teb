import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { IconTechvify } from "@/public/icons/IconTechvify";
import { ROUTE } from "@/lib/constants";
import { Search } from "lucide-react";
import { LoginButton } from "./LoginButton";
import { LandingHeaderLink } from "./LandingHeaderLink";
import { MobileHamburger } from "./MobileHamburger";
import { HEADER_LINKS } from "./constants";
import { MobileSearch } from "./MobileSearch";
import { MobileSearchCommand } from "./MobileSearchCommand";

export const HEADER_HEIGHT_PX = 68;

export async function LandingHeaderContainer() {
  return (
    <nav
      className="fixed top-0 z-10 flex w-full items-center justify-center bg-white/25 px-4 backdrop-blur-sm supports-[backdrop-filter]:bg-white/25"
      style={{ minHeight: HEADER_HEIGHT_PX }}
    >
      <div className="container flex items-center">
        <Link className="mt-3" href={ROUTE.HOME.root}>
          <IconTechvify />
        </Link>

        <div className="ml-4 hidden gap-4 md:ml-8 md:flex md:gap-8">
          {HEADER_LINKS.map((tab) => (
            <LandingHeaderLink conf={tab} key={tab.label} />
          ))}
        </div>

        <div className="ml-auto flex items-center gap-2 md:gap-4">
          {/* icon search input */}
          <MobileSearch />

          {/* hamburger for both input and links */}
          <MobileHamburger />

          {/* full search input */}
          <div className="relative hidden w-full lg:block lg:w-auto">
            <div className="absolute left-2 top-1 p-1.5">
              <Search className="text-muted-foreground h-5 w-5" />
            </div>
            <Input
              className="placeholder:font-anthrotrial w-full rounded-full border-none bg-[#F8F8F8] pl-12 focus-visible:ring-blue-300 md:w-[280px]"
              placeholder="What are you looking for?"
            />
          </div>
          <Button
            className="hidden rounded-full text-sm font-medium md:block"
            variant="ghost"
          >
            EN
          </Button>

          <LoginButton />
        </div>
      </div>
      <MobileSearchCommand />
    </nav>
  );
}
