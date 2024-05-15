import React from "react";
import Image from "next/image";
import { IUserTransactionsCard } from "./types";

export default function UserTransactionsCard({ banner, eventName, transactionCreatedAt, transactionTotalAmount, transactionDiscount, codeUsed, userEmail }: IUserTransactionsCard) {
    const dateToFormat = new Date(transactionCreatedAt);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${dateToFormat.getDate()} ${months[dateToFormat.getMonth()]} ${dateToFormat.getFullYear()}`;

    const totalAmountWithoutDiscount = transactionTotalAmount / (1 - transactionDiscount / 100);
    return (
        <div className="card bg-white p-[10px] shadow-2xl flex flex-col lg:flex-row mx-10 md:mx-20 lg:mx-52 rounded-lg">
            <Image src={`http://localhost:8000/${banner}`} className="thumbnail mx-auto rounded-lg" width={550} height={300} alt="Event's Banner" />
            <div className="card-details flex flex-col justify-between">
                <div className="top flex justify-between mx-4 mb-2 font-semibold text-gray-500 gap-[30px]">
                    <div className="tag">{eventName}</div>
                    <div className="date">Tanggal Transaksi: {formattedDate}</div>
                </div>
                <div className="middle mx-4 mb-2">
                    <div className="text-gray-500 line-through">
                        {totalAmountWithoutDiscount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                    </div>
                    <div className="title text-2xl font-bold text-black mb-3">
                        {transactionTotalAmount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                    </div>
                </div>
                <div className="bottom flex justify-between mx-2 text-sky-600">
                    <div className="author flex">
                        <div className="name mx-2 font-bold">
                            Code yang dipakai : {codeUsed}
                        </div>
                    </div>
                    <div className="readmore">
                        {userEmail}
                    </div>
                </div>
            </div>
        </div>
    )
}