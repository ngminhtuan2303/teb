"use client";

import { signOut } from "next-auth/react";
import { useEffect } from "react";

export default function Page({ error }: { error: Error }) {
  useEffect(() => {
    if (error.message.startsWith("UNAUTHORIZED")) {
      signOut();
    }
  }, [error]);

  return null;
}
