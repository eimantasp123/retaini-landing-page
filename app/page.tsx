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
      <section className="relative flex min-h-[80vh] items-center overflow-hidden py-16 md:py-24">
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
          <div className="mx-auto max-w-5xl space-y-8 text-center">
            <h1 className="font-[family-name:var(--font-sora)] text-5xl font-bold md:text-7xl">
              Turn one-time clients into loyal regulars.
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-gray-700 md:text-xl">
              Retaini is a simple client retention and referral platform made
              for small service businesses. Automate follow-ups, offer rewards,
              and grow through word of mouth — all in one clean web app.
            </p>
            <div className="relative mx-auto mt-8 flex w-[550px] gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-full bg-white py-5 pl-8 text-base font-medium text-black focus:outline-none"
              />
              <button
                className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-black px-8 py-[12px] text-base font-medium text-white transition-colors duration-200 ease-in-out hover:bg-black/80"
                onClick={() => {}}
              >
                Join the Waitlist
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
                100+ people joined the waitlist
              </p>
            </div>
          </div>
        </div>

        <div className="absolute right-0 bottom-0 w-[500px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg"></div>
        <div className="absolute -right-[150px] bottom-7 w-[400px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg"></div>
        <div className="absolute bottom-7 -left-[150px] w-[600px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg"></div>
      </section>

      <section className="w-full">
        <div className="relative container mx-auto mt-28 flex items-center gap-6 overflow-hidden rounded-4xl bg-black px-16 py-28 shadow-lg">
          <div className="flex-1 space-y-5">
            <h2 className="font-[family-name:var(--font-sora)] text-5xl leading-tight font-bold text-white">
              Give a code. Get a client. Share the reward.
            </h2>
            <p className="font-[family-name:var(--font-open-sans)] text-lg text-neutral-300">
              Let your clients share a personal code with their friends. When
              someone new comes in with that code, just scan it. We track it for
              you and let you know when it’s time to say thanks. It’s simple,
              fast, and helps your business grow — no extra work needed.
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

      <section className="w-full">
        <div className="container mx-auto mt-40 text-center">
          <h2 className="e font-[family-name:var(--font-sora)] text-5xl leading-tight font-bold">
            Whats Makes Us Different?
          </h2>
          <p className="mx-auto max-w-[1200px] pt-4 font-[family-name:var(--font-open-sans)] text-lg text-neutral-700">
            Most clients don’t leave because they’re unhappy — they leave
            because they forget to return. Retaini helps you stay top-of-mind
            with effortless follow-ups, loyalty rewards, and referrals — so your
            clients come back naturally and consistently.
          </p>
        </div>
      </section>
      <section className="w-full">
        <div className="container mx-auto mt-16 flex gap-5">
          <div className="h-[600px] flex-1 rounded-4xl bg-red-500"></div>
          <div className="h-[600px] flex-1 rounded-4xl bg-blue-500"></div>
          <div className="h-[600px] flex-1 rounded-4xl bg-green-500"></div>
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
            <h2 className="font-[family-name:var(--font-sora)] text-5xl leading-tight font-bold text-white">
              Get early access & a free month.
            </h2>
            <p className="font-[family-name:var(--font-open-sans)] text-lg text-neutral-300">
              We’re building Retaini for real service providers — just like you.
              By joining early, you’ll be among the first to experience how easy
              client retention can be. No pressure. No commitments. Just better
              client relationships, on autopilot.
            </p>
            <div className="relative mt-8 flex w-[550px] gap-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-full bg-white py-5 pl-8 text-base font-medium text-black focus:outline-none"
              />
              <button
                className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer rounded-full bg-black px-8 py-[12px] text-base font-medium text-white transition-colors duration-200 ease-in-out hover:bg-black/80"
                onClick={() => {}}
              >
                Join
              </button>
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
