import { Github, Mail, MessageCircle, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const skills = [
  "React", "TypeScript", "Tailwind CSS", "Android", "Kotlin",
  "Node.js", "Python", "Firebase", "Git", "Figma",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 h-[72px] bg-background border-b border-border">
        <div className="container h-full flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Adhivio" className="h-9" />
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 h-10 px-6 rounded-lg border-2 border-accent text-accent bg-background text-sm font-semibold hover:bg-accent/5 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="bg-surface py-20 lg:py-28">
          <div className="container">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-extrabold text-primary">
                About the Creator
              </h1>
              <p className="mt-4 text-lg text-muted-foreground max-w-lg mx-auto">
                The person behind Adhivio — building tools that respect your time and privacy.
              </p>
            </div>

            {/* Profile */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-5xl mx-auto">
              <div className="flex justify-center lg:justify-start">
                <div className="w-[280px] h-[280px] rounded-2xl bg-muted border border-border flex items-center justify-center shadow-sm">
                  <span className="text-6xl text-muted-foreground/40 select-none">👤</span>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold text-primary">
                  Your Name
                </h2>
                <p className="text-lg font-medium text-accent">
                  Developer · Designer · Builder
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate about creating lightweight, privacy-first tools that solve everyday problems without unnecessary complexity. Adhivio was born from a simple frustration — every reminder app was bloated with features nobody asked for.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container max-w-3xl space-y-8">
            <h2 className="text-3xl font-extrabold text-primary">
              The Story
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I started building apps because I wanted tools that worked the way I think — fast, focused, and free of distractions. Most productivity apps today are overloaded with social features, subscriptions, and tracking that have nothing to do with getting things done.
              </p>
              <p>
                Adhivio is my answer to that. It's a reminder app that does exactly one thing well: it reminds you. No accounts, no cloud sync you didn't ask for, no data leaving your device. Just simple, reliable notifications when you need them.
              </p>
              <p>
                When I'm not coding, you'll find me exploring open-source projects, reading about minimal design systems, or tinkering with new Android APIs. I believe the best software is the kind you barely notice — it just works.
              </p>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="py-20 lg:py-28 bg-surface">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-extrabold text-primary mb-8">
              Skills & Expertise
            </h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold text-primary mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground mb-10 max-w-md mx-auto">
              Have feedback, ideas, or just want to say hello? Reach out through any of the channels below.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                <Github size={18} />
                GitHub
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-accent text-accent bg-background text-sm font-semibold hover:bg-accent/5 transition-colors"
              >
                <MessageCircle size={18} />
                WhatsApp
              </a>
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 h-12 px-8 rounded-lg border-2 border-accent text-accent bg-background text-sm font-semibold hover:bg-accent/5 transition-colors"
              >
                <Mail size={18} />
                Email
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
