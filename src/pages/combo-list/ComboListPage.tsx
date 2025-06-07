import { useState } from 'react';

import { SORT_BUTTON_DATA } from '@/features/combo-list/data';
import { useCategoryBanner } from '@/features/combo-list/hooks';

import {
  CardListSection,
  CategoryButtonSection,
  ComboListHeaderSection,
  // SortButtonSection,
  TabSection,
} from '@/features';

export default function ComboListPage() {
  const [selectedTagName, setSelectedTagName] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'인기순' | '등록순'>('인기순');

  const selectedSort = SORT_BUTTON_DATA.find(
    (item) => item.label === sortOrder,
  )?.value;

  const getBannerSrc = useCategoryBanner(selectedTagName);

  return (
    <div className='relative mx-auto h-[812px] w-[375px] overflow-hidden bg-white'>
      <ComboListHeaderSection />
      <CategoryButtonSection setSelectedTagName={setSelectedTagName} />
      <TabSection
        selectedTagName={selectedTagName}
        getBannerSrc={getBannerSrc}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      {/* <SortButtonSection setSortOrder={setSortOrder} sortOrder={sortOrder} /> */}
      <CardListSection
        selectedTagName={selectedTagName}
        sortOrder={selectedSort || '인기순'}
      />
    </div>
  );
}
