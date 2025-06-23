'use client';

import { useState } from 'react';

import {
  CategoryTabsSection,
  ProductListSection,
  StoreTabsSection,
} from '@/features';
import { FranchiseName } from '@/shared';

export default function EventPage() {
  const [activeStore, setActiveStore] = useState(FranchiseName.CU);

  const [activeCategory, setActiveCategory] = useState('1+1');

  return (
    <div className='flex w-full flex-col items-center'>
      <div className='w-full animate-[slideIn_0.4s_ease-out_both] bg-white'>
        <StoreTabsSection
          activeStore={activeStore}
          setActiveStore={setActiveStore}
        />
        <CategoryTabsSection
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <ProductListSection activeCategory={activeCategory} />
      </div>
    </div>
  );
}
