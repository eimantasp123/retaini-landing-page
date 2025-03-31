import {
  Gift,
  Mail,
  NotepadTextDashed,
  QrCode,
  ScanSearch,
  UserRoundPlus,
} from "lucide-react";
import React from "react";

const AppFuncionality = () => {
  return (
    <section id="how-retaini-helps" className="font-open-sans w-full py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-sora text-5xl leading-tight font-bold text-neutral-900">
            Platformos funkcionalumas
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-neutral-600">
            Paprastas Retaini funkcionalumas leidžiantis jums susitelkti į tai
            kas svarbiausia.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {/* 1 */}
          <div className="shadow-light flex items-center gap-3 rounded-3xl border border-neutral-200/50 bg-[#f1ebf7] p-6">
            <div className="flex w-[20%] items-center justify-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-xl">
                <UserRoundPlus />
              </span>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-neutral-900">
                Greitas kliento pridėjimas
              </h3>
              <p className="text-base text-neutral-600">
                Greitai pridėkite naują klientą įvesdami tik vardą ir el. pašto
                adresą. Retaini automatiškai sukuria dalinamą QR kodą ir
                asmeninį identifikacijos kodą.
              </p>
            </div>
          </div>

          {/* 2 */}
          <div className="shadow-light flex items-center gap-3 rounded-3xl border border-neutral-200/50 bg-[#f1ebf7] p-6">
            <div className="flex w-[20%] items-center justify-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-xl">
                <Mail />
              </span>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-neutral-900">
                Automatiniai priminimai ir laiškai
              </h3>
              <p className="text-base text-neutral-600">
                Sveikinimo laiškai, padėkos, dovanų priminimai – visa tai
                siunčiama automatiškai, be jokio rankinio darbo.
              </p>
            </div>
          </div>

          {/* 3 */}
          <div className="shadow-light flex items-center gap-3 rounded-3xl border border-neutral-200/50 bg-[#f1ebf7] p-6">
            <div className="flex w-[20%] items-center justify-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-xl">
                <QrCode />
              </span>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-neutral-900">
                Referalų sekimas realiu laiku
              </h3>
              <p className="text-base text-neutral-600">
                Kai tik nuskenuojamas QR kodas, Retaini iškart atnaujina kliento
                progresą – nieko nereikia skaičiuoti rankiniu būdu.
              </p>
            </div>
          </div>

          {/* 4 */}
          <div className="shadow-light flex items-center gap-3 rounded-3xl border border-neutral-200/50 bg-[#f1ebf7] p-6">
            <div className="flex w-[20%] items-center justify-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-xl">
                <Gift />
              </span>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-neutral-900">
                Dovanų valdymas
              </h3>
              <p className="text-base text-neutral-600">
                Sukurkite savo dovanų tipus pagal referalų skaičių, matykite,
                kas jau užsitarnavo dovaną ir pažymėkite ją kaip atiduotą vienu
                paspaudimu.
              </p>
            </div>
          </div>

          {/* 5 */}
          <div className="shadow-light flex items-center gap-3 rounded-3xl border border-neutral-200/50 bg-[#f1ebf7] p-6">
            <div className="flex w-[20%] items-center justify-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-xl">
                <ScanSearch />
              </span>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-neutral-900">
                Klientų paieška ir QR nuskaitymas
              </h3>
              <p className="text-base text-neutral-600">
                Suraskite bet kurį klientą nuskenavę QR kodą arba pagal el.
                paštą – iškart matysite jo statusą, referalų istoriją ir
                laukiančias dovanas.
              </p>
            </div>
          </div>

          {/* 6 */}
          <div className="shadow-light flex items-center gap-3 rounded-3xl border border-neutral-200/50 bg-[#f1ebf7] p-6">
            <div className="flex w-[20%] items-center justify-center">
              <span className="flex size-12 items-center justify-center rounded-full bg-white text-xl">
                <NotepadTextDashed />
              </span>
            </div>
            <div>
              <h3 className="mb-1 text-xl font-semibold text-neutral-900">
                Personalizuojami laiškų šablonai
              </h3>
              <p className="text-base text-neutral-600">
                Redaguokite ir peržiūrėkite automatinius laiškus kiekvienam
                žingsniui – naujas klientas, sėkmingas referalas ar pasiekta
                dovana.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFuncionality;
