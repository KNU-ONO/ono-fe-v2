import { EllipsisVerticalIcon } from 'lucide-react';

import { Button } from '../../ui';

export const MenuButton = () => {
  return (
    <Button variant='ghost' size='icon'>
      <EllipsisVerticalIcon className='size-6' />
    </Button>
  );
};
