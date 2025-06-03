import { useQuery } from '@tanstack/react-query';

import { POSTS_DETAIL_PATH, PostDetailRequest, postDetailAPI } from '../apis';

export const getPostDetailQueryKey = ({ postId }: PostDetailRequest) => [
  POSTS_DETAIL_PATH(postId),
];

export const useGetPostDetail = ({ postId }: PostDetailRequest) => {
  return useQuery({
    queryKey: getPostDetailQueryKey({ postId }),
    queryFn: () => postDetailAPI({ postId }),
  });
};
