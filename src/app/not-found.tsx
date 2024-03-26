import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="center h-screen w-full flex-col gap-8 text-2xl">
      <div className="center gap-4 text-2xl max-sm:flex-col">
        <h1 className="text-destructive">404</h1>
        <div className="h-12 max-sm:hidden">
          <Separator orientation="vertical" />
        </div>
        <div className="w-full sm:hidden">
          <Separator orientation="horizontal" />
        </div>
        <h4>This page could not be found.</h4>
      </div>
      <div>
        <Link href="/">
          <Button variant="outline">Return to Home Page</Button>
        </Link>
      </div>
    </div>
  );
}
