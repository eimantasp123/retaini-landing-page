import Image from "next/image";
import React from "react";

const HowRetainiWorks = () => {
  return (
    <section id="how-retaini-works" className="w-full">
      <div className="container mx-auto mt-28">
        <div className="text-center">
          <h2 className="font-sora text-5xl leading-tight font-bold">
            Kaip veikia Retaini
          </h2>
          <p className="font-open-sans mx-auto max-w-[1200px] pt-4 text-lg text-neutral-600">
            Retaini leidžia jūsų lojaliems klientams lengvai pritraukti naujų, o
            verslui - dar lengviau augti.
          </p>
        </div>
      </div>
      {/* Step 1 */}
      <div className="mx-auto max-w-[1300px] space-y-40 px-4 py-20">
        <div className="font-open-sans mt-20 flex h-[400px] items-center gap-10">
          <div className="flex-1">
            <h2 className="text-[90px] font-bold text-neutral-300">01</h2>
            <h1 className="font-sora text-3xl font-bold">
              Naujo kliento pridėjimas
            </h1>
            <p className="pt-3 text-lg text-neutral-600">
              Pridėkite naują klientą į sistemą įrašydami jo vardą ir el. pašto
              adresą. Retaini automatiškai sugeneruoja du unikalius QR kodus:
              vieną, skirtą dalintis su draugais, ir kitą – asmeninei kliento
              identifikacijai. Pridėtas klientas iškart gauna pasveikinimo
              laišką su abiem kodais ir aiškiomis instrukcijomis, kaip jais
              naudotis.
            </p>
          </div>
          <div className="relative flex flex-1 justify-center text-center">
            <div className="absolute top-1/2 right-1/2 size-[380px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e0f4]"></div>
            <div className="absolute top-1/2 right-1/2 size-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DACCEA]"></div>
            <Image
              src="/step-1.png"
              alt="Retaini"
              className="z-10"
              width={330}
              height={585}
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="font-open-sans mt-10 flex h-[400px] items-center gap-10">
          <div className="relative flex flex-1 justify-center text-center">
            <div className="absolute top-1/2 right-1/2 size-[380px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e0f4]"></div>
            <div className="absolute top-1/2 right-1/2 size-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DACCEA]"></div>
            <Image
              src="/step-2.png"
              alt="Retaini"
              className="z-10"
              width={330}
              height={585}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[90px] font-bold text-neutral-300">02</h2>
            <h1 className="font-sora text-3xl font-bold">
              Klientas dalinasi kodu, naujas lankytojas atvyksta
            </h1>
            <p className="pt-3 text-lg text-neutral-600">
              Klientas pasidalina savo QR kodu arba nuoroda su draugu. Kai
              naujas klientas atvyksta ir parodo šį kodą, jūs jį tiesiog
              nuskenuojate. Sistema automatiškai atpažįsta, kuris esamas
              klientas pasidalino kodu, ir parodo, ką naujai atėjęs klientas
              gauna pagal jūsų nustatytą dovanų planą.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="font-open-sans mt-10 flex h-[400px] items-center gap-10">
          <div className="flex-1">
            <h2 className="text-[90px] font-bold text-neutral-300">03</h2>
            <h1 className="font-sora text-3xl font-bold">
              Klientas pasiekia dovaną
            </h1>
            <p className="pt-3 text-lg text-neutral-600">
              Kai klientas pasiekia nustatytą referalų skaičių, sistemoje jis
              automatiškai įtraukiamas į laukiančių dovanų sąrašą, kurį matysite
              pagrindiniame puslapyje. Tuo pačiu klientui išsiunčiamas el.
              laiškas su sveikinimu ir priminimu, kad dovana jau laukia jo.
            </p>
          </div>
          <div className="relative flex flex-1 justify-center text-center">
            <div className="absolute top-1/2 right-1/2 size-[380px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e0f4]"></div>
            <div className="absolute top-1/2 right-1/2 size-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DACCEA]"></div>
            <Image
              src="/step-3.png"
              alt="Retaini"
              className="z-10"
              width={330}
              height={585}
            />
          </div>
        </div>

        {/* Step 4 */}
        <div className="font-open-sans mt-10 flex h-[400px] items-center gap-10">
          <div className="relative flex flex-1 justify-center text-center">
            <div className="absolute top-1/2 right-1/2 size-[380px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e0f4]"></div>
            <div className="absolute top-1/2 right-1/2 size-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DACCEA]"></div>
            <Image
              src="/step-4.png"
              alt="Retaini"
              className="z-10"
              width={330}
              height={585}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-[90px] font-bold text-neutral-300">04</h2>
            <h1 className="font-sora text-3xl font-bold">
              Sugrįžta lojalus klientas
            </h1>
            <p className="pt-3 text-lg text-neutral-600">
              Kai lojalus klientas sugrįžta, jį galima lengvai atpažinti
              sistemoje – nuskenavus jo asmeninį identifikacijos QR kodą arba
              suradus pagal el. paštą. Sistema parodo, ar klientui priklauso
              dovana, bei kiek referalų liko iki kitos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowRetainiWorks;
