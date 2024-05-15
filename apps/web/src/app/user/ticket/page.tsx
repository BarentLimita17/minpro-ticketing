'use client'
import { useGetUserTicket } from "@/hooks/users/useGetUserTicket";
import UserTicketsCard from "@/components/Users/UserTicketsCard";
import Link from "next/link";

export default function UserTicketPage() {
    const { userTickets } = useGetUserTicket()

    if (userTickets === undefined) return <div>Loading...</div>
    return (
        <div className='bg-[#fbfbfb] min-h-screen pt-[7%] pb-[3%] w-full px-4'>
            <div className="mx-[50px] md:mx-[88px] lg:mx-[240px] mb-4 flex justify-between items-center">
                <div className="text-[36px] text-black">
                    Tiket Anda
                </div>
                <Link href="/user">
                    <button className="px-4 py-2 bg-blue-600 h-[40px] text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                        Kembali ke profil
                    </button>
                </Link>
            </div>
            <div className="flex flex-col gap-10">
                {userTickets.map((ticket: any, index: any) => (
                    <UserTicketsCard key={index} banner={ticket.Event.bannerUrl} eventTicketName={ticket.EventTicket.name} eventDate={ticket.Event.date} eventName={ticket.Event.name} eventDescription={ticket.Event.description} eventTicketDescription={ticket.EventTicket.description} eventTicketUUID={ticket.id} />
                ))}
            </div>
        </div>
    )
}   