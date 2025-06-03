import { useNavigate } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className='absolute top-[0px] left-[9px] h-[37px] w-[37px]'
    >
      <ArrowLeft className='h-6 w-6 text-black' />
    </button>
  );
};
