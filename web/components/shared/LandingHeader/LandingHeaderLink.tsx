"use client";

import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentPropsWithRef } from "react";

const buttonStyle = cva(
  "ring-offset-background focus-visible:ring-ring [&_svg]:size-4 font-kumbh-sans relative inline-flex items-start justify-start gap-2 whitespace-nowrap rounded-md py-0.5 text-sm font-medium text-[#6F7A99] transition-colors duration-300 after:absolute after:-bottom-0.5 after:h-[2px] after:w-[20px] after:origin-bottom-right after:scale-x-0 after:bg-blue-500 after:transition-transform after:duration-300 after:ease-in-out hover:text-blue-500 hover:after:origin-bottom-left hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:text-zinc-400 dark:hover:text-zinc-50",
  {
    variants: {
      active: {
        true: "text-blue-500 after:origin-bottom-left after:scale-x-100 dark:text-zinc-50",
        false: null,
      },
    },
  },
);

interface Props extends ComponentPropsWithRef<"button"> {
  conf: { label: string; path: string };
}
export function LandingHeaderLink({
  conf,
  className,
  ...props
}: Readonly<Props>) {
  const { path, label } = conf;
  const pathname = usePathname();
  const isActive = pathname.startsWith(path);

  return (
    <Link href={path}>
      <button
        className={cn(buttonStyle({ active: isActive, className }))}
        data-id={label}
        type="button"
        {...props}
      >
        {label}
      </button>
    </Link>
  );
}
