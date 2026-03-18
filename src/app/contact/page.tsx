import { Metadata } from "next";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us: Book a Free DevOps Consultation",
  description:
    "Book a free 30-minute DevOps consultation with Keni Engineering. No pitch, no pressure. Tell us about your infrastructure challenges and we will show you how to fix them.",
  alternates: {
    canonical: "https://kenitech.io/contact",
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
