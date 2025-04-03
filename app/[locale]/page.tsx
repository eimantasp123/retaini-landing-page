import AppFuncionality from "./components/AppFuncionality";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import HowRetainiWorks from "./components/HowRetainiWorks";
import RetainiIdea from "./components/RetainiIdea";
import WhyRetaini from "./components/WhyRetaini";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("MetaData.title"),
    description: t("MetaData.description"),
  };
}

export default function Page() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Why Retaini */}
      <WhyRetaini />

      {/* How Retaini Works */}
      <HowRetainiWorks />

      {/* Retaini Idea */}
      <RetainiIdea />

      {/* Retaini funcionality */}
      <AppFuncionality />

      {/* CTA Section */}
      <CtaSection />
      {/* Footer */}
      <Footer />
    </>
  );
}
