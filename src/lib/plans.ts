export type PlanSlug = "platform" | "evolve" | "independence";

export const PLANS: Record<PlanSlug, {
  name: string;
  price: string;
  tagline: string;
  accent: string;
}> = {
  platform: {
    name: "Platform",
    price: "$3,000/mo",
    tagline: "Always-on, fully featured development platform.",
    accent: "border-foreground/30",
  },
  evolve: {
    name: "Evolve",
    price: "$8,000/mo",
    tagline: "Platform plus we build alongside your team.",
    accent: "border-[#0070f3]",
  },
  independence: {
    name: "Independence",
    price: "$20,000 once",
    tagline: "Full production migration. You own everything.",
    accent: "border-foreground",
  },
};

export const PLAN_SLUGS = Object.keys(PLANS) as PlanSlug[];
