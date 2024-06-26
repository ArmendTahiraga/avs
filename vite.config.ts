import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	build: {
		chunkSizeWarningLimit: 14000,
		assetsInlineLimit: 0,
		rollupOptions: {
			output: {
				manualChunks: undefined,
			},
		},
	},
});
