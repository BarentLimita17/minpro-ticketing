'use client';
import { useGetEventDetails } from "@/hooks/events/useGetEventDetails";
import { IoLocationSharp, IoCalendar } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import Image from "next/image";
import Map from "@/components/Map";
import TicketCard from "@/components/EventDetails/TicketCard";

export default function EventDetails({ params }: any) {
    const { dataEventDetails } = useGetEventDetails(params.eventsId)


    const eventDate = new Date(dataEventDetails?.date);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${eventDate.getDate()} ${months[eventDate.getMonth()]} ${eventDate.getFullYear()}`;

    const date = new Date(dataEventDetails?.startTime);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const formattedTime = `${hours}:${minutes} WIB`;

    return (
        <div className='bg-[#fbfbfb] h-auto pt-[5%]'>
            {/* DIV BANNER EVENT */}
            <div className="mx-[20px] lg:mx-[100px] flex justify-center mt-[30px]">
                <Image src={`http://localhost:8000/${dataEventDetails?.bannerUrl}`} className="rounded-3xl" alt="Event Banner" width={5000} height={5000} />
            </div>
            {/* DIV BAWAH BANNER */}
            <div className="py-[20px] ml-[20px] mx-[20px] lg:mx-[100px] justify-center flex gap-8 pb-[70px] flex-wrap lg:flex-nowrap">
                {/* DIV KIRI */}
                <div className="flex flex-col lg:w-[60%]">
                    <div className="card bg-base-100 shadow-2xl flex flex-none">
                        <div className="card-body rounded-xl bg-white flex flex-none">
                            <div className="text-[#007bff] text-[18px] font-bold justify-start">
                                {dataEventDetails?.Category?.name}
                            </div>
                            {/* DIV DESKRIPSI */}
                            <div className="mt-[10px] flex flex-col gap-6">
                                <div className="text-[30px] text-black font-bold">
                                    Deskripsi
                                </div>
                                <div className="text-[#7e7e7e] text-justify">
                                    {dataEventDetails?.description}
                                </div>
                            </div>
                            {/* DIV PETA */}
                            <div>
                                <div className="mt-[50px] flex flex-col gap-6">
                                    <div className="text-[30px] text-black font-bold">
                                        Peta
                                    </div>
                                    <div>
                                        <Map height={400} lat={dataEventDetails?.location?.latitude} lng={dataEventDetails?.location?.longitude} />
                                    </div>
                                </div>
                            </div>
                            {/* DIV T & C */}
                            <div className="mt-[50px] flex flex-col gap-6">
                                <div className="text-[30px] text-black font-bold">
                                    Syarat dan Ketentuan
                                </div>
                                <div className="text-[#7e7e7e] text-justify">
                                    {dataEventDetails?.termsAndConditions}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* DIV KANAN */}
                <div className="gap-8 bg-[#fbfbfb] flex flex-col">
                    {/* DIV OVERVIEW */}
                    <div className="card-body rounded-xl bg-white flex-none">
                        <div className="flex justify-start">
                            <Image src={`http://localhost:8000/${dataEventDetails?.thumbnailUrl}`} className="rounded-full w-[200px] h-[100px]" alt="Event Thumbnail" width={2000} height={1000} />
                        </div>
                        <div className="mt-[10px] flex flex-col gap-6">
                            <div className="text-[24px] text-black font-bold">
                                {dataEventDetails?.name}
                            </div>
                            <div className="text-[#7e7e7e] flex items-center gap-2">
                                <IoCalendar size={20} className="text-[#007bff]" />{formattedDate}
                            </div>
                            <div className="text-[#7e7e7e] flex items-center gap-2">
                                <FaClock size={20} className="text-[#007bff]" />{formattedTime}
                            </div>
                            <div className="text-[#7e7e7e] flex items-center gap-2">
                                <IoLocationSharp size={20} className="text-[#007bff]" />{dataEventDetails?.location?.name}, {dataEventDetails?.location?.city}
                            </div>
                        </div>
                    </div>
                    {/* DIV TIKET */}
                    <div className="card flex flex-none shadow-2xl">
                        <div className="card-body rounded-xl bg-white flex-none">
                            <div className="flex justify-start text-black font-bold">
                                Pilih Tiket
                            </div>
                            <hr className="text-black" />
                            {dataEventDetails?.eventTicket?.map((ticket: any) => (
                                <TicketCard key={ticket.id} name={ticket.name} description={ticket.description} price={ticket.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })} quantity={ticket.quantity} validityDate={ticket.validityDate} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}