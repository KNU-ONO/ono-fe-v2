import { useState } from 'react';

import { Search } from 'lucide-react';

export const SearchBarSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className='absolute top-[110px] left-[16px] flex h-[40px] w-[343px] items-center rounded-lg bg-[#F5F5F5] px-3'>
      <Search className='mr-2 h-4 w-4 text-gray-400' />
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder='매장명을 검색하세요'
        className='flex-1 bg-transparent text-sm outline-none'
      />
    </div>
  );
};
