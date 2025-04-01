import { useTranslations } from "next-intl";
import JoinToWaitlistForm from "./JoinToWaitlistForm";

const CtaSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="w-full">
      <div className="relative container mx-auto items-center gap-6 overflow-hidden rounded-4xl bg-black p-18 shadow-lg">
        <div className="space-y-5">
          <h2 className="text-center font-[family-name:var(--font-sora)] text-5xl leading-tight font-bold text-white">
            {t("Hero.joinToWaitListDescription")}
          </h2>
          <p className="mb-12 text-center font-[family-name:var(--font-open-sans)] text-lg text-neutral-300">
            {t("CtaSection.description")}
          </p>
          <JoinToWaitlistForm />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
