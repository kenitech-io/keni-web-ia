import { Metadata } from "next";
import BookingPageContent from "@/components/BookingPageContent";

export const metadata: Metadata = {
  title: "Agenda una llamada | Keni",
  description:
    "Elige un horario para una llamada de 30 minutos. Te confirmamos por email y te enviamos un prep corto para que la llamada avance rápido.",
  alternates: { canonical: "https://ia.kenitech.io/book" },
  robots: { index: false, follow: false },
};

export default function BookPage() {
  return <BookingPageContent />;
}
