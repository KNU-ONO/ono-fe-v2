import { fetchInstance } from '@/shared';

import { LikeParams, LikeResponse } from './like.type';

export const LIKE_PATH = (postId: number) => `/api/posts/${postId}/like`;

export const likeAPI = async ({ postId }: LikeParams) => {
  const response = await fetchInstance.post<LikeResponse>(LIKE_PATH(postId));
  return response.data;
};
