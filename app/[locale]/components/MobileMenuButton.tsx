"use client";
import { Link } from "@/i18n/navigation";
import { motion, MotionConfig } from "framer-motion";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function MobileMenuButton() {
  const [active, setActive] = useState(false);
  const t = useTranslations("HomePage");

  return (
    <div className="lg:hidden">
      <MotionConfig
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
      >
        <motion.button
          initial={false}
          onClick={() => setActive((pv) => !pv)}
          animate={active ? "open" : "closed"}
          className="relative cursor-pointer py-6 pr-8"
        >
          <motion.span
            style={{
              left: "50%",
              top: "35%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute top-0 left-0 h-[2px] w-7 bg-black/90"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                top: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                top: ["50%", "50%", "35%"],
              },
            }}
          />
          <motion.span
            style={{
              left: "calc(50% + 4px)",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            className="absolute h-[2px] w-5 bg-black/90"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "-45deg"],
                left: "50%",
                width: ["20px", "28px", "28px"],
              },
              closed: {
                rotate: ["-45deg", "0deg", "0deg"],
                left: "calc(50% + 4px)",
                width: ["28px", "20px", "20px"],
              },
            }}
          />
          <motion.span
            style={{
              left: "calc(50% + 8px)",
              bottom: "35%",
              x: "-50%",
              y: "50%",
            }}
            className="absolute h-[2px] w-3 bg-black/90"
            variants={{
              open: {
                rotate: ["0deg", "0deg", "45deg"],
                left: "50%",
                bottom: ["35%", "50%", "50%"],
              },
              closed: {
                rotate: ["45deg", "0deg", "0deg"],
                left: "calc(50% + 8px)",
                bottom: ["50%", "50%", "35%"],
              },
            }}
          />
        </motion.button>
      </MotionConfig>
      <div
        className={`shadow-light absolute top-20 right-0 left-0 z-20 rounded-3xl bg-white xl:hidden ${
          active ? "h-80" : "h-0"
        } overflow-hidden transition-all duration-500 ease-in-out`}
      >
        <div className="flex h-full flex-col items-center justify-center gap-8 p-8">
          <ul className="flex flex-col items-center gap-6 text-[16px] font-medium">
            <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
              <Link href="#hero" onClick={() => setActive((pv) => !pv)}>
                {t("Header.home")}
              </Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
              <Link onClick={() => setActive((pv) => !pv)} href="#why-retaini">
                {t("Header.whyRetaini")}
              </Link>
            </li>
            <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
              <Link
                onClick={() => setActive((pv) => !pv)}
                href="#how-retaini-works"
              >
                {t("Header.howRetainiWorks")}
              </Link>
            </li>
          </ul>
          <Link
            href="#how-retaini-helps"
            onClick={() => setActive((pv) => !pv)}
            className="w-full max-w-[400px] rounded-full bg-black py-[10px] text-center text-white transition-colors duration-200 ease-in-out hover:bg-black/80"
          >
            <span>{t("Header.learnMore")}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
