import { UserRound } from 'lucide-react';

import { Avatar, AvatarFallback } from '@/shared';

type Props = {
  authorName: string;
};

export const Profile = ({ authorName }: Props) => {
  return (
    <div className='flex items-center gap-2'>
      <Avatar className='size-8'>
        <AvatarFallback>
          <UserRound className='size-6 text-gray-500' />
        </AvatarFallback>
      </Avatar>
      <div className='flex flex-col'>
        <p className='text-sm font-semibold text-gray-600'>{authorName}</p>
      </div>
    </div>
  );
};
