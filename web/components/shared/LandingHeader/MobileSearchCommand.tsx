"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useAtom } from "jotai";
import { mobileSearchOpen } from "./store";
import { api } from "@/protocol/trpc/client";
import Link from "next/link";
import { ROUTE } from "@/lib/constants";
import { Loader2 } from "lucide-react";

export function MobileSearchCommand() {
  const [open, setOpen] = useAtom(mobileSearchOpen);
  const { data: industries, isLoading } = api.industry.list.useQuery({
    pageIndex: 1,
    pageSize: 100,
  });

  return (
    <CommandDialog onOpenChange={setOpen} open={open}>
      <CommandInput placeholder="What are you looking for..." />
      <CommandList>
        <CommandGroup heading="Industries">
          {industries?.industries.map(({ id, name, str_id }) => (
            <Link href={ROUTE.HOME.products.industrySearch(str_id)} key={id}>
              <CommandItem>{name}</CommandItem>
            </Link>
          ))}
        </CommandGroup>
        {isLoading ? (
          <CommandEmpty className="flex items-center justify-center gap-2 py-6">
            <Loader2 className="h-5 w-5 animate-spin text-center" />
            Loading...
          </CommandEmpty>
        ) : (
          <CommandEmpty>No results found.</CommandEmpty>
        )}
      </CommandList>
    </CommandDialog>
  );
}
