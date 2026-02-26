import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ProductPreview from "@/components/ProductPreview";
import InstallSection from "@/components/InstallSection";
import PrivacySection from "@/components/PrivacySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ProductPreview />
        <InstallSection />
        <PrivacySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
