"use client";

import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="w-full h-full center gap-8 flex-col text-center max-w-lg mx-auto">
			<div className="center flex-col gap-4">
				<h1 className="font-bold text-red-500">ERROR</h1>
				<Separator />
				<p className="!mt-0">
					We&apos;re sorry, but an error occurred while processing your request. Please try again later. If the problem persists, please contact <Link href="/support">support</Link>.
				</p>
			</div>
			<div className="flex flex-wrap center gap-4">
				<Link className={buttonVariants({ variant: "default" })} href="/">
					Return Home
				</Link>
				<Link className={buttonVariants({ variant: "outline" })} href="/contact">
					Contact Us
				</Link>
			</div>
		</div>
	);
}
