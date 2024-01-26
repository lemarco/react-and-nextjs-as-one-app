import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

console.log(process.env);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0",
    port: 10001,
  },
});
