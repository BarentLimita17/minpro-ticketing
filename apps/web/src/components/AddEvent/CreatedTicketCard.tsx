import React, { useState, useEffect } from "react";
import { ICreatedTicketCard } from "./types";
import { GrUpdate } from "react-icons/gr";
import { FaRegTrashAlt } from "react-icons/fa";
import { UpdateTicketModal } from "./UpdateTicketModal";
import { useDeleteTicket } from "@/hooks/events/useDeleteTicket";

export default function CreatedTicketCard({ name, description, price, quantity, validityDate, id, refetchEventDetails }: ICreatedTicketCard) {
    const validUntil = new Date(validityDate)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let formattedDate = `${validUntil.getDate()} ${months[validUntil.getMonth()]} ${validUntil.getFullYear()}`

    const [showTicketModal, setShowTicketModal] = useState(false);
    const { mutationDeleteTicket } = useDeleteTicket();

    return (
        <div className="flex flex-col gap-3" >
            <div className="card-body px-[20px] mt-[15px] w-full h-[200px] bg-[#f7f7f7] p-[10px] rounded-md border-solid border-2 border-[#dee2e6]">
                <div className="flex justify-between">
                    <div className="text-black font-bold text-justify" >
                        {name}
                    </div>
                </div>
                <div className="mt-[5px] text-gray-600">
                    {description}
                </div>
                <div className="border-dashed border-b-[3px] border-gray-600 mt-[5px]">
                </div>
                <div className="flex justify-between lg:mt-[20px] mt-[4px] items-center">
                    <div className="text-black font-bold items-center">
                        {price}
                    </div>
                </div>
                <div className="flex justify-between gap-4 flex-end mt-[5px]">
                    <div className="flex text-black text-[14px] lg:text-[13px] xl:text-[16px] gap-1">
                        Quantity : <div className="text-[#ff5900]">{quantity}</div>
                    </div>
                    <div className="flex text-black text-[14px] lg:text-[13px] xl:text-[16px] gap-1">
                        Valid Until : <div className="text-green-500 font-bold">{formattedDate}</div>
                    </div>
                </div>
            </div>
            <UpdateTicketModal ticketId={id} refetchEventDetails={refetchEventDetails} visible={showTicketModal} onClose={() => setShowTicketModal(false)} />
            <div className="flex gap-3 mx-[10px]">
                <button onClick={() => setShowTicketModal(true)} className="flex justify-center items-center w-[50%] h-[30px] text-black text-[10px] font-bold gap-3 border hover:bg-green-400 border-black rounded-lg p-[3px] bg-[#0e9f6e]">
                    Make Changes <GrUpdate />
                </button>
                <button onClick={() => mutationDeleteTicket({ ticketId: String(id) })} className="flex justify-center items-center w-[50%] h-[30px] text-black text-[10px] font-bold gap-3 border hover:bg-red-400 border-black rounded-lg p-[3px] bg-[#b30000]">
                    Delete Ticket <FaRegTrashAlt />
                </button>
            </div>
        </div>
    )
}