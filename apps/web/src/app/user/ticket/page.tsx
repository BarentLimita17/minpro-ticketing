'use client'
import { useGetUserActiveTicket } from "@/hooks/users/useGetUserActiveTicket";
import { useGetUserUsedTicket } from "@/hooks/users/useGetUserUsedTicket";
import UserTicketsCard from "@/components/Users/UserTicketsCard";
import UserUsedTicketsCard from "@/components/Users/UserUsedTicketsCard";
import Link from "next/link";

export default function UserTicketPage() {
    const { userUsedTickets } = useGetUserUsedTicket()
    const { userActiveTickets } = useGetUserActiveTicket()

    if (userActiveTickets === undefined) return <div>Loading...</div>
    return (
        <div className='bg-[#fbfbfb] min-h-screen pt-[7%] pb-[3%] w-full px-4'>
            <div className="mx-[50px] md:mx-[88px] lg:mx-[240px] mb-4 flex justify-between items-center">
                <div className="flex gap-[12px]">
                    <div className="lg:text-[36px] text-[22px] text-black">Tiket</div>
                    <div className="lg:text-[36px] text-[22px] text-[#004997] font-medium">Aktif</div>
                </div>
                <Link href="/user">
                    <button className="px-4 py-2 bg-blue-600 h-[40px] text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                        Kembali ke profil
                    </button>
                </Link>
            </div>
            <div className="flex flex-col gap-10">
                {userActiveTickets.map((ticket: any, index: any) => (
                    <UserTicketsCard key={index} banner={ticket.Event.bannerUrl} eventTicketName={ticket.EventTicket.name} eventDate={ticket.Event.date} eventName={ticket.Event.name} eventDescription={ticket.Event.description} eventTicketDescription={ticket.EventTicket.description} eventTicketUUID={ticket.id} />
                ))}
            </div>
            <div className="mx-[50px] md:mx-[88px] lg:mx-[240px] mb-4 flex justify-between items-center">
                <div className="flex gap-[12px] mt-[30px]">
                    <div className="lg:text-[36px] text-[22px] text-black">Tiket</div>
                    <div className="lg:text-[36px] text-[22px] text-[#004997] font-medium">Terpakai</div>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                {userUsedTickets.map((ticket: any, index: any) => (
                    <UserUsedTicketsCard key={index} banner={ticket.Event.bannerUrl} eventTicketName={ticket.EventTicket.name} eventDate={ticket.Event.date} eventName={ticket.Event.name} eventDescription={ticket.Event.description} eventTicketDescription={ticket.EventTicket.description} />
                ))}
            </div>
        </div>
    )
}   