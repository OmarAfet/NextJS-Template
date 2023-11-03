import Link from 'next/link';

export default function Home() {
	return (
		<div className="flex flex-col gap-2">
			<div className="header center">Home Page</div>
			<div className="subtitle center">made by <Link className="ml-1 btn-click" href="https://github.com/OmarAfet">OmarAfet</Link></div>
		</div>
	);
}
