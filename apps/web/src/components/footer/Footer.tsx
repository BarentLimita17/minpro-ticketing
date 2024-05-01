'use client';
import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail, IoIosPhonePortrait } from "react-icons/io";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-around w-full h-auto bg-[#004997] py-[20px] lg:py-[50px] px-[5%] lg:px-[10%] gap-[30px]">
        <div className="text-white flex flex-col gap-3 w-full lg:w-[40%] mb-[30px]">
          <div className="flex justify-center lg:justify-start">
            <Image loading="lazy" src="/konserin.png" alt="logo konserin" width={250} height={200} />
          </div>
          <div className="flex justify-center lg:justify-start w-full text-sm lg:text-base text-center lg:text-start">
            Manage Tiket Event Kamu Jauh Lebih Mudah Dengan Konserin.com
          </div>
          <div className="flex justify-center lg:justify-start gap-2">
            <button className="bg-blue-900 hover:bg-[#007bff] text-white font-bold py-2 px-2 rounded-full duration-300">
              <FaInstagram size={16} />
            </button>
            <button className="bg-blue-900 hover:bg-[#007bff] text-white font-bold py-2 px-2 rounded-full duration-300">
              <FaFacebook size={16} />
            </button>
          </div>
        </div>
        <div className="text-white mb-[30px] flex flex-col justify-center w-full lg:w-[30%] gap-2 pt-2 lg:ml-[20px] lg:pl-[20px] text-center lg:text-left">
          <div className="flex justify-center lg:justify-start text-white text-xl lg:text-2xl font-bold">
            Tautan
          </div>
          <div className="flex flex-col justify-center lg:justify-start gap-[10px] mt-2 text-sm lg:text-base">
            <Link target="_blank" aria-label="SyaratDanKetentuan" href="https://tiketevent.com/syarat-&-ketentuan">
              <button className="flex w-full lg:justify-start justify-center text-white hover:text-[#007beb] duration-300">
                Syarat & Ketentuan
              </button>
            </Link>
            <Link target="_blank" aria-label="Biaya" href="https://tiketevent.com/Tiketevent.com-Penawaran.pdf">
              <button className="flex w-full lg:justify-start justify-center text-white hover:text-[#007beb] duration-300">
                Biaya
              </button>
            </Link>
            <Link target="_blank" aria-label="TentangKami" href="https://tiketevent.com/about-us">
              <button className="flex w-full lg:justify-start justify-center text-white hover:text-[#007beb] duration-300">
                Tentang Kami
              </button>
            </Link>
            <Link target="_blank" aria-label="PrivacyPolicy" href="https://tiketevent.com/privacy-policy">
              <button className="flex w-full lg:justify-start justify-center text-white hover:text-[#007beb] duration-300">
                Privacy Policy
              </button>
            </Link>
            <Link target="_blank" aria-label="FAQ" href="https://tiketevent.com/faq">
              <button className="flex w-full lg:justify-start justify-center text-white hover:text-[#007beb] duration-300">
                FAQ
              </button>
            </Link>
            <Link target="_blank" aria-label="HubungiKami" href="https://tiketevent.com/contact">
              <button className="flex w-full lg:justify-start justify-center text-white hover:text-[#007beb] duration-300">
                Hubungi Kami
              </button>
            </Link>
          </div>
        </div>
        <div className="text-white flex flex-col justify-center w-full lg:w-[30%] gap-3 pt-1 mb-[30px] lg:mt-[-50px] mt-0">
          <div className="flex justify-center lg:justify-start items-start text-white text-lg lg:text-2xl font-bold">
            Kontak Kami
          </div>
          <div className="flex flex-col justify-center lg:justify-start gap-[10px] mt-2 text-sm lg:text-base">
            <div className="flex justify-center lg:justify-start  gap-3">
              <FaLocationDot size={25} className="flex items-center" />  Jl. Raya Kalirungkut | RUNGKUT MEGAH RAYA B/36, Kali Rungkut, Kec. Tenggilis Mejoyo, Surabaya, Jawa Timur 60293
            </div>
            <div className="flex justify-center lg:justify-start text-white gap-2">
              <IoIosMail size={20} className="flex items-center" /> support@konserin.com
            </div>
            <div className="flex justify-center lg:justify-start text-white gap-2">
              <IoIosPhonePortrait size={20} className="flex items-center" /> +6281310159228
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex justify-center items-center w-full h-[30px] text-white bg-[#004997] text-sm lg:text-base">
        Copyright © Konserin 2024. All Rights Reserved.
      </div>
    </>
  )
}

