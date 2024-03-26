import { cn } from "@/lib/utils";
import Link from "next/link";

interface VercelMarkProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  size?: number;
}

export default function VercelMark({ className, size = 64, ...props }: VercelMarkProps) {
  return (
    <Link href="/">
      <svg className={cn("w-auto overflow-visible fill-foreground", className)} aria-label="Vercel logomark" height={size} role="img" viewBox="0 0 74 64" {...props}>
        <path d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"></path>
      </svg>
    </Link>
  );
}
