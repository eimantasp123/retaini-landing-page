import { getRequestConfig, GetRequestConfigParams } from "next-intl/server";

export default getRequestConfig(
  async ({ requestLocale }: GetRequestConfigParams) => {
    const locale = await requestLocale; // ✅ properly awaited

    return {
      locale: locale ?? "en", // fallback just in case
      messages: (await import(`../messages/${locale || "en"}.json`)).default,
    };
  },
);
