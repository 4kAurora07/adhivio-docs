import phoneMockup from "@/assets/phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="bg-surface py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-background border border-border text-sm font-medium text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-success" />
              Version 1.0 — APK Release
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-extrabold text-primary leading-[1.1]">
                Adhivio
              </h1>
              <p className="text-2xl lg:text-3xl font-semibold text-foreground/80">
                Simple reminders. Zero clutter.
              </p>
            </div>

            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              A lightweight Android reminder app built for speed, clarity, and reliable notifications — without accounts or distractions.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/4kAurora07/adhivio-docs/releases/download/v1.0/adhivio.apk"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Download APK
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center h-12 px-8 rounded-lg border-2 border-accent text-accent bg-background text-sm font-semibold hover:bg-accent/5 transition-colors"
              >
                View Features
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <img
              src={phoneMockup}
              alt="Adhivio app screenshot"
              className="w-[280px] lg:w-[320px] drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
