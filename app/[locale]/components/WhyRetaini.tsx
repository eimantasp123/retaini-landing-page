import { useTranslations } from "next-intl";
import Image from "next/image";

const WhyRetaini = () => {
  const t = useTranslations("HomePage");

  return (
    <section id="why-retaini" className="w-full">
      <div className="relative container mx-auto mt-28 flex items-center gap-6 overflow-hidden rounded-4xl bg-black px-16 py-28 shadow-lg">
        <div className="flex-1 space-y-5">
          <h2 className="font-sora text-5xl font-bold text-white">
            {t("WhyRetaini.title")}
          </h2>
          <p className="font-open-sans text-lg text-neutral-300">
            {t("WhyRetaini.description")}
          </p>
        </div>
        <div className="h-auto flex-1">
          <Image src="/cta-image1.png" alt="Retaini" width={700} height={410} />
        </div>
        <div className="absolute -bottom-22 left-[300px] w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg"></div>
        <div className="absolute -top-10 right-[100px] w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg"></div>
      </div>
    </section>
  );
};

export default WhyRetaini;
