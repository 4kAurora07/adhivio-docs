import { Bell, Clock, Zap, Shield, Smartphone, BatteryCharging } from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Reliable Notifications",
    description: "Never miss a reminder with persistent, on-time alerts.",
  },
  {
    icon: Clock,
    title: "Quick Setup",
    description: "Create a reminder in seconds with a clean, minimal interface.",
  },
  {
    icon: Zap,
    title: "Lightweight & Fast",
    description: "Under 6MB install. No bloat, no lag, just speed.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "No accounts, no tracking, no data leaves your device.",
  },
  {
    icon: Smartphone,
    title: "Offline Ready",
    description: "Works entirely offline. No internet connection required.",
  },
  {
    icon: BatteryCharging,
    title: "Battery Friendly",
    description: "Optimized to use minimal resources while staying reliable.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
            Everything you need. Nothing you don't.
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl hover:bg-surface transition-colors duration-200"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
