// import Link from "next/link";
import Link from "next/link";
import Logo from "./Logo";
import Socials from "./Socials";

export default function Footer() {
	const date = new Date().getFullYear();

	return (
		<footer className="p-8 pt-32 border-t border-default">
			<div className="xl:grid grid-cols-3 gap-8 mx-8">
				<div>
					<Logo />
					<div className="text-sm mt-8">A Next.js + Tailwindcss Template made by OmarAfet</div>
					<Socials size={24} className="mt-8" />
				</div>
				<div className="md:grid col-span-2 grid-cols-2 gap-8 mt-16 xl:mt-0">
					<div className="grid grid-cols-2 gap-8">
						<div>
							<div className="font-bold">Solutions</div>
							<div className="mt-6 flex flex-col">
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Marketing
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Analytics
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Commerce
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Insights
									</Link>
								</div>
							</div>
						</div>
						<div>
							<div className="font-bold">Support</div>
							<div className="mt-6  flex flex-col">
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Pricing
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Documentation
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Guides
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#-status" className="btn-click">
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
									<Link href="#" className="btn-click">
										About
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Blog
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Jobs
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Press
									</Link>
								</div>
							</div>
						</div>
						<div>
							<div className="font-bold">Legal</div>
							<div className="mt-6  flex flex-col">
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Partners
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Legal
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Claim
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Privacy
									</Link>
								</div>
								<div className="mt-4">
									<Link href="#" className="btn-click">
										Terms
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="text-1 text-sm mt-24 pt-8 border-t border-default">&copy; {date} Logo, Inc. All rights reserved.</div>
		</footer>
	);
}
