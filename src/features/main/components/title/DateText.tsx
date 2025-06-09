import { formattedDate } from '@/shared';

export const DateText = () => {
  const date = new Date();

  const nowDate = formattedDate(date);

  return <p className='w-full text-sm font-bold text-ono-red'>{nowDate}</p>;
};
