import { Download, FolderOpen, ShieldCheck, Bell } from "lucide-react";

const steps = [
  { num: 1, icon: Download, text: "Download the APK file from this page." },
  { num: 2, icon: FolderOpen, text: "Open the file and allow installation from unknown sources." },
  { num: 3, icon: ShieldCheck, text: "Follow the on-screen prompts to complete setup." },
  { num: 4, icon: Bell, text: "Create your first reminder and stay on track." },
];

const InstallSection = () => {
  return (
    <section id="install" className="py-20 lg:py-28 bg-surface">
      <div className="container max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-foreground">
            Install in seconds.
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.num} className="flex items-start gap-5">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {step.num}
              </div>
              <div className="pt-2">
                <p className="text-foreground font-medium">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-5 rounded-xl border border-success/30 bg-success/5">
          <p className="text-sm text-foreground leading-relaxed">
            <span className="font-semibold text-success">Important:</span>{" "}
            To ensure reminders work properly, disable battery optimization for Adhivio in your device settings.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InstallSection;
