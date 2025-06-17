import { User, X } from 'lucide-react';

import { formatKoreanDateTime } from '@/shared';

import { Comment } from '../../apis';

type Props = {
  comments?: Comment[];
  deleteComment: (commentId: number) => void;
};

export const CommentList = ({ comments, deleteComment }: Props) => {
  return (
    <>
      {comments?.map((comment) => (
        <div
          key={comment.commentId}
          className='border-b border-gray-100 px-5 py-4'
        >
          <div className='mb-2 flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='flex h-8 w-8 items-center justify-center rounded-full bg-gray-200'>
                <User className='h-4 w-4 text-gray-600' />
              </div>
              <div className='ml-2 text-sm font-semibold text-black'>
                {comment.authorName || '익명'}
              </div>
            </div>
            <button
              onClick={() => deleteComment(comment.commentId)}
              className='text-gray-400 hover:text-red-500'
            >
              <X className='h-4 w-4' />
            </button>
          </div>
          <div className='mb-1 text-sm text-black'>{comment.content}</div>
          <div className='text-xs text-gray-500'>
            {formatKoreanDateTime(comment.createdAt)}
          </div>
        </div>
      ))}
    </>
  );
};
