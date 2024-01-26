import { createBrowserClient } from "@supabase/ssr";
import { creds } from "./creds";

export const createClient = () => createBrowserClient(creds.url, creds.key);
