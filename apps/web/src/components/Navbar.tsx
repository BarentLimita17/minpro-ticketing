'use client';
import Image from "next/image";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaCalendarPlus } from "react-icons/fa";
<FaCalendarPlus />

export default function Navbar() {
  const pathname = usePathname();
  return (
    <div className="flex justify-around items-center w-full h-[80px] bg-[#004997]">
      <div>
        <Link href={"/"}>
          <Image loading="lazy" src="/konserin.png" alt="logo konserin" width={250} height={200} />
        </Link>
      </div>
      <div className="flex justify-center gap-[70px]">
        <button className="text-white hover:text-black duration-300">
          BERANDA
        </button>
        <button className="text-white hover:text-black duration-300">
          EVENTS
        </button>
        <button className="text-white hover:text-black duration-300">
          TENTANG KAMI
        </button>
      </div>
      <div className="flex gap-[30px]">
        <button className="flex gap-2 items-center text-white hover:text-black duration-300">
          <FaCalendarPlus size={18} />Buat Event
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-[#319cff] rounded duration-300">
          Masuk
        </button>
      </div>
    </div>
  )
};
