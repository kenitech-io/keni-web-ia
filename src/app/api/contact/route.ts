import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, company, email, service, message } = await request.json();

    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and email are required." },
        { status: 400 }
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
      to: "ugarte@kenitech.io",
      replyTo: email,
      subject: `New contact from ${name}${company ? ` (${company})` : ""}`,
      text: [
        `Name: ${name}`,
        company ? `Company: ${company}` : null,
        `Email: ${email}`,
        service ? `Service: ${service}` : null,
        message ? `\nMessage:\n${message}` : null,
      ]
        .filter(Boolean)
        .join("\n"),
    });

    return NextResponse.json(
      { message: "Thank you for your message. We'll be in touch within 24 hours." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again or email us directly." },
      { status: 500 }
    );
  }
}
