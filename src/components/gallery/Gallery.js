import React from 'react'
import { G1, G2, G3 } from '../../Assets'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';
import {Autoplay} from 'swiper/modules';




const Gallery = () => {
  return (
    <div className='gradient-background h-[450px] flex  flex-col  items-center '>
        <h4 className='text-white font-bodyFont text-4xl font-bold my-14'>
        Gallery
        </h4>
      <div className=' w-full h-[310px] flex items-start justify-center'>
       
        <Swiper
          effect={'coverflow'}
          slidesPerView={3}
          spaceBetween={40}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows:true,
          }}
          autoplay={{
              delay: 3000,
              disableOnInteraction: false,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination,Autoplay]}
          className="mySwiper"
        >
            
            
            <SwiperSlide>
              <img className=' object-cover' src={G1} alt='Web Scraping' />
            </SwiperSlide>
            <SwiperSlide>
              <img className=' object-cover' src={G2} alt='Web Scraping' />
            </SwiperSlide>
            <SwiperSlide>
              <img className=' object-cover' src={G3} alt='Web Scraping' />
            </SwiperSlide>
            <SwiperSlide>
              <img className=' object-cover' src={G2} alt='Web Scraping' />
            </SwiperSlide>
          </Swiper>
      </div>
    </div>
  )
}

export default Gallery