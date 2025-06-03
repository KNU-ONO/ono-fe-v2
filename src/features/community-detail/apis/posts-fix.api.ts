import { fetchInstance } from '@/shared';

import { PostFixRequest } from './posts-fix.type';

export const POST_FIX_PATH = (postId: number) => `/api/posts/${postId}`;

export const postFixAPI = async ({
  postId,
  title,
  content,
  password,
}: PostFixRequest) => {
  const response = await fetchInstance.put(POST_FIX_PATH(postId), {
    title,
    content,
    password,
  });

  return response.data;
};
