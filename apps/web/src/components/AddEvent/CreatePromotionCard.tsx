import React, { useState } from "react";
import { ICreatedPromotionCard } from "./types";
import { GrUpdate } from "react-icons/gr";
import { UpdatePromotionModal } from "./UpdatePromotionModal";
import { FaRegTrashAlt } from "react-icons/fa";
import { useDeletePromotion } from "@/hooks/events/useDeletePromotion";

export default function CreatePromotionCard({ name, code, description, discount, quantity, validityDate, id }: ICreatedPromotionCard) {
    const validUntil = new Date(validityDate)
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let formattedDate = `${validUntil.getDate()} ${months[validUntil.getMonth()]} ${validUntil.getFullYear()}`

    const [showPromotionModal, setShowPromotionModal] = useState(false);
    const { mutationDeletePromotion } = useDeletePromotion();

    return (
        <div className="flex flex-col gap-3" >
            <div className="card-body px-[20px] mt-[15px] w-full h-[200px] bg-[#f7f7f7] p-[10px] rounded-md border-solid border-2 border-[#dee2e6]">
                <div className="text-black font-bold text-justify" >
                    {name}
                </div>
                <div className="mt-[5px] text-gray-600">
                    {description}
                </div>
                <div className="border-dashed border-b-[3px] border-gray-600 mt-[5px]">
                </div>
                <div className="flex justify-between lg:mt-[20px] mt-[4px] items-center">
                    <div className="text-black font-bold items-center">
                        {discount} % Discount
                    </div>
                    <div className="mt-[5px] text-gray-600 flex gap-2">
                        Code To Share : <div className="font-bold">{code}</div>
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
            <UpdatePromotionModal promotionId={id} visible={showPromotionModal} onClose={() => setShowPromotionModal(false)} />
            <div className="flex gap-3 mx-[10px]">
                <button onClick={() => setShowPromotionModal(true)} className="flex justify-center items-center w-[50%] h-[30px] text-black text-[10px] hover:bg-green-400 font-bold gap-3 border border-black rounded-lg p-[3px] bg-[#0e9f6e]">
                    Make Changes <GrUpdate />
                </button>
                <button onClick={() => mutationDeletePromotion({ promotionId: String(id) })} className="flex justify-center items-center w-[50%] h-[30px] text-black text-[10px] font-bold gap-3 border hover:bg-red-400 border-black rounded-lg p-[3px] bg-[#b30000]">
                    Delete Promotion <FaRegTrashAlt />
                </button>
            </div>
        </div>
    )
}