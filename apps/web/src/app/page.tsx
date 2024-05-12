'use client'
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useGetAllClosestEvents } from "@/hooks/events/useGetAllClosestEvents";
import { useGetAllPastEvents } from "@/hooks/events/useGetAllPastEvents";
import Carousel from '@/components/Home/HomeCarousel';
import { MdPersonAddAlt1 } from "react-icons/md";
import { FaPlus, FaMoneyBill, FaTicketAlt, FaLongArrowAltRight } from "react-icons/fa";
import EventsCard from "@/components/Home/EventsCard";
import EventsCardPast from "@/components/Home/EventsCardPast";

export default function Home() {
  let eventDate: Date
  let months: string[]
  let formattedDate: string;
  const { dataAllClosestEvents } = useGetAllClosestEvents();
  const { dataAllPastEvents } = useGetAllPastEvents();
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
      <div className="flex flex-wrap mx-[10px] lg:mx-[100px] gap-[23px] justify-center lg:justify-start">
        {dataAllClosestEvents?.map((event: any) => (
          eventDate = new Date(event.date),
          months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          formattedDate = `${eventDate.getDate()} ${months[eventDate.getMonth()]} ${eventDate.getFullYear()}`,
          <Link key={event.id} href={`/events/${event.id}`}>
            < EventsCard name={event.name} banner={event.bannerUrl} date={formattedDate} location={event.location.name} price={event.eventTicket.length == 0 ? "Free" : (event.eventTicket[0].price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })} />
          </Link>
        ))}
      </div>
      {/* DIV PAST EVENT */}
      <div className="mt-[5%] lg:mt-[2%] mx-[100px] flex">
        <div className="text-[#002744] w-full text-[20px] lg:text-[25px] font-bold text-center lg:text-start">
          PAST EVENT
        </div>
      </div>
      <div className="flex flex-wrap mx-[10px] lg:mx-[100px] gap-[23px] justify-center lg:justify-start">
        {dataAllPastEvents?.map((pastEvent: any) => (
          eventDate = new Date(pastEvent.date),
          months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
          formattedDate = `${eventDate.getDate()} ${months[eventDate.getMonth()]} ${eventDate.getFullYear()}`,
          <Link key={pastEvent.id} href={`/events/${pastEvent.id}`}>
            < EventsCardPast name={pastEvent.name} banner={pastEvent.bannerUrl} date={formattedDate} location={pastEvent.location.name} />
          </Link>
        ))}
      </div>
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
