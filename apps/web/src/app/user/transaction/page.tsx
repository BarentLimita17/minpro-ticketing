'use client'
import { useGetUserTransaction } from "@/hooks/users/useGetUserTransaction";
import UserTransactionsCard from "@/components/Users/UserTransactionCard";
import Link from "next/link";

export default function UserTransactionPage() {
    const { userTransactions } = useGetUserTransaction()

    if (userTransactions === undefined) return <div>Loading...</div>
    return (
        <div className='bg-[#fbfbfb] min-h-screen pt-[7%] pb-[3%] w-full px-4'>
            <div className="mx-[50px] md:mx-[88px] lg:mx-[240px] mb-4 flex justify-between items-center">
                <div className="text-[36px] text-black">
                    Transaksi Anda
                </div>
                <Link href="/user">
                    <button className="px-4 py-2 bg-blue-600 h-[40px] text-white rounded-lg hover:bg-blue-700 transition-colors shadow-md">
                        Kembali ke profil
                    </button>
                </Link>
            </div>
            <div className="flex flex-col gap-10">
                {userTransactions.map((transaction: any, index: any) => (
                    <UserTransactionsCard key={index} banner={transaction.Event.bannerUrl} eventName={transaction.Event.name} transactionCreatedAt={transaction.createdAt} transactionTotalAmount={transaction.totalTransactionAmount} transactionDiscount={transaction.promotion?.discount || 0} codeUsed={transaction.promotion?.code || "N/A"} userEmail={transaction.User.email} />
                ))}
            </div>
        </div>
    )
}   