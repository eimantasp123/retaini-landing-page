import { useTranslations } from "next-intl";
import Image from "next/image";
import JoinToWaitlistForm from "./JoinToWaitlistForm";

const HeroSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      id="hero"
      className="relative flex h-auto items-center overflow-hidden py-24 md:py-28 xl:py-40"
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
        <div className="mx-auto space-y-3 text-center lg:max-w-6xl">
          <h1 className="font-sora text-4xl font-bold md:text-5xl lg:px-0 lg:text-6xl">
            {t("Hero.title")}
          </h1>
          <p className="text-md mx-auto mt-8 max-w-4xl text-gray-700 md:text-lg">
            {t("Hero.description")}
          </p>
          <h5 className="mt-10 mb-5 font-semibold">
            {t("Hero.joinToWaitListDescription")}
          </h5>
          <JoinToWaitlistForm />
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-full px-4 py-2 text-black sm:flex-row lg:mt-4">
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
            <p className="font-medium">{t("Hero.joinWaitlistSubtitle")}</p>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 z-0 hidden w-[500px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg lg:flex"></div>
      <div className="absolute -right-[150px] bottom-7 z-0 hidden w-[400px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg lg:flex"></div>
      <div className="absolute bottom-7 -left-[300px] z-0 w-[600px] rotate-[30deg] rounded-full border-2 border-white bg-white/20 py-8 backdrop-blur-lg md:-left-[170px] lg:flex"></div>
    </section>
  );
};

export default HeroSection;
