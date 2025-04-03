import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const RetainiIdea = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="font-open-sans w-full px-4 py-10 lg:pt-28">
      <div className="container mx-auto">
        <div className="mx-auto mb-10 text-center lg:mb-16">
          <h2 className="font-sora text-2xl leading-tight font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            {t("FounderSection.title")}
          </h2>
          <div className="shadow-light mx-auto mt-8 flex flex-col items-center gap-8 rounded-2xl border-l-4 border-[#e2cbfa] bg-white p-8">
            <div className="space-y-3 text-neutral-600 italic lg:text-lg">
              <p>“{t("FounderSection.quote.paragraph1")}</p>
              <p>{t("FounderSection.quote.paragraph2")}</p>
              <p>{t("FounderSection.quote.paragraph3")}</p>
              <p>{t("FounderSection.quote.paragraph4")}”</p>
            </div>
            <div className="flex items-center gap-4 text-center">
              <Image
                src="/profile.jpg" // <- čia įkelk savo nuotrauką
                alt="Autoriaus nuotrauka"
                width={70}
                height={70}
                className="h-14 w-14 rounded-full object-cover"
              />
              <div className="flex flex-col items-start">
                <p className="font-semibold text-neutral-900 md:text-lg">
                  Eimantas Petrikas
                </p>
                <p className="text-sm text-neutral-600 md:text-base">
                  {t("FounderSection.authorTitle")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RetainiIdea;
