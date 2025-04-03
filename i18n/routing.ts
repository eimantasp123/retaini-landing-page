import { defineRouting } from "next-intl/routing";

// Define the routing configuration for next-intl
export const routing = defineRouting({
  locales: ["en", "lt"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  domains: [
    {
      domain: "www.retaini.com",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: "www.retaini.lt",
      defaultLocale: "lt",
      locales: ["lt"],
    },
  ],
  // domains: [
  //   {
  //     domain: "localhost:3000",
  //     defaultLocale: "en",
  //     locales: ["en"],
  //   },
  //   {
  //     domain: "localhost:3001",
  //     defaultLocale: "lt",
  //     locales: ["lt"],
  //   },
  // ],
});
