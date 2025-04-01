import { useTranslations } from "next-intl";
import Image from "next/image";

const HowRetainiWorks = () => {
  const t = useTranslations("HomePage");
  const steps = t.raw("HowRetainiWorks.steps") as Record<
    string,
    { title: string; description: string; image: string }
  >;

  return (
    <section id="how-retaini-works" className="w-full">
      <div className="container mx-auto mt-28">
        <div className="text-center">
          <h2 className="font-sora text-5xl leading-tight font-bold">
            {t("HowRetainiWorks.title")}
          </h2>
          <p className="font-open-sans mx-auto pt-4 text-lg text-neutral-600">
            {t("HowRetainiWorks.description")}
          </p>
        </div>
      </div>
      {/* Step 1 */}
      <div className="container mx-auto space-y-40 px-4 py-20">
        {Object.entries(steps).map(([key, step], index) => {
          const isEven = index % 2 === 1;
          return (
            <div
              key={key}
              className={`font-open-sans mt-10 flex h-[400px] items-center gap-10 ${
                isEven ? "flex-row-reverse" : ""
              }`}
            >
              <div className="flex-1">
                <h2 className="text-[90px] font-bold text-neutral-300">
                  {key.padStart(2, "0")}
                </h2>
                <h1 className="font-sora text-3xl font-bold">{step.title}</h1>
                <p className="pt-3 text-lg text-neutral-600">
                  {step.description}
                </p>
              </div>
              <div className="relative flex flex-1 justify-center text-center">
                <div className="absolute top-1/2 right-1/2 size-[380px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e9e0f4]" />
                <div className="absolute top-1/2 right-1/2 size-[300px] translate-x-1/2 -translate-y-1/2 rounded-full bg-[#DACCEA]" />
                <Image
                  src={step.image}
                  alt={step.title}
                  className="z-10"
                  width={330}
                  height={585}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowRetainiWorks;
