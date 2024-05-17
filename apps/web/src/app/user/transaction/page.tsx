'use client'
import { useGetUserTransactionNonPastEvent } from "@/hooks/users/useGetUserTransactionNonPastEvent";
import { useGetUserTransactionPastEventUnReviewed } from "@/hooks/users/useGetUserTransactionPastEventUnReviewed"
import { useGetUserTransactionPastEventReviewed } from "@/hooks/users/useGetUserTransactionPastEventReviewed"
import UserTransactionsPastEventUnReviewedCard from "@/components/Users/UserTransactionPastEventUnReviewedCard";
import UserTransactionsPastEventReviewedCard from "@/components/Users/UserTransactionPastEventReviewedCard";
import UserTransactionsNonPastEventCard from "@/components/Users/UserTransactionNonPastEventCard";
import Link from "next/link";
import Image from "next/image";

export default function UserTransactionPage() {
    const { userTransactionsNonPastEvent }: any = useGetUserTransactionNonPastEvent()
    const { userTransactionsPastEventUnReviewed }: any = useGetUserTransactionPastEventUnReviewed();
    const { userTransactionsPastEventReviewed }: any = useGetUserTransactionPastEventReviewed();

    const noTransactionsFound = userTransactionsNonPastEvent.length === 0 && userTransactionsPastEventUnReviewed.length === 0;

    if (userTransactionsNonPastEvent === undefined || userTransactionsPastEventReviewed === undefined || userTransactionsPastEventUnReviewed === undefined) return <div>Loading...</div>

    return (
        <>
            <div className='bg-[#fbfbfb] min-h-screen pt-[7%] pb-[3%] w-full px-4'>
                <div className="mx-[50px] md:mx-[88px] lg:mx-[240px] mb-4 flex justify-between items-center">
                    <div className="flex gap-[12px]">
                        <div className="lg:text-[36px] text-[22px] text-black">Transaksi</div>
                        <div className="lg:text-[36px] text-[22px] text-[#004997] font-medium">Baru</div>
                    </div>
                    <Link href="/user">
                        <button className="px-4 py-2 bg-blue-600 h-[40px] text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                            Kembali ke profil
                        </button>
                    </Link>
                </div>
                <div className="flex flex-col gap-10">
                    {noTransactionsFound ? (
                        <div className="flex flex-col items-center justify-center bg-[#fbfbfb] mt-0 mb-[50px] lg:mb-0 lg:mt-[80px]">
                            <Image className="rounded-full" src="/NODATA-FOUND.jpg" alt="No events found" width={300} height={300} />
                        </div>
                    ) : (
                        <>
                            {userTransactionsPastEventUnReviewed.map((transaction: any, index: any) => (
                                <UserTransactionsPastEventUnReviewedCard key={index} eventId={transaction.Event.id} transactionId={transaction.id} banner={transaction.Event.bannerUrl} eventName={transaction.Event.name} transactionCreatedAt={transaction.createdAt} transactionTotalAmount={transaction.totalTransactionAmount} transactionDiscount={transaction.promotion?.discount || 0} codeUsed={transaction.promotion?.code || "N/A"} userEmail={transaction.User.email} />
                            ))}
                            {userTransactionsNonPastEvent.map((transaction: any, index: any) => (
                                <UserTransactionsNonPastEventCard key={index} eventId={transaction.Event.id} banner={transaction.Event.bannerUrl} eventName={transaction.Event.name} transactionCreatedAt={transaction.createdAt} transactionTotalAmount={transaction.totalTransactionAmount} transactionDiscount={transaction.promotion?.discount || 0} codeUsed={transaction.promotion?.code || "N/A"} userEmail={transaction.User.email} />
                            ))}
                        </>
                    )}
                </div>
                <div className="mx-[50px] md:mx-[88px] mt-[100px] lg:mx-[240px] mb-4 flex justify-between items-center">
                    <div className="flex gap-[12px] mt-[30px]">
                        <div className="lg:text-[36px] text-[22px] text-black">Event</div>
                        <div className="lg:text-[36px] text-[22px] text-[#004997] font-medium">Yang</div>
                        <div className="lg:text-[36px] text-[22px] text-black">Sudah</div>
                        <div className="lg:text-[36px] text-[22px] text-[#004997] font-medium">Direview</div>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {userTransactionsPastEventUnReviewed.length > 0 ? (
                        userTransactionsPastEventReviewed.map((transaction: any, index: any) => (
                            <UserTransactionsPastEventReviewedCard key={index} eventId={transaction.Event.id} banner={transaction.Event.bannerUrl} eventName={transaction.Event.name} transactionCreatedAt={transaction.createdAt} transactionTotalAmount={transaction.totalTransactionAmount} transactionDiscount={transaction.promotion?.discount || 0} codeUsed={transaction.promotion?.code || "N/A"} userEmail={transaction.User.email} />
                        ))) : (
                        <div className="flex flex-col items-center justify-center bg-[#fbfbfb] mt-0 mb-[50px] lg:mb-0 lg:mt-[80px]">
                            <Image className="rounded-full" src="/NODATA-FOUND.jpg" alt="No events found" width={300} height={300} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}   