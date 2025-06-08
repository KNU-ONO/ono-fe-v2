'use client';

import { useState } from 'react';

import {
  CategoryTabsSection,
  EventHeaderSection,
  ProductListSection,
  StoreTabsSection,
} from '@/features';
import { FranchiseName } from '@/shared';

export default function EventPage() {
  const [activeStore, setActiveStore] = useState(FranchiseName.CU);

  const [activeCategory, setActiveCategory] = useState('1+1');

  return (
    <div className='animate-[slideIn_0.4s_ease-out_both]'>
      <div className='relative mx-auto h-[812px] w-[375px] overflow-hidden bg-white'>
        <EventHeaderSection />
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
