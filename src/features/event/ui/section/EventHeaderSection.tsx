import { useNavigate } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';

export const EventHeaderSection = () => {
  const navigate = useNavigate();
  return (
    <div className='absolute top-[54px] flex h-[37px] w-full items-center justify-between'>
      <button
        onClick={() => navigate(-1)}
        className='absolute left-[9px] h-[37px] w-[37px]'
      >
        <ArrowLeft className='h-6 w-6 text-black' />
      </button>
      <h1
        className='absolute h-[27px] w-[59px] font-medium text-black'
        style={{
          left: 'calc(50% - 59px/2)',
        }}
      >
        할인행사
      </h1>
    </div>
  );
};
