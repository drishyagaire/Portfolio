import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
const profilePhoto = "/drishya.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drishya Gaire — Full Stack & ML Engineer" },
      { name: "description", content: "Portfolio of Drishya Gaire — exploring full stack development for building thoughtful software ." },
    ],
  }),
  component: Index,
});

type Project = {
  num: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  year: string;
  github: string;
  demo?: string;
};

const projects: Project[] = [
  {
    num: "01",
    name: "Help Sathi",
    tagline: "A safety companion engineered to listen.",
    description:
      "An Android application performing real-time distress detection across Nepali and English speech, automatically dispatching SOS alerts with live location to designated emergency contacts.",
    stack: ["React Native", "FastAPI", "CNN + GRU", "Whisper AI", "MongoDB", "Firebase FCM"],
    year: "2025",
    github: "https://github.com/drishyagaire",
  },
  {
    num: "02",
    name: "Brain Tumor Detection",
    tagline: "Medical imaging powered by deep learning.",
    description:
      "A comparative research study evaluating CNN, VGG19, and ResNet50 architectures for brain tumor classification from MRI scans — implemented end-to-end with data augmentation, transfer learning, and quantitative model evaluation.",
    stack: ["Python", "CNN", "VGG19", "ResNet50"],
    year: "2024",
    github: "https://github.com/drishyagaire",
  },
  {
    num: "03",
    name: "Interview AI",
    tagline: "Intelligent preparation for high-stakes interviews.",
    description:
      "A full-stack generative AI platform providing resume analysis, job description matching, skill-gap identification, simulated mock interviews, and ATS-optimized resume generation.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Puppeteer"],
    year: "2025",
    github: "https://github.com/drishyagaire",
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setShown(true), io.disconnect()),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown };
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Projects />
      <Connect />
      <footer className="border-t border-border/60 px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 text-xs text-muted-foreground sm:flex-row">
          <span className="font-mono-xs">© 2026 Drishya Gaire</span>
          <span className="font-mono-xs">Kathmandu · 27.7°N</span>
        </div>
      </footer>
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="font-display text-xl tracking-tight">
          Drishya<span className="text-accent">.</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
          <a href="#work" className="link-underline transition-colors hover:text-foreground">Work</a>
          <a href="#about" className="link-underline transition-colors hover:text-foreground">About</a>
          <a href="#connect" className="link-underline transition-colors hover:text-foreground">Connect</a>
        </nav>
        <a
          href="/drishya_resume.pdf"
          download
          className="font-mono-xs rounded-full border border-foreground/80 px-4 py-2 transition-all hover:bg-foreground hover:text-background"
        >
          Resume ↓
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative px-6 pt-40 pb-24 md:px-12 md:pt-48 md:pb-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_auto] lg:items-start">
        <div className="animate-fade-up">
          <div className="font-mono-xs mb-8 flex items-center gap-3 text-muted-foreground">
            <span className="inline-block h-px w-8 bg-foreground/60" />
            Portfolio · 2026
          </div>
          <h1 className="font-display text-[clamp(2.75rem,9vw,7.5rem)] leading-[0.95] tracking-tight">
            Drishya <span className="italic text-accent">Gaire</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Computer Engineering student based in Kathmandu, building reliable
            software at the intersection of <em className="font-display text-foreground">full-stack development</em> and <em className="font-display text-foreground">applied machine learning</em>.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm text-background transition-all hover:bg-accent"
            >
              View selected work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#connect" className="link-underline text-sm">Get in touch</a>
          </div>
        </div>

        <div className="relative justify-self-start lg:justify-self-end">
          <div className="relative h-56 w-44 overflow-hidden rounded-2xl border border-border shadow-[0_20px_50px_-20px_oklch(0.2_0.02_60/0.35)] md:h-72 md:w-56">
            <img
              src={profilePhoto}
              alt="Drishya Gaire"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="font-mono-xs mt-3 text-right text-muted-foreground">
            Kathmandu, NP
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["React", "Next.js", "FastAPI", "Node.js", "TensorFlow", "Whisper AI", "MongoDB", "Tailwind", "Python", "Prisma"];
  const row = [...items, ...items];
  return (
    <div className="border-y border-border/60 overflow-hidden bg-paper py-6">
      <div className="animate-marquee flex w-max gap-12 whitespace-nowrap">
        {row.map((it, i) => (
          <span key={i} className="font-display text-3xl text-muted-foreground md:text-4xl">
            {it} <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  const { ref, shown } = useReveal();
  return (
    <section id="about" ref={ref} className="px-6 py-32 md:px-12">
      <div className={`mx-auto grid max-w-6xl grid-cols-1 gap-16 md:grid-cols-12 ${shown ? "animate-fade-up" : "opacity-0"}`}>
        <div className="md:col-span-4">
          <div className="font-mono-xs text-muted-foreground">(About)</div>
          <h2 className="font-display mt-4 text-4xl md:text-5xl">About.</h2>
        </div>
        <div className="md:col-span-7 md:col-start-6 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I am a Computer Engineering student at <span className="text-foreground">Advanced College of Engineering and Management</span>, exploring full-stack development with a focus on building reliable, user-centered applications from frontend interfaces to backend services.
          </p>
          <p>
           My recent work includes developing React and Next.js interfaces, building REST APIs with Node.js, working with databases such as MongoDB and Supabase, and experimenting with machine learning projects. I enjoy turning ideas into functional products while paying close attention to performance, usability, and clean engineering practices.
          </p>
          <div className="grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3">
            {[
              ["Frontend", "React, Next.js, Tailwind"],
              ["Backend", "Node, Express, FastAPI"],
              ["AI / ML", "CNN, VGG19, Whisper"],
              ["Data", "MongoDB, Supabase, Prisma"],
              ["Auth", "JWT, Firebase FCM"],
              ["Tools", "Git, n8n, Puppeteer"],
            ].map(([k, v]) => (
              <div key={k}>
                <div className="font-mono-xs text-muted-foreground/70">{k}</div>
                <div className="mt-1 text-sm text-foreground">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="work" className="border-t border-border/60 bg-paper/60 px-6 py-32 md:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 flex items-end justify-between">
          <div>
            <div className="font-mono-xs text-muted-foreground">(Selected Work)</div>
            <h2 className="font-display mt-4 text-5xl md:text-7xl">Selected Projects.</h2>
          </div>
          <div className="font-mono-xs hidden text-muted-foreground md:block">03 / 03</div>
        </div>
        <div className="space-y-28">
          {projects.map((p, i) => <ProjectCard key={p.num} p={p} flip={i % 2 === 1} />)}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, flip }: { p: Project; flip: boolean }) {
  const { ref, shown } = useReveal();
  return (
    <article
      ref={ref}
      className={`group grid grid-cols-1 gap-6 border-t border-border pt-12 md:grid-cols-12 md:gap-12 ${shown ? "animate-fade-up" : "opacity-0"}`}
    >
      <div className="md:col-span-3">
        <div className="font-mono-xs text-muted-foreground">Project · {p.num}</div>
        <div className="font-mono-xs mt-2 text-muted-foreground/70">{p.year}</div>
      </div>
      <div className="md:col-span-9">
        <h3 className="font-display text-4xl md:text-6xl tracking-tight transition-colors group-hover:text-accent">{p.name}</h3>
        <p className="font-display mt-3 text-2xl italic text-accent/90">{p.tagline}</p>
        <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">{p.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.stack.map((s) => (
            <span key={s} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{s}</span>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-8 text-sm">
          {p.demo && (
            <a href={p.demo} target="_blank" rel="noreferrer" className="link-underline">Live demo ↗</a>
          )}
          <a href={p.github} target="_blank" rel="noreferrer" className="link-underline">View on GitHub ↗</a>
        </div>
      </div>
    </article>
  );
}

function Connect() {
  const links = [
    { label: "GitHub", handle: "@drishyagaire", href: "https://github.com/drishyagaire" },
    { label: "LinkedIn", handle: "drishya-gaire", href: "https://www.linkedin.com/in/drishya-gaire-48ab25237/" },
    { label: "Email", handle: "gairedrishya2003@gmail.com", href: "mailto:gairedrishya2003@gmail.com" },
    { label: "Phone", handle: "+977 974 946 6086", href: "tel:+9779749466086" },
  ];
  return (
    <section id="connect" className="px-6 py-32 md:px-12">
      <div className="mx-auto max-w-4xl text-center">
        <div className="font-mono-xs text-muted-foreground">(Connect)</div>
        <h2 className="font-display mt-4 text-5xl md:text-7xl leading-[1]">
          Let's build <span className="italic text-accent">something</span><br />meaningful together.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-muted-foreground">
          Available for internships, professional collaborations, and engineering opportunities. I welcome thoughtful conversations.
        </p>

        <div className="mx-auto mt-14 max-w-2xl rounded-3xl border border-border bg-paper p-2 shadow-[0_30px_80px_-40px_oklch(0.2_0.02_60/0.3)]">
          <div className="divide-y divide-border">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between px-6 py-5 transition-colors hover:bg-muted/50"
              >
                <div className="flex items-center gap-4 text-left">
                  <span className="font-mono-xs w-20 text-muted-foreground">{l.label}</span>
                  <span className="font-display text-xl md:text-2xl">{l.handle}</span>
                </div>
                <span className="text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent">↗</span>
              </a>
            ))}
          </div>
        </div>

        <a
          href="/drishya_resume.pdf"
          download
          className="group mt-10 inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-sm text-background transition-all hover:bg-accent"
        >
          <span>Download Resume</span>
          <span className="transition-transform group-hover:translate-y-0.5">↓</span>
        </a>
      </div>
    </section>
  );
}
