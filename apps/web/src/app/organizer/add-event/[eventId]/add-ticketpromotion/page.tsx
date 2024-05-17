'use client'
import { useGetEventDetails } from "@/hooks/events/useGetEventDetails";
import Image from "next/image";
import Map from "@/components/Map";
import { Tabs } from "flowbite-react";
import { IoTicket } from "react-icons/io5";
import { CiDiscount1 } from "react-icons/ci";
import { CreateTicketModal } from "@/components/AddEvent/CreateTicketModal";
import { CreatePromotionModal } from "@/components/AddEvent/CreatePromotionModal";
import { useState, useEffect } from "react";
import CreatedTicketCard from "@/components/AddEvent/CreatedTicketCard";
import CreatePromotionCard from "@/components/AddEvent/CreatePromotionCard";
import { usePublishEvent } from "@/hooks/events/usePublishEvent";
import Link from "next/link";

const formatDate = (dateString: string | undefined) => {
    if (!dateString) return '';
    const eventDate = new Date(dateString);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${eventDate.getDate()} ${months[eventDate.getMonth()]} ${eventDate.getFullYear()}`;
}

const formatTime = (timeString: string | undefined) => {
    if (!timeString) return '';
    const time = new Date(timeString);
    const hours = ('0' + time.getHours()).slice(-2);
    const minutes = ('0' + time.getMinutes()).slice(-2);
    return `${hours}:${minutes} WIB`;
}

export default function AddTicketPromotionPage({ params }: any) {
    const { dataEventDetails, refetchEventDetails } = useGetEventDetails(params.eventId)
    const [showTicketModal, setShowTicketModal] = useState(false);
    const [showPromotionModal, setShowPromotionModal] = useState(false);
    const { mutationPublishEvent } = usePublishEvent()

    const handlePublishEvent = () => {
        mutationPublishEvent({ eventId: params.eventId })
    }

    return (
        <div className="bg-[#fbfbfb] h-auto pt-[5%]">
            <div className="flex flex-wrap lg:flex-nowrap py-[30px] mx-[2px] lg:mx-[200px] justify-center gap-2 lg:gap-[30px]">
                {/* DIV KIRI */}
                <div className="flex flex-col mt-[30px] lg:w-[60%] w-[90%]">
                    {/* BANNER OVERVIEW */}
                    <div className="flex justify-center">
                        <Image src={`http://localhost:8000/${dataEventDetails?.bannerUrl}`} className="rounded-3xl" alt="Event Banner" width={600} height={400} />
                    </div>
                    {/* EVENT DETAILS OVERVIEW */}
                    <div className="card mt-[30px] pb-[30px] shadow-2xl rounded-xl gap-10 bg-[#d1d5db]">
                        <div className="text-black text-center text-[30px] font-bold justify-start mt-[20px]">
                            YOUR DETAILS
                        </div>
                        {/* EVENT NAME */}
                        <div className="card-body justify-start rounded-xl mx-[20px] hover:text-[25px] hover:mx-0 hover:scale-110 duration-300 bg-[#b5b9c1]">
                            <div className="text-[15px] text-[#1a56db] font-bold ">
                                JUDUL
                            </div>
                            <div className="text-black text-justify font-bold">
                                {dataEventDetails?.name}
                            </div>
                        </div>
                        {/* EVENT CATEGORY */}
                        <div className="card-body justify-start rounded-xl mx-[20px] hover:text-[25px] hover:mx-0 hover:scale-110 duration-300 bg-[#b5b9c1]">
                            <div className="text-[15px] text-[#1a56db] font-bold">
                                KATEGORI
                            </div>
                            <div className="text-black text-justify font-bold">
                                {dataEventDetails?.Category?.name}
                            </div>
                        </div>
                        {/* EVENT TIME AND DATE */}
                        <div className="card-body justify-start rounded-xl mx-[20px] hover:text-[20px] hover:mx-0 hover:scale-110 duration-300 bg-[#b5b9c1]">
                            <div className="text-[15px] text-[#1a56db] font-bold">
                                TANGGAL DAN WAKTU
                            </div>
                            <div className="text-black text-justify font-bold">
                                {formatDate(dataEventDetails?.date)}
                            </div>
                            <div className="text-black text-justify font-bold">
                                {formatTime(dataEventDetails?.startTime)} - {formatTime(dataEventDetails?.endTime)}
                            </div>
                        </div>
                        {/* DESCRIPTION */}
                        <div className="card-body justify-start rounded-xl mx-[20px] hover:text-[16px] hover:mx-0 hover:scale-110 duration-300 bg-[#b5b9c1]">
                            <div className="text-[15px] text-[#1a56db] font-bold">
                                DESKRIPSI
                            </div>
                            <div className="text-black text-justify font-bold">
                                {dataEventDetails?.description}
                            </div>
                        </div>
                        <div>
                            <div className="card-body justify-start rounded-xl mx-[20px] hover:text-[20px] hover:mx-0 hover:scale-110 duration-300 bg-[#b5b9c1]">
                                <div className="text-[15px] text-[#1a56db] font-bold">
                                    LOKASI
                                </div>
                                <div className="text-black text-justify font-bold">
                                    {dataEventDetails?.location?.name}, {dataEventDetails?.location?.city}
                                </div>
                                <div className="text-black text-justify font-bold">
                                    {dataEventDetails?.location?.details}
                                </div>
                                <div>
                                    <Map height={300} lat={dataEventDetails?.location?.latitude} lng={dataEventDetails?.location?.longitude} />
                                </div>
                            </div>
                        </div>
                        {/* T & C */}
                        <div className="card-body justify-start rounded-xl mx-[20px] hover:text-[16px] hover:mx-0 hover:scale-110 duration-300 bg-[#b5b9c1]">
                            <div className="text-[15px] text-[#1a56db] font-bold">
                                SYARAT DAN KETENTUAN
                            </div>
                            <div className="text-black text-justify font-bold">
                                {dataEventDetails?.termsAndConditions}
                            </div>
                        </div>
                    </div>
                </div>
                {/* RIGHT SECTION */}
                <div className="flex flex-col mt-[30px] lg:w-[40%] w-[90%]">
                    {/* DIV ACTIONS */}
                    <div className="flex flex-col h-[243px]">
                        <div className="text-lg font-bold w-full mb-2 text-center text-black">
                            ACTIONS
                        </div>
                        <Link href={`/events`}>
                            <button onClick={handlePublishEvent} className="bg-blue-500 hover:bg-blue-400 w-full text-white font-semibold py-2 px-[50px] rounded-lg mb-2">
                                Publish
                            </button>
                        </Link>
                        <Link href={`/organizer/add-event/${params.eventId}/update-event`}>
                            <button className="bg-green-500 hover:bg-green-400 w-full text-white font-semibold py-2 px-[50px] rounded-lg">
                                Update Event
                            </button>
                        </Link>
                    </div>
                    {/* DIV ADD TICKET AND PROMOTION */}
                    <div className="flex flex-col h-auto mt-[30px]">
                        {/* DIV TABS ADD TICKET AND PROMOTION */}
                        <div className="overflow-x-auto ">
                            <Tabs aria-label="Full width tabs" className="shadow-xl" style="fullWidth">
                                <Tabs.Item title="Tambah Tiket" active icon={IoTicket}>
                                    <CreateTicketModal eventId={params.eventId} visible={showTicketModal} onClose={() => setShowTicketModal(false)} />
                                    <div className="flex justify-center mt-[10px] text-black font-bold">
                                        ADD YOUR TICKET
                                    </div>
                                    {dataEventDetails?.eventTicket?.map((ticket: any) => (
                                        <CreatedTicketCard key={ticket.id} refetchEventDetails={refetchEventDetails} id={ticket.id} name={ticket.name} description={ticket.description} price={ticket.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })} quantity={ticket.quantity} validityDate={ticket.validityDate} />
                                    ))}
                                    <div className="flex flex-col gap-3">
                                        <div onClick={() => setShowTicketModal(true)} className="btn btn-success mt-[15px] bg-gray-300 hover:bg-gray-600 text-white flex justify-center h-[150px] font-bold">
                                            ADD MORE TICKET +
                                        </div>
                                    </div>
                                </Tabs.Item>
                                <Tabs.Item title="Tambah Promosi" icon={CiDiscount1}>
                                    <CreatePromotionModal eventId={params.eventId} visible={showPromotionModal} onClose={() => setShowPromotionModal(false)} />
                                    <div className="flex justify-center mt-[10px] text-black font-bold">
                                        ADD YOUR PROMOTION
                                    </div>
                                    {dataEventDetails?.promotion?.map((promotion: any) => (
                                        <CreatePromotionCard key={promotion.id} id={promotion.id} name={promotion.name} code={promotion.code} quantity={promotion.quantity} description={promotion.description} discount={promotion.discount} validityDate={promotion.validityDate} />
                                    ))}
                                    <div className="flex flex-col gap-3">
                                        <div onClick={() => setShowPromotionModal(true)} className="btn btn-success mt-[15px] bg-gray-300 hover:bg-gray-600 text-white flex justify-center h-[150px] font-bold">
                                            ADD MORE PROMOTION +
                                        </div>
                                    </div>
                                </Tabs.Item>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}
