import { Check } from "lucide-react";

const points = [
  "No accounts",
  "No tracking",
  "No data collection",
  "All reminders stored locally",
];

const PrivacySection = () => {
  return (
    <section id="privacy" className="py-20 lg:py-28 bg-background">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary">
            Private by default.
          </h2>
        </div>

        <div className="space-y-4 max-w-sm mx-auto">
          {points.map((point) => (
            <div key={point} className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
                <Check className="w-3.5 h-3.5 text-success" />
              </div>
              <span className="text-foreground font-medium">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
