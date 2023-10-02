"use client";

import Link from "next/link";
import AllPages from "./AllPages";
import Logo from "./Logo";
import SwitchThemeButton from "./SwitchThemeButton";
import { RiTwitterXFill, RiInstagramFill, RiTiktokFill } from "react-icons/ri";

export default function Footer() {
	return (
		<>
			<div className="flex flex-col mt-64">
				<hr />
				<div className="flex flex-col md:flex-row items-start gap-16 justify-between mx-32 my-16">
					<div className="flex flex-col gap-2">
						<Logo />
						<div className="flex gap-2 text-left items-start">
							<Link className="opacity-50 hover:opacity-100" target="_blank" href="https://x.com">
								<RiTwitterXFill />
							</Link>
							<Link className="opacity-50 hover:opacity-100" target="_blank" href="https://instagram.com">
								<RiInstagramFill />
							</Link>
							<Link className="opacity-50 hover:opacity-100" target="_blank" href="https://tiktok.com">
								<RiTiktokFill />
							</Link>
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="title">Pages</div>
						<div className="flex flex-col gap-2 text-left items-start">
							<AllPages />
						</div>
					</div>
					<div className="flex flex-col gap-2">
						<div className="title">Appearance</div>
						<div className="flex flex-col gap-2 text-left items-start">
							<div className="flex gap-2 items-center">
								<div>Switch Theme</div>
								<SwitchThemeButton />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
