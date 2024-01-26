import { type CookieOptions, createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";
import { creds } from "./creds";
export const createClient = (cookieStore: ReturnType<typeof cookies>) => {
  return createServerClient(creds.url, creds.key, {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value;
      },
      set(name: string, value: string, options: CookieOptions) {
        try {
     
          cookieStore.set({ name, value, path: "/", sameSite: "lax", domain: process.env.NEXT_COOKIE_DOMAIN });
        } catch (error) {
          // The `set` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
      remove(name: string, options: CookieOptions) {

        try {
          cookieStore.set({ name, value: "", path: "/", sameSite: "lax", domain: process.env.NEXT_COOKIE_DOMAIN});
        } catch (error) {
          // The `delete` method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  });
};
