'use client'
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { IoLocationSharp, IoCalendar } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Carousel from '@/components/Home/HomeCarousel';
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaPlus, FaMoneyBill, FaTicketAlt, FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className='bg-[#fbfbfb] min-h-screen pt-[5%]'>
      <Carousel />
      {/* DIV TEMUKAN EVENT TERDEKAT */}
      <div className="mt-[5%] mx-[100px] flex justify-between">
        <div className="text-[#002744] w-auto text-[20px] lg:text-[25px] font-bold text-center lg:text-start">
          TEMUKAN EVENT TERDEKAT
        </div>
        <Link href="/events">
          <button className="text-[#0075f2] text-[17px] font-bold items-center gap-2 hidden lg:flex">
            Lihat Semua Event <FaArrowRight />
          </button>
        </Link>
      </div>
      <div className="flex flex-wrap mx-[100px] gap-[40px]">
        {/* EVENT CARD */}
        <div className="py-[30px]">
          <div className="card w-[300px] bg-base-100 shadow-xl">
            <figure>
              <button>
                <Image src="/ROCKAMINATION-IMG.jpg" alt="ROCKAMINATION Banner" width={300} height={200} />
              </button>
            </figure>
            <div className="card-body bg-white">
              <button className="card-title text-black font-bold text-xl hover:text-[#007bff]">
                NAMA EVENT
                <div className="badge badge-secondary">NEW</div>
              </button>
              <div className="text-black flex items-center gap-2">
                <IoCalendar size={20} className="text-[#007bff]" />Tanggal
              </div>
              <div className="text-black flex items-center gap-2">
                <IoLocationSharp size={20} className="text-[#007bff]" />Lokasi
              </div>
              <hr className="mt-2" />
              <div className="card-actions justify-end mt-2">
                <div className="text-[#ff5900] font-bold">Harga (STARTS FROM)</div>
              </div>
            </div>
          </div>
        </div>
        {/* EVENT CARD */}
        <div className="py-[30px]">
          <div className="card w-[300px] bg-base-100 shadow-xl">
            <figure>
              <button>
                <Image src="/HEROCK-IMG.png" alt="HEROCK Banner" width={300} height={200} />
              </button>
            </figure>
            <div className="card-body bg-white">
              <button className="card-title text-black font-bold text-xl hover:text-[#007bff]">
                NAMA EVENT
                <div className="badge badge-secondary">NEW</div>
              </button>
              <div className="text-black flex items-center gap-2">
                <IoCalendar size={20} className="text-[#007bff]" />Tanggal
              </div>
              <div className="text-black flex items-center gap-2">
                <IoLocationSharp size={20} className="text-[#007bff]" />Lokasi
              </div>
              <hr className="mt-2" />
              <div className="card-actions justify-end mt-2">
                <div className="text-[#ff5900] font-bold">Harga (STARTS FROM)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DIV PAST EVENT */}
      <div className="mt-[5%] lg:mt-[2%] mx-[100px] flex">
        <div className="text-[#002744] w-full text-[20px] lg:text-[25px] font-bold text-center lg:text-start">
          PAST EVENT
        </div>
      </div>
      <div className="flex flex-wrap mx-[100px] gap-[40px]">
        {/* EVENT CARD */}
        <div className="py-[30px]">
          <div className="card w-[300px] bg-base-100 shadow-xl">
            <figure>
              <button>
                <Image src="/GLORIOUS-IMG.jpg" alt="GLORIOUS Banner" width={300} height={200} />
              </button>
            </figure>
            <div className="card-body bg-white">
              <button className="card-title text-black font-bold text-xl hover:text-[#007bff]">
                NAMA EVENT
                <div className="badge badge-secondary">NEW</div>
              </button>
              <div className="text-black flex items-center gap-2">
                <IoCalendar size={20} className="text-[#007bff]" />Tanggal
              </div>
              <div className="text-black flex items-center gap-2">
                <IoLocationSharp size={20} className="text-[#007bff]" />Lokasi
              </div>
              <hr className="mt-2" />
              <div className="card-actions justify-end mt-2">
                <div className="text-[#ff5900] font-bold">Harga (STARTS FROM)</div>
              </div>
            </div>
          </div>
        </div>
        {/* EVENT CARD */}
        <div className="py-[30px]">
          <div className="card w-[300px] bg-base-100 shadow-xl">
            <figure>
              <button>
                <Image src="/HARSASORA-IMG.png" alt="HARSASORA Banner" width={300} height={200} />
              </button>
            </figure>
            <div className="card-body bg-white">
              <button className="card-title text-black font-bold text-xl hover:text-[#007bff]">
                NAMA EVENT
                <div className="badge badge-secondary">NEW</div>
              </button>
              <div className="text-black flex items-center gap-2">
                <IoCalendar size={20} className="text-[#007bff]" />Tanggal
              </div>
              <div className="text-black flex items-center gap-2">
                <IoLocationSharp size={20} className="text-[#007bff]" />Lokasi
              </div>
              <hr className="mt-2" />
              <div className="card-actions justify-end mt-2">
                <div className="text-[#ff5900] font-bold">Harga (STARTS FROM)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* DIV CARA PEMBELIAN TIKET */}
      <div className="w-auto h-auto flex justify-center mx-[100px] mt-[5%] lg:mt-[7%] pb-[5%]">
        <div className="card w-full bg-white shadow-2xl">
          <div className="card-body">
            <div className="text-black text-[36px] text-center font-bold">
              Cara Beli Tiket
            </div>
            <div className="text-[#7e7e7e] text-center">
              Sekarang beli tiket online gak perlu ribet
            </div>
          </div>
          <div className="card-actions w-auto justify-around mx-[50px] mb-[50px]">
            <div className="flex flex-col gap-[20px]">
              <button className="bg-blue-800 hover:bg-[#007bff] text-white font-bold py-2 mt-[30px] lg:mt-[0px] px-2 rounded-full duration-300">
                <MdPersonAddAlt1 className="p-5" size={120} />
              </button>
              <div className="text-center text-[#000000] font-bold">
                Daftarkan Akun
              </div>
            </div>
            <div className="items-center lg:flex h-full hidden">
              <FaLongArrowAltRight size={70} />
            </div>
            <div className="flex flex-col gap-[20px]">
              <button className="bg-blue-800 hover:bg-[#007bff] text-white font-bold py-2 mt-[30px] lg:mt-[0px] px-2 rounded-full duration-300">
                <FaPlus className="p-5" size={120} />
              </button>
              <div className="text-center text-[#000000] font-bold">
                Pilih Event
              </div>
            </div>
            <div className="items-center lg:flex h-full hidden">
              <FaLongArrowAltRight size={70} />
            </div>
            <div className="flex flex-col gap-[20px]">
              <button className="bg-blue-800 hover:bg-[#007bff] text-white font-bold py-2 mt-[30px] lg:mt-[0px] px-2 rounded-full duration-300">
                <FaMoneyBill className="p-5" size={120} />
              </button>
              <div className="text-center text-[#000000] font-bold">
                Pembayaran
              </div>
            </div>
            <div className="items-center lg:flex h-full hidden">
              <FaLongArrowAltRight size={70} />
            </div>
            <div className="flex flex-col gap-[20px]">
              <button className="bg-blue-800 hover:bg-[#007bff] text-white font-bold py-2 mt-[30px] lg:mt-[0px] px-2 rounded-full duration-300">
                <FaTicketAlt className="p-5" size={120} />
              </button>
              <div className="text-center text-[#000000] font-bold">
                Pembelian Selesai
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DIV BANNER ABOUT US */}
      <div className="w-auto h-auto flex justify-center mx-[30px] lg:mx-[100px] mt-[5%] lg:mt-[2%] pb-[5%]">
        <Link href="/about">
          <button className="justify-center items-center flex w-[100%]">
            <Image src="/about-banner.webp" alt="About Banner" className="w-[2000px] lg:w-[5000px]" width={1000} height={1000} />
          </button>
        </Link>
      </div>
    </div>
  )
}
