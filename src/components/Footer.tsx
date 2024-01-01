// import Link from "next/link";
import Link from "next/link";
import Logo from "@/src/components/Logo";
import Image from "next/image";
import Socials from "./Socials";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="p-8 footer">
			<div className="xl:grid grid-cols-3 gap-8">
				<div className="flex flex-col gap-4">
					<div className="flex gap-4">
						<Image quality={100} priority src="/Github Logo.png" className="w-24 h-24 p-2 opacity-80 dark:opacity-100 invert-0 dark:invert" width={344} height={344} alt="Logo" />
						<div>
							<Logo className="title" />
							<div className="grid gap-2 text-sm text-opacity-80 dark:text-opacity-50">
								<div className="leading-8">
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
								<div>
									&copy; {year}{" "}
									<Link href="" className="clickable-button">
										Omar Afet
									</Link>
								</div>
							</div>
						</div>
					</div>
					<Socials size={24} />
				</div>
				<div className="md:grid col-span-2 grid-cols-2 gap-8 mt-16 xl:mt-0">
					<div className="grid grid-cols-2 gap-8">
						<div>
							<div className="head">Solutions</div>
							<div className="mt-6 flex flex-col">
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Marketing
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Analytics
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Commerce
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Insights
									</Link>
								</div>
							</div>
						</div>
						<div>
							<div className="head">Support</div>
							<div className="mt-6  flex flex-col">
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Pricing
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Documentation
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Guides
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#-status" className="clickable-button">
										API Status
									</Link>
								</div>
							</div>
						</div>
					</div>
					<div className="grid grid-cols-2 gap-8 mt-8 md:mt-0">
						<div>
							<div className="head">Company</div>
							<div className="mt-6  flex flex-col">
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										About
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Blog
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Jobs
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Press
									</Link>
								</div>
							</div>
						</div>
						<div>
							<div className="head">Legal</div>
							<div className="mt-6  flex flex-col">
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Partners
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Legal
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Claim
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Privacy
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="clickable-button">
										Terms
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
