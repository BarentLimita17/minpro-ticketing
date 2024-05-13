'use client';
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import Carousel from '@/components/Home/HomeCarousel';


export default function Home() {
    return (
        <div className='bg-[#fbfbfb] min-h-screen'>
            <Carousel />
            <div className="mt-[5%] mx-[100px] flex justify-between">
                <div className="text-[#002744] font-bold">
                    TEMUKAN EVENT TERDEKAT
                </div>
                <Link href="/events">
                    <button className="text-[#0075f2] font-bold flex items-center gap-2">
                        Lihat Semua Event <FaArrowRight />
                    </button>
                </Link>
            </div>
            <div className="mx-[100px] py-[30px]">
                <div className="card w-[300px] bg-base-100 shadow-xl">
                    <figure>
                    </figure>
                    <div className="card-body bg-white">
                        <button className="card-title text-black font-bold text-xl hover:text-[#007bff]">
                            NAMA EVENT
                            <div className="badge badge-secondary">NEW</div>
                        </button>
                        <div className="text-black">
                            Tanggal
                        </div>
                        <div className="text-black">
                            Lokasi
                        </div>
                        <hr className="mt-2" />
                        <div className="card-actions justify-end mt-2">
                            <div className="text-[#ff5900] font-bold">Harga (STARTS FROM)</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
