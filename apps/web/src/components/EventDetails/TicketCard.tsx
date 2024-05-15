'use client'
import { useState } from "react";
import React from "react";
import { ITicketCard } from "./types";
import { useReducer } from "react";
import CounterReducer from "@/reducer/CounterReducer";
import { CiSquarePlus, CiSquareMinus } from "react-icons/ci";

export default function TicketCard({ ticketId, name, description, price, quantity, validityDate, ticket, setTicket }: ITicketCard) {
    const validUntil = new Date(validityDate)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let formattedDate = `${validUntil.getDate()} ${months[validUntil.getMonth()]} ${validUntil.getFullYear()}`
    const [state, dispatch] = useReducer(CounterReducer, { counter: 0 })

    const handleIncrement: any = (ticketId: string) => {
        dispatch({ type: "increment" })
        setTicket([...ticket, ticketId])
    }

    const handleDecrement: any = () => {
        dispatch({ type: "decrement" })
        let index = ticket.indexOf(ticketId)
        if (index !== -1) {
            ticket.splice(index, 1);
        }
        setTicket(ticket)
    }
    return (
        <div className="flex flex-col" >
            <div className="card-body px-[20px] w-full h-[200px] bg-[#f7f7f7] p-[10px] rounded-md border-solid border-2 border-[#dee2e6]">
                <div className="text-black font-bold text-justify" >
                    {name}
                </div>
                <div className="mt-[10px] text-gray-600">
                    {description}
                </div>
                <div className="border-dashed border-b-[3px] border-gray-600">
                    <div className="absolute rounded-full w-8 h-8 bg-white left-[18px]"></div>
                    <div className="absolute rounded-full w-8 h-8 bg-white right-[18px]"></div>
                </div>
                <div className="flex justify-between lg:mt-[20px] mt-[4px] items-center">
                    <div className="text-black font-bold items-center">
                        {price}
                    </div>
                    <div>
                        <div className="flex justify-around items-center">
                            <button className="text-black" disabled={state.counter === 0} onClick={handleDecrement}><CiSquareMinus size={40} /></button>
                            <div className="text-black font-bold">  {state.counter}</div>
                            <button className="text-black" disabled={state.counter === quantity} onClick={() => {
                                handleIncrement(ticketId)
                            }}><CiSquarePlus size={40} /></button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between gap-4 flex-end mt-[5px]">
                    <div className="flex text-black text-[14px] lg:text-[13px] xl:text-[16px] gap-1">
                        Qty Left: <div className="text-[#ff5900]">{quantity}</div>
                    </div>
                    <div className="flex text-black text-[14px] lg:text-[13px] xl:text-[16px] gap-1">
                        Valid Until : <div className="text-green-500 font-bold">{formattedDate}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}