import Link from "next/link";
import { RiGithubFill, RiTiktokFill, RiTwitterXFill } from "react-icons/ri";

export default function Socials({ size }: { size?: number }) {
	const customSize = `${size || "32"}px`;

	return (
		<div className="flex gap-2 text-left items-center">
			<Link className="opacity-50 hover:opacity-100" target="_blank" href="https://x.com">
				<RiTwitterXFill style={{ height: customSize, width: customSize }} />
			</Link>
			<Link className="opacity-50 hover:opacity-100" target="_blank" href="https://github.com">
				<RiGithubFill style={{ height: customSize, width: customSize }} />
			</Link>
			<Link className="opacity-50 hover:opacity-100" target="_blank" href="https://www.tiktok.com">
				<RiTiktokFill style={{ height: customSize, width: customSize }} />
			</Link>
		</div>
	);
}
