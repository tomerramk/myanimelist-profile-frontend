/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#2e51a2",
				accent: {
					1: "rgb(var(--color-accent1) / <alpha-value>)",
					2: "rgb(var(--color-accent2) / <alpha-value>)",
				},
				bkg: "rgb(var(--color-bkg) / <alpha-value>)",
				content: {
					50: "rgb(var(--color-content-50) / <alpha-value>)",
					100: "rgb(var(--color-content-100) / <alpha-value>)",
					200: "rgb(var(--color-content-200) / <alpha-value>)",
				},
			},
			textColor: {
				primary: "rgb(var(--color-txtcolor) / <alpha-value>)",
			},
			placeholderColor: (theme) => theme("textColor"),
			screens: {
				xs: "475px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
				"2xl": "1920px",
				"3xl": "2560px",
				"4xl": "2880px",
				"5xl": "3200px",
				"6xl": "3840px",
				"7xl": "4096px",
			},
			keyframes: {
				fadeIn: {
					"0%": { opacity: "0" },
					"100%": { opacity: "75" },
				},
				fadeOut: {
					"0%": { opacity: "75" },
					"100%": { opacity: "0" },
				},
				slideInRight: {
					"0%": { transform: "translateX(100%)" },
					"100%": { transform: "translateX(0)" },
				},
				slideOutRight: {
					"0%": { transform: "translateX(0)" },
					"100%": { transform: "translateX(100%)" },
				},
			},
			animation: {
				fadeIn: "fadeIn 0.3s",
				fadeOut: "fadeOut 0.3s",
				slideInRight: "slideInRight 0.3s ease-out",
				slideOutRight: "slideOutRight 0.3s ease-out",
			},
		},
	},
	plugins: [],
};
