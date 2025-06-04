import { useNavigate } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className='absolute top-0 left-9 h-10 w-10'
    >
      <ArrowLeft className='h-6 w-6 text-black' />
    </button>
  );
};
