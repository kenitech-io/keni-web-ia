import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { BLOCKED_DOMAINS } from "@/lib/config";

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Email is required." },
        { status: 400 }
      );
    }

    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain || BLOCKED_DOMAINS.includes(domain)) {
      return NextResponse.json(
        { message: "Please use a work email address." },
        { status: 422 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "martin@kenitech.io",
      replyTo: email,
      subject: `[Lead] Newsletter signup: ${email}`,
      text: [
        `New newsletter subscriber from kenitech.io/blog`,
        ``,
        `Email: ${email}`,
        `Domain: ${domain}`,
        `Time: ${new Date().toISOString()}`,
        ``,
        `Reply to this email to reach them directly.`,
      ].join("\n"),
    });

    return NextResponse.json(
      { message: "You're in. Check your inbox soon." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Newsletter signup error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
