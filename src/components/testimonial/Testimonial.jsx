import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// USE OBJECT TO DISPLAY CARD 
const data = [
    {
        avatar: AVTR1,
        name: 'Pratham Kumar',
        review: 'Kami dan partner kami menggunakan cookie untuk menyimpan dan mengakses data pribadi seperti data browser, untuk menayangkan dan mempersonalisasi konten dan iklan, serta menganalisis trafik situs.'
    },
    {
        avatar: AVTR2,
        name: 'Dian Muhammad Nur Cahya',
        review: 'Kami dan partner kami menggunakan cookie untuk menyimpan dan mengakses data pribadi seperti data browser, untuk menayangkan dan mempersonalisasi konten dan iklan, serta menganalisis trafik situs.'
    },
    {
        avatar: AVTR3,
        name: 'Veronica Kauman',
        review: 'Kami dan partner kami menggunakan cookie untuk menyimpan dan mengakses data pribadi seperti data browser, untuk menayangkan dan mempersonalisasi konten dan iklan, serta menganalisis trafik situs.'
    },
    {
        avatar: AVTR4,
        name: 'Joseph Bross Tito',
        review: 'Kami dan partner kami menggunakan cookie untuk menyimpan dan mengakses data pribadi seperti data browser, untuk menayangkan dan mempersonalisasi konten dan iklan, serta menganalisis trafik situs.'
    }

]

const Testimonial = () => {
    return (
        <section id='testimonial'>
            <h5>Review from cllients</h5>
            <h2>Testimoinials</h2>

            <Swiper className="container testimonials__container"
                // install Swiper modules
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {/* LOOPING DATA OBJECT WITH MAP */}
                {
                    data.map(({ avatar, name, review }, index) => {
                        return (
                            <SwiperSlide key="index" className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="avatar one" />
                                </div>
                                <h5 className='client__name'>{name}</h5>
                                <small className='client__review'>
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </section>

    )
}

export default Testimonial