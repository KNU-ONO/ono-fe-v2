'use client';

import { useState } from 'react';

import { HotPostsList, SplashScreen } from '@/shared';

export default function MainPage() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className='relative mx-auto h-[812px] w-[375px] overflow-hidden bg-white'>
      {/* 실시간 HOT 게시물 제목 */}
      <h2
        className='absolute flex items-center text-black'
        style={{
          width: '152px',
          height: '24px',
          left: '26px',
          top: '61px',
          fontFamily: 'Pretendard',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '20px',
          lineHeight: '24px',
          letterSpacing: '-0.015em',
          wordSpacing: '-3px',
          color: '#000000',
          whiteSpace: 'nowrap',
        }}
      >
        실시간 HOT 게시물
      </h2>

      {/* 날짜 텍스트 */}
      <p
        className='absolute'
        style={{
          width: '250px',
          height: '21px',
          left: '26px',
          top: '89px',
          fontFamily: 'Pretendard',
          fontWeight: 400,
          fontSize: '13px',
          lineHeight: '16px',
          letterSpacing: '-0.015em',
          color: '#B81E22',
        }}
      >
        2025년 5월 21일 수요일 오후 10:07
      </p>

      {/* Hot Posts List */}
      <div
        className='absolute'
        style={{
          left: '26px',
          top: '125px',
        }}
      >
        <HotPostsList />
      </div>

      {/* Main Menu Images */}
      {/* 편의점 - 왼쪽 위 */}
      <button
        onClick={() => (window.location.href = '/nearby')}
        className='absolute transition-all duration-200 hover:scale-105 active:scale-95'
        style={{
          width: '146px',
          height: '158px',
          left: '34px',
          top: '339px',
        }}
      >
        <img src='/icons/logo1.svg' alt='편의점' className='object-contain' />
      </button>

      {/* 꿀조합 - 오른쪽 위 */}
      <button
        onClick={() => (window.location.href = '/combo-list')}
        className='absolute transition-all duration-200 hover:scale-105 active:scale-95'
        style={{
          width: '146px',
          height: '158px',
          left: '196px',
          top: '339px',
        }}
      >
        <img src='/icons/logo2.svg' alt='꿀조합' className='object-contain' />
      </button>

      {/* 커뮤니티 - 왼쪽 아래 */}
      <button
        onClick={() => (window.location.href = '/community')}
        className='absolute transition-all duration-200 hover:scale-105 active:scale-95'
        style={{
          width: '146px',
          height: '158px',
          left: '34px',
          top: '510px',
        }}
      >
        <img src='/icons/logo3.svg' alt='커뮤니티' className='object-contain' />
      </button>

      {/* 할인행사 - 오른쪽 아래 */}
      <button
        onClick={() => (window.location.href = '/event')}
        className='absolute transition-all duration-200 hover:scale-105 active:scale-95'
        style={{
          width: '146px',
          height: '158px',
          left: '196px',
          top: '510px',
        }}
      >
        <img src='/icons/logo4.svg' alt='할인행사' className='object-contain' />
      </button>

      {/* Bottom Promotion Banner */}
      <div
        className='absolute'
        style={{
          width: '375px',
          height: '123px',
          left: '0px',
          top: '689px',
        }}
      >
        <img
          src='/images/banner_image1.png' // 이미지 파일 경로에 맞게 수정
          alt='배너 이미지'
          width={375}
          height={123}
          className='object-cover'
        />
      </div>
    </div>
  );
}
