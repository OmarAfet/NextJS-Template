import TemplateMark from "@/icons/TemplateMark";
import { ThemeSwitcher } from "./ThemeSwitcher";

export default function Footer() {
  return (
    // Replace justify-between with flex-col for a column layout.
    <footer className="border-t text-xs p-4 flex justify-between gap-12"> 
      <TemplateMark size={24} />
      <ThemeSwitcher className="h-6 w-6 *:p-1" />
      {/* <div className="grid sm:grid-cols-3 grid-cols-2 gap-8">
        <div className="flex flex-col gap-4">
          <div className="font-bold">Resources</div>
          <div className="flex flex-col gap-2 *:text-muted-foreground hover:*:text-foreground *:animate">
            <Link href="#">Docs</Link>
            <Link href="#">Learn</Link>
            <Link href="#">Showcase</Link>
            <Link href="#">Blog</Link>
            <Link href="#">Analytics</Link>
            <Link href="#">Next.js Conf</Link>
            <Link href="#">DX Platform</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold">More</div>
          <div className="flex flex-col gap-2 *:text-muted-foreground hover:*:text-foreground *:animate">
            <Link href="#">Next.js Commerce</Link>
            <Link href="#">Contact Sales</Link>
            <Link href="#">GitHub</Link>
            <Link href="#">Releases</Link>
            <Link href="#">Telemetry</Link>
            <Link href="#">Governance</Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="font-bold">Legal</div>
          <div className="flex flex-col gap-2 *:text-muted-foreground hover:*:text-foreground *:animate">
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div> */}
    </footer>
  );
}
