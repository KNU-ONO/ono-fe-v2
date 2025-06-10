'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card, CardContent } from '@/shared';

import { BANNER_DATA } from '../../data';

export const BannerSection = () => {
  return (
    <div className='flex w-full'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={700}
        slidesPerView={1}
        className='h-full w-full'
      >
        {BANNER_DATA.map((banner) => (
          <SwiperSlide key={banner.id}>
            <Card className='w-full border-none py-0'>
              <CardContent className='p-0'>
                <img
                  src={banner.image}
                  alt={banner.alt}
                  className='h-full w-full object-cover'
                />
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
