type Props = {
  selectedTagName: string | null;
  getBannerSrc: string;
  sortOrder: '인기순' | '등록순';
  setSortOrder: (order: '인기순' | '등록순') => void;
};

export const TabSection = ({
  selectedTagName,
  getBannerSrc,
  sortOrder,
  setSortOrder,
}: Props) => {
  return (
    <>
      {selectedTagName === null ? (
        <>
          <img
            src='/images/combination_main.png'
            alt='오늘 뭐 먹노?'
            className='left-[calc(50% - 90px + 0.5px)] absolute top-[220px] h-[20px] w-[180px]'
          />
          <img
            src='/images/comb_Frame.png'
            alt='실시간 HOT 꿀조합'
            className='left-[calc(50% - 100px)] absolute top-[265px] h-[22px] w-[200px]'
          />
        </>
      ) : (
        <>
          <img
            src={getBannerSrc}
            alt={`${selectedTagName} 배너`}
            className='left-[calc(50% - 90px + 0.5px)] absolute top-[220px] h-[20px] w-[180px]'
          />

          {/* 정렬 탭 */}
          <div className='left-[calc(50% - 93px)] absolute top-[269px] flex h-[36px] w-[186px] items-center overflow-hidden rounded-[9999px] bg-[#F2F2F2] px-[4px]'>
            <div
              className={`absolute top-[4px] left-[${
                sortOrder === '인기순' ? '4px' : '92px'
              }] transition-left z-0 h-[28px] w-[90px] rounded-[9999px] bg-[#B82424] duration-300 ease-in-out`}
            />
            {['인기순', '등록순'].map((label) => (
              <button
                key={label}
                className={`relative z-10 h-[28px] w-[90px] rounded-[9999px] bg-transparent px-[16px] text-[13px] font-bold ${
                  sortOrder === label ? 'text-[#FFFFFF]' : 'text-[#000000]'
                }`}
                onClick={() => setSortOrder(label as '인기순' | '등록순')}
              >
                {label}
              </button>
            ))}
          </div>
        </>
      )}
    </>
  );
};
