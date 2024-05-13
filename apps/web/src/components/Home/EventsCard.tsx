import React from "react";
import { IoLocationSharp, IoCalendar } from "react-icons/io5";
import Image from "next/image";
import { IEventsCard } from "./types";

export default function EventsCard({ name, date, location, price, banner }: IEventsCard) {
    const truncatedName = name.length > 15 ? `${name.slice(0, 13)}...` : name;
    return (
        <div className="py-[30px]">
            <div className="card w-[300px] bg-base-100 shadow-xl">
                <figure>
                    <button className="h-[145px]">
                        <Image src={`http://localhost:8000/${banner}`} alt="Event Banner" width={300} height={200} />
                    </button>
                </figure>
                <div className="card-body bg-white h-[220px]">
                    <button className="card-title text-start text-black font-bold text-[20px] hover:text-[#007bff] h-[50px] gap-5">
                        {truncatedName}
                        <div className="badge badge-secondary">NEW</div>
                    </button>
                    <div className="text-black flex items-center gap-2">
                        <IoCalendar size={20} className="text-[#007bff]" />{date}
                    </div>
                    <div className="text-black flex items-center gap-2">
                        <IoLocationSharp size={20} className="text-[#007bff]" />{location}
                    </div>
                    <hr className="mt-2" />
                    <div className="card-actions justify-end mt-2">
                        <div className="text-[#ff5900] font-bold">{price}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}