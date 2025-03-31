"use client";

import Image from "next/image";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Page() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex h-[3000px] min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Hero Section */}
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
        <div className="font-sora relative container mx-auto mt-10 px-4 font-[family-name:var(--font-open-sans)]">
          <div className="mx-auto max-w-6xl space-y-3 text-center">
            <h1 className="font-[family-name:var(--font-sora)] leading-[80px] font-bold md:text-7xl">
              Auginkite savo verslą per lojalių klientų rekomendacijas.
            </h1>
            <p className="mx-auto mt-8 max-w-4xl text-lg text-gray-700 md:text-xl">
              Retaini yra paprasta lojalumo ir rekomendacijų platforma mažiems
              paslaugų verslams. Paverskite savo ištikimus klientus į
              profesionalius verslo ambasadorius, kurie kalba apie jus geriau
              nei bet kokia reklama.
            </p>
            <h5 className="mt-10 font-semibold">
              Prisijunk prie laukiančiųjų sąrašo ir išbandyk Retaini pirmas!
            </h5>
            <div className="relative mx-auto mt-2 flex w-[550px] gap-2">
              <input
                type="email"
                placeholder="Įveskite savo el. pašto adresą"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div className="inline-flex items-center gap-3 rounded-full px-4 py-2 text-black">
              {/* Avatars */}
              <div className="flex -space-x-2">
                <Image
                  src="/avatar1.jpg"
                  width={32}
                  height={32}
                  alt="User 1"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover object-center"
                />
                <Image
                  src="/avatar2.jpg"
                  width={32}
                  height={32}
                  alt="User 2"
                  className="h-9 w-9 rounded-full border-2 border-white object-cover object-center"
                />
                <Image
                  src="/avatar3.jpg"
                  width={32}
                  height={32}
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

        <div className="absolute right-0 bottom-0 w-[500px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg"></div>
        <div className="absolute -right-[150px] bottom-7 w-[400px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg"></div>
        <div className="absolute bottom-7 -left-[150px] w-[600px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg"></div>
      </section>

      <section id="why-retaini" className="w-full">
        <div className="relative container mx-auto mt-28 flex items-center gap-6 overflow-hidden rounded-4xl bg-black px-16 py-28 shadow-lg">
          <div className="flex-1 space-y-5">
            <h2 className="font-[family-name:var(--font-sora)] text-5xl leading-tight font-bold text-white">
              Pasidalink kodu. Gauk naują klientą. Augink verslą.
            </h2>
            <p className="font-[family-name:var(--font-open-sans)] text-lg text-neutral-300">
              Retaini sukurta smulkiems paslaugų verslams, kurie nori augti be
              sudėtingų sistemų. Jokio CRM, jokių sudėtingų žingsnių ar painių
              nustatymų – tik lojalūs klientai, kurie dalijasi savo unikaliais
              QR kodais su draugais ir padeda tavo verslui augti natūraliai.
            </p>
          </div>
          <div className="flex-1">
            <Image
              src="/cta-image1.png"
              alt="Retaini"
              width={700}
              height={500}
            />
          </div>
          <div className="absolute -bottom-10 left-[400px] w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg"></div>
          <div className="absolute -top-10 right-[150px] w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg"></div>
        </div>
      </section>

      <section id="how-retaini-works" className="w-full">
        <div className="container mx-auto mt-28">
          <div className="text-center">
            <h2 className="font-[family-name:var(--font-sora)] text-5xl leading-tight font-bold">
              Kaip veikia Retaini
            </h2>
            <p className="mx-auto max-w-[1200px] pt-4 font-[family-name:var(--font-open-sans)] text-lg text-neutral-600">
              Retaini leidžia jūsų geriausiems klientams lengvai pritraukti
              naujų, o verslui - dar lengviau augti.
            </p>
          </div>
        </div>
        {/* Step 1 */}
        <div className="mx-auto max-w-[1300px] space-y-40 px-4 py-20">
          <div className="mt-20 flex h-[400px] items-center gap-10 font-[family-name:var(--font-open-sans)]">
            <div className="flex-1">
              <h2 className="text-[90px] font-bold text-neutral-300">01</h2>
              <h1 className="font-[family-name:var(--font-sora)] text-3xl font-bold">
                Naujo kliento pridėjimas
              </h1>
              <p className="pt-3 text-lg text-neutral-600">
                Pridėkite naują klientą į sistemą įrašydami jo vardą ir el.
                pašto adresą. Retaini automatiškai sugeneruoja du unikalius QR
                kodus: vieną, skirtą dalintis su draugais, ir kitą – asmeninei
                kliento identifikacijai. Pridėtas klientas iškart gauna
                pasveikinimo laišką su abiem kodais ir aiškiomis instrukcijomis,
                kaip jais naudotis.
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
                height={500}
              />
            </div>
          </div>

          {/* Step 2 */}
          <div className="mt-10 flex h-[400px] items-center gap-10 font-[family-name:var(--font-open-sans)]">
            <div className="relative flex flex-1 justify-center text-center">
              <div className="absolute top-1/2 right-1/2 size-[380px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e0f4]"></div>
              <div className="absolute top-1/2 right-1/2 size-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DACCEA]"></div>
              <Image
                src="/step-2.png"
                alt="Retaini"
                className="z-10"
                width={330}
                height={500}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-[90px] font-bold text-neutral-300">02</h2>
              <h1 className="font-[family-name:var(--font-sora)] text-3xl font-bold">
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
          <div className="mt-10 flex h-[400px] items-center gap-10 font-[family-name:var(--font-open-sans)]">
            <div className="flex-1">
              <h2 className="text-[90px] font-bold text-neutral-300">03</h2>
              <h1 className="font-[family-name:var(--font-sora)] text-3xl font-bold">
                Klientas pasiekia dovaną
              </h1>
              <p className="pt-3 text-lg text-neutral-600">
                Kai klientas pasiekia nustatytą referalų skaičių, sistema tai
                automatiškai atpažįsta. Jis įtraukiamas į laukiančių dovanų
                sąrašą, kurį matysite pagrindiniame puslapyje. Tuo pačiu
                klientui išsiunčiamas el. laiškas su sveikinimu ir priminimu,
                kad dovana jau laukia jo.
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
                height={500}
              />
            </div>
          </div>

          {/* Step 4 */}
          <div className="mt-10 flex h-[400px] items-center gap-10 font-[family-name:var(--font-open-sans)]">
            <div className="relative flex flex-1 justify-center text-center">
              <div className="absolute top-1/2 right-1/2 size-[380px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e0f4]"></div>
              <div className="absolute top-1/2 right-1/2 size-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DACCEA]"></div>
              <Image
                src="/step-4.png"
                alt="Retaini"
                className="z-10"
                width={330}
                height={500}
              />
            </div>
            <div className="flex-1">
              <h2 className="text-[90px] font-bold text-neutral-300">04</h2>
              <h1 className="font-[family-name:var(--font-sora)] text-3xl font-bold">
                Dovanos atsiėmimas
              </h1>
              <p className="pt-3 text-lg text-neutral-600">
                Kai klientas, pasiekęs dovanos ribą, sugrįžta į paslaugos vietą,
                jo tapatybė gali būti patvirtinta nuskenuojant unikalų
                identifikacijos QR kodą arba suradus jį sistemoje pagal el.
                pašto adresą. Sistema automatiškai parodo, ar klientui priklauso
                dovana, ir leidžia vienu paspaudimu pažymėti ją kaip atiduotą.
                Viskas vyksta greitai, sklandžiai ir be papildomų veiksmų.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      {/* <WhyClients /> */}

      {/* Solution Section */}
      {/* <SolutionSection /> */}

      {/* CTA Section */}
      <section className="w-full">
        <div className="relative container mx-auto mt-28 items-center gap-6 overflow-hidden rounded-4xl bg-black px-16 py-28 shadow-lg">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  width={32}
                  height={32}
                  alt="User 1"
                  className="h-9 w-9 rounded-full border-2 border-[#dfc7fa] object-cover object-center"
                />
                <Image
                  src="/avatar2.jpg"
                  width={32}
                  height={32}
                  alt="User 2"
                  className="h-9 w-9 rounded-full border-2 border-[#dfc7fa] object-cover object-center"
                />
                <Image
                  src="/avatar3.jpg"
                  width={32}
                  height={32}
                  alt="User 3"
                  className="h-9 w-9 rounded-full border-2 border-[#dfc7fa] object-cover object-center"
                />
              </div>

              {/* Text */}
              <p className="text-[17px] text-white">
                100+ žmonių jau prisijungė
              </p>
            </div>
          </div>

          <div className="absolute -top-10 right-[150px] w-[500px] rotate-[30deg] rounded-full border-2 border-white/30 bg-white/10 py-8 backdrop-blur-lg"></div>
        </div>
      </section>
      {/* Footer */}
      <Footer />
    </div>
  );
}
