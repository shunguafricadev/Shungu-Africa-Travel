import { NextResponse } from "next/server";

import { newsletterRateLimit } from "@/lib/security/rateLimit";
import { createSupabaseServerClient } from "@/lib/supabase/server";

function cleanString(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

export async function POST(request: Request) {
  try {
    const forwardedFor = request.headers.get("x-forwarded-for");
    const ip =
      forwardedFor?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    const rateLimit = await newsletterRateLimit.limit(ip);

    if (!rateLimit.success) {
      const retryAfter = Math.max(
        1,
        Math.ceil((rateLimit.reset - Date.now()) / 1000),
      );

      return NextResponse.json(
        { message: "Too many signup attempts. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(retryAfter) },
        },
      );
    }

    let body: { email?: unknown; consent?: unknown };

    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const email = cleanString(body.email, 254).toLowerCase();

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      body.consent !== true
    ) {
      return NextResponse.json(
        {
          message:
            body.consent === true
              ? "Please enter a valid email address."
              : "Please confirm that you agree to receive email updates.",
        },
        { status: 400 },
      );
    }

    const supabase = createSupabaseServerClient();
    const { error } = await supabase
      .from("newsletter_subscribers")
      .upsert(
        {
          email,
          consented_at: new Date().toISOString(),
          source: "homepage",
        },
        { onConflict: "email" },
      );

    if (error) {
      console.error("Supabase newsletter signup error:", error);

      if (error.code === "42P01") {
        return NextResponse.json(
          {
            message:
              "Newsletter signups are not configured yet. Apply the newsletter subscribers migration and try again.",
          },
          { status: 503 },
        );
      }

      return NextResponse.json(
        { message: "We could not save your signup. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "You're subscribed. Look out for updates from Shungu Africa.",
    });
  } catch (error) {
    console.error("Newsletter signup API error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}
