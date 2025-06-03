import { useNavigate } from 'react-router-dom';

import { ArrowLeft, User } from 'lucide-react';

export const HeaderSection = () => {
  const navigate = useNavigate();

  return (
    <div className='relative flex h-[91px] items-center justify-between'>
      <button
        onClick={() => navigate(-1)}
        className='absolute top-[54px] left-2 h-[37px] w-[37px]'
      >
        <ArrowLeft className='h-6 w-6 text-black' />
      </button>
      <h1 className='absolute top-[59px] left-1/2 -translate-x-1/2 text-[16px] leading-[27px] font-medium text-black'>
        커뮤니티
      </h1>
      <button className='absolute top-[54px] right-2 h-[37px] w-[37px]'>
        <User className='h-6 w-6 text-black' />
      </button>
    </div>
  );
};
