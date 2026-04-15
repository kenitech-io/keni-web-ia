import { Metadata } from "next";
import BookingPageContent from "@/components/BookingPageContent";

export const metadata: Metadata = {
  title: "Book a Call | Keni Engineering",
  description: "Pick a time for a 30-minute intro call. We will confirm by email and send a short prep doc so the call moves fast.",
  alternates: { canonical: "https://kenitech.io/book" },
  robots: { index: false, follow: false },
};

export default function BookPage() {
  return <BookingPageContent planSlug={null} />;
}
