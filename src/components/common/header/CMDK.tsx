"use client";

import {
  CalendarIcon,
  FaceIcon,
  GearIcon,
  PersonIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, LifeBuoy, MessageCircle } from "lucide-react";
import Link from "next/link";

export function CMDK() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        onClick={() => setOpen(!open)}
        size="sm"
        variant="outline"
        className="flex flex-1 justify-between gap-2 border p-2 text-muted-foreground hover:bg-border hover:text-foreground md:max-w-64"
      >
        Search
        <kbd className="key">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Pages">
            <CommandItem asChild>
              <Link className="cursor-pointer" href="/docs">
                <CalendarIcon className="mr-2 h-4 w-4" />
                <span>Docs</span>
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link className="cursor-pointer" href="/guides">
                <FaceIcon className="mr-2 h-4 w-4" />
                <span>Guides</span>
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link className="cursor-pointer" href="/help">
                <RocketIcon className="mr-2 h-4 w-4" />
                <span>Help</span>
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Profile">
            <CommandItem asChild>
              <Link className="cursor-pointer" href="/profile">
                <PersonIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link className="cursor-pointer" href="/billing">
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link className="cursor-pointer" href="/settings">
                <GearIcon className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Help">
            <CommandItem asChild>
              <Link className="cursor-pointer" href="/discord">
                <MessageCircle className="mr-2 h-4 w-4" />
                <span>Discord</span>
              </Link>
            </CommandItem>
            <CommandItem asChild>
              <Link className="cursor-pointer" href="/help">
                <LifeBuoy className="mr-2 h-4 w-4" />
                <span>Help</span>
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
