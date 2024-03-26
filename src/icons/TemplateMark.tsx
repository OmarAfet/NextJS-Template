import Link from "next/link";

interface NextMarkProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

export default function TemplateMark({ size = 32, ...props }: NextMarkProps) {
  return (
    <Link href="/">
      <svg {...props} xmlns="http://www.w3.org/2000/svg" height={size} fill="currentColor" viewBox="0 0 24 22.5">
        <path d="M0 12 18 1.5v21L0 12Z" />
        <path d="M24 12 6 1.5v21L24 12Z" />
        <path d="m12 0 10.5 18h-21L12 0Z" />
      </svg>
    </Link>
  );
}
