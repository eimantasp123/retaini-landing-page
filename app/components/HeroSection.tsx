"use client";

import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative flex min-h-[80vh] items-center overflow-hidden py-16 md:py-24"
    >
      {/* Background image and color overlay */}
      <div className="absolute inset-0">
        <div
          className="h-full w-full bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url('/bg1.jpg')` }} // Replace with your image path
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f3f0f7]/90 from-25% to-[#dabef7d5]/80" />
      </div>

      {/* Content */}
      <div className="font-open-sans relative z-10 container mx-auto mt-10 px-4">
        <div className="mx-auto max-w-6xl space-y-3 text-center">
          <h1 className="font-sora px-8 text-3xl font-bold md:text-7xl lg:px-0 lg:leading-[80px]">
            Auginkite savo verslą per lojalių klientų rekomendacijas.
          </h1>
          <p className="text-md mx-auto mt-8 max-w-4xl text-gray-700 md:text-xl">
            Retaini yra paprasta lojalumo ir rekomendacijų platforma mažiems
            paslaugų verslams. Paverskite savo ištikimus klientus į
            profesionalius verslo skleidejus, kurie kalba apie jus geriau nei
            bet kokia reklama.
          </p>
          <h5 className="mt-10 mb-5 font-semibold">
            Prisijunk prie laukiančiųjų sąrašo ir išbandyk Retaini pirmas!
          </h5>
          <div className="shadow-soft relative mx-auto mt-2 flex max-w-[550px] min-w-[350px] gap-2 rounded-full">
            <input
              type="email"
              placeholder="Jūsų el. pašto adresą"
              value={""}
              onChange={() => {}}
              required
              className="w-full rounded-full bg-white py-5 pl-8 text-base font-medium text-black focus:outline-none"
            />
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-black px-6 py-[12px] text-base font-medium text-white transition-colors duration-200 ease-in-out hover:bg-black/80 lg:px-8"
              onClick={() => {}}
            >
              Prisijungti
            </button>
          </div>
          <div className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-black">
            {/* Avatars */}
            <div className="flex -space-x-2">
              <Image
                src="/avatar1.jpg"
                width={50}
                height={50}
                alt="User 1"
                className="h-9 w-9 rounded-full border-2 border-white object-cover object-center"
              />
              <Image
                src="/avatar2.jpg"
                width={50}
                height={50}
                alt="User 2"
                className="h-9 w-9 rounded-full border-2 border-white object-cover object-center"
              />
              <Image
                src="/avatar3.jpg"
                width={50}
                height={50}
                alt="User 3"
                className="h-9 w-9 rounded-full border-2 border-white object-cover object-center"
              />
            </div>

            {/* Text */}
            <p className="text-[17px] font-medium">
              100+ žmonių prisijungė prie laukiančiųjų sąrašo
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-0 hidden w-[500px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg lg:flex"></div>
      <div className="absolute -right-[150px] bottom-7 z-0 hidden w-[400px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg lg:flex"></div>
      <div className="absolute bottom-7 -left-[150px] z-0 hidden w-[600px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg lg:flex"></div>
    </section>
  );
};

export default HeroSection;
