"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const navigationItems = [
  { name: "Docs", link: "/docs" },
  { name: "Guides", link: "/guides" },
  { name: "Help", link: "/help" },
];

export default function Navigation({ className }: { className?: string }) {
  const currentPath = usePathname();

  return (
    <div className={cn(className)}>
      {navigationItems.map((item) => (
        <Link key={item.name} className={cn("text-muted-foreground hover:text-foreground text-sm animate", currentPath === item.link && "text-foreground")} href={item.link}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
