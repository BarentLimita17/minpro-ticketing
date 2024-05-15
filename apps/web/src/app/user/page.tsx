'use client'
import { useGetUsersDetails } from "@/hooks/users/useGetUsersDetails"
import { FaUser } from "react-icons/fa";
import { FaTicketAlt } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import Link from "next/link";

export default function UserPage() {
    const { dataUserDetails } = useGetUsersDetails();
    return (
        <div className='bg-[#fbfbfb] min-h-screen pt-[7%] w-full px-4'>
            <div className="flex flex-wrap lg:flex-nowrap mt-3 gap-10 justify-center">
                {/* Left Column (Buttons) */}
                <div className="py-5 lg:py-0 flex justify-center lg:justify-start">
                    <div className="card w-full lg:w-72 h-auto p-5 gap-5 bg-[#0a2b55] shadow-xl rounded-lg">
                        <button className="flex gap-3 items-center text-white hover:bg-[#005bcd] p-3 rounded-lg w-full">
                            <FaUser /> Akun Saya
                        </button>
                        <Link href="/user/ticket">
                            <button className="flex gap-3 items-center text-white hover:bg-[#005bcd] p-3 rounded-lg w-full">
                                <FaTicketAlt /> Tiket Saya
                            </button>
                        </Link>
                        <Link href="/user/transaction">
                            <button className="flex gap-3 items-center text-white hover:bg-[#005bcd] p-3 rounded-lg w-full">
                                <MdOutlinePayment /> Transaksi
                            </button>
                        </Link>
                    </div>
                </div>
                {/* Right Column (User Info) */}
                <div className="py-5 lg:py-0 flex justify-center lg:justify-start">
                    <div className="card w-full lg:w-[800px] h-auto p-10 bg-white shadow-xl rounded-lg">
                        <div className="text-black text-[30px] font-bold mb-4">
                            Informasi Akun
                        </div>
                        <hr className="mb-4" />
                        <div className="text-black text-[25px] font-bold mb-4">
                            Pengguna
                        </div>
                        <div className="text-black flex flex-col gap-4">
                            <div className="flex gap-2">
                                <div className="text-black font-bold w-[150px] lg:w-[300px]">
                                    Email
                                </div>
                                :
                                <div className="flex">
                                    {dataUserDetails?.email}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="text-black font-bold w-[150px] lg:w-[300px]">
                                    Nama Pengguna
                                </div>
                                :
                                <div className="flex">
                                    {dataUserDetails?.fullname}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="text-black font-bold w-[150px] lg:w-[300px]">
                                    Kode Referal Pengguna
                                </div>
                                :
                                <div className="flex italic font-bold text-yellow-600">
                                    {dataUserDetails?.code}
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="text-black font-bold w-[150px] lg:w-[300px]">
                                    Saldo Poin
                                </div>
                                :
                                <div className="flex">
                                    {dataUserDetails?.pointsBalance}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
