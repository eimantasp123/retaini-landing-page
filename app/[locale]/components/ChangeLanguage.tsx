"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routing } from "@/i18n/routing";
import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";

const ChangeLanguage = () => {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const locale = useLocale();

  // Change language handler
  const handlerToggleLanguage = (lang: string) => {
    if (locale === lang) return; // If the current language is the same as the selected one, do nothing
    const pathname = window.location.pathname;
    const segments = pathname.split("/").filter(Boolean);
    const currentLocale = segments[0] as string;

    if (
      routing.locales.includes(
        currentLocale as (typeof routing.locales)[number],
      )
    ) {
      segments.shift();
    }

    const newPath = `/${lang}/${segments.join("/")}`;

    // Atnaujinam NEXT_LOCALE slapuką
    document.cookie = `NEXT_LOCALE=${lang}; path=/`;

    // Naviguojam į naują URL
    router.replace(newPath);
  };

  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <span className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors duration-200 ease-in-out hover:bg-white">
            <Globe className="size-5" />
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
