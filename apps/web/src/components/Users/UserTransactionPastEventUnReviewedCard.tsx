'use client'
import React, { useState } from "react";
import Image from "next/image";
import { IUserTransactionsUnReviewedCard } from "./types";
import { CreateReviewModal } from "@/components/Users/CreateReviewModal";
import Link from "next/link";

export default function UserTransactionsPastEventUnReviewedCard({ banner, eventName, transactionCreatedAt, transactionTotalAmount, transactionDiscount, codeUsed, userEmail, transactionId, eventId }: IUserTransactionsUnReviewedCard) {
    const dateToFormat = new Date(transactionCreatedAt);
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${dateToFormat.getDate()} ${months[dateToFormat.getMonth()]} ${dateToFormat.getFullYear()}`;
    const [showReviewModal, setShowReviewModal] = useState(false);

    const totalAmountWithoutDiscount = transactionTotalAmount / (1 - transactionDiscount / 100);
    return (
        <>
            <CreateReviewModal transactionId={transactionId} eventId={eventId} visible={showReviewModal} onClose={() => setShowReviewModal(false)} />
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
                        <div className="">
                            <button
                                onClick={() => setShowReviewModal(true)}
                                className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700 transition-colors"
                            >
                                Review
                            </button>
                        </div>
                        <div className="readmore flex justify-center items-center">
                            {userEmail}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}