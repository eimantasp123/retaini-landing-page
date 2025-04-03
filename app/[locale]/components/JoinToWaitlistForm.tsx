"use client";
import { joinWaitlist } from "@/app/actions/joinWaitlist";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslations } from "next-intl";
import { useState, useTransition } from "react";
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
  const [open, setOpen] = useState(false);

  async function handleSubmit(formData: FormData) {
    startTransition(async () => {
      const res = await joinWaitlist(formData);

      if (res.success) {
        toast.success(res.message || "Successfully joined the waitlist!");
        setOpen(false);
      } else {
        toast.error(res.error || "Something went wrong.");
      }
    });
  }

  return (
    <div className="flex justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            onClick={() => setOpen(true)}
            className={`flex cursor-pointer items-center justify-center rounded-full px-6 py-4 ${buttonColor} text-base font-medium ${buttonTextColor} transition-colors duration-300 ease-in-out ${buttonHoverColor}`}
            type="submit"
          >
            {t("Hero.joinToWaitlist")}
          </button>
        </DialogTrigger>
        <DialogContent className="bg-[#efefef] sm:max-w-[450px]">
          <DialogHeader className="pt-4">
            <DialogTitle>{t("Hero.joinToWaitlist")}</DialogTitle>
          </DialogHeader>
          <form
            action={handleSubmit}
            className="relative mt-2 flex max-w-[500px] min-w-[200px] flex-col gap-3 rounded-full"
          >
            <input
              type="name"
              name="name"
              placeholder={t("Hero.yourName")}
              required
              className="shadow-soft w-full rounded-full bg-white py-4 pl-8 text-base font-medium text-black focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder={t("Hero.yourEmail")}
              required
              className="shadow-soft w-full rounded-full bg-white py-4 pl-8 text-base font-medium text-black focus:outline-none"
            />
            <button
              className={`mt-2 flex h-14 cursor-pointer items-center justify-center rounded-full ${buttonColor} text-base font-medium ${buttonTextColor} transition-colors duration-300 ease-in-out ${buttonHoverColor}`}
              type="submit"
            >
              {pending ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                t("Hero.join")
              )}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JoinToWaitlistForm;
