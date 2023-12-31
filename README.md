# Astro Starter 

## Adding TailwindCSS 
```bash 
npx astro add tailwind

yarn add -D @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio tailwindcss-debug-screens

```

```javascript
// tailwind.config.mjs
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
``` 
### Add styles.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

body {
   @apply bg-black
}
```
```javascript 
// add import to layouts/Layout.astro
---
import "../styles.css";
---
```

Done :blush: