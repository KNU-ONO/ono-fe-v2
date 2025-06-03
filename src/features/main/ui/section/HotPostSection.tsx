import { HotPostsList } from '@/shared';

import { DateText, TitleText } from '../../components';

export const HotPostSection = () => {
  const date = new Date();

  const formattedDate = date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <>
      <TitleText />
      <DateText date={formattedDate} />

      {/* Hot Posts List */}
      <div className='absolute top-[125px] left-[26px]'>
        <HotPostsList />
      </div>
    </>
  );
};
