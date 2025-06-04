import { fetchInstance } from '@/shared';

import { CreatePostRequest } from './posts.type';

export const CREATE_POSTS_PATH = '/api/posts';

export const createPostAPI = async ({
  title,
  content,
  author_name,
  password,
  combination_id,
  franchiseId,
}: CreatePostRequest) => {
  const response = await fetchInstance.post(CREATE_POSTS_PATH, {
    title,
    content,
    author_name,
    password,
    combination_id,
    franchiseId,
  });
  return response.data;
};
