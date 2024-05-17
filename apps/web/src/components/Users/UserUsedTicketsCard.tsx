import React from "react";
import Image from "next/image";
import { IUserUsedTicketsCard } from "./types";

export default function UserUsedTicketsCard({ banner, eventTicketName, eventDate, eventName, eventDescription, eventTicketDescription }: IUserUsedTicketsCard) {
    const truncatedEventDescription = eventDescription.length > 150 ? `${eventDescription.slice(0, 150)}...` : eventDescription;
    const dateToFormat = new Date(eventDate);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${dateToFormat.getDate()} ${months[dateToFormat.getMonth()]} ${dateToFormat.getFullYear()}`;
    return (
        <div className="card bg-white p-[10px] shadow-2xl flex flex-col lg:flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg">
            <Image src={`http://localhost:8000/${banner}`} className="thumbnail mx-auto rounded-lg" width={380} height={300} alt="Event's Banner" />
            <div className="card-details flex flex-col justify-between">
                <div className="top flex flex-row justify-between mx-4 mb-2 font-semibold text-gray-500">
                    <div className="tag">{eventTicketName}</div>
                    <div className="date">{formattedDate}</div>
                </div>
                <div className="middle mx-4 mb-2">
                    <div className="title text-2xl font-bold text-black mb-3">
                        {eventName}
                    </div>
                    <div className="text-black">
                        {truncatedEventDescription}
                    </div>
                </div>
                <div className="bottom flex justify-between mx-2 text-sky-600">
                    <div className="author flex">
                        <div className="name mx-2 font-bold">
                            {eventTicketDescription}
                        </div>
                    </div>
                    <div className="flex items-center text-green-600 font-semibold text-[16px] italic">
                        Ticket Used!
                    </div>
                </div>
            </div>
        </div>
    )
}