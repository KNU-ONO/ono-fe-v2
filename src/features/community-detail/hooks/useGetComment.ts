import { useQuery } from '@tanstack/react-query';

import { COMMENT_PATH, CommentParams, getCommentAPI } from '../apis';

export const getCommentQueryKey = ({ postId }: CommentParams) => [
  COMMENT_PATH(postId),
];

export const useGetComment = ({ postId }: CommentParams) => {
  return useQuery({
    queryKey: getCommentQueryKey({ postId }),
    queryFn: () => getCommentAPI({ postId }),
  });
};
