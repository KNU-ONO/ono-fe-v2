import { useParams } from 'react-router-dom';

import {
  KakaoMapSection,
  NearbyDetailHeaderSection,
  STORE_INFO_DETAIL_MOCK,
  StoreInfoSection,
} from '@/features';

export default function NearByDetailPage() {
  const { id } = useParams();

  const selectedStore = STORE_INFO_DETAIL_MOCK.find(
    (store) => store.id === Number(id),
  );

  if (!selectedStore) {
    return <div>선택한 매장이 없습니다.</div>;
  }

  return (
    <div className='relative mx-auto h-[812px] w-[375px] overflow-hidden bg-white'>
      <NearbyDetailHeaderSection />
      <StoreInfoSection
        storeImage={selectedStore.storeImage}
        storeName={selectedStore.name}
        storeAddress={selectedStore.address}
      />

      {/* TODO: 임시 Kakao Map */}
      <KakaoMapSection lat={selectedStore.lat} lng={selectedStore.lng} />
    </div>
  );
}
