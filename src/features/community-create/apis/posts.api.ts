import { fetchInstance } from '@/shared';

import { CreatePostRequest } from './posts.type';

export const CREATE_POSTS_PATH = '/api/posts';

export const createPostAPI = async ({
  title,
  content,
  authorName,
  password,
  combinationId,
  franchiseId,
  postType,
}: CreatePostRequest) => {
  const response = await fetchInstance.post(CREATE_POSTS_PATH, {
    title,
    content,
    authorName,
    password,
    combinationId,
    franchiseId,
    postType,
  });
  return response.data;
};
