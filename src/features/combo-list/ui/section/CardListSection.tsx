import { BASE_URL } from '@/shared';

import { useGetCombos } from '../../hooks';

type Props = {
  selectedTagName: string;
  sortOrder: string;
};

export const CardListSection = ({ selectedTagName, sortOrder }: Props) => {
  const {
    data: combosData,
    isLoading,
    error,
  } = useGetCombos({
    tagName: selectedTagName,
    sort: sortOrder,
    franchiseId: 1,
  });

  if (combosData === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isLoading ? (
        <p className='absolute top-[320px] left-1/2 -translate-x-1/2 text-sm text-gray-500'>
          불러오는 중...
        </p>
      ) : error ? (
        <p className='absolute top-[320px] left-1/2 -translate-x-1/2 text-sm text-red-500'>
          {error?.message}
        </p>
      ) : (
        combosData.map((combo) => {
          return (
            <div
              key={combo.combinationId}
              className='absolute top-[305px] left-[26px] h-[150px] w-[324px] rounded-lg bg-gray-100'
            >
              <div className='absolute top-[10px] left-[5px] font-bold text-black'>
                {combo.title}
              </div>

              {combo.itemList.slice(0, 3).map((item, i) => (
                <div
                  key={item.itemId}
                  className='absolute top-[47.8px] h-[91.8px] w-[91.8px] overflow-hidden rounded-lg bg-white shadow-md'
                  style={{
                    left: `${11.88 + i * 103.68}px`,
                  }}
                >
                  <img
                    src={`${BASE_URL}/${item.imageUrl}`}
                    alt={item.itemName}
                    className='h-full w-full object-cover'
                  />
                </div>
              ))}
            </div>
          );
        })
      )}
    </>
  );
};
