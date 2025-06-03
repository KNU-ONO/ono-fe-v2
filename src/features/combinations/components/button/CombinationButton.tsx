import { Button } from '@/shared';

type Props = {
  label: string;
};

export const CombinationButton = ({ label }: Props) => {
  return (
    <Button
      key={label}
      className='w-full bg-red-600 text-white hover:bg-red-700'
    >
      {label}
    </Button>
  );
};
