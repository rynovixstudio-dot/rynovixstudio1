"use client";

import Image from "next/image";
import { type FormEvent, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Camera,
  Check,
  Clapperboard,
  Clock3,
  Flame,
  Mail,
  Quote,
  Rocket,
  Scissors,
  Send,
  Share2,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";

const navLinks = ["Services", "Work", "Results", "Process", "FAQ"];

const stats = [
  { value: "100+", label: "Videos Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "3.8x", label: "Avg. Engagement Lift" },
];

const pains = [
  {
    title: "Your content looks inconsistent",
    copy: "Great offers lose trust when the video quality feels rushed, off-brand, or unclear.",
    icon: TrendingUp,
  },
  {
    title: "You do not have time to post",
    copy: "Planning, shooting, editing, captions, and formatting can swallow the week.",
    icon: Clock3,
  },
  {
    title: "Engagement is not turning into leads",
    copy: "Views feel good, but your videos need stronger hooks, structure, and conversion moments.",
    icon: Target,
  },
];

const services = [
  {
    title: "Video Shooting",
    copy: "Cinematic on-location shoots for brands, founders, creators, events, and product campaigns.",
    icon: Camera,
  },
  {
    title: "Reel Creation",
    copy: "Instagram Reels and YouTube Shorts built with platform-native pacing and hooks.",
    icon: Clapperboard,
  },
  {
    title: "Video Editing",
    copy: "Clean cuts, captions, motion graphics, color polish, sound design, and export formatting.",
    icon: Scissors,
  },
  {
    title: "Content Strategy",
    copy: "Monthly content angles, shoot plans, posting calendars, and creative direction for growth.",
    icon: BarChart3,
  },
  {
    title: "Social Media Management",
    copy: "We manage posting, captions, scheduling, profile consistency, and monthly content execution for busy brands and creators.",
    icon: Share2,
  },
];

const editedVideos = [
  {
    title: "Creator Clip",
    category: "Short Form",
    src: "/edited-videos/img-0667.mp4",
  },
  {
    title: "Brand Moment",
    category: "Social Reel",
    src: "/edited-videos/img-0673.mp4",
  },
  {
    title: "Shoot Highlight",
    category: "Campaign Edit",
    src: "/edited-videos/img-0710-1.mp4",
  },
  {
    title: "Content Cutdown",
    category: "Vertical Video",
    src: "/edited-videos/img-0708-1.mp4",
  },
  {
    title: "Product Reel",
    category: "Brand Content",
    src: "/edited-videos/img-1256.mp4",
  },
  {
    title: "Quick Hook",
    category: "Social Clip",
    src: "/edited-videos/img-1267.mp4",
  },
  {
    title: "Motion Detail",
    category: "Edited Reel",
    src: "/edited-videos/img-1280.mp4",
  },
  {
    title: "Lifestyle Cut",
    category: "Content Edit",
    src: "/edited-videos/img-1279.mp4",
  },
  {
    title: "Launch Asset",
    category: "Short Video",
    src: "/edited-videos/img-1281.mp4",
  },
  {
    title: "Studio Sequence",
    category: "Client Edit",
    src: "/edited-videos/img-5089.mov",
  },
  {
    title: "Event Reel",
    category: "Highlight Edit",
    src: "/edited-videos/img-1048.mp4",
  },
];

const topEditedVideos = editedVideos.filter((_, index) => index % 2 === 0);
const bottomEditedVideos = editedVideos.filter((_, index) => index % 2 === 1);

const footerColumns = [
  {
    title: "Create",
    links: [
      { label: "Promo videos", href: "#services" },
      { label: "Brand reels", href: "#work" },
      { label: "YouTube videos", href: "#work" },
      { label: "Instagram videos", href: "#work" },
      { label: "Instagram Reels", href: "#work" },
      { label: "Facebook video ads", href: "#services" },
      { label: "Social media content", href: "#services" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Video shooting", href: "#services" },
      { label: "Video editing", href: "#services" },
      { label: "Reel creation", href: "#services" },
      { label: "Content strategy", href: "#services" },
      { label: "Social media management", href: "#services" },
      { label: "Monthly content plans", href: "#contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Rynovix Studio", href: "#top" },
      { label: "Results", href: "#results" },
      { label: "Process", href: "#process" },
      { label: "Book a shoot", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "WhatsApp", href: "https://wa.me/917982821912" },
      { label: "Email", href: "mailto:rynovixstudio@gmail.com" },
      { label: "Contact", href: "#contact" },
    ],
  },
];

const socialLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@RynovixStudio",
    icon: "youtube",
  },
  {
    label: "Telegram",
    href: "https://t.me/rynovixstudio",
    icon: "telegram",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/rynovixstudio?igsh=Z3E0eGN6dTY4bmRr",
    icon: "instagram",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18F4gWyny6/",
    icon: "facebook",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rynovix-studio-739544407",
    icon: "linkedin",
  },
];

const caseStudies = [
  {
    brand: "Fitness Coach Launch",
    result: "+286% profile visits",
    copy: "Rebuilt the hook structure and turned one half-day shoot into 18 short-form assets.",
  },
  {
    brand: "Local Restaurant Campaign",
    result: "42 booked tables",
    copy: "Shot cinematic menu reels and edited a story-led sequence for Instagram and TikTok.",
  },
  {
    brand: "Founder Personal Brand",
    result: "5.4x watch time",
    copy: "Created recurring educational reels with tight pacing, subtitles, and authority cues.",
  },
];

const testimonials = [
  {
    quote:
      "Rynovix made our salon reels look premium and consistent. We started getting more WhatsApp inquiries after the first batch.",
    name: "Ananya Sharma",
    role: "Founder, Glow Beauty Studio",
  },
  {
    quote:
      "The edits were sharp, clean, and made for Instagram. Our brand finally looks professional online.",
    name: "Rohan Mehta",
    role: "Owner, Mehta Fitness",
  },
  {
    quote:
      "One shoot gave us enough content for the whole month. The captions, music, and pacing made the reels perform much better.",
    name: "Priya Kapoor",
    role: "Fashion Creator",
  },
  {
    quote:
      "They handled our video editing and posting schedule together, which saved us time and kept our page active every week.",
    name: "Arjun Verma",
    role: "Co-founder, Urban Bites",
  },
  {
    quote:
      "Rynovix understood the look we wanted and delivered cinematic edits that made our bridal work stand out.",
    name: "Neha Malhotra",
    role: "Makeup Artist",
  },
  {
    quote:
      "The team turned raw clips into polished reels with strong hooks. We saw better reach and more profile visits.",
    name: "Karan Singh",
    role: "Real Estate Consultant",
  },
  {
    quote:
      "Their social media management helped us stay consistent. We did not have to worry about captions or posting anymore.",
    name: "Simran Kaur",
    role: "Boutique Owner",
  },
];

const process = [
  "Consultation",
  "Shoot Planning",
  "Editing & Polish",
  "Delivery & Launch",
];

const faqs = [
  {
    question: "How much does video production cost?",
    answer:
      "Packages depend on shoot length, editing volume, and content strategy needs. Most clients start with a focused reel package or a monthly content production plan.",
  },
  {
    question: "How fast can you deliver edited reels?",
    answer:
      "Typical turnaround is 3-7 business days after the shoot, depending on the number of videos and revision scope.",
  },
  {
    question: "Do you include revisions?",
    answer:
      "Yes. Every package includes a clear revision round so the final videos match your brand, message, and campaign goals.",
  },
  {
    question: "Which platforms do you create content for?",
    answer:
      "We produce vertical and horizontal content for Instagram, TikTok, YouTube Shorts, LinkedIn, paid ads, websites, and launch campaigns.",
  },
  {
    question: "Can you manage our social media accounts too?",
    answer:
      "Yes. We can manage your content calendar, captions, posting schedule, profile consistency, and monthly social media execution alongside video production.",
  },
];

function Logo() {
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Rynovix Studio home">
      <span className="relative h-12 w-12 overflow-hidden rounded-[8px] sm:h-14 sm:w-14">
        <Image
          src="/rynovix-logo.png"
          alt=""
          width={512}
          height={512}
          priority
          className="h-full w-full scale-150 object-contain object-top drop-shadow-[0_0_24px_rgba(56,189,248,0.28)]"
        />
      </span>
      <span className="leading-none">
        <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-200 to-sky-300 bg-clip-text font-heading text-lg font-extrabold tracking-normal text-transparent sm:text-xl">
          Rynovix
        </span>
        <span className="block bg-gradient-to-r from-slate-100 to-sky-200 bg-clip-text text-xs font-bold uppercase tracking-[0.22em] text-transparent">
          Studio
        </span>
      </span>
    </a>
  );
}

function GradientButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const classes =
    variant === "primary"
      ? "bg-gradient-to-r from-violet-500 to-sky-400 text-white shadow-[0_18px_50px_rgba(80,115,255,0.35)] hover:shadow-[0_22px_70px_rgba(56,189,248,0.45)]"
      : "border border-white/15 bg-white/7 text-white hover:border-sky-300/60 hover:bg-white/12";

  return (
    <a
      href={href}
      className={`${classes} inline-flex min-h-12 items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-sm font-bold transition duration-300`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-sky-300">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-extrabold tracking-normal text-white md:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{copy}</p>
    </div>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
    >
      <path d="M16.04 3.2A12.72 12.72 0 0 0 5.2 22.58L3.58 28.8l6.36-1.62a12.7 12.7 0 0 0 6.1 1.55h.01A12.77 12.77 0 0 0 28.8 15.98 12.73 12.73 0 0 0 16.04 3.2Zm0 23.37h-.01a10.58 10.58 0 0 1-5.4-1.48l-.39-.23-3.77.96 1.01-3.67-.25-.38a10.56 10.56 0 1 1 8.81 4.8Zm5.8-7.91c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.49-2.55-1.57-.94-.84-1.58-1.88-1.76-2.2-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.97-2.36-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.65s1.14 3.07 1.3 3.28c.16.21 2.24 3.42 5.43 4.8.76.33 1.35.52 1.81.67.76.24 1.45.21 2 .13.61-.09 1.88-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function SocialIcon({ icon, className = "h-5 w-5" }: { icon: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    youtube: (
      <path d="M29.41 9.26a3.66 3.66 0 0 0-2.58-2.59C24.55 6.06 15.43 6.06 15.43 6.06s-9.12 0-11.4.61a3.66 3.66 0 0 0-2.58 2.59A38.02 38.02 0 0 0 .84 16a38.02 38.02 0 0 0 .61 6.74 3.66 3.66 0 0 0 2.58 2.59c2.28.61 11.4.61 11.4.61s9.12 0 11.4-.61a3.66 3.66 0 0 0 2.58-2.59A38.02 38.02 0 0 0 30.02 16a38.02 38.02 0 0 0-.61-6.74ZM12.51 20.31v-8.62L20.1 16l-7.59 4.31Z" />
    ),
    telegram: (
      <path d="M28.61 5.18 24.4 25.03c-.32 1.4-1.15 1.75-2.33 1.09l-6.42-4.73-3.1 2.98c-.34.34-.63.63-1.29.63l.46-6.54L23.62 7.7c.52-.46-.11-.72-.8-.26L8.1 16.71l-6.34-1.98c-1.38-.43-1.4-1.38.29-2.04L26.84 3.14c1.15-.43 2.15.26 1.77 2.04Z" />
    ),
    instagram: (
      <path d="M16 7.36A8.64 8.64 0 1 0 16 24.64 8.64 8.64 0 0 0 16 7.36Zm0 14.25A5.61 5.61 0 1 1 16 10.39a5.61 5.61 0 0 1 0 11.22ZM26.99 7.01a2.02 2.02 0 1 1-4.04 0 2.02 2.02 0 0 1 4.04 0Z" />
    ),
    facebook: (
      <path d="M18.16 30V17.04h4.35l.65-5.05h-5V8.76c0-1.46.41-2.46 2.5-2.46h2.68V1.79c-.46-.06-2.05-.2-3.9-.2-3.86 0-6.5 2.36-6.5 6.69v3.71H8.57v5.05h4.37V30h5.22Z" />
    ),
    linkedin: (
      <path d="M7.15 27.38H1.71V9.85h5.44v17.53ZM4.43 7.46A3.15 3.15 0 1 1 4.43 1.16a3.15 3.15 0 0 1 0 6.3Zm23.54 19.92h-5.43v-8.53c0-2.03-.04-4.65-2.83-4.65-2.84 0-3.27 2.22-3.27 4.5v8.68h-5.43V9.85h5.21v2.39h.08c.73-1.38 2.5-2.83 5.14-2.83 5.5 0 6.52 3.62 6.52 8.33v9.64Z" />
    ),
  };

  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={className} fill="currentColor">
      {paths[icon]}
    </svg>
  );
}

export default function Home() {
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formsubmit.co/ajax/rynovixstudio@gmail.com", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (!response.ok) {
        throw new Error("FormSubmit request failed");
      }

      form.reset();
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-[#050510] text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#050510]/78 backdrop-blur-2xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm font-semibold text-slate-300 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-[8px] bg-white px-4 py-2.5 text-sm font-extrabold text-[#080816] transition hover:bg-sky-100 sm:inline-flex"
          >
            Book a Shoot
          </a>
        </nav>
      </header>

      <section className="relative isolate min-h-screen px-5 pb-16 pt-28 md:px-8 md:pt-32">
        <div className="absolute inset-0 -z-20">
          <Image
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1800&q=85"
            alt="Cinematic camera and studio production setup"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-34"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(139,92,246,0.38),transparent_34%),radial-gradient(circle_at_80%_25%,rgba(56,189,248,0.3),transparent_32%),linear-gradient(180deg,rgba(5,5,16,0.62),#050510_88%)]" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-[1.05fr_0.95fr]">
          <div className="reveal max-w-3xl pt-10 md:pt-20">
            <div className="mb-6 inline-flex items-center gap-2 rounded-[8px] border border-white/14 bg-white/8 px-3 py-2 text-sm font-bold text-sky-100 backdrop-blur">
              <Sparkles className="h-4 w-4 text-sky-300" />
              Limited shoot slots open this month
            </div>
            <h1 className="font-heading text-4xl font-extrabold tracking-normal text-white sm:text-5xl md:text-7xl">
              We Create Viral Reels That Grow Your Brand
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 md:text-xl">
              Rynovix Studio shoots, edits, and produces premium social videos for brands,
              founders, and creators who need consistent content that earns attention and
              converts it into inquiries.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GradientButton href="#contact">Book a Shoot</GradientButton>
              <GradientButton href="#contact" variant="secondary">
                Get Free Consultation
              </GradientButton>
            </div>
            <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass rounded-[8px] p-4">
                  <p className="font-heading text-2xl font-extrabold text-white md:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-slate-300 md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl md:pt-20">
            <div className="animate-float-slow glass relative aspect-[4/5] overflow-hidden rounded-[8px]">
              <Image
                src="/premiere-editing-workspace.webp"
                alt="Premiere Pro editing timeline and color workspace"
                fill
                sizes="(max-width: 768px) 92vw, 44vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[8px] border border-white/14 bg-black/45 p-4 backdrop-blur-xl">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                    <Flame className="h-4 w-4 text-violet-300" />
                    Campaign Edit
                  </span>
                  <span className="rounded-[8px] bg-sky-400/18 px-2.5 py-1 text-xs font-bold text-sky-100">
                    Ready in 72h
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/12">
                  <div className="h-2 w-[78%] rounded-full bg-gradient-to-r from-violet-500 to-sky-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="The Problem"
            title="Your audience scrolls fast. Your content has seconds to win."
            copy="Low engagement is rarely random. It usually comes from weak hooks, unclear story, poor visuals, or a production rhythm that is impossible to maintain alone."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {pains.map((item) => (
              <article key={item.title} className="glass rounded-[8px] p-6">
                <item.icon className="mb-5 h-9 w-9 text-sky-300" />
                <h3 className="font-heading text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-violet-300">
              The Solution
            </p>
            <h2 className="font-heading text-3xl font-extrabold md:text-5xl">
              A complete content engine, from concept to final upload.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              We combine conversion strategy, cinematic shooting, punchy editing, captions,
              platform formatting, and social media management so you can show up consistently
              without lowering quality.
            </p>
            <div className="mt-7 space-y-4">
              {[
                "Scroll-stopping hooks",
                "Premium visuals and sound",
                "Platform-ready exports",
                "Posting support and account management",
              ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="grid h-7 w-7 place-items-center rounded-[8px] bg-gradient-to-br from-violet-500 to-sky-400">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="font-semibold text-slate-100">{item}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {["Hook", "Shoot", "Edit", "Launch"].map((item, index) => (
              <div key={item} className="glass rounded-[8px] p-6">
                <p className="font-heading text-5xl font-extrabold text-white/10">
                  0{index + 1}
                </p>
                <h3 className="mt-4 font-heading text-2xl font-bold">{item}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Built to hold attention, create trust, and move viewers toward action.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Services"
            title="Everything you need to create content that looks expensive."
            copy="Choose a focused service or a monthly production system that keeps your brand visible every week, including social media management for posting and consistency."
          />
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="group rounded-[8px] border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:border-sky-300/50 hover:bg-white/[0.075]"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-[8px] bg-gradient-to-br from-violet-500/25 to-sky-400/25 text-sky-200 ring-1 ring-white/12">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="font-heading text-xl font-bold">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{service.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Edited Videos"
            title="Cinematic edits that stop the scroll and build trust."
            copy="Showcase your best client work here and let visitors instantly feel the quality, storytelling, and creative direction behind your edits."
          />
        </div>
        <div className="portfolio-rail relative -mx-5 overflow-hidden md:-mx-8">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#050510] to-transparent md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#050510] to-transparent md:w-40" />

          <div className="video-row overflow-hidden pb-5">
            <div className="animate-marquee-left flex w-max gap-5">
              {[...topEditedVideos, ...topEditedVideos].map((video, index) => (
                <article
                  key={`${video.title}-top-${index}`}
                  className="w-64 shrink-0 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] shadow-2xl sm:w-72 md:w-80"
                >
                  <div className="relative aspect-[9/16] bg-black">
                    <video
                      className="h-full w-full object-cover"
                      src={video.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                      <p className="font-heading text-lg font-bold text-white">{video.title}</p>
                      <p className="mt-1 text-sm font-semibold text-sky-200">{video.category}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="video-row overflow-hidden pt-1">
            <div className="animate-marquee-right flex w-max gap-5">
              {[...bottomEditedVideos, ...bottomEditedVideos].map(
                (video, index) => (
                  <article
                    key={`${video.title}-bottom-${index}`}
                    className="w-64 shrink-0 overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.045] shadow-2xl sm:w-72 md:w-80"
                  >
                    <div className="relative aspect-video bg-black">
                      <video
                        className="h-full w-full object-cover"
                        src={video.src}
                        muted
                        loop
                        autoPlay
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                        <p className="font-heading text-lg font-bold text-white">{video.title}</p>
                        <p className="mt-1 text-sm font-semibold text-violet-200">{video.category}</p>
                      </div>
                    </div>
                  </article>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-sky-300">
                Social Proof
              </p>
              <h2 className="font-heading text-3xl font-extrabold md:text-5xl">
                Campaign assets made for reach, trust, and bookings.
              </h2>
            </div>
            <GradientButton href="#contact">Start Your Project</GradientButton>
          </div>
          <div className="mb-8 grid grid-cols-2 gap-3 md:grid-cols-4">
            {["NOVA", "VANTA", "AURA", "PULSE"].map((logo) => (
              <div
                key={logo}
                className="rounded-[8px] border border-white/10 bg-white/[0.045] px-5 py-6 text-center font-heading text-lg font-extrabold text-white/55"
              >
                {logo}
              </div>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {caseStudies.map((study) => (
              <article key={study.brand} className="glass rounded-[8px] p-6">
                <Rocket className="mb-5 h-8 w-8 text-violet-300" />
                <h3 className="font-heading text-xl font-bold">{study.brand}</h3>
                <p className="mt-4 bg-gradient-to-r from-violet-200 to-sky-200 bg-clip-text font-heading text-3xl font-extrabold text-transparent">
                  {study.result}
                </p>
                <p className="mt-3 leading-7 text-slate-300">{study.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Edited Projects"
            title="Clients come for sharper content. They stay for the system."
            copy="A smooth production process helps busy teams stay visible without constantly chasing the next post."
          />
          <div className="testimonial-rail relative -mx-5 overflow-hidden md:-mx-8">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#050510] to-transparent md:w-36" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#050510] to-transparent md:w-36" />
            <div className="animate-marquee-left flex w-max gap-5 px-5 md:px-8">
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <figure
                  key={`${testimonial.name}-${index}`}
                  className="w-[320px] shrink-0 rounded-[8px] border border-white/10 bg-white/[0.045] p-6 shadow-2xl sm:w-[390px] md:w-[430px]"
                >
                  <Quote className="mb-5 h-8 w-8 text-sky-300" />
                  <blockquote className="min-h-36 leading-8 text-slate-200">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <figcaption className="mt-6 border-t border-white/10 pt-5">
                    <p className="font-heading font-bold text-white">{testimonial.name}</p>
                    <p className="text-sm text-slate-400">{testimonial.role}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Process"
            title="Simple, organized, and built around your calendar."
            copy="From the first call to delivery, every step is designed to reduce friction and keep momentum high."
          />
          <div className="grid gap-4 md:grid-cols-4">
            {process.map((step, index) => (
              <article key={step} className="relative rounded-[8px] border border-white/10 bg-white/[0.045] p-6">
                <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-[8px] bg-gradient-to-br from-violet-500 to-sky-400 font-heading font-extrabold">
                  {index + 1}
                </span>
                <h3 className="font-heading text-xl font-bold">{step}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  We align on goals, create the assets, polish the story, and deliver files ready
                  for your channels.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[8px] border border-white/10 bg-gradient-to-br from-white/[0.075] to-white/[0.025] p-6 md:grid-cols-[0.8fr_1.2fr] md:p-10">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-violet-300">
              Benefits
            </p>
            <h2 className="font-heading text-3xl font-extrabold md:text-5xl">
              Show up like a brand people remember.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Faster growth through stronger hooks",
              "Consistent posting without production stress",
              "Higher-quality visuals for brand trust",
              "Clear CTAs that turn attention into inquiries",
              "Social media management that keeps your pages active",
            ].map((benefit) => (
              <div key={benefit} className="flex gap-3 rounded-[8px] bg-black/20 p-4">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-sky-300" />
                <p className="font-semibold leading-7 text-slate-100">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 md:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            eyebrow="FAQ"
            title="Answers before we roll."
            copy="A few quick details clients usually ask before booking their first shoot."
          />
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[8px] border border-white/10 bg-white/[0.045] p-5"
              >
                <summary className="cursor-pointer list-none font-heading text-lg font-bold text-white">
                  {faq.question}
                </summary>
                <p className="mt-3 leading-7 text-slate-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 md:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-[8px] border border-white/10 bg-[radial-gradient(circle_at_20%_20%,rgba(139,92,246,0.28),transparent_35%),radial-gradient(circle_at_82%_18%,rgba(56,189,248,0.23),transparent_30%),rgba(255,255,255,0.045)] p-6 md:grid-cols-[0.9fr_1.1fr] md:p-10">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-[8px] bg-white/10 px-3 py-2 text-sm font-bold text-sky-100">
              <CalendarDays className="h-4 w-4" />
              Only 6 new client slots this month
            </div>
            <h2 className="font-heading text-3xl font-extrabold md:text-5xl">
              Ready to turn your next shoot into weeks of content?
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-200">
              Tell us what you want to create. We will map the fastest route from idea to
              polished, platform-ready videos and managed social media content.
            </p>
          </div>
          <form
            onSubmit={handleContactSubmit}
            className="rounded-[8px] border border-white/12 bg-[#080816]/80 p-5 shadow-2xl md:p-7"
          >
            <input type="hidden" name="_subject" value="New Rynovix Studio Website Inquiry" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-bold text-slate-200">Name</span>
              <input
                className="min-h-12 w-full rounded-[8px] border border-white/12 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300"
                placeholder="Your name"
                type="text"
                name="name"
                required
              />
            </label>
            <label className="mb-4 block">
              <span className="mb-2 block text-sm font-bold text-slate-200">Email</span>
              <input
                className="min-h-12 w-full rounded-[8px] border border-white/12 bg-white/[0.06] px-4 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300"
                placeholder="you@example.com"
                type="email"
                name="email"
                required
              />
            </label>
            <label className="mb-5 block">
              <span className="mb-2 block text-sm font-bold text-slate-200">Project Details</span>
              <textarea
                className="min-h-36 w-full rounded-[8px] border border-white/12 bg-white/[0.06] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-300"
                placeholder="What do you want to shoot, edit, launch, or manage on social media?"
                name="message"
                required
              />
            </label>
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-[8px] bg-gradient-to-r from-violet-500 to-sky-400 px-5 py-3 text-sm font-extrabold text-white transition hover:shadow-[0_18px_50px_rgba(56,189,248,0.35)]"
            >
              {formStatus === "sending" ? "Sending..." : "Send Inquiry"}
              <Send className="h-4 w-4" />
            </button>
            {formStatus === "success" && (
              <p className="mt-4 rounded-[8px] border border-emerald-300/25 bg-emerald-400/10 px-4 py-3 text-sm font-semibold text-emerald-100">
                Thanks. Your inquiry has been sent.
              </p>
            )}
            {formStatus === "error" && (
              <p className="mt-4 rounded-[8px] border border-red-300/25 bg-red-400/10 px-4 py-3 text-sm font-semibold text-red-100">
                Something went wrong. Please email rynovixstudio@gmail.com or WhatsApp us.
              </p>
            )}
          </form>
        </div>
      </section>

      <a
        href="https://wa.me/917982821912"
        aria-label="Chat with Rynovix Studio on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-[8px] bg-gradient-to-br from-emerald-400 to-sky-400 text-white shadow-[0_14px_45px_rgba(16,185,129,0.38)] transition hover:scale-105"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </a>

      <footer className="border-t border-white/10 bg-[#070711] px-5 py-12 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 md:grid-cols-[1.15fr_2fr]">
            <div>
              <Logo />
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
                Rynovix Studio creates, edits, and manages social media content for brands,
                creators, and businesses that need consistent, premium video output.
              </p>
              <div className="mt-5 space-y-3 text-sm font-semibold text-slate-300">
                <a
                  href="https://wa.me/917982821912"
                  className="flex w-fit items-center gap-2 transition hover:text-white"
                >
                  <WhatsAppIcon className="h-4 w-4 text-emerald-300" />
                  +91 7982821912
                </a>
                <a
                  href="mailto:rynovixstudio@gmail.com"
                  className="flex w-fit items-center gap-2 transition hover:text-white"
                >
                  <Mail className="h-4 w-4 text-sky-300" />
                  rynovixstudio@gmail.com
                </a>
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {footerColumns.map((column) => (
                <div key={column.title}>
                  <h3 className="font-heading text-sm font-extrabold uppercase tracking-[0.16em] text-sky-200">
                    {column.title}
                  </h3>
                  <ul className="mt-5 space-y-3">
                    {column.links.map((link) => (
                      <li key={link.label}>
                        <a
                          href={link.href}
                          className="text-sm font-medium text-slate-300 transition hover:text-white"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-6 border-t border-white/10 pt-7 sm:flex-row sm:items-center">
            <p className="text-sm text-slate-500">
              © 2026 Rynovix Studio. Premium reels, video production, and content systems.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative grid h-11 w-11 place-items-center overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] text-slate-200 shadow-[0_12px_32px_rgba(0,0,0,0.28)] transition duration-300 hover:-translate-y-1 hover:border-sky-300/45 hover:text-white"
                >
                  <span className="absolute inset-0 bg-gradient-to-br from-violet-500/0 via-fuchsia-400/0 to-sky-400/0 transition duration-300 group-hover:from-violet-500/35 group-hover:via-fuchsia-400/20 group-hover:to-sky-400/35" />
                  <span className="absolute inset-x-2 top-0 h-px bg-gradient-to-r from-transparent via-sky-200/70 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                  <SocialIcon icon={social.icon} className="relative h-5 w-5 drop-shadow-[0_0_14px_rgba(56,189,248,0.25)]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
