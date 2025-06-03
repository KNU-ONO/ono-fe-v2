'use client';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { ROUTER_PATH } from '@/shared';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-white'>
      <div className='container mx-auto flex h-14 items-center justify-between px-4'>
        <Link to={ROUTER_PATH.MAIN} className='flex items-center space-x-2'>
          <span className='text-xl font-bold text-red-600'>편의점세일</span>
        </Link>

        <div className='flex items-center space-x-4'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-gray-600 transition-colors hover:text-red-600'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className='container mx-auto border-t bg-white px-4 py-2'>
          <nav className='space-y-2'>
            <Link
              to={ROUTER_PATH.STORE_MAP}
              className='block rounded px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-600'
              onClick={() => setIsMenuOpen(false)}
            >
              편의점 찾기
            </Link>
            <Link
              to={ROUTER_PATH.COMBO_LIST}
              className='block rounded px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-600'
              onClick={() => setIsMenuOpen(false)}
            >
              꿀 조합
            </Link>
            <Link
              to={ROUTER_PATH.COMMUNITY}
              className='block rounded px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-600'
              onClick={() => setIsMenuOpen(false)}
            >
              커뮤니티
            </Link>
            <Link
              to={ROUTER_PATH.EVENT}
              className='block rounded px-2 py-1 text-gray-600 hover:bg-gray-100 hover:text-red-600'
              onClick={() => setIsMenuOpen(false)}
            >
              행사 상품
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};
