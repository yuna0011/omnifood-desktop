import { defineConfig, type UserConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";

const userConfig: UserConfig = {
    server: {
        host: true, port: 23000,
    }, plugins: [
        tailwindcss()
    ], build: {
        outDir: "build",
    },
};

export default defineConfig( userConfig );
