import { User } from 'lucide-react';

type Props = {
  authorName?: string;
  title?: string;
  content?: string;
};

export const ContentsSection = ({ authorName, title, content }: Props) => {
  return (
    <div className='px-5 py-4'>
      <div className='mb-3 flex items-center'>
        <div className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-200'>
          <User className='h-6 w-6 text-gray-600' />
        </div>
        <div className='ml-3'>
          <div className='text-sm font-semibold text-black'>
            {authorName || '익명'}
          </div>
          <div className='text-xs text-gray-500'>05/23 01:04</div>
        </div>
      </div>
      <div className='mb-2 text-base font-semibold text-black'>{title}</div>
      <div className='text-sm leading-5 whitespace-pre-line text-black'>
        {content}
      </div>
    </div>
  );
};
