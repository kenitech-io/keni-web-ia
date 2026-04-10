import { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import CTASection from "@/components/CTASection";
import BlogEmailCapture from "@/components/BlogEmailCapture";

export const metadata: Metadata = {
  title: "62 Lines of Kubernetes YAML vs 16 Lines of Docker Compose: A Visual Comparison",
  description:
    "Side-by-side code comparison showing how Kubernetes YAML sprawl compares to Docker Compose for the same workloads. Three real scenarios, from simple to full platform.",
  alternates: {
    canonical: "https://kenitech.io/blog/kubernetes-yaml-sprawl",
  },
  openGraph: {
    title: "62 Lines of Kubernetes YAML vs 16 Lines of Docker Compose",
    description:
      "Side-by-side code comparison showing how Kubernetes YAML sprawl compares to Docker Compose for the same workloads.",
    url: "https://kenitech.io/blog/kubernetes-yaml-sprawl",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "62 Lines of Kubernetes YAML vs 16 Lines of Docker Compose: A Visual Comparison",
  description: "Side-by-side code comparison showing how Kubernetes YAML sprawl compares to Docker Compose for the same workloads.",
  datePublished: "2026-04-10",
  dateModified: "2026-04-10",
  image: "https://kenitech.io/blog/kubernetes-yaml-sprawl/opengraph-image",
  author: { "@type": "Person", name: "Mikel Martin", url: "https://www.linkedin.com/in/mikelmartin/" },
  publisher: {
    "@type": "Organization",
    name: "Keni Engineering",
    logo: { "@type": "ImageObject", url: "https://kenitech.io/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://kenitech.io/blog/kubernetes-yaml-sprawl",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://kenitech.io" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://kenitech.io/blog" },
    { "@type": "ListItem", position: 3, name: "Kubernetes YAML Sprawl", item: "https://kenitech.io/blog/kubernetes-yaml-sprawl" },
  ],
};

function CodePanel({ title, lineCount, fileCount, children, variant }: {
  title: string;
  lineCount: string;
  fileCount: string;
  children: React.ReactNode;
  variant: "k8s" | "compose";
}) {
  const styles = {
    k8s: {
      header: "bg-[var(--pipe-blue-bg)] text-[var(--pipe-blue-text)] border-b border-[var(--pipe-blue-border)]/30",
    },
    compose: {
      header: "bg-[var(--pipe-teal-bg)] text-[var(--pipe-teal-text)] border-b border-[var(--pipe-teal-border)]/30",
    },
  };

  const s = styles[variant];

  return (
    <div className="rounded-lg border border-[var(--border-color)] overflow-hidden flex flex-col">
      <div className={`px-4 py-2.5 flex items-center gap-2 text-[11px] tracking-wider uppercase font-medium ${s.header}`}>
        {title}
        <span className="ml-auto text-[10px] font-normal opacity-70 normal-case tracking-normal">
          {lineCount} lines, {fileCount}
        </span>
      </div>
      <div className="bg-[var(--surface)] flex-1 overflow-x-auto">
        <pre className="text-[11px] leading-[1.7] font-mono text-foreground-secondary/70 py-2">
          {children}
        </pre>
      </div>
    </div>
  );
}

function CodeLine({ num, children, empty }: { num: number; children?: React.ReactNode; empty?: boolean }) {
  return (
    <div className="flex px-4 py-0 hover:bg-foreground/[0.02]">
      <span className="text-muted/40 w-7 min-w-[1.75rem] text-right pr-3 select-none text-[10px] leading-[1.7]">{num}</span>
      <span className="leading-[1.7]">{empty ? "\u00A0" : children}</span>
    </div>
  );
}

function FileTab({ name }: { name: string }) {
  return (
    <div className="text-[10px] text-muted/50 px-4 pt-2.5 pb-0.5 font-mono">{name}</div>
  );
}

function Kw({ children }: { children: React.ReactNode }) {
  return <span className="text-foreground/90 font-medium">{children}</span>;
}

function Str({ children }: { children: React.ReactNode }) {
  return <span className="text-[var(--pipe-green-text)]">{children}</span>;
}

function Num({ children }: { children: React.ReactNode }) {
  return <span className="text-[var(--pipe-orange-text)]">{children}</span>;
}

function EmptySpace({ lines }: { lines: number }) {
  return (
    <>
      {Array.from({ length: lines }, (_, i) => (
        <div key={i} className="h-[1.17rem]" />
      ))}
    </>
  );
}

export default function KubernetesYamlSprawl() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <article>
        <section className="py-32 md:py-48">
          <Container>
            <div className="max-w-[640px] mx-auto">
              <FadeIn>
                <p className="text-label uppercase tracking-[0.25em] text-muted/60 font-light mb-6">CONTAINERS</p>
                <h1 className="text-heading text-foreground font-light tracking-wide mb-8">
                  62 lines of Kubernetes YAML vs 16 lines of Docker Compose
                </h1>
                <p className="text-label text-muted/60 font-light">April 10, 2026 &middot; 5 min read</p>
                <div className="flex items-center gap-3 mt-6">
                  <div>
                    <p className="text-sm text-foreground font-light">
                      <a href="https://www.linkedin.com/in/mikelmartin/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/80 transition-colors">Mikel Martin</a>
                    </p>
                    <p className="text-xs text-muted/60 font-light">CTO, Keni Engineering</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>

        <section className="pb-32 md:pb-48">
          <Container>
            <div className="max-w-[640px] mx-auto space-y-10">
              <FadeIn delay={0.1}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Every conference talk and vendor pitch will tell you that Kubernetes is the standard for running containers in production. But what does that actually look like in practice? Let us put the same workloads side by side and count the lines.
                </p>
              </FadeIn>

              <FadeIn delay={0.15}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Three scenarios. Same applications. Same result. Wildly different amounts of configuration.
                </p>
              </FadeIn>
            </div>

            {/* ==================== SCENARIO 1 ==================== */}
            <div className="max-w-[1000px] mx-auto mt-16">
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide text-center mb-2">Scenario 1: Web app + database</h2>
                <p className="text-xs text-muted/60 text-center mb-8">The simplest possible production setup. One app, one database.</p>

                <div className="grid md:grid-cols-2 gap-5 items-stretch">
                  <CodePanel title="Kubernetes" lineCount="62" fileCount="4 files" variant="k8s">
                    <FileTab name="deployment.yaml" />
                    <CodeLine num={1}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={2}><Kw>kind</Kw>: Deployment</CodeLine>
                    <CodeLine num={3}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={4}>  <Kw>name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={5}>  <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={6}>    <Kw>app</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={7}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={8}>  <Kw>replicas</Kw>: <Num>1</Num></CodeLine>
                    <CodeLine num={9}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={10}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={11}>      <Kw>app</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={12}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={13}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={14}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={15}>        <Kw>app</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={16}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={17}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={18}>      - <Kw>name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={19}>        <Kw>image</Kw>: <Str>myapp:latest</Str></CodeLine>
                    <CodeLine num={20}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={21}>        - <Kw>containerPort</Kw>: <Num>3000</Num></CodeLine>
                    <CodeLine num={22}>        <Kw>env</Kw>:</CodeLine>
                    <CodeLine num={23}>        - <Kw>name</Kw>: <Str>DATABASE_URL</Str></CodeLine>
                    <CodeLine num={24}>          <Kw>valueFrom</Kw>:</CodeLine>
                    <CodeLine num={25}>            <Kw>secretKeyRef</Kw>:</CodeLine>
                    <CodeLine num={26}>              <Kw>name</Kw>: <Str>db-secret</Str></CodeLine>
                    <CodeLine num={27}>              <Kw>key</Kw>: <Str>url</Str></CodeLine>
                    <FileTab name="service.yaml" />
                    <CodeLine num={28}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={29}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={30}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={31}>  <Kw>name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={32}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={33}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={34}>    <Kw>app</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={35}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={36}>  - <Kw>port</Kw>: <Num>80</Num></CodeLine>
                    <CodeLine num={37}>    <Kw>targetPort</Kw>: <Num>3000</Num></CodeLine>
                    <FileTab name="postgres-statefulset.yaml" />
                    <CodeLine num={38}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={39}><Kw>kind</Kw>: StatefulSet</CodeLine>
                    <CodeLine num={40}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={41}>  <Kw>name</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={42}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={43}>  <Kw>serviceName</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={44}>  <Kw>replicas</Kw>: <Num>1</Num></CodeLine>
                    <CodeLine num={45}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={46}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={47}>      <Kw>app</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={48}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={49}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={50}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={51}>        <Kw>app</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={52}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={53}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={54}>      - <Kw>name</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={55}>        <Kw>image</Kw>: <Str>postgres:16</Str></CodeLine>
                    <CodeLine num={56}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={57}>        - <Kw>containerPort</Kw>: <Num>5432</Num></CodeLine>
                    <CodeLine num={58}>        <Kw>volumeMounts</Kw>:</CodeLine>
                    <CodeLine num={59}>        - <Kw>name</Kw>: <Str>pg-data</Str></CodeLine>
                    <CodeLine num={60}>          <Kw>mountPath</Kw>: <Str>/var/lib/postgresql/data</Str></CodeLine>
                    <FileTab name="postgres-service.yaml" />
                    <CodeLine num={61}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={62}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={63}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={64}>  <Kw>name</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={65}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={66}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={67}>    <Kw>app</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={68}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={69}>  - <Kw>port</Kw>: <Num>5432</Num></CodeLine>
                    <CodeLine num={70}>    <Kw>targetPort</Kw>: <Num>5432</Num></CodeLine>
                    <FileTab name="secret.yaml" />
                    <CodeLine num={71}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={72}><Kw>kind</Kw>: Secret</CodeLine>
                    <CodeLine num={73}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={74}>  <Kw>name</Kw>: <Str>db-secret</Str></CodeLine>
                    <CodeLine num={75}><Kw>type</Kw>: Opaque</CodeLine>
                    <CodeLine num={76}><Kw>stringData</Kw>:</CodeLine>
                    <CodeLine num={77}>  <Kw>url</Kw>: <Str>postgres://postgres:secret@postgres:5432/app</Str></CodeLine>
                  </CodePanel>

                  <CodePanel title="Docker Compose" lineCount="16" fileCount="1 file" variant="compose">
                    <FileTab name="docker-compose.yml" />
                    <CodeLine num={1}><Kw>services</Kw>:</CodeLine>
                    <CodeLine num={2}>  <Kw>webapp</Kw>:</CodeLine>
                    <CodeLine num={3}>    <Kw>image</Kw>: <Str>myapp:latest</Str></CodeLine>
                    <CodeLine num={4}>    <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={5}>      - <Str>&quot;80:3000&quot;</Str></CodeLine>
                    <CodeLine num={6}>    <Kw>environment</Kw>:</CodeLine>
                    <CodeLine num={7}>      - <Str>DATABASE_URL=postgres://postgres:secret@db/app</Str></CodeLine>
                    <CodeLine num={8}>    <Kw>depends_on</Kw>:</CodeLine>
                    <CodeLine num={9}>      - <Str>db</Str></CodeLine>
                    <CodeLine num={10} empty />
                    <CodeLine num={11}>  <Kw>db</Kw>:</CodeLine>
                    <CodeLine num={12}>    <Kw>image</Kw>: <Str>postgres:16</Str></CodeLine>
                    <CodeLine num={13}>    <Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={14}>      - <Str>pg-data:/var/lib/postgresql/data</Str></CodeLine>
                    <CodeLine num={15} empty />
                    <CodeLine num={16}><Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={17}>  <Kw>pg-data</Kw>:</CodeLine>
                    <EmptySpace lines={40} />
                  </CodePanel>
                </div>

                <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-8 max-w-[640px] mx-auto">
                  The simplest case and the gap is already 4x. Kubernetes needs a Deployment, a Service, a StatefulSet, another Service, and a Secret. Five separate resources, each with its own apiVersion, kind, metadata, and spec. Docker Compose: one file, 16 lines, done.
                </p>
              </FadeIn>
            </div>

            {/* ==================== SCENARIO 2 ==================== */}
            <div className="max-w-[1000px] mx-auto mt-24">
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide text-center mb-2">Scenario 2: App + database + Redis + worker</h2>
                <p className="text-xs text-muted/60 text-center mb-8">A typical production stack. Background jobs, caching, relational storage.</p>

                <div className="grid md:grid-cols-2 gap-5 items-stretch">
                  <CodePanel title="Kubernetes" lineCount="131" fileCount="9 files" variant="k8s">
                    <FileTab name="webapp-deployment.yaml" />
                    <CodeLine num={1}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={2}><Kw>kind</Kw>: Deployment</CodeLine>
                    <CodeLine num={3}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={4}>  <Kw>name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={5}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={6}>  <Kw>replicas</Kw>: <Num>1</Num></CodeLine>
                    <CodeLine num={7}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={8}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={9}>      <Kw>app</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={10}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={11}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={12}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={13}>        <Kw>app</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={14}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={15}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={16}>      - <Kw>name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={17}>        <Kw>image</Kw>: <Str>myapp:latest</Str></CodeLine>
                    <CodeLine num={18}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={19}>        - <Kw>containerPort</Kw>: <Num>3000</Num></CodeLine>
                    <CodeLine num={20}>        <Kw>envFrom</Kw>:</CodeLine>
                    <CodeLine num={21}>        - <Kw>configMapRef</Kw>:</CodeLine>
                    <CodeLine num={22}>            <Kw>name</Kw>: <Str>app-config</Str></CodeLine>
                    <CodeLine num={23}>        - <Kw>secretRef</Kw>:</CodeLine>
                    <CodeLine num={24}>            <Kw>name</Kw>: <Str>app-secrets</Str></CodeLine>
                    <FileTab name="webapp-service.yaml" />
                    <CodeLine num={25}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={26}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={27}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={28}>  <Kw>name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={29}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={30}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={31}>    <Kw>app</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={32}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={33}>  - <Kw>port</Kw>: <Num>80</Num></CodeLine>
                    <CodeLine num={34}>    <Kw>targetPort</Kw>: <Num>3000</Num></CodeLine>
                    <FileTab name="worker-deployment.yaml" />
                    <CodeLine num={35}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={36}><Kw>kind</Kw>: Deployment</CodeLine>
                    <CodeLine num={37}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={38}>  <Kw>name</Kw>: <Str>worker</Str></CodeLine>
                    <CodeLine num={39}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={40}>  <Kw>replicas</Kw>: <Num>2</Num></CodeLine>
                    <CodeLine num={41}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={42}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={43}>      <Kw>app</Kw>: <Str>worker</Str></CodeLine>
                    <CodeLine num={44}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={45}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={46}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={47}>        <Kw>app</Kw>: <Str>worker</Str></CodeLine>
                    <CodeLine num={48}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={49}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={50}>      - <Kw>name</Kw>: <Str>worker</Str></CodeLine>
                    <CodeLine num={51}>        <Kw>image</Kw>: <Str>myapp:latest</Str></CodeLine>
                    <CodeLine num={52}>        <Kw>command</Kw>: [<Str>&quot;node&quot;</Str>, <Str>&quot;worker.js&quot;</Str>]</CodeLine>
                    <CodeLine num={53}>        <Kw>envFrom</Kw>:</CodeLine>
                    <CodeLine num={54}>        - <Kw>configMapRef</Kw>:</CodeLine>
                    <CodeLine num={55}>            <Kw>name</Kw>: <Str>app-config</Str></CodeLine>
                    <CodeLine num={56}>        - <Kw>secretRef</Kw>:</CodeLine>
                    <CodeLine num={57}>            <Kw>name</Kw>: <Str>app-secrets</Str></CodeLine>
                    <FileTab name="redis-deployment.yaml" />
                    <CodeLine num={58}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={59}><Kw>kind</Kw>: Deployment</CodeLine>
                    <CodeLine num={60}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={61}>  <Kw>name</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={62}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={63}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={64}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={65}>      <Kw>app</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={66}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={67}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={68}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={69}>        <Kw>app</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={70}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={71}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={72}>      - <Kw>name</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={73}>        <Kw>image</Kw>: <Str>redis:7-alpine</Str></CodeLine>
                    <CodeLine num={74}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={75}>        - <Kw>containerPort</Kw>: <Num>6379</Num></CodeLine>
                    <FileTab name="redis-service.yaml" />
                    <CodeLine num={76}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={77}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={78}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={79}>  <Kw>name</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={80}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={81}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={82}>    <Kw>app</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={83}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={84}>  - <Kw>port</Kw>: <Num>6379</Num></CodeLine>
                    <CodeLine num={85}>    <Kw>targetPort</Kw>: <Num>6379</Num></CodeLine>
                    <FileTab name="postgres-statefulset.yaml" />
                    <CodeLine num={86}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={87}><Kw>kind</Kw>: StatefulSet</CodeLine>
                    <CodeLine num={88}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={89}>  <Kw>name</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={90}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={91}>  <Kw>serviceName</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={92}>  <Kw>replicas</Kw>: <Num>1</Num></CodeLine>
                    <CodeLine num={93}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={94}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={95}>      <Kw>app</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={96}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={97}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={98}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={99}>        <Kw>app</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={100}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={101}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={102}>      - <Kw>name</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={103}>        <Kw>image</Kw>: <Str>postgres:16</Str></CodeLine>
                    <CodeLine num={104}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={105}>        - <Kw>containerPort</Kw>: <Num>5432</Num></CodeLine>
                    <CodeLine num={106}>        <Kw>envFrom</Kw>:</CodeLine>
                    <CodeLine num={107}>        - <Kw>secretRef</Kw>:</CodeLine>
                    <CodeLine num={108}>            <Kw>name</Kw>: <Str>db-secrets</Str></CodeLine>
                    <CodeLine num={109}>        <Kw>volumeMounts</Kw>:</CodeLine>
                    <CodeLine num={110}>        - <Kw>name</Kw>: <Str>pg-data</Str></CodeLine>
                    <CodeLine num={111}>          <Kw>mountPath</Kw>: <Str>/var/lib/postgresql/data</Str></CodeLine>
                    <FileTab name="postgres-service.yaml" />
                    <CodeLine num={112}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={113}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={114}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={115}>  <Kw>name</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={116}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={117}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={118}>    <Kw>app</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={119}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={120}>  - <Kw>port</Kw>: <Num>5432</Num></CodeLine>
                    <CodeLine num={121}>    <Kw>targetPort</Kw>: <Num>5432</Num></CodeLine>
                    <FileTab name="configmap.yaml" />
                    <CodeLine num={122}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={123}><Kw>kind</Kw>: ConfigMap</CodeLine>
                    <CodeLine num={124}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={125}>  <Kw>name</Kw>: <Str>app-config</Str></CodeLine>
                    <CodeLine num={126}><Kw>data</Kw>:</CodeLine>
                    <CodeLine num={127}>  <Kw>REDIS_URL</Kw>: <Str>redis://redis:6379</Str></CodeLine>
                    <CodeLine num={128}>  <Kw>NODE_ENV</Kw>: <Str>production</Str></CodeLine>
                    <FileTab name="secret.yaml" />
                    <CodeLine num={129}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={130}><Kw>kind</Kw>: Secret</CodeLine>
                    <CodeLine num={131}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={132}>  <Kw>name</Kw>: <Str>app-secrets</Str></CodeLine>
                    <CodeLine num={133}><Kw>type</Kw>: Opaque</CodeLine>
                    <CodeLine num={134}><Kw>stringData</Kw>:</CodeLine>
                    <CodeLine num={135}>  <Kw>DATABASE_URL</Kw>: <Str>postgres://postgres:secret@postgres:5432/app</Str></CodeLine>
                  </CodePanel>

                  <CodePanel title="Docker Compose" lineCount="30" fileCount="1 file" variant="compose">
                    <FileTab name="docker-compose.yml" />
                    <CodeLine num={1}><Kw>services</Kw>:</CodeLine>
                    <CodeLine num={2}>  <Kw>webapp</Kw>:</CodeLine>
                    <CodeLine num={3}>    <Kw>image</Kw>: <Str>myapp:latest</Str></CodeLine>
                    <CodeLine num={4}>    <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={5}>      - <Str>&quot;80:3000&quot;</Str></CodeLine>
                    <CodeLine num={6}>    <Kw>environment</Kw>:</CodeLine>
                    <CodeLine num={7}>      <Kw>DATABASE_URL</Kw>: <Str>postgres://postgres:secret@db/app</Str></CodeLine>
                    <CodeLine num={8}>      <Kw>REDIS_URL</Kw>: <Str>redis://redis:6379</Str></CodeLine>
                    <CodeLine num={9}>    <Kw>depends_on</Kw>:</CodeLine>
                    <CodeLine num={10}>      - <Str>db</Str></CodeLine>
                    <CodeLine num={11}>      - <Str>redis</Str></CodeLine>
                    <CodeLine num={12} empty />
                    <CodeLine num={13}>  <Kw>worker</Kw>:</CodeLine>
                    <CodeLine num={14}>    <Kw>image</Kw>: <Str>myapp:latest</Str></CodeLine>
                    <CodeLine num={15}>    <Kw>command</Kw>: <Str>node worker.js</Str></CodeLine>
                    <CodeLine num={16}>    <Kw>environment</Kw>:</CodeLine>
                    <CodeLine num={17}>      <Kw>DATABASE_URL</Kw>: <Str>postgres://postgres:secret@db/app</Str></CodeLine>
                    <CodeLine num={18}>      <Kw>REDIS_URL</Kw>: <Str>redis://redis:6379</Str></CodeLine>
                    <CodeLine num={19}>    <Kw>depends_on</Kw>:</CodeLine>
                    <CodeLine num={20}>      - <Str>db</Str></CodeLine>
                    <CodeLine num={21}>      - <Str>redis</Str></CodeLine>
                    <CodeLine num={22} empty />
                    <CodeLine num={23}>  <Kw>db</Kw>:</CodeLine>
                    <CodeLine num={24}>    <Kw>image</Kw>: <Str>postgres:16</Str></CodeLine>
                    <CodeLine num={25}>    <Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={26}>      - <Str>pg-data:/var/lib/postgresql/data</Str></CodeLine>
                    <CodeLine num={27} empty />
                    <CodeLine num={28}>  <Kw>redis</Kw>:</CodeLine>
                    <CodeLine num={29}>    <Kw>image</Kw>: <Str>redis:7-alpine</Str></CodeLine>
                    <CodeLine num={30} empty />
                    <CodeLine num={31}><Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={32}>  <Kw>pg-data</Kw>:</CodeLine>
                    <EmptySpace lines={70} />
                  </CodePanel>
                </div>

                <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-8 max-w-[640px] mx-auto">
                  Add a cache and a background worker and Kubernetes jumps to 9 files with 135 lines. Every new component requires a Deployment and a Service at minimum, plus shared ConfigMaps and Secrets. Docker Compose adds another block in the same file. 135 vs 32 lines. 4.2x more YAML for the same result.
                </p>
              </FadeIn>
            </div>

            {/* ==================== SCENARIO 3 ==================== */}
            <div className="max-w-[1000px] mx-auto mt-24">
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide text-center mb-2">Scenario 3: Full platform with monitoring</h2>
                <p className="text-xs text-muted/60 text-center mb-8">App, database, Redis, Nginx, Prometheus, Grafana. A real production stack.</p>

                <div className="grid md:grid-cols-2 gap-5 items-stretch">
                  <CodePanel title="Kubernetes" lineCount="258" fileCount="15 files" variant="k8s">
                    <FileTab name="namespace.yaml" />
                    <CodeLine num={1}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={2}><Kw>kind</Kw>: Namespace</CodeLine>
                    <CodeLine num={3}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={4}>  <Kw>name</Kw>: <Str>production</Str></CodeLine>
                    <FileTab name="webapp-deployment.yaml" />
                    <CodeLine num={5}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={6}><Kw>kind</Kw>: Deployment</CodeLine>
                    <CodeLine num={7}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={8}>  <Kw>name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={9}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={10}>  <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={11}>    <Kw>app.kubernetes.io/name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={12}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={13}>  <Kw>replicas</Kw>: <Num>1</Num></CodeLine>
                    <CodeLine num={14}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={15}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={16}>      <Kw>app.kubernetes.io/name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={17}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={18}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={19}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={20}>        <Kw>app.kubernetes.io/name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={21}>      <Kw>annotations</Kw>:</CodeLine>
                    <CodeLine num={22}>        <Kw>prometheus.io/scrape</Kw>: <Str>&quot;true&quot;</Str></CodeLine>
                    <CodeLine num={23}>        <Kw>prometheus.io/port</Kw>: <Str>&quot;3000&quot;</Str></CodeLine>
                    <CodeLine num={24}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={25}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={26}>      - <Kw>name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={27}>        <Kw>image</Kw>: <Str>myapp:latest</Str></CodeLine>
                    <CodeLine num={28}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={29}>        - <Kw>containerPort</Kw>: <Num>3000</Num></CodeLine>
                    <CodeLine num={30}>        <Kw>resources</Kw>:</CodeLine>
                    <CodeLine num={31}>          <Kw>requests</Kw>:</CodeLine>
                    <CodeLine num={32}>            <Kw>memory</Kw>: <Str>&quot;128Mi&quot;</Str></CodeLine>
                    <CodeLine num={33}>            <Kw>cpu</Kw>: <Str>&quot;100m&quot;</Str></CodeLine>
                    <CodeLine num={34}>          <Kw>limits</Kw>:</CodeLine>
                    <CodeLine num={35}>            <Kw>memory</Kw>: <Str>&quot;256Mi&quot;</Str></CodeLine>
                    <CodeLine num={36}>            <Kw>cpu</Kw>: <Str>&quot;500m&quot;</Str></CodeLine>
                    <CodeLine num={37}>        <Kw>envFrom</Kw>:</CodeLine>
                    <CodeLine num={38}>        - <Kw>configMapRef</Kw>:</CodeLine>
                    <CodeLine num={39}>            <Kw>name</Kw>: <Str>app-config</Str></CodeLine>
                    <CodeLine num={40}>        - <Kw>secretRef</Kw>:</CodeLine>
                    <CodeLine num={41}>            <Kw>name</Kw>: <Str>app-secrets</Str></CodeLine>
                    <CodeLine num={42}>        <Kw>readinessProbe</Kw>:</CodeLine>
                    <CodeLine num={43}>          <Kw>httpGet</Kw>:</CodeLine>
                    <CodeLine num={44}>            <Kw>path</Kw>: <Str>/health</Str></CodeLine>
                    <CodeLine num={45}>            <Kw>port</Kw>: <Num>3000</Num></CodeLine>
                    <FileTab name="webapp-service.yaml" />
                    <CodeLine num={46}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={47}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={48}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={49}>  <Kw>name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={50}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={51}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={52}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={53}>    <Kw>app.kubernetes.io/name</Kw>: <Str>webapp</Str></CodeLine>
                    <CodeLine num={54}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={55}>  - <Kw>port</Kw>: <Num>80</Num></CodeLine>
                    <CodeLine num={56}>    <Kw>targetPort</Kw>: <Num>3000</Num></CodeLine>
                    <FileTab name="postgres-statefulset.yaml" />
                    <CodeLine num={57}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={58}><Kw>kind</Kw>: StatefulSet</CodeLine>
                    <CodeLine num={59}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={60}>  <Kw>name</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={61}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={62}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={63}>  <Kw>serviceName</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={64}>  <Kw>replicas</Kw>: <Num>1</Num></CodeLine>
                    <CodeLine num={65}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={66}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={67}>      <Kw>app</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={68}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={69}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={70}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={71}>        <Kw>app</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={72}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={73}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={74}>      - <Kw>name</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={75}>        <Kw>image</Kw>: <Str>postgres:16</Str></CodeLine>
                    <CodeLine num={76}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={77}>        - <Kw>containerPort</Kw>: <Num>5432</Num></CodeLine>
                    <CodeLine num={78}>        <Kw>envFrom</Kw>:</CodeLine>
                    <CodeLine num={79}>        - <Kw>secretRef</Kw>:</CodeLine>
                    <CodeLine num={80}>            <Kw>name</Kw>: <Str>db-secrets</Str></CodeLine>
                    <CodeLine num={81}>        <Kw>volumeMounts</Kw>:</CodeLine>
                    <CodeLine num={82}>        - <Kw>name</Kw>: <Str>pg-data</Str></CodeLine>
                    <CodeLine num={83}>          <Kw>mountPath</Kw>: <Str>/var/lib/postgresql/data</Str></CodeLine>
                    <FileTab name="postgres-service.yaml" />
                    <CodeLine num={84}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={85}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={86}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={87}>  <Kw>name</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={88}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={89}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={90}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={91}>    <Kw>app</Kw>: <Str>postgres</Str></CodeLine>
                    <CodeLine num={92}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={93}>  - <Kw>port</Kw>: <Num>5432</Num></CodeLine>
                    <CodeLine num={94}>    <Kw>targetPort</Kw>: <Num>5432</Num></CodeLine>
                    <FileTab name="postgres-pvc.yaml" />
                    <CodeLine num={95}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={96}><Kw>kind</Kw>: PersistentVolumeClaim</CodeLine>
                    <CodeLine num={97}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={98}>  <Kw>name</Kw>: <Str>pg-data</Str></CodeLine>
                    <CodeLine num={99}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={100}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={101}>  <Kw>accessModes</Kw>: [<Str>ReadWriteOnce</Str>]</CodeLine>
                    <CodeLine num={102}>  <Kw>resources</Kw>:</CodeLine>
                    <CodeLine num={103}>    <Kw>requests</Kw>:</CodeLine>
                    <CodeLine num={104}>      <Kw>storage</Kw>: <Str>10Gi</Str></CodeLine>
                    <FileTab name="redis-deployment.yaml" />
                    <CodeLine num={105}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={106}><Kw>kind</Kw>: Deployment</CodeLine>
                    <CodeLine num={107}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={108}>  <Kw>name</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={109}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={110}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={111}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={112}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={113}>      <Kw>app</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={114}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={115}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={116}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={117}>        <Kw>app</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={118}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={119}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={120}>      - <Kw>name</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={121}>        <Kw>image</Kw>: <Str>redis:7-alpine</Str></CodeLine>
                    <CodeLine num={122}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={123}>        - <Kw>containerPort</Kw>: <Num>6379</Num></CodeLine>
                    <FileTab name="redis-service.yaml" />
                    <CodeLine num={124}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={125}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={126}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={127}>  <Kw>name</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={128}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={129}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={130}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={131}>    <Kw>app</Kw>: <Str>redis</Str></CodeLine>
                    <CodeLine num={132}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={133}>  - <Kw>port</Kw>: <Num>6379</Num></CodeLine>
                    <CodeLine num={134}>    <Kw>targetPort</Kw>: <Num>6379</Num></CodeLine>
                    <FileTab name="nginx-deployment.yaml" />
                    <CodeLine num={135}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={136}><Kw>kind</Kw>: Deployment</CodeLine>
                    <CodeLine num={137}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={138}>  <Kw>name</Kw>: <Str>nginx</Str></CodeLine>
                    <CodeLine num={139}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={140}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={141}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={142}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={143}>      <Kw>app</Kw>: <Str>nginx</Str></CodeLine>
                    <CodeLine num={144}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={145}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={146}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={147}>        <Kw>app</Kw>: <Str>nginx</Str></CodeLine>
                    <CodeLine num={148}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={149}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={150}>      - <Kw>name</Kw>: <Str>nginx</Str></CodeLine>
                    <CodeLine num={151}>        <Kw>image</Kw>: <Str>nginx:alpine</Str></CodeLine>
                    <CodeLine num={152}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={153}>        - <Kw>containerPort</Kw>: <Num>80</Num></CodeLine>
                    <CodeLine num={154}>        <Kw>volumeMounts</Kw>:</CodeLine>
                    <CodeLine num={155}>        - <Kw>name</Kw>: <Str>nginx-conf</Str></CodeLine>
                    <CodeLine num={156}>          <Kw>mountPath</Kw>: <Str>/etc/nginx/nginx.conf</Str></CodeLine>
                    <CodeLine num={157}>          <Kw>subPath</Kw>: <Str>nginx.conf</Str></CodeLine>
                    <CodeLine num={158}>      <Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={159}>      - <Kw>name</Kw>: <Str>nginx-conf</Str></CodeLine>
                    <CodeLine num={160}>        <Kw>configMap</Kw>:</CodeLine>
                    <CodeLine num={161}>          <Kw>name</Kw>: <Str>nginx-config</Str></CodeLine>
                    <FileTab name="nginx-service.yaml" />
                    <CodeLine num={162}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={163}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={164}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={165}>  <Kw>name</Kw>: <Str>nginx</Str></CodeLine>
                    <CodeLine num={166}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={167}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={168}>  <Kw>type</Kw>: LoadBalancer</CodeLine>
                    <CodeLine num={169}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={170}>    <Kw>app</Kw>: <Str>nginx</Str></CodeLine>
                    <CodeLine num={171}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={172}>  - <Kw>port</Kw>: <Num>80</Num></CodeLine>
                    <CodeLine num={173}>    <Kw>targetPort</Kw>: <Num>80</Num></CodeLine>
                    <FileTab name="prometheus-deployment.yaml" />
                    <CodeLine num={174}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={175}><Kw>kind</Kw>: Deployment</CodeLine>
                    <CodeLine num={176}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={177}>  <Kw>name</Kw>: <Str>prometheus</Str></CodeLine>
                    <CodeLine num={178}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={179}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={180}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={181}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={182}>      <Kw>app</Kw>: <Str>prometheus</Str></CodeLine>
                    <CodeLine num={183}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={184}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={185}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={186}>        <Kw>app</Kw>: <Str>prometheus</Str></CodeLine>
                    <CodeLine num={187}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={188}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={189}>      - <Kw>name</Kw>: <Str>prometheus</Str></CodeLine>
                    <CodeLine num={190}>        <Kw>image</Kw>: <Str>prom/prometheus</Str></CodeLine>
                    <CodeLine num={191}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={192}>        - <Kw>containerPort</Kw>: <Num>9090</Num></CodeLine>
                    <CodeLine num={193}>        <Kw>volumeMounts</Kw>:</CodeLine>
                    <CodeLine num={194}>        - <Kw>name</Kw>: <Str>prom-config</Str></CodeLine>
                    <CodeLine num={195}>          <Kw>mountPath</Kw>: <Str>/etc/prometheus</Str></CodeLine>
                    <CodeLine num={196}>        - <Kw>name</Kw>: <Str>prom-data</Str></CodeLine>
                    <CodeLine num={197}>          <Kw>mountPath</Kw>: <Str>/prometheus</Str></CodeLine>
                    <CodeLine num={198}>      <Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={199}>      - <Kw>name</Kw>: <Str>prom-config</Str></CodeLine>
                    <CodeLine num={200}>        <Kw>configMap</Kw>:</CodeLine>
                    <CodeLine num={201}>          <Kw>name</Kw>: <Str>prometheus-config</Str></CodeLine>
                    <CodeLine num={202}>      - <Kw>name</Kw>: <Str>prom-data</Str></CodeLine>
                    <CodeLine num={203}>        <Kw>persistentVolumeClaim</Kw>:</CodeLine>
                    <CodeLine num={204}>          <Kw>claimName</Kw>: <Str>prom-data</Str></CodeLine>
                    <FileTab name="prometheus-service.yaml" />
                    <CodeLine num={205}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={206}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={207}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={208}>  <Kw>name</Kw>: <Str>prometheus</Str></CodeLine>
                    <CodeLine num={209}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={210}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={211}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={212}>    <Kw>app</Kw>: <Str>prometheus</Str></CodeLine>
                    <CodeLine num={213}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={214}>  - <Kw>port</Kw>: <Num>9090</Num></CodeLine>
                    <CodeLine num={215}>    <Kw>targetPort</Kw>: <Num>9090</Num></CodeLine>
                    <FileTab name="grafana-deployment.yaml" />
                    <CodeLine num={216}><Kw>apiVersion</Kw>: apps/v1</CodeLine>
                    <CodeLine num={217}><Kw>kind</Kw>: Deployment</CodeLine>
                    <CodeLine num={218}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={219}>  <Kw>name</Kw>: <Str>grafana</Str></CodeLine>
                    <CodeLine num={220}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={221}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={222}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={223}>    <Kw>matchLabels</Kw>:</CodeLine>
                    <CodeLine num={224}>      <Kw>app</Kw>: <Str>grafana</Str></CodeLine>
                    <CodeLine num={225}>  <Kw>template</Kw>:</CodeLine>
                    <CodeLine num={226}>    <Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={227}>      <Kw>labels</Kw>:</CodeLine>
                    <CodeLine num={228}>        <Kw>app</Kw>: <Str>grafana</Str></CodeLine>
                    <CodeLine num={229}>    <Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={230}>      <Kw>containers</Kw>:</CodeLine>
                    <CodeLine num={231}>      - <Kw>name</Kw>: <Str>grafana</Str></CodeLine>
                    <CodeLine num={232}>        <Kw>image</Kw>: <Str>grafana/grafana</Str></CodeLine>
                    <CodeLine num={233}>        <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={234}>        - <Kw>containerPort</Kw>: <Num>3000</Num></CodeLine>
                    <CodeLine num={235}>        <Kw>volumeMounts</Kw>:</CodeLine>
                    <CodeLine num={236}>        - <Kw>name</Kw>: <Str>grafana-data</Str></CodeLine>
                    <CodeLine num={237}>          <Kw>mountPath</Kw>: <Str>/var/lib/grafana</Str></CodeLine>
                    <CodeLine num={238}>      <Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={239}>      - <Kw>name</Kw>: <Str>grafana-data</Str></CodeLine>
                    <CodeLine num={240}>        <Kw>persistentVolumeClaim</Kw>:</CodeLine>
                    <CodeLine num={241}>          <Kw>claimName</Kw>: <Str>grafana-data</Str></CodeLine>
                    <FileTab name="grafana-service.yaml" />
                    <CodeLine num={242}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={243}><Kw>kind</Kw>: Service</CodeLine>
                    <CodeLine num={244}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={245}>  <Kw>name</Kw>: <Str>grafana</Str></CodeLine>
                    <CodeLine num={246}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={247}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={248}>  <Kw>selector</Kw>:</CodeLine>
                    <CodeLine num={249}>    <Kw>app</Kw>: <Str>grafana</Str></CodeLine>
                    <CodeLine num={250}>  <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={251}>  - <Kw>port</Kw>: <Num>3000</Num></CodeLine>
                    <CodeLine num={252}>    <Kw>targetPort</Kw>: <Num>3000</Num></CodeLine>
                    <FileTab name="prom-pvc.yaml" />
                    <CodeLine num={253}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={254}><Kw>kind</Kw>: PersistentVolumeClaim</CodeLine>
                    <CodeLine num={255}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={256}>  <Kw>name</Kw>: <Str>prom-data</Str></CodeLine>
                    <CodeLine num={257}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={258}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={259}>  <Kw>accessModes</Kw>: [<Str>ReadWriteOnce</Str>]</CodeLine>
                    <CodeLine num={260}>  <Kw>resources</Kw>:</CodeLine>
                    <CodeLine num={261}>    <Kw>requests</Kw>:</CodeLine>
                    <CodeLine num={262}>      <Kw>storage</Kw>: <Str>20Gi</Str></CodeLine>
                    <FileTab name="grafana-pvc.yaml" />
                    <CodeLine num={263}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={264}><Kw>kind</Kw>: PersistentVolumeClaim</CodeLine>
                    <CodeLine num={265}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={266}>  <Kw>name</Kw>: <Str>grafana-data</Str></CodeLine>
                    <CodeLine num={267}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={268}><Kw>spec</Kw>:</CodeLine>
                    <CodeLine num={269}>  <Kw>accessModes</Kw>: [<Str>ReadWriteOnce</Str>]</CodeLine>
                    <CodeLine num={270}>  <Kw>resources</Kw>:</CodeLine>
                    <CodeLine num={271}>    <Kw>requests</Kw>:</CodeLine>
                    <CodeLine num={272}>      <Kw>storage</Kw>: <Str>5Gi</Str></CodeLine>
                    <FileTab name="configmap.yaml" />
                    <CodeLine num={273}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={274}><Kw>kind</Kw>: ConfigMap</CodeLine>
                    <CodeLine num={275}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={276}>  <Kw>name</Kw>: <Str>app-config</Str></CodeLine>
                    <CodeLine num={277}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={278}><Kw>data</Kw>:</CodeLine>
                    <CodeLine num={279}>  <Kw>REDIS_URL</Kw>: <Str>redis://redis:6379</Str></CodeLine>
                    <CodeLine num={280}>  <Kw>NODE_ENV</Kw>: <Str>production</Str></CodeLine>
                    <FileTab name="secret.yaml" />
                    <CodeLine num={281}><Kw>apiVersion</Kw>: v1</CodeLine>
                    <CodeLine num={282}><Kw>kind</Kw>: Secret</CodeLine>
                    <CodeLine num={283}><Kw>metadata</Kw>:</CodeLine>
                    <CodeLine num={284}>  <Kw>name</Kw>: <Str>app-secrets</Str></CodeLine>
                    <CodeLine num={285}>  <Kw>namespace</Kw>: <Str>production</Str></CodeLine>
                    <CodeLine num={286}><Kw>type</Kw>: Opaque</CodeLine>
                    <CodeLine num={287}><Kw>stringData</Kw>:</CodeLine>
                    <CodeLine num={288}>  <Kw>DATABASE_URL</Kw>: <Str>postgres://postgres:secret@postgres:5432/app</Str></CodeLine>
                    <CodeLine num={289}>  <Kw>POSTGRES_PASSWORD</Kw>: <Str>secret</Str></CodeLine>
                  </CodePanel>

                  <CodePanel title="Docker Compose" lineCount="52" fileCount="1 file" variant="compose">
                    <FileTab name="docker-compose.yml" />
                    <CodeLine num={1}><Kw>services</Kw>:</CodeLine>
                    <CodeLine num={2}>  <Kw>nginx</Kw>:</CodeLine>
                    <CodeLine num={3}>    <Kw>image</Kw>: <Str>nginx:alpine</Str></CodeLine>
                    <CodeLine num={4}>    <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={5}>      - <Str>&quot;80:80&quot;</Str></CodeLine>
                    <CodeLine num={6}>    <Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={7}>      - <Str>./nginx.conf:/etc/nginx/nginx.conf</Str></CodeLine>
                    <CodeLine num={8}>    <Kw>depends_on</Kw>:</CodeLine>
                    <CodeLine num={9}>      - <Str>webapp</Str></CodeLine>
                    <CodeLine num={10} empty />
                    <CodeLine num={11}>  <Kw>webapp</Kw>:</CodeLine>
                    <CodeLine num={12}>    <Kw>image</Kw>: <Str>myapp:latest</Str></CodeLine>
                    <CodeLine num={13}>    <Kw>environment</Kw>:</CodeLine>
                    <CodeLine num={14}>      <Kw>DATABASE_URL</Kw>: <Str>postgres://postgres:secret@db/app</Str></CodeLine>
                    <CodeLine num={15}>      <Kw>REDIS_URL</Kw>: <Str>redis://redis:6379</Str></CodeLine>
                    <CodeLine num={16}>    <Kw>depends_on</Kw>:</CodeLine>
                    <CodeLine num={17}>      - <Str>db</Str></CodeLine>
                    <CodeLine num={18}>      - <Str>redis</Str></CodeLine>
                    <CodeLine num={19} empty />
                    <CodeLine num={20}>  <Kw>db</Kw>:</CodeLine>
                    <CodeLine num={21}>    <Kw>image</Kw>: <Str>postgres:16</Str></CodeLine>
                    <CodeLine num={22}>    <Kw>environment</Kw>:</CodeLine>
                    <CodeLine num={23}>      <Kw>POSTGRES_DB</Kw>: <Str>app</Str></CodeLine>
                    <CodeLine num={24}>      <Kw>POSTGRES_PASSWORD</Kw>: <Str>secret</Str></CodeLine>
                    <CodeLine num={25}>    <Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={26}>      - <Str>pg-data:/var/lib/postgresql/data</Str></CodeLine>
                    <CodeLine num={27} empty />
                    <CodeLine num={28}>  <Kw>redis</Kw>:</CodeLine>
                    <CodeLine num={29}>    <Kw>image</Kw>: <Str>redis:7-alpine</Str></CodeLine>
                    <CodeLine num={30} empty />
                    <CodeLine num={31}>  <Kw>prometheus</Kw>:</CodeLine>
                    <CodeLine num={32}>    <Kw>image</Kw>: <Str>prom/prometheus</Str></CodeLine>
                    <CodeLine num={33}>    <Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={34}>      - <Str>./prometheus.yml:/etc/prometheus/prometheus.yml</Str></CodeLine>
                    <CodeLine num={35}>      - <Str>prom-data:/prometheus</Str></CodeLine>
                    <CodeLine num={36}>    <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={37}>      - <Str>&quot;9090:9090&quot;</Str></CodeLine>
                    <CodeLine num={38} empty />
                    <CodeLine num={39}>  <Kw>grafana</Kw>:</CodeLine>
                    <CodeLine num={40}>    <Kw>image</Kw>: <Str>grafana/grafana</Str></CodeLine>
                    <CodeLine num={41}>    <Kw>ports</Kw>:</CodeLine>
                    <CodeLine num={42}>      - <Str>&quot;3001:3000&quot;</Str></CodeLine>
                    <CodeLine num={43}>    <Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={44}>      - <Str>grafana-data:/var/lib/grafana</Str></CodeLine>
                    <CodeLine num={45}>    <Kw>depends_on</Kw>:</CodeLine>
                    <CodeLine num={46}>      - <Str>prometheus</Str></CodeLine>
                    <CodeLine num={47} empty />
                    <CodeLine num={48}><Kw>volumes</Kw>:</CodeLine>
                    <CodeLine num={49}>  <Kw>pg-data</Kw>:</CodeLine>
                    <CodeLine num={50}>  <Kw>prom-data</Kw>:</CodeLine>
                    <CodeLine num={51}>  <Kw>grafana-data</Kw>:</CodeLine>
                    <EmptySpace lines={160} />
                  </CodePanel>
                </div>

                <p className="text-sm text-foreground-secondary/70 leading-loose font-light mt-8 max-w-[640px] mx-auto">
                  A real production stack with monitoring. The Kubernetes side is 289 lines across 15 files. The Docker Compose file is 51 lines. Every single line of Kubernetes YAML is real configuration that someone on your team needs to understand, maintain, and debug. The empty space on the right tells the whole story.
                </p>
              </FadeIn>
            </div>

            {/* Summary */}
            <div className="max-w-[640px] mx-auto mt-24 space-y-10">
              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The pattern is clear</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border border-[var(--border-color)] rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--border-color)]">
                        <th className="text-left p-4 text-muted/60 font-light text-xs uppercase tracking-wider">Scenario</th>
                        <th className="text-center p-4 text-[var(--pipe-blue-text)] font-light text-xs uppercase tracking-wider">Kubernetes</th>
                        <th className="text-center p-4 text-[var(--pipe-teal-text)] font-light text-xs uppercase tracking-wider">Compose</th>
                        <th className="text-center p-4 text-muted/60 font-light text-xs uppercase tracking-wider">Ratio</th>
                      </tr>
                    </thead>
                    <tbody className="text-foreground-secondary/70 font-light">
                      <tr className="border-b border-[var(--border-color)]/50">
                        <td className="p-4">App + DB</td>
                        <td className="p-4 text-center">77 lines / 5 files</td>
                        <td className="p-4 text-center">17 lines / 1 file</td>
                        <td className="p-4 text-center text-foreground/70 font-normal">4.5x</td>
                      </tr>
                      <tr className="border-b border-[var(--border-color)]/50">
                        <td className="p-4">App + DB + Redis + Worker</td>
                        <td className="p-4 text-center">135 lines / 9 files</td>
                        <td className="p-4 text-center">32 lines / 1 file</td>
                        <td className="p-4 text-center text-foreground/70 font-normal">4.2x</td>
                      </tr>
                      <tr>
                        <td className="p-4">Full platform + monitoring</td>
                        <td className="p-4 text-center">289 lines / 15 files</td>
                        <td className="p-4 text-center">51 lines / 1 file</td>
                        <td className="p-4 text-center text-foreground/70 font-normal">5.7x</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Kubernetes requires 4 to 6x more configuration than Docker Compose for the same workloads. And this comparison is still generous: it does not include the Ingress controller setup, cert-manager for TLS, RBAC policies, NetworkPolicies, nginx ConfigMap content, prometheus ConfigMap content, or the Helm charts most teams use to manage all of this.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">More YAML is not the real problem</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  The line count is a proxy for something deeper: operational complexity. Every Kubernetes resource is something that can break, drift, or be misconfigured. Every file is something a new team member needs to understand before they can debug a production issue at 2 AM.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <ul className="space-y-3 text-sm text-foreground-secondary/70 leading-loose font-light">
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">15 files means 15 things that can go wrong.</strong> A typo in a selector label silently breaks service routing. A missing PVC binding leaves your database without storage. A wrong port number in a Service manifest returns 502s that are hard to trace back.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">Onboarding takes weeks instead of hours.</strong> A new developer can read a 51-line docker-compose.yml and understand the entire stack. Understanding 15 Kubernetes manifests, plus how they interact with the cluster&apos;s networking, storage, and RBAC, takes serious time.
                  </li>
                  <li className="pl-4 border-l border-foreground/[0.08]">
                    <strong className="text-foreground font-normal">The control plane itself needs maintenance.</strong> Docker Compose runs on top of the Docker daemon. Kubernetes needs etcd, the API server, the scheduler, the controller manager, kubelets, and a CNI plugin. Each one needs monitoring, upgrades, and disaster recovery.
                  </li>
                </ul>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">When does Kubernetes make sense?</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Kubernetes earns its complexity when you actually need what it offers: auto-scaling across nodes, multi-region deployments, service mesh, or running 50+ microservices. If you have a dedicated platform team to absorb the operational cost, it can be the right choice. For teams with 2 to 30 developers running fewer than 20 services, the complexity is overhead, not value.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <h2 className="text-body-lg text-foreground font-light tracking-wide">The bottom line</h2>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  If your production stack looks like scenarios 1, 2, or 3 above, Docker Compose gives you the same result with a fraction of the configuration, a fraction of the failure modes, and a fraction of the learning curve. Start simple. Move to Kubernetes when the actual limits of Compose force you to, not when a conference talk makes you feel like you should.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                  Want a deeper comparison?{" "}
                  <Link href="/blog/kubernetes-vs-docker-compose" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                    Kubernetes vs Docker Compose: which one does your team actually need?
                  </Link>
                  {" "}covers cost, operational overhead, and the migration path in detail.
                </p>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="border-t border-foreground/[0.08] pt-8 mt-8">
                  <p className="text-sm text-foreground-secondary/70 leading-loose font-light">
                    Already running Docker Compose? Read{" "}
                    <Link href="/blog/docker-compose-in-production" className="text-foreground/80 hover:text-foreground underline decoration-foreground/20 hover:decoration-foreground/50 underline-offset-[0.2em] decoration-[0.08em] transition-colors">
                      Docker Compose in Production
                    </Link>
                    {" "}for health checks, zero-downtime deploys, and monitoring.
                  </p>
                </div>
              </FadeIn>
            </div>
          </Container>
        </section>
      </article>

      <BlogEmailCapture />

      <CTASection
        headline="Running Kubernetes and wondering if you should be?"
        subtext="Our infrastructure audit evaluates whether your orchestration matches your team size."
        buttonText="Get an audit"
        buttonHref="/contact"
      />
    </main>
  );
}
