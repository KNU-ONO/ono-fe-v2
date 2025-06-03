import { useQuery } from '@tanstack/react-query';

import { POSTS_PATH, getPostsAPI } from '../apis';

export const getPostsQueryKey = [POSTS_PATH];

export const useGetPosts = () => {
  return useQuery({
    queryKey: getPostsQueryKey,
    queryFn: () => getPostsAPI(),
  });
};
