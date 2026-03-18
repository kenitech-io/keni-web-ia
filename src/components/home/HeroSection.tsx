"use client";

import { useSearchParams } from "next/navigation";

export default function HeroSection() {
  const searchParams = useSearchParams();
  const skip = searchParams.get("skip") !== null;

  if (skip) return null;
  return (
    <>
      {/* Full viewport: DEVOPS + beam */}
      <section className="h-screen relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden" style={{ pointerEvents: "none" }}>
          <svg
            viewBox="0 0 1000 600"
            preserveAspectRatio="none"
            style={{
              position: "absolute",
              top: "-50%",
              left: "-50%",
              width: "200%",
              height: "200%",
              animation: "spiralMove 10s ease-in-out infinite",
            }}
          >
            <defs>
              <linearGradient id="spiralGrad" x1="1" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(239, 108, 0, 0.85)" />
                <stop offset="40%" stopColor="rgba(255, 152, 0, 0.6)" />
                <stop offset="70%" stopColor="rgba(255, 180, 50, 0.3)" />
                <stop offset="100%" stopColor="rgba(255, 200, 100, 0)" />
              </linearGradient>
              <filter id="spiralBlur">
                <feGaussianBlur stdDeviation="20" />
              </filter>
            </defs>
            {/* Main spiral curve */}
            <path
              d="M1100,-50 C900,0 850,80 750,150 C600,260 400,320 200,350 C50,370 -50,400 -100,500"
              stroke="url(#spiralGrad)"
              strokeWidth="120"
              fill="none"
              strokeLinecap="round"
              filter="url(#spiralBlur)"
            >
              <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
                M1100,-50 C900,0 850,80 750,150 C600,260 400,320 200,350 C50,370 -50,400 -100,500;
                M1150,50 C950,80 800,150 680,220 C500,330 350,280 150,400 C0,470 -80,350 -150,550;
                M1050,-100 C850,-30 900,120 780,200 C620,300 450,380 250,300 C80,240 -20,450 -80,450;
                M1100,-50 C900,0 850,80 750,150 C600,260 400,320 200,350 C50,370 -50,400 -100,500
              " calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
            </path>
            {/* Inner brighter core */}
            <path
              d="M1050,-20 C880,30 820,100 720,170 C580,270 380,330 180,360 C40,380 -30,410 -80,490"
              stroke="rgba(255, 152, 0, 0.5)"
              strokeWidth="60"
              fill="none"
              strokeLinecap="round"
              filter="url(#spiralBlur)"
            >
              <animate attributeName="d" dur="10s" repeatCount="indefinite" values="
                M1050,-20 C880,30 820,100 720,170 C580,270 380,330 180,360 C40,380 -30,410 -80,490;
                M1100,70 C920,100 770,170 650,240 C470,340 320,290 130,410 C-20,470 -60,340 -130,540;
                M1000,-70 C820,-10 870,140 750,220 C590,310 420,390 220,310 C60,250 0,440 -60,440;
                M1050,-20 C880,30 820,100 720,170 C580,270 380,330 180,360 C40,380 -30,410 -80,490
              " calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1" />
            </path>
          </svg>
        </div>
        <span
          className="text-foreground font-semibold absolute z-10"
          style={{
            fontSize: "clamp(2rem, 3.5vw, 3.5rem)",
            lineHeight: 1,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          DEVOPS
        </span>
      </section>

      <style>{`
        @keyframes spiralMove {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.05) rotate(15deg); }
          50% { transform: scale(0.95) rotate(-10deg); }
          75% { transform: scale(1.08) rotate(8deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
      `}</style>

      {/* Pipeline section */}
      <section className="flex flex-col items-center py-24 md:py-32">
        <p className="text-body text-foreground-secondary mb-12 md:mb-16 text-center">
          From commit to production, hands-free
        </p>

        <div className="w-full max-w-[1100px] px-4">
          <svg
            viewBox="0 0 960 280"
            fill="none"
            className="w-full"
            style={{ fontFamily: "Inter, -apple-system, sans-serif" }}
          >
            <line x1="58" y1="48" x2="80" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
            <line x1="160" y1="48" x2="185" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
            <line x1="285" y1="48" x2="310" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
            <line x1="410" y1="48" x2="480" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />

            <rect x="173" y="18" width="250" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
            <text x="298" y="12" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CI</text>

            <rect x="0" y="34" width="58" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
            <text x="29" y="52" fontSize="9" fontWeight="300" fill="var(--muted)" textAnchor="middle">dev</text>

            <rect x="80" y="34" width="80" height="28" rx="4" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
            <text x="120" y="52" fontSize="10" fontWeight="300" fill="var(--muted)" textAnchor="middle">Repo</text>

            <rect x="185" y="34" width="100" height="28" rx="4" fill="#EDE7F6" stroke="#5E35B1" strokeWidth="0.8" />
            <text x="235" y="52" fontSize="11" fontWeight="400" fill="#4527A0" textAnchor="middle">Build</text>

            <rect x="310" y="34" width="100" height="28" rx="4" fill="#E0F2F1" stroke="#00897B" strokeWidth="0.8" />
            <text x="360" y="52" fontSize="11" fontWeight="400" fill="#00695C" textAnchor="middle">Test</text>

            <rect x="480" y="34" width="100" height="28" rx="4" fill="#FFF9C4" stroke="#D4B000" strokeWidth="0.8" />
            <text x="530" y="52" fontSize="11" fontWeight="400" fill="#C6A700" textAnchor="middle">Store</text>

            <line x1="580" y1="48" x2="650" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
            <path d="M530 62 L530 100 Q530 128 550 128 L650 128" stroke="var(--border-color)" strokeWidth="0.8" fill="none" />
            <path d="M530 62 L530 190 Q530 218 550 218 L650 218" stroke="var(--border-color)" strokeWidth="0.8" fill="none" />

            <rect x="620" y="18" width="310" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
            <text x="775" y="12" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
            <rect x="650" y="34" width="100" height="28" rx="4" fill="#E3F2FD" stroke="#1565C0" strokeWidth="0.8" />
            <text x="700" y="52" fontSize="10" fontWeight="400" fill="#0D47A1" textAnchor="middle">Secrets</text>
            <line x1="750" y1="48" x2="780" y2="48" stroke="var(--border-color)" strokeWidth="0.8" />
            <rect x="780" y="34" width="100" height="28" rx="4" fill="#FFF3E0" stroke="#EF6C00" strokeWidth="0.8" />
            <text x="830" y="52" fontSize="11" fontWeight="400" fill="#E65100" textAnchor="middle">DEV</text>

            <rect x="620" y="98" width="310" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
            <text x="775" y="92" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
            <rect x="650" y="114" width="100" height="28" rx="4" fill="#E3F2FD" stroke="#1565C0" strokeWidth="0.8" />
            <text x="700" y="132" fontSize="10" fontWeight="400" fill="#0D47A1" textAnchor="middle">Secrets</text>
            <line x1="750" y1="128" x2="780" y2="128" stroke="var(--border-color)" strokeWidth="0.8" />
            <rect x="780" y="114" width="100" height="28" rx="4" fill="#FFF3E0" stroke="#EF6C00" strokeWidth="0.8" />
            <text x="830" y="132" fontSize="11" fontWeight="400" fill="#E65100" textAnchor="middle">STG</text>

            <rect x="620" y="188" width="310" height="60" rx="4" fill="transparent" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="4 3" />
            <text x="775" y="182" fontSize="9" fontWeight="500" fill="var(--muted)" textAnchor="middle" letterSpacing="1.5">CD</text>
            <rect x="650" y="204" width="100" height="28" rx="4" fill="#E3F2FD" stroke="#1565C0" strokeWidth="0.8" />
            <text x="700" y="222" fontSize="10" fontWeight="400" fill="#0D47A1" textAnchor="middle">Secrets</text>
            <line x1="750" y1="218" x2="780" y2="218" stroke="var(--border-color)" strokeWidth="0.8" />
            <rect x="780" y="204" width="100" height="28" rx="4" fill="#FFF3E0" stroke="#EF6C00" strokeWidth="0.8" />
            <text x="830" y="222" fontSize="11" fontWeight="400" fill="#E65100" textAnchor="middle">PRO</text>

            <circle r="2.5" fill="var(--foreground)" opacity="0">
              <animate attributeName="cx" values="58;80;160;185" dur="1.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="cy" values="48;48;48;48" dur="1.5s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0;0.25;0.25;0" dur="1.5s" repeatCount="indefinite" begin="1s" keyTimes="0;0.05;0.9;1" />
            </circle>

            <rect width="5" height="5" rx="1" fill="#5E35B1" opacity="0">
              <animate attributeName="x" values="410;480" dur="1.5s" repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
              <animate attributeName="y" values="46;46" dur="1.5s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0;0.3;0.3;0" dur="1.5s" repeatCount="indefinite" begin="1s" keyTimes="0;0.05;0.9;1" />
            </rect>

            <rect width="5" height="5" rx="1" fill="#EF6C00" opacity="0">
              <animate attributeName="x" values="580;650" dur="1.2s" repeatCount="indefinite" begin="1s" calcMode="spline" keySplines="0.25 0.1 0.25 1" />
              <animate attributeName="y" values="46;46" dur="1.2s" repeatCount="indefinite" begin="1s" />
              <animate attributeName="opacity" values="0;0.25;0.25;0" dur="1.2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.05;0.9;1" />
            </rect>

            <rect width="5" height="5" rx="1" fill="#EF6C00" opacity="0">
              <animate attributeName="x" values="528;528;550;650" dur="2s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="y" values="62;100;126;126" dur="2s" repeatCount="indefinite" begin="1.5s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="opacity" values="0;0.25;0.25;0" dur="2s" repeatCount="indefinite" begin="1.5s" keyTimes="0;0.05;0.9;1" />
            </rect>

            <rect width="5" height="5" rx="1" fill="#EF6C00" opacity="0">
              <animate attributeName="x" values="528;528;550;650" dur="2.2s" repeatCount="indefinite" begin="2s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="y" values="62;190;216;216" dur="2.2s" repeatCount="indefinite" begin="2s" calcMode="spline" keySplines="0.25 0.1 0.25 1;0.25 0.1 0.25 1;0.25 0.1 0.25 1" />
              <animate attributeName="opacity" values="0;0.25;0.25;0" dur="2.2s" repeatCount="indefinite" begin="2s" keyTimes="0;0.05;0.9;1" />
            </rect>
          </svg>
        </div>
      </section>
    </>
  );
}
