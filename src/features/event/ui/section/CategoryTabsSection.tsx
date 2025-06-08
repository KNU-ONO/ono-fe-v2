type Props = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

export const CategoryTabsSection = ({
  activeCategory,
  setActiveCategory,
}: Props) => {
  return (
    <div className='absolute top-[165px] h-[45px] w-[375px] bg-[#F7F7F7]'>
      {['전체', '1+1', '2+1'].map((cat, i) => (
        <button
          key={cat}
          onClick={() => setActiveCategory(cat)}
          className={`absolute top-[7px] h-[27px] w-[50px] cursor-pointer border-none text-base leading-[27px] transition-all duration-300 hover:scale-110 active:scale-95 ${i === 0 ? 'left-[40px]' : i === 1 ? 'left-[160px]' : 'left-[270px]'} ${activeCategory === cat ? 'bg-[#FFDBDC] text-[#B81E22]' : 'bg-transparent text-[#C4C4C4]'} rounded-[13px] font-semibold`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};
