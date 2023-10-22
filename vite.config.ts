import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            input: {
                staticCSS: "/src/static/**/*.css", // Path to your CSS file
            },
        },
    },
});
