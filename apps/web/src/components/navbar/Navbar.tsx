'use client';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCalendarPlus } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="hidden xl:flex justify-around items-center w-full h-[80px] bg-[#004997]">
      <div>
        <Link href={"/"}>
          <Image loading="lazy" src="/konserin.png" alt="logo konserin" width={200} height={200} />
        </Link>
      </div>
      <div className="flex justify-center gap-[70px]">
        <Link href={"/"}>
          <button className="text-white hover:text-black duration-300">
            BERANDA
          </button>
        </Link>
        <Link href={"/events"}>
          <button className="text-white hover:text-black duration-300">
            EVENTS
          </button>
        </Link>
        <Link href="/about">
          <button className="text-white hover:text-black duration-300">
            TENTANG KAMI
          </button>
        </Link>
      </div>
      <div className="flex gap-[30px]">
        <Link className="flex items-center" href="/organizer/add-event">
          <button className="flex gap-2 items-center text-white hover:text-black duration-300">
            <FaCalendarPlus size={18} />Buat Event
          </button>
        </Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-[#319cff] rounded duration-300">
          Masuk
        </button>
      </div>
    </div>
  )
};
