'use client';
import { useState } from "react";
import { useGetEventDetails } from "@/hooks/events/useGetEventDetails";
import { IoLocationSharp, IoCalendar } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import Image from "next/image";
import Map from "@/components/Map";
import TicketCard from "@/components/EventDetails/TicketCard";
import { useCreateTransaction } from "@/hooks/transactions/useCreateTransaction";
import { useGetReviewDetails } from "@/hooks/reviews/useGetReviewDetails";
import ReviewCard from "@/components/Review/ReviewCard";

export default function EventDetails({ params }: any) {
    const { dataEventDetails } = useGetEventDetails(params.eventsId)
    const { reviewDetails } = useGetReviewDetails(params.eventsId)
    const { mutationCreateTransaction } = useCreateTransaction(params.eventsId)

    const [ticketArray, setTicketArray] = useState([])
    const [promotionCode, setPromotionCode] = useState('');

    const eventDate = new Date(dataEventDetails?.date);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${eventDate.getDate()} ${months[eventDate.getMonth()]} ${eventDate.getFullYear()}`;

    const date = new Date(dataEventDetails?.startTime);
    const hours = ('0' + date.getHours()).slice(-2);
    const minutes = ('0' + date.getMinutes()).slice(-2);
    const formattedTime = `${hours}:${minutes} WIB`;

    let eventTicketArray: { eventTicketId: string, quantity: number }[] = [];
    ticketArray.forEach((ticketId: string) => {
        let found = eventTicketArray.find((ticket: any) => ticket.id === ticketId);
        if (found) {
            found.quantity += 1;
        } else {
            eventTicketArray.push({ eventTicketId: ticketId, quantity: 1 });
        }
    })

    const isEventDatePassed = (new Date(dataEventDetails?.date).getTime()) < Date.now();

    if (dataEventDetails === undefined) return (<div>Loading</div>);

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
                    {/* DIV ENTER PROMOTION CODE */}
                    {isEventDatePassed ? <>
                        <div className="flex flex-none bg-base text-center justify-center items-center gap-3 mb-3">
                            <div className="text-[26px] my-[12px] text-black font-bold items-center flex flex-wrap gap-3">
                                <hr className=" border-black border-solid border-2 w-[150px] lg:w-[250px]" />
                                Reviews
                                <hr className=" border-black border-solid border-2 w-[150px] lg:w-[250px]" />
                            </div>
                        </div>
                        {reviewDetails?.map((review: any) => (
                            <ReviewCard key={review.id} reviewFeedback={review.feedback} reviewSuggestion={review.suggestion} rating={review.rating} reviewerFullname={review.User.fullname} reviewerEmail={review.User.email} />
                        ))}
                    </> : <>
                        <div className="card flex flex-none shadow-2xl text-center justify-center items-center gap-3 mb-3">
                            <div className="text-[16px] mt-[12px] text-black font-bold">
                                ENTER PROMOTION CODE
                            </div>
                            <input name="promotionCode" value={promotionCode} onChange={(e) => setPromotionCode(e.target.value)} className="flex bg-gray-200 mb-[16px] p-[6px] justify-center w-[90%] rounded-xl text-black font-bold italic" placeholder="Enter Code here" />
                        </div>
                        {/* DIV TIKET */}
                        <div className="card flex flex-none shadow-2xl">
                            <div className="card-body rounded-xl bg-white flex-none">
                                <div className="flex justify-start text-black font-bold">
                                    Pilih Tiket
                                </div>
                                <hr className="text-black" />
                                {dataEventDetails?.eventTicket?.map((ticket: any) => (
                                    <TicketCard key={ticket.id} ticket={ticketArray} setTicket={setTicketArray} ticketId={ticket.id} name={ticket.name} description={ticket.description} price={ticket.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })} quantity={ticket.quantity} validityDate={ticket.validityDate} />
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-center items-center mt-[16px]">
                            <button
                                onClick={async () => {
                                    mutationCreateTransaction({
                                        userUid: 'clw3rc2u700011163aislktlf',
                                        eventId: params.eventsId,
                                        eventTicket: eventTicketArray,
                                        promotionCode: promotionCode
                                    })
                                }}
                                className="w-[90%] h-[40px] bg-[#007bff] text-white py-2 px-4 rounded-lg hover:bg-[#0056b3]"
                                disabled={eventTicketArray.length === 0}>
                                Buy Now
                            </button>
                        </div>
                    </>}
                </div>
            </div>
        </div >
    )
}