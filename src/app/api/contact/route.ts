import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // TODO: Wire up to email service (SendGrid, Resend, etc.)
  console.log("Contact form submission:", body);

  return NextResponse.json(
    {
      message:
        "Thank you for your message. We'll be in touch within 24 hours.",
    },
    { status: 200 }
  );
}
