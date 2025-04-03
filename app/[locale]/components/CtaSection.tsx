import { useTranslations } from "next-intl";
import JoinToWaitlistForm from "./JoinToWaitlistForm";

const CtaSection = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="mt-4 w-full px-4 lg:mt-0">
      <div className="relative container mx-auto items-center gap-6 overflow-hidden rounded-4xl bg-black p-10 shadow-lg lg:p-18">
        <div className="space-y-5">
          <h2 className="text-center font-[family-name:var(--font-sora)] text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
            {t("Hero.joinToWaitListDescription")}
          </h2>
          <p className="mb-12 text-center font-[family-name:var(--font-open-sans)] text-neutral-300 lg:text-lg">
            {t("CtaSection.description")}
          </p>
          <JoinToWaitlistForm
            buttonColor="bg-[#e2cbfa]"
            buttonTextColor="text-black"
            buttonHoverColor="hover:bg-[#d9bafa]"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
