import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import TemplateMark from "@/icons/TemplateMark";
import { Menu } from "lucide-react";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";

export default function SideMenu({ className }: { className?: string }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn("sm:hidden flex", className)} variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <TemplateMark />
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Navigation className="flex flex-col gap-2 *:link-l" />
        </div>
      </SheetContent>
    </Sheet>
  );
}
