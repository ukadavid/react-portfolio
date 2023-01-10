import React from "react";
import "./testimonials.css"
import { Data } from "./Data";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const Testimonials = () => {
    return (
        <section className="testimonial container section" id="testimonials">
            <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testimonials</span>

            <Swiper className="Testimonial__container" 
            loop={true}
            grabCursor={true}
            spaceBetween={24}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 48,
              },
            }}
            modules={[Pagination]}
            >
                {Data.map(({id, description, image, title,}) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <p className="testimonial__description">{description}</p>
                            <img src={image} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{title}</h3>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>        
    )
}

export default Testimonials;