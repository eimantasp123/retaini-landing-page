"use client";
import Image from "next/image";
import React from "react";

const CtaSection = () => {
  return (
    <section className="w-full">
      <div className="relative container mx-auto items-center gap-6 overflow-hidden rounded-4xl bg-black px-16 py-28 shadow-lg">
        <div className="space-y-5">
          <h2 className="max-w-4xl font-[family-name:var(--font-sora)] text-5xl leading-tight font-bold text-white">
            Prisijunk prie laukiančiųjų sąrašo ir išbandyk Retaini pirmas!
          </h2>
          <p className="max-w-5xl font-[family-name:var(--font-open-sans)] text-lg text-neutral-300">
            Gauk ankstyvą prieigą prie Retaini, 1 mėnesį nemokamai ir galimybę
            padėti formuoti platformą dar prieš oficialų startą. Vieta
            garantuota – prisijungti verta!
          </p>
          <div className="relative mt-8 flex w-[550px] gap-2 font-[family-name:var(--font-open-sans)]">
            <input
              type="email"
              placeholder="Įveskite savo el. pašto adresą"
              value={""}
              onChange={() => {}}
              required
              className="w-full rounded-full bg-white py-5 pl-8 text-base font-medium text-black focus:outline-none"
            />
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-black px-8 py-[12px] text-base font-medium text-white transition-colors duration-200 ease-in-out hover:bg-black/80"
              onClick={() => {}}
            >
              Prisijungti
            </button>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full px-4 py-2">
            {/* Avatars */}
            <div className="flex -space-x-2">
              <Image
                src="/avatar1.jpg"
                width={50}
                height={50}
                alt="User 1"
                className="h-9 w-9 rounded-full border-2 border-[#dfc7fa] object-cover object-center"
              />
              <Image
                src="/avatar2.jpg"
                width={50}
                height={50}
                alt="User 2"
                className="h-9 w-9 rounded-full border-2 border-[#dfc7fa] object-cover object-center"
              />
              <Image
                src="/avatar3.jpg"
                width={50}
                height={50}
                alt="User 3"
                className="h-9 w-9 rounded-full border-2 border-[#dfc7fa] object-cover object-center"
              />
            </div>

            {/* Text */}
            <p className="text-[17px] text-white">100+ žmonių jau prisijungė</p>
          </div>
        </div>

        <div className="absolute -top-10 right-[150px] w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg"></div>
      </div>
    </section>
  );
};

export default CtaSection;
