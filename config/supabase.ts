import { createClient } from "@supabase/supabase-js";
import * as dotenv from "dotenv";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseKey = process.env.SUPABASE_KEY as string;

if (!supabaseKey || !supabaseUrl) {
  throw new Error("SUPABASE_KEY or SUPABASE_URL is not defined in the environment variables.");
}

export const db = createClient(supabaseUrl, supabaseKey);