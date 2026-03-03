import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const isUserSite = repoName.endsWith(".github.io");

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? (isUserSite ? "/" : `/${repoName}/`) : "/",
});
