import { User } from 'lucide-react';

import { formatDateTime } from '@/shared';

type Props = {
  authorName: string;
  title: string;
  content: string;
  createdAt: string;
};

export const PostDetail = ({
  authorName,
  title,
  content,
  createdAt,
}: Props) => {
  return (
    <div className='flex w-full flex-col gap-5'>
      <div className='flex w-full items-center gap-3'>
        <div className='flex size-10 items-center justify-center rounded-full bg-gray-200'>
          <User className='size-6 text-gray-600' />
        </div>
        <div className='flex flex-col gap-0.5'>
          <div className='text-sm font-semibold text-black'>{authorName}</div>
          <div className='text-xs text-gray-500'>
            {formatDateTime(createdAt)}
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-2'>
        <span className='text-lg font-semibold text-black'>{title}</span>
        <span className='text-black'>{content}</span>
      </div>
    </div>
  );
};
