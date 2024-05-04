import React from "react";

export default function AboutBiayaCard({ type, price, description1, description2, icon, imageBg }: {
    type: string,
    price: string,
    description1: string,
    description2: string,
    icon: any,
    imageBg: string
}) {
    return (
        <div className="card w-96 bg-white text-primary-content shadow-2xl hover:shadow-[#d8ecff]">
            <div className="card-body">
                <div className="card-actions justify-center mb-[20px]">
                    <div className={`w-[70px] h-[70px] flex justify-center items-center font-bold py-2 mt-[30px] lg:mt-[0px] px-2 rounded-xl bg-${imageBg}`}>{icon}</div>
                </div>
                <div className="card-title justify-center">{type}</div>
                <hr className="mx-[50px] py-[10px]" />
                <div className="flex justify-center pb-[10px]">
                    <div className="font-bold flex">Rp.<div className="font-bold text-3xl">{price}</div></div>/tiket
                </div>
                <div className="text-[#7e7e82] text-center">{description1}</div>
                <div className="text-[#7e7e82] text-center">{description2}</div>
            </div>
        </div>
    );
}