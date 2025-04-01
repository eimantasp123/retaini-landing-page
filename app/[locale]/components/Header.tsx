import { useTranslations } from "next-intl";
import Image from "next/image";
import ChangeLanguage from "./ChangeLanguage";
import { Link } from "@/i18n/navigation";

const Header = () => {
  const t = useTranslations("HomePage");

  return (
    <header
      className={`font-open-sans fixed top-0 right-0 left-0 z-50 container mx-auto mt-4`}
    >
      <section className="mx-auto max-w-[1400px] rounded-full border border-neutral-200 bg-gradient-to-l from-[#f3f0f7]/90 from-25% to-[#e5d2fad4]/80 backdrop-blur-2xl">
        <div className="container mx-auto flex items-center justify-between p-3">
          <div className="w-[250px]">
            <Image
              src="/retaini-black-logo.png"
              alt="Retaini Logo"
              className="pl-2"
              width={120}
              height={35}
            />
          </div>
          <nav>
            <ul className="flex gap-12 text-[16px] font-medium">
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="#hero">{t("Header.home")}</Link>
              </li>
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="#why-retaini">{t("Header.whyRetaini")}</Link>
              </li>
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="#how-retaini-works">
                  {t("Header.howRetainiWorks")}
                </Link>
              </li>
            </ul>
          </nav>
          <div className="flex w-[250px] items-center justify-end gap-5">
            <ChangeLanguage />
            <Link
              href="#how-retaini-helps"
              className="w-[190px] rounded-full bg-black py-[10px] text-center text-white transition-colors duration-200 ease-in-out hover:bg-black/80"
            >
              <span>{t("Header.learnMore")}</span>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
