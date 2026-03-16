import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const BLOCKED_DOMAINS = [
  "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com",
  "msn.com", "yahoo.com", "yahoo.co.uk", "yahoo.es", "yahoo.fr", "yahoo.de",
  "aol.com", "icloud.com", "me.com", "mac.com", "protonmail.com", "proton.me",
  "zoho.com", "yandex.com", "yandex.ru", "mail.ru", "gmx.com", "gmx.de",
  "tutanota.com", "fastmail.com",
];

export async function POST(request: NextRequest) {
  try {
    const { email, note, score, maxScore, level, answers } =
      await request.json();

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

    const pct = Math.round((score / maxScore) * 100);

    const answerLines = answers
      ? Object.entries(answers)
          .map(([key, val]) => `  ${key}: ${val}/3`)
          .join("\n")
      : "N/A";

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
      subject: `[Lead] Health check: ${pct}% (${level})`,
      text: [
        `New health check lead from kenitech.io/healthcheck`,
        ``,
        `Email: ${email}`,
        `Domain: ${domain}`,
        `Score: ${score}/${maxScore} (${pct}%)`,
        `Level: ${level}`,
        `Time: ${new Date().toISOString()}`,
        ``,
        `Breakdown:`,
        answerLines,
        note ? `\nNote: ${note}` : null,
        ``,
        `Reply to this email to reach them directly.`,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json(
      { message: "Request received." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Health check lead error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
