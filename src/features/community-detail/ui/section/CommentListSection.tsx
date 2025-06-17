import { User, X } from 'lucide-react';

import { formatKoreanDateTime } from '@/shared';

import { Comment } from '../../apis';

type Props = {
  comments?: Comment[];
  deleteComment: (commentId: number) => void;
};

export const CommentListSection = ({ comments, deleteComment }: Props) => {
  return (
    <div className='flex h-full flex-col gap-4 px-4'>
      {comments?.map((comment) => (
        <div
          key={comment.commentId}
          className='flex w-full flex-col gap-2 border-b border-gray-100 pb-3 last:border-none'
        >
          <div className='flex w-full items-center justify-between'>
            <div className='flex items-center gap-3'>
              <div className='flex size-8 items-center justify-center rounded-full bg-gray-200'>
                <User className='size-4 text-gray-600' />
              </div>
              <div className='text-sm font-semibold text-black'>
                {comment.authorName}
              </div>
            </div>
            <X
              onClick={() => deleteComment(comment.commentId)}
              className='size-5 text-gray-400 hover:text-red-500'
            />
          </div>
          <div className='text-sm text-black'>{comment.content}</div>
          <span className='text-xs text-gray-500'>
            {formatKoreanDateTime(comment.createdAt)}
          </span>
        </div>
      ))}
    </div>
  );
};
