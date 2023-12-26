import Link from "next/link";
import PingIcon from "@/src/components/PingIcon";
import Logo from "@/src/components/Logo";

export default function Hero() {
	return (
		<div className="relative isolate py-32 mx-2">
			<div className="mx-auto max-w-2xl">
				<div className="hidden sm:mb-8 sm:flex sm:justify-center">
					<div className="flex items-center gap-2 relative rounded-full px-3 py-1 text-sm leading-6 border-button">
						BETA VERSION
						<PingIcon />
					</div>
				</div>
				<div className="text-center">
					<h1 className="font-bold tracking-tight sm:text-6xl">Welcome to <Logo className="sm:text-6xl" /></h1>
					<div className="mt-6 leading-8 text-default-50">
						A{" "}
						<Link href="https://nextjs.org/" className="clickable-button">
							Next.js
						</Link>{" "}
						+{" "}
						<Link href="https://tailwindcss.com/" className="clickable-button">
							Tailwindcss
						</Link>{" "}
						template created by{" "}
						<Link href="https://github.com/omarafet" className="clickable-button">
							@OmarAfet
						</Link>
					</div>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<Link href="#" className="primary-button">
							Get started
						</Link>
						<Link href="#" className="secondary-button">
							Learn more
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
