import { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact | Keni",
  description:
    "Start a conversation with Keni. Tell us about your project or book a call directly. We typically respond within 24 hours.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
