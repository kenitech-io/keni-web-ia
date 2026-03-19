"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";

/* ───────────────────────────────────────────
   Questions & scoring
   ─────────────────────────────────────────── */

interface Option {
  label: string;
  score: number;
  insight: string;
}

interface Question {
  id: string;
  title: string;
  theme: string;
  subtitle: string;
  options: Option[];
}

const questions: Question[] = [
  {
    id: "deploy",
    title: "How do you deploy to production?",
    theme: "Deployments",
    subtitle: "",
    options: [
      {
        label: "Copy files manually (SCP, FTP, or drag and drop)",
        score: 0,
        insight:
          "File copying is fragile and unrepeatable. One wrong file, one missed step, and production is broken with no way to roll back.",
      },
      {
        label: "SSH into the server and git pull",
        score: 1,
        insight:
          "A step above copying, but still manual. Only the people who know the ritual can deploy, and every deploy is a risk.",
      },
      {
        label: "Run a script or Makefile locally",
        score: 2,
        insight:
          "Scripted but still depends on one person's laptop. If that person is on vacation, deploys stop.",
      },
      {
        label: "Push to a branch and CI builds and deploys automatically",
        score: 3,
        insight:
          "Solid foundation. The question now is whether the pipeline is reliable, fast, and whether rollbacks are easy.",
      },
      {
        label: "Merge to main, it's live in minutes with zero-downtime rollout",
        score: 4,
        insight:
          "This is the target. Deploys are a non-event. Any developer on the team can ship, any time.",
      },
    ],
  },
  {
    id: "ci",
    title: "What happens when a developer pushes code?",
    theme: "Continuous Integration",
    subtitle: "",
    options: [
      {
        label: "Nothing, we review and test manually before release",
        score: 0,
        insight:
          "Without CI, bugs compound. By the time you find them, the fix is expensive and the developer has moved on to something else.",
      },
      {
        label: "Linting or formatting checks run, but no tests",
        score: 1,
        insight:
          "Linting alone won't catch broken logic. The value of CI comes from tests that verify behavior, not just style.",
      },
      {
        label: "Some tests run, but failures don't block merging",
        score: 2,
        insight:
          "Tests that don't block are tests that get ignored. The value of CI is that it says no when something is broken.",
      },
      {
        label: "Tests run on every push, PRs are blocked if they fail",
        score: 3,
        insight:
          "Strong position. The next step is making the pipeline fast enough that developers don't context-switch while waiting.",
      },
      {
        label: "Full suite in under 10 minutes, including integration tests",
        score: 4,
        insight:
          "Fast, comprehensive CI is a competitive advantage. Your team ships with confidence.",
      },
    ],
  },
  {
    id: "environments",
    title: "Do you have a staging environment?",
    theme: "Environments",
    subtitle: "",
    options: [
      {
        label: "No, we test directly in production",
        score: 0,
        insight:
          "Every deploy is a gamble. Your users are your QA team, and they don't enjoy it.",
      },
      {
        label: "Developers test on their local machines only",
        score: 1,
        insight:
          "Local environments drift from production quickly. What works on a Mac may not work on the server.",
      },
      {
        label: "A shared dev server, but it drifts from production",
        score: 2,
        insight:
          "A dev server that drifts from production gives false confidence. Tests pass in dev, break in prod, and nobody knows why.",
      },
      {
        label: "Staging that mirrors production closely",
        score: 3,
        insight:
          "Good. If it truly mirrors production (same OS, same services, same config), you can trust it.",
      },
      {
        label: "Identical to production, provisioned from the same code",
        score: 4,
        insight:
          "Infrastructure as Code applied correctly. Dev and prod are the same system with different data.",
      },
    ],
  },
  {
    id: "monitoring",
    title: "How do you know when something is broken?",
    theme: "Monitoring",
    subtitle: "",
    options: [
      {
        label: "A customer tells us",
        score: 0,
        insight:
          "If your users are your monitoring system, you're always behind. By the time they complain, the damage is done.",
      },
      {
        label: "Someone checks the server manually every now and then",
        score: 1,
        insight:
          "Spot checks catch problems by luck, not by design. The issues you miss are the ones that hurt.",
      },
      {
        label: "We check logs manually when something seems off",
        score: 2,
        insight:
          "Reactive debugging. You only look when it hurts, and you're searching through noise to find signal.",
      },
      {
        label: "Dashboards show system health, but we check them manually",
        score: 3,
        insight:
          "Dashboards are a step up, but if nobody is looking at them at 3 AM, they're decoration.",
      },
      {
        label: "Automated alerts fire before users notice, with runbooks attached",
        score: 4,
        insight:
          "Proactive monitoring. Problems become visible before they become incidents. This is what lets a team sleep at night.",
      },
    ],
  },
  {
    id: "iac",
    title: "How is your infrastructure defined?",
    theme: "Infrastructure as Code",
    subtitle: "",
    options: [
      {
        label: "Someone set it up once and nobody has touched it since",
        score: 0,
        insight:
          "Tribal knowledge. If that person leaves, the knowledge leaves with them. Recreating the setup would be archaeology.",
      },
      {
        label: "Manually configured through cloud console clicks",
        score: 1,
        insight:
          "Click-ops. Nobody knows the full state, changes are untracked, and recreating the setup from scratch would take weeks.",
      },
      {
        label: "Some scripts and docs, but mostly manual",
        score: 2,
        insight:
          "Partial automation creates a false sense of security. The scripts cover the happy path, the undocumented parts are where things break.",
      },
      {
        label: "Most infrastructure is in Terraform, Ansible, or similar",
        score: 3,
        insight:
          "Strong. The next question is whether changes go through review and whether the state is managed properly.",
      },
      {
        label: "Everything is code-defined, version-controlled, and applied through CI",
        score: 4,
        insight:
          "GitOps for infrastructure. Changes are reviewed, auditable, and reproducible. This is the standard.",
      },
    ],
  },
  {
    id: "secrets",
    title: "Where do you store API keys, passwords, and credentials?",
    theme: "Secrets Management",
    subtitle: "",
    options: [
      {
        label: "Hardcoded in the source code",
        score: 0,
        insight:
          "Secrets in code end up in git history forever. One public repo, one leaked backup, and every credential is compromised.",
      },
      {
        label: "In .env files or shared docs (Slack, Notion, email)",
        score: 1,
        insight:
          "Scattered secrets are impossible to rotate and impossible to audit. You don't know who has access to what.",
      },
      {
        label: "Environment variables on the server, set manually",
        score: 2,
        insight:
          "Better than code, but still manual. Rotation requires SSH-ing into every server. No audit trail.",
      },
      {
        label: "A secrets manager, but injection is partially manual",
        score: 3,
        insight:
          "The vault is there, but if the last mile (getting secrets into containers) is manual, the chain has a weak link.",
      },
      {
        label: "Centralized vault with automated injection, rotation, and audit logs",
        score: 4,
        insight:
          "Secrets never touch code, rotate without downtime, and every access is logged. This is how it should work.",
      },
    ],
  },
  {
    id: "recovery",
    title: "What happens if your production database disappears right now?",
    theme: "Disaster Recovery",
    subtitle: "",
    options: [
      {
        label: "We would lose data, there are no backups",
        score: 0,
        insight:
          "This is an existential risk. One disk failure, one bad migration, one ransomware event, and the business stops.",
      },
      {
        label: "Someone probably set up backups, but nobody knows the details",
        score: 1,
        insight:
          "Unknown backups are barely better than no backups. If nobody knows where they are or how to restore, they might as well not exist.",
      },
      {
        label: "Backups exist but we've never tested a restore",
        score: 2,
        insight:
          "Untested backups are Schrodinger's backups. You won't know if they work until the worst possible moment to find out.",
      },
      {
        label: "Automated backups with periodic restore tests",
        score: 3,
        insight:
          "Verified backups. You know they work because you've proven it. The next step is reducing recovery time.",
      },
      {
        label: "Automated backups, tested restores, documented RTO under 1 hour",
        score: 4,
        insight:
          "Full disaster recovery. You know exactly how long it takes to come back, and it's fast enough that the business survives.",
      },
    ],
  },
];

const MAX_SCORE = questions.length * 4;

interface Level {
  name: string;
  range: string;
  description: string;
}

function getLevel(score: number): Level {
  const pct = score / MAX_SCORE;
  if (pct <= 0.25) {
    return {
      name: "Manual",
      range: "0-25%",
      description:
        "Your team is doing most things by hand. Deploys are stressful, debugging is guesswork, and infrastructure knowledge lives in people's heads. The good news: the biggest improvements are also the easiest to make at this stage.",
    };
  }
  if (pct <= 0.5) {
    return {
      name: "Reactive",
      range: "25-50%",
      description:
        "Some automation exists, but it's patchy. You fix things when they break rather than preventing them from breaking. The foundation is there, but the gaps create friction and risk that slows the team down.",
    };
  }
  if (pct <= 0.75) {
    return {
      name: "Structured",
      range: "50-75%",
      description:
        "Most of the fundamentals are in place. CI/CD works, monitoring exists, infrastructure is partially codified. The next step is closing the gaps and making the whole system consistent and self-healing.",
    };
  }
  return {
    name: "Platform",
    range: "75-100%",
    description:
      "Your team operates on a real internal development platform. Deploys are boring, monitoring is proactive, infrastructure is code. You're in a strong position. The question now is optimization and cost efficiency.",
  };
}

/* ───────────────────────────────────────────
   Blocked domains (shared with other forms)
   ─────────────────────────────────────────── */

const BLOCKED_DOMAINS = [
  "gmail.com", "googlemail.com", "outlook.com", "hotmail.com", "live.com",
  "msn.com", "yahoo.com", "yahoo.co.uk", "yahoo.es", "yahoo.fr", "yahoo.de",
  "aol.com", "icloud.com", "me.com", "mac.com", "protonmail.com", "proton.me",
  "zoho.com", "yandex.com", "yandex.ru", "mail.ru", "gmx.com", "gmx.de",
  "tutanota.com", "fastmail.com",
];

/* ───────────────────────────────────────────
   Component
   ─────────────────────────────────────────── */

export default function HealthCheckContent() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [insights, setInsights] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "sending" | "sent" | "error" | "blocked"
  >("idle");

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentStep - 1];
  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);

  const selectAnswer = (questionId: string, score: number, insight: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: score }));
    setInsights((prev) => ({ ...prev, [questionId]: insight }));

    // Auto-advance after letting the selection register visually
    setTimeout(() => {
      if (currentStep < totalQuestions) {
        setCurrentStep(currentStep + 1);
      } else {
        setShowResults(true);
      }
    }, 400);
  };

  const handleEmailSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const domain = email.split("@")[1]?.toLowerCase();
    if (!domain || BLOCKED_DOMAINS.includes(domain)) {
      setEmailStatus("blocked");
      return;
    }

    setEmailStatus("sending");

    try {
      const res = await fetch("/api/healthcheck", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          note,
          score: totalScore,
          maxScore: MAX_SCORE,
          level: getLevel(totalScore).name,
          answers,
        }),
      });

      if (!res.ok) {
        if (res.status === 422) setEmailStatus("blocked");
        else setEmailStatus("error");
        return;
      }

      setEmailStatus("sent");
    } catch {
      setEmailStatus("error");
    }
  };

  const level = getLevel(totalScore);
  const scoreOf10 = ((totalScore / MAX_SCORE) * 10).toFixed(1);
  const pct = Math.round((totalScore / MAX_SCORE) * 100);

  return (
    <main>
      {/* Fixed progress bar */}
      {!showResults && (
        <div className="fixed top-[64px] left-0 right-0 z-40 h-px bg-border-color">
          <motion.div
            className="h-full bg-foreground"
            animate={{
              width: `${(Object.keys(answers).length / totalQuestions) * 100}%`,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          />
        </div>
      )}

      {/* Questions */}
      {!showResults && currentQuestion && (
        <section className="min-h-screen flex items-center justify-center relative">
          <Container>
            <div className="max-w-[640px] mx-auto text-center">

              <div key={currentQuestion.id}>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 mb-16 font-light">
                  {currentQuestion.theme}
                </p>
                <h2 className="text-heading text-foreground font-light tracking-wide mb-16">
                  {currentQuestion.title}
                </h2>

                <div className="space-y-4">
                  {currentQuestion.options.map((option, idx) => {
                    const isSelected =
                      answers[currentQuestion.id] === option.score;
                    return (
                      <motion.button
                        key={option.label}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: idx * 0.06,
                          ease: [0.25, 0.1, 0.25, 1],
                        }}
                        whileHover={{ scale: 1.01, transition: { type: "tween", duration: 0.1 } }}
                        whileTap={{ scale: 0.99, transition: { type: "tween", duration: 0.05 } }}
                        style={{ transition: "transform 0s" }}
                        onClick={() =>
                          selectAnswer(
                            currentQuestion.id,
                            option.score,
                            option.insight
                          )
                        }
                        className={`w-full text-left px-8 py-5 border rounded-lg transition-colors duration-300 ${
                          isSelected
                            ? "border-foreground/40 bg-[#f5f5f7] hover:bg-[#ededf0]"
                            : "border-foreground/[0.08] hover:border-foreground/20 hover:bg-[#f5f5f7]"
                        }`}
                      >
                        <p
                          className={`text-sm font-light leading-relaxed transition-colors duration-300 ${
                            isSelected
                              ? "text-foreground"
                              : "text-foreground-secondary/70"
                          }`}
                        >
                          {option.label}
                        </p>
                      </motion.button>
                    );
                  })}
                </div>

              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Results */}
      {showResults && (
        <section className="py-32 md:py-48">
          <Container>
            <div className="max-w-[640px] mx-auto text-center">
              {/* Overall score */}
              <FadeIn type="up" delay={0.1} once>
                <div className="flex items-baseline justify-center gap-3 mb-4">
                  <span className="text-[4rem] font-extralight text-foreground leading-none">{scoreOf10}</span>
                  <span className="text-sm font-light text-muted/60">/ 10</span>
                </div>
              </FadeIn>

              <FadeIn type="up" delay={0.2} once>
                <div className="w-full max-w-[320px] mx-auto h-px bg-foreground/[0.08] rounded-full mb-10">
                  <motion.div
                    className="h-full bg-foreground/30 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${pct}%` }}
                    transition={{
                      duration: 1,
                      delay: 0.3,
                      ease: [0.25, 0.1, 0.25, 1],
                    }}
                  />
                </div>
              </FadeIn>

              <FadeIn type="up" delay={0.3} once>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">
                  {level.name}
                </p>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-32 md:mb-40">
                  {level.description}
                </p>
              </FadeIn>

              {/* Inline report form */}
              <FadeIn type="up" delay={0.4} once>
                <div className="mb-32 md:mb-40 border border-foreground/[0.08] rounded-lg p-10">
                  {emailStatus === "sent" ? (
                    <div>
                      <p className="text-sm font-light text-foreground mb-2">
                        Got it.
                      </p>
                      <p className="text-xs text-foreground-secondary/70 font-light">
                        We will send your personalized report to{" "}
                        <span className="text-foreground/80">{email}</span> shortly.
                      </p>
                    </div>
                  ) : (
                    <>
                      <p className="text-sm font-light text-foreground mb-2">
                        Want specific recommendations for your team?
                      </p>
                      <p className="text-xs text-foreground-secondary/70 font-light mb-8">
                        We will review your results and send a personalized action plan.
                      </p>
                      <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (emailStatus === "blocked" || emailStatus === "error")
                              setEmailStatus("idle");
                          }}
                          className="bg-transparent border-b border-foreground/[0.08] focus:border-foreground/30 py-3 text-sm font-light text-foreground w-full outline-none transition-colors placeholder:text-muted/40"
                          placeholder="you@company.com"
                          required
                        />
                        <textarea
                          value={note}
                          onChange={(e) => setNote(e.target.value)}
                          rows={1}
                          className="bg-transparent border-b border-foreground/[0.08] focus:border-foreground/30 py-3 text-sm font-light text-foreground w-full outline-none transition-colors placeholder:text-muted/40 resize-none"
                          placeholder="Add a note"
                        />
                        {emailStatus === "blocked" && (
                          <p className="text-xs text-foreground-secondary/70 font-light">
                            Please use your work email.
                          </p>
                        )}
                        {emailStatus === "error" && (
                          <p className="text-xs text-red-600/70 font-light">
                            Something went wrong. Please try again.
                          </p>
                        )}
                        <button
                          type="submit"
                          disabled={emailStatus === "sending"}
                          className="bg-foreground hover:bg-foreground/85 disabled:opacity-50 text-background w-full px-4 py-3 text-sm font-light tracking-wide rounded-full transition-colors"
                        >
                          {emailStatus === "sending" ? "Sending..." : "Request report"}
                        </button>
                        <p className="text-[10px] text-muted/40 font-light">
                          We promise no spam.
                        </p>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>

              {/* Per-area breakdown */}
              <FadeIn type="up" delay={0.5} once>
                <div className="space-y-16 text-left">
                  {questions.map((q) => {
                    const qScore = answers[q.id] ?? 0;
                    const qOf10 = ((qScore / 4) * 10).toFixed(1);
                    return (
                      <div key={q.id}>
                        <p className="text-sm text-foreground-secondary/70 leading-loose font-light mb-6">
                          {insights[q.id]}
                        </p>
                        <div className="flex justify-between items-center mb-3">
                          <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light">
                            {q.theme}
                          </p>
                          <p className="text-label text-muted/60 font-light">{qOf10}</p>
                        </div>
                        <div className="w-full h-px bg-foreground/[0.08]">
                          <motion.div
                            className="h-full bg-foreground/30"
                            initial={{ width: 0 }}
                            animate={{ width: `${(qScore / 4) * 100}%` }}
                            transition={{
                              duration: 0.8,
                              delay: 0.7,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      )}

    </main>
  );
}
