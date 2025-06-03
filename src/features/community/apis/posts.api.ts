import { fetchInstance } from '@/shared';

import { GetPostsResponse } from './posts.type';

export const POSTS_PATH = '/api/posts';

export const getPostsAPI = async () => {
  const response = await fetchInstance.get<GetPostsResponse>(POSTS_PATH);
  return response.data;
};
