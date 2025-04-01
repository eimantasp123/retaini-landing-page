import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("HomePage");

  return (
    <footer className="mx-auto mt-auto w-full py-8 font-[family-name:var(--font-open-sans)]">
      <div className="container mx-auto px-4">
        <div className="text-muted-foreground text-center">
          {t("Footer.title")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
