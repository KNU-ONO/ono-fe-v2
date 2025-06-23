import { Button } from '@/shared';

type Props = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export const CategoryTabsSection = ({
  activeCategory,
  setActiveCategory,
}: Props) => {
  return (
    <div className='flex h-10 w-full items-center justify-between bg-[#F7F7F7]'>
      {['전체', '1+1', '2+1'].map((cat) => (
        <Button
          variant='ghost'
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className='flex-1 cursor-pointer border-none text-sm'
        >
          <p
            className={`w-10 transition-all duration-300 hover:scale-110 active:scale-95 ${activeCategory === cat ? 'bg-[#FFDBDC] text-ono-red' : 'bg-transparent text-[#C4C4C4]'} rounded-full font-semibold`}
          >
            {cat}
          </p>
        </Button>
      ))}
    </div>
  );
};
