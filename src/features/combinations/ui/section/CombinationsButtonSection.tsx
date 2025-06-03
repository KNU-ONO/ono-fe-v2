import { Button } from '@/shared';

export const CombinationsButtonSection = () => {
  const buttonLabels = [
    '다이어트 조합',
    'MY PICK 조합',
    '오늘의 추천 조합',
    '자취 고수 조합',
    '더보기',
  ];
  return (
    <div className='grid grid-cols-1 gap-4'>
      {buttonLabels.map((label) => (
        <Button
          key={label}
          className='w-full bg-red-600 text-white hover:bg-red-700'
        >
          {label}
        </Button>
      ))}
    </div>
  );
};
