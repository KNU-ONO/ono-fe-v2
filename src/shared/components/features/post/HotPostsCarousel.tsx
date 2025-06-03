'use client';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ThumbsUp,
} from 'lucide-react';

import { Card, CardContent, HOT_POSTS } from '@/shared';

export const HotPostsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 자동 슬라이드 기능
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % HOT_POSTS.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? HOT_POSTS.length - 1 : prevIndex - 1,
    );
  };

  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HOT_POSTS.length);
  };

  return (
    <div className='relative'>
      <div className='mb-3 flex items-center justify-between'>
        <h2 className='flex items-center text-lg font-bold'>
          <span className='bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent'>
            🔥 실시간 인기글
          </span>
        </h2>
        <Link
          to='/community'
          className='text-sm font-medium text-red-600 hover:underline'
        >
          더보기
        </Link>
      </div>

      <div className='relative overflow-hidden rounded-xl shadow-md'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {HOT_POSTS.map((post) => (
            <div key={post.id} className='w-full flex-shrink-0'>
              <Link to={`/community/${post.id}`}>
                <Card className='border-0 transition-colors hover:bg-gray-50'>
                  <CardContent className='p-4'>
                    <h3 className='line-clamp-1 text-lg font-medium'>
                      {post.title}
                    </h3>
                    <p className='mt-1 line-clamp-2 text-sm text-gray-500'>
                      {post.content}
                    </p>
                    <div className='mt-2 flex items-center justify-between text-sm text-gray-500'>
                      <span>{post.author}</span>
                      <div className='flex items-center space-x-3'>
                        <div className='flex items-center'>
                          <ThumbsUp className='mr-1 h-4 w-4' />
                          <span>{post.likes}</span>
                        </div>
                        <div className='flex items-center'>
                          <MessageSquare className='mr-1 h-4 w-4' />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          ))}
        </div>

        {/* 네비게이션 버튼 */}
        <button
          className='absolute top-1/2 left-1 -translate-y-1/2 transform rounded-full bg-white/80 p-1.5 shadow-md transition-colors hover:bg-white'
          onClick={prevSlide}
        >
          <ChevronLeft className='h-5 w-5 text-gray-700' />
        </button>
        <button
          className='absolute top-1/2 right-1 -translate-y-1/2 transform rounded-full bg-white/80 p-1.5 shadow-md transition-colors hover:bg-white'
          onClick={nextSlide}
        >
          <ChevronRight className='h-5 w-5 text-gray-700' />
        </button>
      </div>

      {/* 인디케이터 */}
      <div className='mt-3 flex justify-center space-x-1'>
        {HOT_POSTS.map((_, index) => (
          <button
            key={index}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index
                ? 'w-6 bg-gradient-to-r from-red-500 to-orange-500'
                : 'w-2 bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
