import { fetchInstance } from '@/shared';

import { PostDetailRequest, PostDetailResponse } from './posts-detail.type';

export const POSTS_DETAIL_PATH = (postId: number) => `/api/posts/${postId}`;

export const postDetailAPI = async ({ postId }: PostDetailRequest) => {
  const response = await fetchInstance.get<PostDetailResponse>(
    POSTS_DETAIL_PATH(postId),
  );
  return response.data;
};
