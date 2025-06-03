import { useNavigate } from 'react-router-dom';

import { Plus } from 'lucide-react';

export const AddPostButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/community/create')}
      className='absolute right-2 bottom-2 flex h-[65px] w-[65px] items-center justify-center rounded-full bg-red-600'
    >
      <Plus className='h-8 w-8 text-white' />
    </button>
  );
};
