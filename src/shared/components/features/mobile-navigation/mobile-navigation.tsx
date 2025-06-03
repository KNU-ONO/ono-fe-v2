'use client';

import { Link, useLocation } from 'react-router-dom';

import { NAVIGATE_ITEMS, cn } from '@/shared';

export const MobileNavigation = () => {
  const location = useLocation();

  const pathname = location.pathname;

  return (
    <div className='fixed bottom-0 left-0 z-50 h-16 w-full border-t bg-white md:hidden'>
      <div className='grid h-full grid-cols-4'>
        {NAVIGATE_ITEMS.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={cn(
              'flex flex-col items-center justify-center text-xs font-medium',
              pathname === item.href
                ? 'text-red-600'
                : 'text-gray-500 hover:text-red-600',
            )}
          >
            <item.icon className='mb-1 h-6 w-6' />
            <span>{item.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
