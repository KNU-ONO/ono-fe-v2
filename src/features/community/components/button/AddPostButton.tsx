import { useNavigate } from 'react-router-dom';

import { Plus } from 'lucide-react';

import { Button, ROUTER_PATH } from '@/shared';

export const AddPostButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate(ROUTER_PATH.COMMUNITY_CREATE)}
      className='fixed right-4 bottom-20 z-50 flex size-14 items-center justify-center rounded-full bg-ono-red shadow-lg hover:bg-ono-red-two'
    >
      <Plus className='size-6 text-white' />
    </Button>
  );
};
