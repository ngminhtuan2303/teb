"use client";

import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export function HomeProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" forcedTheme="light">
      {children}
      <Toaster />
    </ThemeProvider>
  );
}
