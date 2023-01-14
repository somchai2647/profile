import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export default function Internship({ images }) {
    return (
        <>
            <Swiper
                pagination={{
                    type: "fraction",
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper"
            >
                {images.map((img, i) => (
                    <SwiperSlide key={i} className="w-full">
                        <img src={img} alt={`Image${i}`} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}
