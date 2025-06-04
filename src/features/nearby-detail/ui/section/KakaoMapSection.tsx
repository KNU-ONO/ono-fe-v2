import { KakaoMap } from '@/shared';

type Props = {
  lat: number;
  lng: number;
};

export const KakaoMapSection = ({ lat, lng }: Props) => {
  return (
    <div className='absolute top-[512px] left-0 h-[300px] w-[375px] bg-gray-100'>
      <KakaoMap lat={lat} lng={lng} />
    </div>
  );
};
