import { defineRouting } from "next-intl/routing";

// Define the routing configuration for next-intl
export const routing = defineRouting({
  locales: ["en", "lt"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  domains: [
    {
      domain: "retaini.com",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: "retaini.lt",
      defaultLocale: "lt",
      locales: ["lt"],
    },
  ],
});
