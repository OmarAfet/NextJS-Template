import type { Config } from "tailwindcss";

const config: Config = {
	mode: "jit",
	darkMode: "class",
	content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				main: "#6161f2",
			},
		},
	},
	plugins: [],
};
export default config;
