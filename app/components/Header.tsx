import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header
      className={`font-open-sans fixed top-0 right-0 left-0 z-50 container mx-auto mt-4`}
    >
      <section className="w-[1550px] rounded-full border border-neutral-200 bg-gradient-to-l from-[#f3f0f7]/90 from-25% to-[#e5d2fad4]/80 backdrop-blur-2xl">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="w-[250px]">
            <Image
              src="/retaini-black-logo.png"
              alt="Retaini Logo"
              className="pl-2"
              width={120}
              height={35}
            />
          </div>
          <nav>
            <ul className="flex gap-12 text-[16px] font-medium">
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="#hero">Pradžia</Link>
              </li>
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="#why-retaini">Kodėl Retaini</Link>
              </li>
              <li className="transition-colors duration-200 ease-in-out hover:text-black/60">
                <Link href="#how-retaini-works">Kaip veikia Retaini</Link>
              </li>
            </ul>
          </nav>
          <div className="flex w-[250px] items-center justify-end gap-5">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger asChild>
                <span className="flex size-9 cursor-pointer items-center justify-center rounded-full bg-transparent transition-colors duration-200 ease-in-out hover:bg-white">
                  <Globe className="size-5" />
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>English</DropdownMenuItem>
                <DropdownMenuItem>Lithuanian</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              href="#how-retaini-helps"
              className="w-[170px] rounded-full bg-black py-[10px] pl-6 text-white transition-colors duration-200 ease-in-out hover:bg-black/80"
            >
              <span>Sužinoti daugiau</span>
            </Link>
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;
