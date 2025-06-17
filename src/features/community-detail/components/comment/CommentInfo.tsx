import { useMutation } from '@tanstack/react-query';
import { Bookmark, Heart, MessageCircle } from 'lucide-react';

import { likeAPI } from '../../apis';

type Props = {
  id?: string;
  likeCount?: number;
  commentCount?: number;
  isLiked: boolean;
  setIsLiked: (value: boolean) => void;
  isLikeProcessing: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
};

export const CommentInfo = ({
  id,
  isLiked,
  setIsLiked,
  likeCount,
  commentCount,
  isLikeProcessing,
  inputRef,
}: Props) => {
  const { mutate: likeMutate, isPending: isLikePending } = useMutation({
    mutationFn: () => likeAPI({ postId: Number(id) }),
    onMutate: () => {
      const prevIsLiked = isLiked;
      setIsLiked(!isLiked);

      return { prevIsLiked };
    },
    onSuccess: () => {
      console.log('좋아요 처리 성공');
    },
    onError: (error) => {
      console.error('좋아요 처리 실패:', error);
    },
  });

  const handleCommentIcon = () => {
    inputRef?.current?.focus();
  };

  const toggleLike = async () => {
    likeMutate();
  };
  return (
    <div className='flex w-full items-center justify-between gap-3 border-t border-b border-gray-200 px-5 py-3'>
      <div className='flex items-center gap-2'>
        <Heart
          onClick={toggleLike}
          className={`size-4 cursor-pointer transition-all duration-200 ${
            isLiked
              ? 'fill-ono-red-two text-ono-red-two'
              : 'text-gray-400 hover:text-gray-600'
          } ${isLikePending || isLikeProcessing ? 'cursor-not-allowed opacity-50' : ''}`}
        />
        <span
          className={`text-sm transition-colors duration-200 ${
            isLiked ? 'text-black' : 'text-gray-500'
          }`}
        >
          공감 {likeCount}
        </span>
      </div>
      <div
        className='flex cursor-pointer items-center gap-1 transition-transform duration-300 ease-out active:scale-110'
        onClick={handleCommentIcon}
      >
        <MessageCircle className='size-4 text-gray-400' />
        <span className='text-sm text-gray-500'>댓글 {commentCount}</span>
      </div>
      <div className='flex cursor-pointer items-center gap-2'>
        <Bookmark className='size-4 fill-gray-400 text-gray-400' />
        <span className='text-sm text-gray-500'>북마크</span>
      </div>
    </div>
  );
};
