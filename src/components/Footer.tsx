// import Link from "next/link";
import Link from "next/link";
import Logo from "@/src/components/Logo";
import Socials from "@/src/components/Socials";

export default function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="p-8 pt-32 border-t">
			<div className="xl:grid grid-cols-3 gap-8 mx-8">
				<div>
					<Logo className="text-4xl" />
					<div className="text-sm mt-8">
						<p className="mt-6 leading-8 text-default-50">
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
						</p>
					</div>
					<Socials size={24} className="mt-8" />
				</div>
				<div className="md:grid col-span-2 grid-cols-2 gap-8 mt-16 xl:mt-0">
					<div className="grid grid-cols-2 gap-8">
						<div>
							<div className="font-bold">Solutions</div>
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
							<div className="font-bold">Support</div>
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
							<div className="font-bold">Company</div>
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
							<div className="font-bold">Legal</div>
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
			<div className="text-sm mt-24 pt-8 border-t text-default-60">
				&copy; {year} <Logo className="text-sm font-normal" />, Inc. All rights reserved.
			</div>
		</footer>
	);
}
