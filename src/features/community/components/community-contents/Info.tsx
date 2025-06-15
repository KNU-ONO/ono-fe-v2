import { Heart, MessageSquare } from 'lucide-react';

import { formatRelativeTime } from '@/shared';

type Props = {
  likeCount: number;
  commentCount: number;
  createdAt: string;
};

export const Info = ({ likeCount, commentCount, createdAt }: Props) => {
  return (
    <div className='flex items-center justify-between pb-2 text-sm text-gray-400'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-1.5'>
          <Heart fill='currentColor' className='size-3.5' />
          <p className='text-xs'>{likeCount}</p>
        </div>
        <div className='flex items-center gap-1.5'>
          <MessageSquare fill='currentColor' className='size-3.5' />
          <p className='text-xs'>{commentCount}</p>
        </div>
      </div>
      <span className='text-xs font-semibold text-gray-400'>
        {formatRelativeTime(createdAt)}
      </span>
    </div>
  );
};
