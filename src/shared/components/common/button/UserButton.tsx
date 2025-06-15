import { UserIcon } from 'lucide-react';

import { Button } from '../../ui';

export const UserButton = () => {
  return (
    <Button variant='ghost' size='icon'>
      <UserIcon className='size-6 cursor-pointer' />
    </Button>
  );
};
