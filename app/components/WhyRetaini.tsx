import Image from "next/image";
import React from "react";

const WhyRetaini = () => {
  return (
    <section id="why-retaini" className="w-full">
      <div className="relative container mx-auto mt-28 flex items-center gap-6 overflow-hidden rounded-4xl bg-black px-16 py-28 shadow-lg">
        <div className="flex-1 space-y-5">
          <h2 className="font-sora text-5xl leading-tight font-bold text-white">
            Pasidalink kodu. Gauk naują klientą. Augink verslą.
          </h2>
          <p className="font-open-sans text-lg text-neutral-300">
            Retaini sukurta smulkiems paslaugų verslams, kurie nori augti be
            sudėtingų sistemų. Jokio CRM, jokių sudėtingų žingsnių ar painių
            nustatymų – tik lojalūs klientai, kurie dalijasi savo unikaliais QR
            kodais su draugais ir padeda jūsų verslui augti natūraliai.
          </p>
        </div>
        <div className="h-auto flex-1">
          <Image src="/cta-image1.png" alt="Retaini" width={700} height={410} />
        </div>
        <div className="absolute -bottom-10 left-[400px] w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg"></div>
        <div className="absolute -top-10 right-[150px] w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg"></div>
      </div>
    </section>
  );
};

export default WhyRetaini;
