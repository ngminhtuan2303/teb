"use client";
import { Button, ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSetAtom } from "jotai";
import { Search } from "lucide-react";
import { mobileSearchOpen } from "./store";

export function MobileSearch({ className, ...props }: Readonly<ButtonProps>) {
  const setOpen = useSetAtom(mobileSearchOpen);
  return (
    <Button
      className={cn(
        "[&_svg]:size-5 text-muted-foreground hidden md:block lg:hidden",
        className,
      )}
      onClick={() => setOpen((open) => !open)}
      site="home"
      variant="ghost"
      {...props}
    >
      <Search />
    </Button>
  );
}
