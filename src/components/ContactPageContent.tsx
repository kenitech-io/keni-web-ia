"use client";

import { useState, useEffect, FormEvent } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function ContactPageContent() {
  const searchParams = useSearchParams();
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(searchParams.get("form") === "true");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, company, email, message }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setStatus("sent");
      setName("");
      setCompany("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  const inputClasses =
    "bg-transparent border-b border-border-color focus:border-muted py-3 text-sm font-light text-foreground w-full outline-none transition-colors placeholder:text-muted/50";
  const labelClasses =
    "block text-label uppercase tracking-[0.25em] text-muted font-light mb-3";

  return (
    <main className="bg-background min-h-screen">
      <section className="py-20 md:py-48">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h1 className="text-heading text-foreground font-light tracking-wide mb-8">
                Hablamos sin pitch.
              </h1>
              <p className="text-sm text-foreground-secondary leading-loose font-light max-w-[480px] mx-auto">
                Una llamada de 30 minutos para entender tu caso. Si encajamos,
                seguimos. Si no, te decimos por qué.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="max-w-[860px] mx-auto mb-16">
              <div className="text-center">
                <div className="flex flex-wrap justify-center items-start gap-8 md:gap-16 mb-14">
                  <div className="flex flex-col items-center">
                    <div className="relative w-56 h-56 md:w-96 md:h-96 rounded overflow-hidden mb-4">
                      <Image src="/team/ane.jpg" alt="Ane Ugarte" width={480} height={480} className="w-full h-full object-cover grayscale-[90%] contrast-[125%] brightness-[92%]" />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-[url('/noise.svg')] bg-repeat opacity-40 mix-blend-overlay"
                      />
                    </div>
                    <a href="https://www.linkedin.com/in/aneugarte/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground font-medium mt-1">Ane Ugarte</a>
                    <span className="text-xs text-muted font-light">CEO</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <div className="w-56 h-56 md:w-96 md:h-96 rounded overflow-hidden mb-4">
                      <Image src="/team/mikel.jpg" alt="Mikel Martin" width={480} height={480} className="w-full h-full object-cover grayscale-[95%] contrast-[110%] brightness-[97%]" />
                    </div>
                    <a href="https://www.linkedin.com/in/mikelm20/" target="_blank" rel="noopener noreferrer" className="text-sm text-foreground font-medium mt-1">Mikel Martin</a>
                    <span className="text-xs text-muted font-light">CTO</span>
                  </div>
                </div>
                <a
                  href="/book"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-foreground hover:bg-foreground/85 text-background px-12 py-3.5 text-sm font-light tracking-wide rounded-full transition-colors"
                >
                  Agenda una llamada
                </a>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.25}>
            <div className="text-center">
              <button
                onClick={() => setShowForm(true)}
                className="text-sm text-muted font-light hover:text-foreground transition-colors"
              >
                ¿Prefieres mandar un mensaje?
              </button>
            </div>
          </FadeIn>

          {/* Message form modal */}
          <AnimatePresence>
            {showForm && (
              <MessageModal
                onClose={() => setShowForm(false)}
                status={status}
                onSubmit={handleSubmit}
                name={name} setName={setName}
                company={company} setCompany={setCompany}
                email={email} setEmail={setEmail}
                message={message} setMessage={setMessage}
                inputClasses={inputClasses}
                labelClasses={labelClasses}
              />
            )}
          </AnimatePresence>
        </Container>
      </section>
    </main>
  );
}

function MessageModal({
  onClose,
  status,
  onSubmit,
  name, setName,
  company, setCompany,
  email, setEmail,
  message, setMessage,
  inputClasses,
  labelClasses,
}: {
  onClose: () => void;
  status: "idle" | "sending" | "sent" | "error";
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  name: string; setName: (v: string) => void;
  company: string; setCompany: (v: string) => void;
  email: string; setEmail: (v: string) => void;
  message: string; setMessage: (v: string) => void;
  inputClasses: string;
  labelClasses: string;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0 }}
      className="fixed inset-0 z-50 flex items-end md:items-center justify-center p-0 md:p-6"
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative w-full max-w-[400px] max-h-[85vh] overflow-y-auto border border-border-color bg-background rounded-t-2xl md:rounded-lg p-6 md:p-10">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-muted hover:text-foreground transition-colors"
          aria-label="Cerrar"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M1 1L15 15M15 1L1 15" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </button>

        {status === "sent" ? (
          <div className="text-center py-10">
            <p className="text-heading text-foreground font-light tracking-wide mb-6">Mensaje enviado.</p>
            <p className="text-sm text-foreground-secondary leading-loose font-light">Respondemos en menos de 24 horas.</p>
          </div>
        ) : (
          <>
            <p className="text-body text-foreground font-light tracking-wide mb-2">Mándanos un mensaje</p>
            <p className="text-sm text-foreground-secondary font-light mb-8">
              Respondemos en menos de 24 horas.
            </p>
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>Nombre</label>
                <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClasses} placeholder="Tu nombre" required />
              </div>
              <div>
                <label htmlFor="company" className={labelClasses}>Empresa</label>
                <input id="company" type="text" value={company} onChange={(e) => setCompany(e.target.value)} className={inputClasses} placeholder="Tu empresa" />
              </div>
              <div>
                <label htmlFor="email" className={labelClasses}>Email</label>
                <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className={inputClasses} placeholder="tu@empresa.com" required />
              </div>
              <div>
                <label htmlFor="message" className={labelClasses}>Mensaje</label>
                <textarea id="message" rows={3} value={message} onChange={(e) => setMessage(e.target.value)} className={`${inputClasses} resize-none`} placeholder="Cuéntanos sobre tu equipo y caso..." />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="bg-foreground hover:bg-foreground/85 disabled:opacity-50 text-background w-full px-8 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
              >
                {status === "sending" ? "Enviando..." : "Enviar mensaje"}
              </button>
              {status === "error" && (
                <p className="text-sm text-red-400 font-light">Algo salió mal. Inténtalo de nuevo.</p>
              )}
            </form>
          </>
        )}
      </div>
    </motion.div>
  );
}
