import {
  Gift,
  Mail,
  NotepadTextDashed,
  QrCode,
  ScanSearch,
  UserRoundPlus,
} from "lucide-react";
import { useTranslations } from "next-intl";
import { JSX } from "react";

const AppFuncionality = () => {
  const t = useTranslations("HomePage");

  const translationsIcons: Record<string, JSX.Element> = {
    "1": <UserRoundPlus />,
    "2": <Mail />,
    "3": <QrCode />,
    "4": <Gift />,
    "5": <ScanSearch />,
    "6": <NotepadTextDashed />,
  };

  const features = t.raw("AppFuncionality.features") as Record<
    string,
    { title: string; description: string }
  >;

  return (
    <section
      id="how-retaini-helps"
      className="font-open-sans w-full px-4 pb-10 md:py-10 lg:pb-28"
    >
      <div className="container mx-auto">
        <div className="mb-10 text-center lg:mb-16">
          <h2 className="font-sora text-2xl leading-tight font-bold text-neutral-900 md:text-4xl lg:text-5xl">
            {t("AppFuncionality.title")}
          </h2>
          <p className="mx-auto mt-4 text-neutral-600 lg:text-lg">
            {t("AppFuncionality.description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {/* 1 */}

          {Object.entries(features).map(([key, feature]) => (
            <div
              key={key}
              className="shadow-soft flex flex-col items-center gap-3 rounded-3xl border border-neutral-200/50 bg-gradient-to-br from-[#ede8f5]/90 from-25% to-[#dfc6f9d2]/80 p-4 lg:flex-row lg:gap-4 lg:p-6"
            >
              <div className="flex items-center justify-center lg:w-[12%]">
                <span className="flex size-12 items-center justify-center rounded-full bg-white text-xl">
                  {translationsIcons[key]}
                </span>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <h3 className="mb-1 text-lg font-semibold text-neutral-900 lg:text-xl">
                  {feature.title}
                </h3>
                <p className="text-base text-neutral-600">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppFuncionality;
