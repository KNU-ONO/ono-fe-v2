'use client';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Card, CardContent } from '@/shared';

import BannerImgOne from '../../_assets/banner_image1.png';
import BannerImgTwo from '../../_assets/banner_image2.png';

const bannerImages = [BannerImgOne, BannerImgTwo];

export const BannerSection = () => {
  return (
    <div className='absolute top-[689px] left-0 h-[123px] w-[375px] overflow-hidden'>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        speed={700}
        slidesPerView={1}
        className='h-full w-full'
      >
        {bannerImages.map((src, index) => (
          <SwiperSlide key={index}>
            <Card className='h-[105px] w-[375px] overflow-hidden py-0'>
              <CardContent className='p-0'>
                <img
                  src={src}
                  alt={`배너 이미지 ${index + 1}`}
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
