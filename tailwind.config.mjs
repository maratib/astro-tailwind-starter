/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		debugScreens: {
			position: ["bottom", "right"],
		},
		container: {
			padding: {
				DEFAULT: "1rem",
				sm: "2rem",
				lg: "4rem",
				xl: "5rem",
				"2xl": "6rem",
			},
		},
		fontFamily: {
			'sans': ['system-ui', 'ui-sans-serif'],
		},
		extend: {
			// fontFamily: { headline: ["Oswald"] },
			colors: {
				bgBody: "#F3F5FD",
				primary: "#2960FF",
				gradient: "#4f71c6",
			},
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/aspect-ratio"),
		require("tailwindcss-debug-screens"),
	],
}
