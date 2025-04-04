import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import ChangeLanguage from "./ChangeLanguage";
import MobileMenuButton from "./MobileMenuButton";

const Header = () => {
  const t = useTranslations("HomePage");

  return (
    <section
      className={`font-open-sans fixed top-0 right-0 left-0 z-50 container mx-auto mt-4`}
    >
      <header className="relative mx-4 max-w-[1400px] rounded-full border border-neutral-200 bg-gradient-to-l from-[#f3f0f7]/90 from-25% to-[#d9b6ff]/80 backdrop-blur-2xl lg:mx-0">
        <div className="container mx-auto flex items-center justify-between px-6 py-[6px] lg:p-3">
          <div className="w-[100px] lg:w-[250px]">
            <Image
              src="/retaini-black-logo.png"
              alt="Retaini Logo"
              className="lg:pl-2"
              width={120}
              height={35}
            />
          </div>
          <nav className="hidden lg:block">
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
          <div className="flex w-[100px] items-center justify-end gap-3 lg:w-[250px] lg:gap-5">
            <ChangeLanguage />
            <Link
              href="#how-retaini-helps"
              className="hidden w-[190px] rounded-full bg-black py-[10px] text-center text-white transition-colors duration-200 ease-in-out hover:bg-black/80 lg:block"
            >
              <span>{t("Header.learnMore")}</span>
            </Link>
            <MobileMenuButton />
          </div>
        </div>
      </header>
    </section>
  );
};

export default Header;
