import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const BLOCKED_DOMAINS = [
  "gmail.com",
  "googlemail.com",
  "outlook.com",
  "hotmail.com",
  "live.com",
  "msn.com",
  "yahoo.com",
  "yahoo.co.uk",
  "yahoo.es",
  "yahoo.fr",
  "yahoo.de",
  "aol.com",
  "icloud.com",
  "me.com",
  "mac.com",
  "protonmail.com",
  "proton.me",
  "zoho.com",
  "yandex.com",
  "yandex.ru",
  "mail.ru",
  "gmx.com",
  "gmx.de",
  "tutanota.com",
  "fastmail.com",
];

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

    const htmlBody = `
<div style="font-family: Inter, -apple-system, system-ui, sans-serif; max-width: 600px; margin: 0 auto; color: #1A1A1A;">
  <p style="font-size: 17px; line-height: 1.7; color: #444;">
    Here is the full architecture reference you requested.
  </p>

  <p style="font-size: 17px; line-height: 1.7; color: #444;">
    This is the infrastructure we build for engineering teams: a complete internal development platform
    where developers push code and everything else is automated.
  </p>

  <img
    src="https://kenitech.io/architecture-full.png"
    alt="Full architecture reference"
    style="width: 100%; max-width: 600px; margin: 32px 0; border: 1px solid #E5E5E5; border-radius: 8px;"
  />

  <h2 style="font-size: 20px; font-weight: 400; color: #000; margin-top: 32px;">What each component does</h2>

  <h3 style="font-size: 16px; font-weight: 500; color: #000; margin-top: 24px;">SaaS Layer</h3>
  <p style="font-size: 15px; line-height: 1.7; color: #444;">
    Managed services that run outside your servers: <strong>Tailscale</strong> for encrypted mesh networking
    between all nodes, <strong>Keeper</strong> for centralized secret management,
    <strong>Cloud Identity</strong> for SSO and access control, <strong>GitHub</strong> as the single source
    of truth for code, and <strong>S3-compatible backup</strong> for off-site disaster recovery.
  </p>

  <h3 style="font-size: 16px; font-weight: 500; color: #000; margin-top: 24px;">Core Server: CI/CD</h3>
  <p style="font-size: 15px; line-height: 1.7; color: #444;">
    The central server handles continuous integration and delivery. <strong>Build</strong> compiles and
    packages your code into container images. <strong>Store</strong> holds those images in a private registry.
    <strong>Deploy</strong> orchestrates rollouts to dev and prod environments. Zero manual steps between
    git push and production.
  </p>

  <h3 style="font-size: 16px; font-weight: 500; color: #000; margin-top: 24px;">Core Server: Observability</h3>
  <p style="font-size: 15px; line-height: 1.7; color: #444;">
    <strong>Monitoring</strong> collects metrics from every service and displays them in real-time dashboards
    (Prometheus + Grafana). <strong>Alerts</strong> sends notifications through PagerDuty, Slack, or email
    when thresholds are breached, before your users notice.
  </p>

  <h3 style="font-size: 16px; font-weight: 500; color: #000; margin-top: 24px;">Dev and Prod Servers</h3>
  <p style="font-size: 15px; line-height: 1.7; color: #444;">
    Identical environments running on bare metal. Each server has a <strong>Deploy Agent</strong> that
    pulls new versions automatically, a <strong>Secrets Agent</strong> that injects credentials at runtime
    (never stored in code), and your <strong>App Stacks</strong> running in Docker containers. Prod adds a
    <strong>Backup Agent</strong> for automated data snapshots.
  </p>

  <h3 style="font-size: 16px; font-weight: 500; color: #000; margin-top: 24px;">Networking</h3>
  <p style="font-size: 15px; line-height: 1.7; color: #444;">
    Every server runs behind a <strong>reverse proxy</strong> (Traefik) that handles TLS termination,
    routing, and load balancing. The <strong>overlay network</strong> (Tailscale) encrypts all traffic
    between nodes, even across data centers.
  </p>

  <hr style="border: none; border-top: 1px solid #E5E5E5; margin: 40px 0;" />

  <p style="font-size: 15px; line-height: 1.7; color: #444;">
    This is the kind of platform we design, build, and maintain for engineering teams with 2 to 30 developers.
    If you want to talk about what this would look like for your team, pick a time here:
    <a href="https://calendar.app.google/ZBv4bRrojYQn9CLN8" style="color: #000; font-weight: 500;">Schedule a 30-min call</a>.
  </p>

  <p style="font-size: 13px; color: #999; margin-top: 32px;">
    Keni Engineering. kenitech.io
  </p>
</div>
`;

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      replyTo: "ugarte@kenitech.io",
      subject: "Your architecture reference from Keni",
      html: htmlBody,
    });

    // Notify the team about the new lead
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: "ugarte@kenitech.io",
      subject: `Architecture lead: ${email}`,
      text: `New architecture reference download.\n\nEmail: ${email}\nDomain: ${domain}\nTime: ${new Date().toISOString()}`,
    });

    return NextResponse.json(
      { message: "Architecture reference sent." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Architecture email error:", error);
    return NextResponse.json(
      { message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
