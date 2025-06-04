import {
  FilterTabSection,
  NearbyHeaderSection,
  SearchBarSection,
  StoreListSection,
} from '@/features';

export default function NearbyPage() {
  return (
    <div className='relative mx-auto h-[812px] w-[375px] overflow-hidden bg-white'>
      <NearbyHeaderSection />
      <SearchBarSection />
      <FilterTabSection />
      <StoreListSection />
    </div>
  );
}
