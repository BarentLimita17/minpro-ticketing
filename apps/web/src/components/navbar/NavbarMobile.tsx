'use client'
import { CiMenuBurger } from "react-icons/ci";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarPlus } from "react-icons/fa";

export default function NavbarMobile() {
    return (
        <div className="h-[70px] w-full bg-[#004997] z-50 justify-center items-center xl:hidden flex">
            <details className="dropdown ">
                <summary className="m-1 btn bg-[#004997]">
                    <CiMenuBurger size={20} className="text-white text-3xl cursor-pointer" />
                </summary>
                <ul className="p-2 pt-[20%] shadow menu dropdown-content z-[1] bg-[#004997] w-[100vw] text-[#f3f3f3] ">
                    <li>
                        <Link href="/">
                            Beranda
                        </Link>
                    </li>
                    <li>
                        <div>
                            <Link href="/events">
                                Events
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div>
                            <Link href="/about">
                                Tentang Kami
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="flex gap-[30px] justify-center mt-[20px]">
                            <button className="flex gap-2 items-center text-white hover:text-black duration-300">
                                <FaCalendarPlus size={18} />Buat Event
                            </button>
                            <button className="bg-blue-500 w-[19%] hover:bg-blue-700 text-white font-bold py-2 px-4 border border-[#319cff] rounded duration-300">
                                Masuk
                            </button>
                        </div>
                    </li>
                </ul>
            </details>
            <div className="flex justify-center items-center bg-[#004997] w-full h-[70px]">
                <Link href={"/"}>
                    <Image loading="lazy" src="/konserin.png" alt="logo konserin" width={200} height={200} />
                </Link>
            </div>
        </div >
    )
}