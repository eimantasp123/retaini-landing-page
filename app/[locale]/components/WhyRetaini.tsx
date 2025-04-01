import { useTranslations } from "next-intl";
import Image from "next/image";

const WhyRetaini = () => {
  const t = useTranslations("HomePage");

  return (
    <section id="why-retaini" className="w-full px-4">
      <div className="relative container mx-auto mt-16 flex flex-col items-center gap-6 overflow-hidden rounded-4xl bg-black px-10 py-16 shadow-lg md:flex-row lg:mt-28 lg:px-16 lg:py-28">
        <div className="z-20 flex-1 space-y-5">
          <h2 className="font-sora text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("WhyRetaini.title")}
          </h2>
          <p className="font-open-sans text-neutral-300 lg:text-lg">
            {t("WhyRetaini.description")}
          </p>
        </div>
        <div className="z-20 h-auto w-[380px] flex-1">
          <Image src="/cta-image1.png" alt="Retaini" width={700} height={410} />
        </div>
        <div className="absolute -bottom-10 left-[100px] z-0 w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg lg:-bottom-22 lg:left-[300px]"></div>
        <div className="absolute -top-10 -right-[70px] z-0 w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg lg:right-[0px]"></div>
      </div>
    </section>
  );
};

export default WhyRetaini;
