import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 container mx-auto mt-4 font-[family-name:var(--font-open-sans)]`}
    >
      <section className="w-[1550px] rounded-full border border-neutral-100 bg-gradient-to-l from-[#f3f0f7]/90 from-25% to-[#e5d2fad4]/80 backdrop-blur-2xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="w-[170px]">
            <Image
              src="/retaini-black-logo.png"
              alt="Retaini Logo"
              className="pl-2"
              width={120}
              height={100}
            />
          </div>
          <nav>
            <ul className="flex gap-12 text-[16px] font-medium">
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="https://retaini.com">Home</Link>
              </li>
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="https://retaini.com">Features</Link>
              </li>
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="https://retaini.com">About Us</Link>
              </li>
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="https://retaini.com">Why Retaini</Link>
              </li>
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="https://retaini.com">Pricing</Link>
              </li>
            </ul>
          </nav>
          <Link
            href="https://retaini.com"
            className="relative w-[170px] rounded-full bg-black py-[10px] pl-6 text-white transition-colors duration-200 ease-in-out hover:bg-black/80"
          >
            <span>Learn More</span>
            <div className="absolute top-1/2 right-2 flex size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-black">
              <ChevronRight />
            </div>
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Header;
