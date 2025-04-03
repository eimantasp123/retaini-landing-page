import { defineRouting } from "next-intl/routing";

const isDev = process.env.NODE_ENV === "development";

// Define the routing configuration for next-intl
export const routing = defineRouting({
  locales: ["en", "lt"],
  defaultLocale: "en",
  localeCookie: false,
  localePrefix: "as-needed",
  domains: [
    {
      domain: isDev ? "localhost:3000" : "retaini.com",
      defaultLocale: "en",
      locales: ["en"],
    },
    {
      domain: isDev ? "localhost:3001" : "retaini.lt",
      defaultLocale: "lt",
      locales: ["lt"],
    },
  ],
});
