"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

const ChangeLanguage = () => {
  const t = useTranslations("HomePage");
  const locale = useLocale() as "en" | "lt";

  // Change language handler
  const handlerToggleLanguage = (lang: "en" | "lt") => {
    console.log("locale", locale, "lang", lang);
    if (locale === lang) return; // If the current language is the same as the selected one, do nothing

    // const domainMap = {
    //   en: "http://localhost:3000", // or retaini.com in prod
    //   lt: "http://localhost:3001", // or retaini.lt in prod
    // };

    const domainMap = {
      en: "https://retaini.com",
      lt: "https://retaini.lt",
    };

    const path =
      window.location.pathname + window.location.search + window.location.hash;

    window.location.href = `${domainMap[lang]}${path}`;
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <span className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors duration-200 ease-in-out hover:bg-white">
            <Languages className="size-5" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handlerToggleLanguage("en")}>
            {t("Header.english")}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handlerToggleLanguage("lt")}>
            {t("Header.lithuanian")}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default ChangeLanguage;
