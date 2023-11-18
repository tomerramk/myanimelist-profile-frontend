import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [react()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@entities": path.resolve(__dirname, "./src/entities"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@pages": path.resolve(__dirname, "./src/pages"),
		},
	},
});
