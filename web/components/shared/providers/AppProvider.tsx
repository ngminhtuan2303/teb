"use client";

import "jotai-devtools/styles.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { TRPCProvider } from "@/protocol/trpc/client";
import { ReactNode } from "react";
import { DevTools } from "jotai-devtools";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SessionProvider } from "next-auth/react";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";

export function AppProvider({
  children,
  messages,
  locale,
}: Readonly<{
  children: ReactNode;
  messages: AbstractIntlMessages;
  locale: string;
}>) {
  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <SessionProvider>
        <NuqsAdapter>
          <TRPCProvider>
            <TooltipProvider delayDuration={200}>
              {children}
              <DevTools isInitialOpen={false} />
              <ReactQueryDevtools initialIsOpen={false} />
            </TooltipProvider>
          </TRPCProvider>
        </NuqsAdapter>
      </SessionProvider>
    </NextIntlClientProvider>
  );
}
