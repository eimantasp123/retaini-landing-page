"use client";
import { joinWaitlist } from "@/app/actions/joinWaitlist";
import { useTranslations } from "next-intl";
import React, { useTransition } from "react";
import { toast } from "sonner";

const JoinToWaitlistForm = ({
  buttonColor = "bg-black",
  buttonTextColor = "text-white",
  buttonHoverColor = "hover:bg-black/80",
}: {
  buttonColor?: string;
  buttonHoverColor?: string;
  buttonTextColor?: string;
}) => {
  const t = useTranslations("HomePage");
  const [pending, startTransition] = useTransition();

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await joinWaitlist(formData);

      if (res.success) {
        toast.success(res.message || "Successfully joined the waitlist!");
      } else {
        toast.error(res.error || "Something went wrong.");
      }
    });
  }

  return (
    <form
      action={handleSubmit}
      className="relative mx-auto mt-2 flex max-w-[500px] min-w-[300px] flex-col gap-3 rounded-full sm:flex-row"
    >
      <input
        type="email"
        name="email"
        placeholder={t("Hero.yourEmail")}
        required
        className="shadow-soft w-full rounded-full bg-white py-4 pl-8 text-base font-medium text-black focus:outline-none"
      />
      <button
        className={`flex h-14 cursor-pointer items-center justify-center rounded-full sm:w-[220px] ${buttonColor} text-base font-medium ${buttonTextColor} transition-colors duration-300 ease-in-out ${buttonHoverColor}`}
        type="submit"
      >
        {pending ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : (
          t("Hero.join")
        )}
      </button>
    </form>
  );
};

export default JoinToWaitlistForm;
