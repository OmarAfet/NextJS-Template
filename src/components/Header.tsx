"use client";

import { useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import Logo from "./Logo";
import SwitchThemeButton from "./SwitchThemeButton";

const links = [
	{
		name: "Features",
		href: "#",
	},
	{
		name: "Marketplace",
		href: "#",
	},
	{
		name: "Company",
		href: "#",
	},
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header>
			<nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
				<div className="flex lg:flex-1">
					<Logo />
				</div>
				<div className="flex lg:hidden">
					<div className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer" onClick={() => setMobileMenuOpen(true)}>
						<span className="sr-only">Open main menu</span>
						<HiMenuAlt3 className="h-10 w-10 p-1 rounded-md hover:bg-OpenColor-gray-1 dark:hover:bg-OpenColor-gray-8" aria-hidden="true" />
					</div>
				</div>
				<Popover.Group className="hidden lg:flex lg:gap-x-12">
					{links.map((link, index) => (
						<Link key={index} href={link.href} className="text-sm font-semibold btn-click">
							{link.name}
						</Link>
					))}
				</Popover.Group>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<SwitchThemeButton />
				</div>
			</nav>
			<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<div className="fixed inset-0 z-10" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white dark:bg-OpenColor-gray-9 p-6 sm:max-w-sm sm:ring-1 sm:ring-OpenColor-gray-9/10">
					<div className="flex items-center justify-between">
						<Link href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Logo</span>
							<Logo />
						</Link>
						<div className="-m-2.5 rounded-md p-2.5 cursor-pointer" onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<HiX className="h-10 w-10 p-1 rounded-md hover:bg-OpenColor-gray-1 dark:hover:bg-OpenColor-gray-8" aria-hidden="true" />
						</div>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
								{links.map((link, index) => (
									<Link key={index} href={link.href} className="-mx-3 block rounded-lg px-3 py-2 font-semibold hover:bg-OpenColor-gray-1 dark:hover:bg-OpenColor-gray-8">
										{link.name}
									</Link>
								))}
							</div>
							<div className="-mx-3 py-4 center">
								<SwitchThemeButton />
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
