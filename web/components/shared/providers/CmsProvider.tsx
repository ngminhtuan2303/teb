"use client";

import { Toaster } from "sonner";
import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";
import { SidebarProvider } from "@/components/ui/sidebar";

export function CmsProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class">
      <SidebarProvider>{children}</SidebarProvider>
      <Toaster />
    </ThemeProvider>
  );
}
