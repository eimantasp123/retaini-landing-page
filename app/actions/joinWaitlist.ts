"use server";

import { z } from "zod";
import { supabase } from "@/lib/supabase";
import { getTranslations } from "next-intl/server";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Initialize rate limiter
const ratelimit = new Ratelimit({
  redis,
  limiter: Ratelimit.fixedWindow(10, "1 h"), // 10 requests per 1 hour
  analytics: false,
});

// Define the email schema using Zod
const emailSchema = z.string().email();

/**
 * Function to join the waitlist.
 * @param {FormData} formData - The form data containing the email and IP address.
 * @returns {Promise<{ success: boolean; error?: string; message?: string }>} - The result of the operation.
 */
export async function joinWaitlist(formData: FormData) {
  const t = await getTranslations("HomePage");
  const email = formData.get("email");

  // Get client IP from headers
  const ip = formData.get("ip")?.toString() || "anonymous";

  // 2️⃣ Check rate limit
  const { success } = await ratelimit.limit(ip);
  if (!success) {
    return { success: false, error: t("Waitlist.error.tooManyRequests") };
  }

  // Validate email
  const validated = emailSchema.safeParse(email);
  if (!validated.success) {
    return { success: false, error: t("Waitlist.error.invalidEmail") };
  }

  // Check if email already exists in the database
  const { data: existing } = await supabase
    .from("waitlist")
    .select("id")
    .eq("email", validated.data)
    .single();

  // If email already exists, return an error message
  if (existing) {
    return { success: false, error: t("Waitlist.error.duplicateEmail") };
  }

  // Insert email into the database
  const { error } = await supabase
    .from("waitlist")
    .insert({ email: validated.data });

  // If there was an error inserting the email, return an error message
  if (error) {
    return { success: false, error: t("Waitlist.error.failedToSave") };
  }

  // Return success message
  return { success: true, message: t("Waitlist.success") };
}
