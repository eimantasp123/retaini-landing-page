import { useTranslations } from "next-intl";
import Image from "next/image";

const HowRetainiWorks = () => {
  const t = useTranslations("HomePage");
  const steps = t.raw("HowRetainiWorks.steps") as Record<
    string,
    { title: string; description: string; image: string }
  >;

  return (
    <section id="how-retaini-works" className="w-full px-4">
      <div className="container mx-auto mt-20 mb-14 lg:mt-28">
        <div className="text-center">
          <h2 className="font-sora text-2xl leading-tight font-bold md:text-4xl lg:text-5xl">
            {t("HowRetainiWorks.title")}
          </h2>
          <p className="font-open-sans mx-auto max-w-4xl pt-4 text-neutral-600 lg:text-lg">
            {t("HowRetainiWorks.description")}
          </p>
        </div>
      </div>
      {/* Step 1 */}
      <div className="container mx-auto px-4 lg:space-y-40 lg:px-20 lg:py-20">
        {Object.entries(steps).map(([key, step], index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={key}
              className={`font-open-sans flex flex-col items-center gap-10 lg:mt-10 lg:h-[400px] lg:flex-row ${
                isEven ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h2 className="mb-4 text-6xl font-bold text-neutral-300">
                  {key.padStart(2, "0")}
                </h2>
                <h1 className="font-sora text-xl font-bold lg:text-3xl">
                  {step.title}
                </h1>
                <p className="pt-3 text-neutral-600 lg:text-lg">
                  {step.description}
                </p>
              </div>
              <div className="relative flex flex-1 justify-center text-center">
                <div className="absolute top-1/2 right-1/2 size-[270] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e0f4] lg:size-[380px]" />
                <div className="absolute top-1/2 right-1/2 size-[200] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DACCEA] lg:size-[300px]" />
                <div className="z-10 h-[420px] w-[220px] lg:h-[585px] lg:w-[330px]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={330}
                    height={585}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowRetainiWorks;
