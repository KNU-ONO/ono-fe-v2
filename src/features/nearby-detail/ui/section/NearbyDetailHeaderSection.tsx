import { BackButton } from '../../components';

export const NearbyDetailHeaderSection = () => {
  return (
    <div className='absolute top-[54px] flex h-[37px] w-[375px] items-center justify-between'>
      <BackButton />
      <h1 className='absolute top-[5px] left-1/2 flex -translate-x-1/2 items-center text-base font-bold text-black'>
        매장찾기
      </h1>
    </div>
  );
};
