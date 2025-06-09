import { DateText, TitleText } from '../../components';

export const HotPostTitleSection = () => {
  return (
    <div className='flex w-full flex-col gap-2 py-5'>
      <TitleText />
      <DateText />
    </div>
  );
};
