import { useNavigate } from 'react-router-dom';

import { ArrowLeft } from 'lucide-react';

export const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)}>
      <ArrowLeft className='h-6 w-6 text-black' />
    </button>
  );
};
