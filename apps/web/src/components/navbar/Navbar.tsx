'use client';
import Image from "next/image";
import Link from 'next/link';
import { FaCalendarPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  return (
    <div className="hidden xl:flex justify-around items-center w-full h-[80px] fixed z-50 bg-[#004997]">
      <div>
        <Link href={"/"}>
          <Image loading="lazy" src="/konserin.png" alt="logo konserin" width={200} height={200} />
        </Link>
      </div>
      <div className="flex justify-center gap-[70px]">
        <Link href={"/"}>
          <button className="text-white font-bold hover:text-[#d1d5db] duration-300">
            BERANDA
          </button>
        </Link>
        <Link href={"/events"}>
          <button className="text-white font-bold hover:text-[#d1d5db] duration-300">
            EVENTS
          </button>
        </Link>
        <Link href="/about">
          <button className="text-white font-bold hover:text-[#d1d5db] duration-300">
            TENTANG KAMI
          </button>
        </Link>
      </div>
      <div className="flex gap-[30px]">
        <Link className="flex items-center" href="/organizer/add-event">
          <button className="flex gap-2 items-center text-white hover:text-[#d1d5db] duration-300">
            <FaCalendarPlus size={18} />Buat Event
          </button>
        </Link>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-[#319cff] rounded duration-300">
          Masuk
        </button>
        <Link className="flex items-center" href={"/user"}>
          <button>
            <CgProfile className="text-white hover:scale-150 duration-300" size={20} />
          </button>
        </Link>
      </div>
    </div>
  )
};
