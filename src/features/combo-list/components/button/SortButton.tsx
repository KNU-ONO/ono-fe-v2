type Props = {
  label: string;
  setSortOrder: (sortOrder: '인기순' | '등록순') => void;
};

export const SortButton = ({ label, setSortOrder }: Props) => {
  return (
    <button
      className='relative h-[28px] w-[90px] rounded-[9999px] border-none bg-transparent px-[16px] text-[13px] font-bold text-[#000000] outline-none'
      key={label}
      onClick={() => setSortOrder(label as '인기순' | '등록순')}
    >
      {label}
    </button>
  );
};
