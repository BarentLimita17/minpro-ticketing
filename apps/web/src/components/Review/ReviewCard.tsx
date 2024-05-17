import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { ICreateReviewCard } from "./types";

export default function ReviewCard({ reviewFeedback, reviewSuggestion, rating, reviewerFullname, reviewerEmail }: ICreateReviewCard) {
    return (
        <div className="dark:bg-gray-800 bg-gray-300 rounded-xl shadow-xl w-auto mx-10 border-2 border-solid border-black">
            <div className="max-w-screen-xl px-4 py-6 mx-auto text-center lg:py-12 lg:px-6">
                <div className="max-w-screen-md mx-auto">
                    <svg className="h-12 mx-auto mb-3 text-[#1a56db] dark:text-gray-600" viewBox="0 0 24 27" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                            fill="currentColor"></path>
                    </svg>
                    <blockquote>
                        <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                            {reviewFeedback}, {reviewSuggestion}</p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <FaUserCircle className="w-10 h-10 text-red-600 dark:text-gray-400" />
                        <div className="flex items-center divide-x-2 divide-[#1a56db] dark:divide-gray-700">
                            <div className="pr-3 font-medium text-gray-900 dark:text-white">{reviewerFullname}</div>
                            <div className="pl-3 text-sm font-light text-black dark:text-gray-400">{reviewerEmail}</div>
                        </div>
                    </figcaption>
                </div>
            </div>
        </div>
    )
}