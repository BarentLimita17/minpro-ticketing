'use client'
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplayspeed: 2000
    };
    return (
        <div className="slider-container pt-[30px] bg-white mx-[20px] xl:mx-[100px] mb-[100px] lg:mb-0">
            <Slider {...settings}>
                <div className="flex justify-center items-center">
                    <Image className='rounded-2xl' src="/te-banner-1.jpg" alt="logo konserin" width={3000} height={1000} />
                </div>
                <div>
                    <Image className='rounded-2xl' src="/te-banner-2.jpg" alt="logo konserin" width={3000} height={1000} />
                </div>
                <div>
                    <Image className='rounded-2xl' src="/te-banner-3.jpg" alt="logo konserin" width={3000} height={1000} />
                </div>
                <div>
                    <Image className='rounded-2xl' src="/te-banner-4.jpg" alt="logo konserin" width={3000} height={1000} />
                </div>
                <div>
                    <Image className='rounded-2xl' src="/te-banner-5.jpg" alt="logo konserin" width={3000} height={1000} />
                </div>
            </Slider>
        </div>
    )
}