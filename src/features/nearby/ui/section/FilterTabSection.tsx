export const FilterTabSection = () => {
  return (
    <div className='absolute top-[170px] left-[16px] flex gap-[20px]'>
      <button className='border-b-[2px] border-black bg-transparent pb-[4px] font-semibold'>
        가까운 매장
      </button>
      <button className='border-none bg-transparent pb-1 font-normal text-[#999]'>
        자주 가는 매장
      </button>
    </div>
  );
};
