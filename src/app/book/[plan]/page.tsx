import { Metadata } from "next";
import { notFound } from "next/navigation";
import BookingPageContent from "@/components/BookingPageContent";
import { PLANS, PLAN_SLUGS, PlanSlug } from "@/lib/plans";

export function generateStaticParams() {
  return PLAN_SLUGS.map((plan) => ({ plan }));
}

export function generateMetadata({ params }: { params: { plan: string } }): Metadata {
  const plan = PLANS[params.plan as PlanSlug];
  if (!plan) return { title: "Get Started | Keni Engineering" };
  return {
    title: `Get Started: ${plan.name} | Keni Engineering`,
    description: `Book your kickoff for the ${plan.name} plan. Pick a time that works and we will reach out.`,
    alternates: { canonical: `https://kenitech.io/book/${params.plan}` },
    robots: { index: false, follow: false },
  };
}

export default function BookPage({ params }: { params: { plan: string } }) {
  if (!PLAN_SLUGS.includes(params.plan as PlanSlug)) notFound();
  return <BookingPageContent planSlug={params.plan as PlanSlug} />;
}
