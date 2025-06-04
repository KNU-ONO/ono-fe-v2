import { useNavigate } from 'react-router-dom';

import { getDynamicPath } from '@/shared';

import { STORE_INFO_MOCK } from '../../mock';

export const StoreListSection = () => {
  const navigate = useNavigate();

  return (
    <div className='absolute top-[220px] h-[592px] w-[375px] overflow-y-auto'>
      {STORE_INFO_MOCK.map((store) => (
        <button
          key={store.id}
          onClick={() =>
            navigate(getDynamicPath.nearbyDetail(String(store.id)))
          }
          className='flex w-full items-center border-b-[1px] border-[#f0f0f0] p-4 text-left transition-colors hover:bg-gray-50'
        >
          {/* Store Image */}
          <div className='relative mr-4 h-[80px] w-[80px] overflow-hidden rounded-lg'>
            <img
              src={store.image || '/placeholder.svg'}
              alt={store.name}
              className='object-cover'
            />
          </div>

          {/* Store Info */}
          <div className='flex-1'>
            <h3 className='mb-1 leading-5 font-semibold text-black'>
              {store.name}
            </h3>
            <p className='text-sm leading-4.5 font-normal text-[#666]'>
              {store.address}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};
