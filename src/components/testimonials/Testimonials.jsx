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
        <section className="testimonial container section">
            <h2 className="section__title">My Clients Say</h2>
            <span className="section__subtitle">Testimonials</span>

            <div className="Testimonial__container">
                {Data.map(({id, description, image, title,}) => {
                    return (
                        <div className="testimonial__card" key={id}>
                            <p className="testimonial__description">{description}</p>
                            <img src={image} alt="" className="testimonial__img" />
                            <h3 className="testimonial__name">{title}</h3>
                        </div>
                    )
                })}
            </div>
        </section>        
    )
}

export default Testimonials;