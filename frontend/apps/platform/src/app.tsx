import {  createClient } from "@supabase/supabase-js";
import "./index.css";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_KEY!,
  
);
// 

export default function App() {

  const cookietoken = document.cookie
    .split("; ")
    .find((cookie) => cookie.startsWith("sb-rhjhhxmhlieeezbpmtgd-auth-token="))
    ?.split("=")[1]!
    .replace("-", "+")
    .replace("_", "/");

  const val = decodeURIComponent(cookietoken!);
  const callbackUrl = `${import.meta.env.VITE_BASE_BLOG_URL}login?callback=/`;
  try {
    const access = JSON.parse(val)["access/token"];

    supabase.auth
      .getUser(access)
      .then((user) => {
        console.log("user", user);
      })
      .catch(() => {
        window.location.href =callbackUrl
      });
  } catch (e) {
    window.location.href =callbackUrl;
  }

  return <div>Logged in!</div>;
}