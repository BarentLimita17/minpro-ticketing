import React from "react";
import Image from "next/image";
import { IUserTransactionsCard } from "./types";
import Link from "next/link";

export default function UserTransactionsPastEventReviewedCard({ banner, eventName, transactionCreatedAt, transactionTotalAmount, transactionDiscount, codeUsed, userEmail, eventId }: IUserTransactionsCard) {
    const dateToFormat = new Date(transactionCreatedAt);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${dateToFormat.getDate()} ${months[dateToFormat.getMonth()]} ${dateToFormat.getFullYear()}`;

    const totalAmountWithoutDiscount = transactionTotalAmount / (1 - transactionDiscount / 100);
    return (
        <div className="card bg-white p-[10px] shadow-2xl flex flex-col lg:flex-none mx-10 md:mx-20 lg:mx-52 rounded-lg">
            <Link href={`/events/${eventId}`}>
                <Image src={`http://localhost:8000/${banner}`} className="thumbnail mx-auto rounded-lg" width={1000} height={300} alt="Event's Banner" />
            </Link>
            <div className="card-details flex flex-col justify-between">
                <div className="top flex justify-between mx-4 mb-2 font-semibold text-gray-500 gap-[30px]">
                    <div className="tag">{eventName}</div>
                    <div className="date">Tanggal Transaksi: {formattedDate}</div>
                </div>
                <div className="middle mx-4 mb-2 gap-5">
                    <div className="text-gray-500 line-through">
                        {totalAmountWithoutDiscount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                    </div>
                    <div className="title text-2xl font-bold text-black">
                        {transactionTotalAmount.toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}
                    </div>
                    <hr />
                    <div className="author flex">
                        <div className="text-black flex gap-1">
                            <div>
                                Kode Promo :
                            </div>
                            <div className="font-medium italic">
                                {codeUsed}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom flex mx-4 justify-between text-sky-600">
                    <div className="flex items-center text-green-600 font-semibold text-[20px] italic">
                        Reviewed!
                    </div>
                    <div className="readmore flex justify-center items-center">
                        {userEmail}
                    </div>
                </div>

            </div>
        </div>
    )
}