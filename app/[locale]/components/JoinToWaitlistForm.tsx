"use client";
import { joinWaitlist } from "@/app/actions/joinWaitlist";
import { useTranslations } from "next-intl";
import React, { useTransition } from "react";
import { toast } from "sonner";

const JoinToWaitlistForm = () => {
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
      className="shadow-soft relative mx-auto mt-2 flex max-w-[500px] min-w-[350px] gap-2 rounded-full"
    >
      <input
        type="email"
        name="email"
        placeholder={t("Hero.yourEmail")}
        required
        className="w-full rounded-full bg-white py-4 pl-8 text-base font-medium text-black focus:outline-none"
      />
      <button className="absolute top-1/2 right-2 flex h-[45px] w-[130px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black text-base font-medium text-white transition-colors duration-200 ease-in-out hover:bg-black/80 lg:px-8">
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
