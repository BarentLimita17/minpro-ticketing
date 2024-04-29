'use client';
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail, IoIosPhonePortrait } from "react-icons/io";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-around w-full h-auto bg-[#004997] py-[50px] px-[100px]">
        {/* DIV KIRI */}
        <div className="text-white flex flex-col gap-5 w-[30%]">
          <div className="flex justify-start">
            <Image loading="lazy" src="/konserin.png" alt="logo konserin" width={250} height={200} />
          </div>
          <div className="flex justify-start w-full">
            Manage TIket Event Kamu Jauh Lebih Mudah Dengan Konserin.com
          </div>
          <div className="flex gap-2">
            <button className="bg-blue-900 hover:bg-[#007bff] text-white font-bold py-3 px-3 rounded-full duration-300">
              <FaInstagram size={20} />
            </button>
            <button className="bg-blue-900 hover:bg-[#007bff] text-white font-bold py-3 px-3 rounded-full duration-300">
              <FaFacebook size={20} />
            </button>
          </div>
        </div>
        {/* DIV TENGAH */}
        <div className="text-white flex flex-col justify-center w-[30%] gap-5 pt-2 ml-[200px]">
          <div className="flex justify-start text-white text-2xl font-bold">
            Tautan
          </div>
          <div className="flex flex-col justify-start gap-[20px] mt-2">
            <Link target="_blank" aria-label="SyaratDanKetentuan" href="https://tiketevent.com/syarat-&-ketentuan">
              <button className="flex justify-start text-white hover:text-[#007beb] duration-300">
                Syarat & Ketentuan
              </button>
            </Link>
            <Link target="_blank" aria-label="Biaya" href="https://tiketevent.com/Tiketevent.com-Penawaran.pdf">
              <button className="flex justify-start text-white hover:text-[#007beb] duration-300">
                Biaya
              </button>
            </Link >
            <Link target="_blank" aria-label="TentangKami" href="https://tiketevent.com/about-us">
              <button className="flex justify-start text-white hover:text-[#007beb] duration-300">
                Tentang Kami
              </button>
            </Link>
            <Link target="_blank" aria-label="PrivacyPolicy" href="https://tiketevent.com/privacy-policy">
              <button className="flex justify-star text-white hover:text-[#007beb] duration-300">
                Privacy Policy
              </button>
            </Link>
            <Link target="_blank" aria-label="FAQ" href="https://tiketevent.com/faq">
              <button className="flex justify-start text-white hover:text-[#007beb] duration-300">
                FAQ
              </button>
            </Link>
            <Link target="_blank" aria-label="HubungiKami" href="https://tiketevent.com/contact">
              <button className="flex justify-start text-white hover:text-[#007beb] duration-300">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
        {/* DIV KANAN */}
        <div className="text-white flex flex-col justify-start w-[30%] gap-5 pt-1">
          <div className="flex justify-start items-start text-white text-2xl font-bold">
            Kontak Kami
          </div>
          <div className="flex flex-col justify-start gap-[20px] mt-2">
            <div className="flex justify-start  gap-3">
              <FaLocationDot size={35} className="flex items-center" />  Jl. Raya Kalirungkut | RUNGKUT MEGAH RAYA B/36, Kali Rungkut, Kec. Tenggilis Mejoyo, Surabaya, Jawa Timur 60293
            </div>
            <div className="flex justify-start text-white gap-2">
              <IoIosMail size={22} className="flex items-center" /> support@konserin.com
            </div>
            <div className="flex justify-start text-white gap-2">
              <IoIosPhonePortrait size={22} className="flex items-center" /> +6281310159228
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center w-full h-[30px] text-white bg-[#004997]">
        Copyright © Konserin 2024. All Rights Reserved.
      </div>
    </>
  )
}