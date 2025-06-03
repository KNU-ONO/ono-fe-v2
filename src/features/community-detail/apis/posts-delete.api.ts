import { fetchInstance } from '@/shared';

import { PostDeleteRequest } from './posts-delete.type';

export const POST_DELETE_PATH = (postId: number) => `/api/posts/${postId}`;

export const postDeleteAPI = async ({
  postId,
  password,
}: PostDeleteRequest) => {
  const response = await fetchInstance.delete(POST_DELETE_PATH(postId), {
    data: { password },
  });

  return response.data;
};
