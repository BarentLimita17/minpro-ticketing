import React from "react";

export default function AboutWelcomeEOCard({ title, description, icon }: {
    title: string,
    description: string,
    icon: any,
}) {
    return (
        <div className="card w-96 bg-white text-primary-content shadow-2xl hover:shadow-[#d8ecff]">
            <div className="card-body">
                <div className="card-title">{title}</div>
                <div className="text-[#7e7e82]">{description}</div>
                <div className="card-actions justify-end">
                    <div
                        className={`w-[70px] h-[70px] flex justify-center items-center font-bold py-2 mt-[30px] lg:mt-[0px] px-2 rounded-xl bg-[#007bff]`}
                    >
                        {icon}
                    </div>
                </div>
            </div>
        </div>
    );
}