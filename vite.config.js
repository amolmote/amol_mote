import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/ - deploy https://medium.com/@badreddine.boudaoud21/create-a-react-app-with-vite-and-deploy-it-on-github-48b82e19f821
export default defineConfig({
  base: "https://amolmote.github.io/amol_mote/",
  plugins: [react()],
});
