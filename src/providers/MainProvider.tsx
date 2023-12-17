import ThemeProviders from "@/src/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";

export default function MainProvider({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProviders>
			{children}
			<Toaster position="top-center" reverseOrder={false} />
		</ThemeProviders>
	);
}
