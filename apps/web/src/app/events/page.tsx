'use client';
import React, { useState, useEffect } from "react";
import EventsCard from "@/components/Home/EventsCard";
import { useGetCategoryAndLocation } from '@/hooks/events/useGetCategoryAndLocation';
import { useGetAllActiveEvents } from "@/hooks/events/useGetAllActiveEvents";
import { useDebounce } from 'use-debounce';
import Link from "next/link";
import Image from "next/image";
import { Pagination } from "antd";

export default function EventsPage() {
    const { dataCategory }: any = useGetCategoryAndLocation()
    const [eventName, seteventName] = useState('');
    const [location, setLocation] = useState('');
    const [categoryName, setCategoryName] = useState('');
    const [page, setPage] = useState(1);
    const [debouncedeventName] = useDebounce(eventName, 1000);
    const [debouncedLocation] = useDebounce(location, 1000);
    const [debouncedcategoryName] = useDebounce(categoryName, 1000);
    const { dataAllActiveEvents, refetchAllActiveEvents } = useGetAllActiveEvents(debouncedLocation, debouncedeventName, debouncedcategoryName, page);
    const [isDebouncing, setIsDebouncing] = useState(false);

    let eventDate: Date
    let months: string[]
    let formattedDate: string;

    useEffect(() => {
        setIsDebouncing(true);
        const timeout = setTimeout(() => {
            setIsDebouncing(false);
        }, 2000);
        return () => clearTimeout(timeout);
    }, [debouncedeventName, debouncedLocation, debouncedcategoryName, page]);


    if (dataCategory === undefined) return <div>Loading...</div>

    return (
        <div className='bg-[#fbfbfb] min-h-screen pt-[5%] w-auto'>
            <div className="flex lg:flex-nowrap md:flex-nowrap flex-wrap mt-[3%] mx-[50px] gap-10 justify-start w-auto">
                {/* DIV KIRI (SEARCH BAR) */}
                <div className="py-[20px] ml-[-27px] lg:ml-0 justify-center">
                    <div className="card w-[400px] lg:w-[300px] h-[700px] bg-base-100 shadow-xl">
                        <div className="card-body h-[220px] rounded-xl gap-8 bg-[#004997]">
                            <div className="flex flex-col">
                                <div className="text-center w-full text-white text-3xl">F I N D</div>
                                <div className="text-center w-full text-black text-3xl">Y O U R </div>
                                <div className="text-center w-full text-white text-3xl">M U S I C</div>
                                <div className="text-center w-full text-black text-3xl">T A S T E</div>
                            </div>
                            <div className="flex flex-col h-[120px] w-auto bg-[#9ca3af] rounded-xl gap-2 shadow-xl">
                                <div className="card-title text-start mx-[20px] text-black font-bold text-[15px] h-[50px] gap-5">
                                    <div>Filter Berdasarkan Nama</div>
                                </div>
                                <input type="text" placeholder="Ketik Disini..." onChange={(event) => seteventName(event?.target?.value)} className="input input-bordered w-auto mx-[10px] bg-gray-200 text-black" />
                            </div>
                            <div className="flex flex-col h-[120px] w-auto bg-[#9ca3af] rounded-xl gap-2 shadow-xl">
                                <div className="card-title text-start mx-[20px] text-black font-bold text-[15px] h-[50px] gap-5">
                                    <div>Filter Berdasarkan Kota</div>
                                </div>
                                <input type="text" placeholder="Ketik Disini..." onChange={(event) => setLocation(event?.target?.value)} className="input input-bordered w-auto mx-[10px] bg-gray-200 text-black" />
                            </div>
                            <div className="flex flex-col h-[120px] w-auto bg-[#9ca3af] rounded-xl gap-2 shadow-xl text-black">
                                <div className="card-title text-start mx-[20px] text-black font-bold text-[15px] h-[50px] gap-5">
                                    <div>Pilih Kategori</div>
                                </div>
                                <select id='categoryId' defaultValue="" onChange={(event) => setCategoryName(event?.target?.value)} name="categoryId" className="select select-md select-bordered w-auto mx-[10px] bg-[#f3f3f3]" >
                                    <option value="">Semua</option>
                                    {
                                        dataCategory?.map((category: any) => {
                                            return (
                                                <option className="hover:bg-[#007bff] hover:text-white" key={category.id} value={category.id}>{category.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DIV KANAN SHOW EVENTS FILTERED */}
                <div className="flex flex-wrap mx-[10px] lg:mx-[30px] gap-[23px] justify-center lg:justify-start">
                    {isDebouncing ? (
                        <div className="flex flex-col items-start justify-center ml-[130px] mt-0 mb-[50px] lg:ml-[400px] lg:mb-0 lg:mt-[80px]">
                            <span className="loading loading-bars loading-lg h-[50px]"></span>
                            <div>Finding Your Music...</div>
                        </div>
                    ) : (
                        dataAllActiveEvents?.data?.length === 0 ? (
                            <div className="flex flex-col items-start justify-center ml-[130px] bg-[#fbfbfb] mt-0 mb-[50px] lg:ml-[400px] lg:mb-0 lg:mt-[80px]">
                                <Image className="rounded-full" src="/NOT-FOUND.jpeg" alt="No events found" width={300} height={300} />
                            </div>
                        ) : (
                            dataAllActiveEvents?.data?.map((event: any) => {
                                eventDate = new Date(event.date);
                                months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                                formattedDate = `${eventDate.getDate()} ${months[eventDate.getMonth()]} ${eventDate.getFullYear()}`;
                                return (
                                    <Link key={event.id} href={`/events/${event.id}`}>
                                        <EventsCard
                                            name={event.name}
                                            banner={event.bannerUrl}
                                            date={formattedDate}
                                            location={event.location.name}
                                            price={event.eventTicket.length === 0 ? "Free" : (event.eventTicket[0].price).toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                                        />
                                    </Link>
                                );
                            })
                        )
                    )}
                </div>
            </div>
            <Pagination className="flex justify-center pb-[10px]" current={page} pageSize={6} total={dataAllActiveEvents?.count} onChange={(page) => setPage(page)}></Pagination>
        </div>
    )
}