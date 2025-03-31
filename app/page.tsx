import AppFuncionality from "./components/AppFuncionality";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowRetainiWorks from "./components/HowRetainiWorks";
import WhyRetaini from "./components/WhyRetaini";

export default function Page() {
  return (
    <div className="flex h-[3000px] min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Retaini */}
      <WhyRetaini />

      {/* How Retaini Works */}
      <HowRetainiWorks />

      {/* Retaini funcionality */}
      <AppFuncionality />

      {/* CTA Section */}
      <CtaSection />
      {/* Footer */}
      <Footer />
    </div>
  );
}
