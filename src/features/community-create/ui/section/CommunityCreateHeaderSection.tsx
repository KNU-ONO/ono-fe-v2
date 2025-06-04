import { BackButton } from '../../components';

export const CommunityCreateHeaderSection = () => {
  return (
    <div className='absolute top-[54px] left-[9px] flex h-[37px] items-center'>
      <BackButton />
      <h1 className='ml-4 leading-[27px] font-bold text-black'>글쓰기</h1>
    </div>
  );
};
