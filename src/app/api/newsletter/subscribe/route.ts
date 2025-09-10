import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    let email = "";

    if (contentType.includes("application/json")) {
      const body = await request.json();
      email = body.email ?? "";
    } else if (contentType.includes("application/x-www-form-urlencoded")) {
      const form = await request.formData();
      email = String(form.get("email") || "");
    } else if (contentType.includes("multipart/form-data")) {
      const form = await request.formData();
      email = String(form.get("email") || "");
    } else {
      // Fallback: try formData
      const form = await request.formData();
      email = String(form.get("email") || "");
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email" }, { status: 400 });
    }

    // TODO: integrate with your email provider (e.g., Mailchimp, ConvertKit, Resend)
    console.log("[newsletter] subscribe:", email);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

