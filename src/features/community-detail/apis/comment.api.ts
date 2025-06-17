import { fetchInstance } from '@/shared';

import {
  CommentDeleteParams,
  CommentParams,
  CommentRequest,
  CommentResponse,
} from './comment.type';

export const COMMENT_PATH = (postId: number) => `/api/posts/${postId}/comments`;

export const getCommentAPI = async ({ postId }: CommentParams) => {
  const response = await fetchInstance.get<CommentResponse>(
    COMMENT_PATH(postId),
  );
  return response.data;
};

export const addCommentAPI = async ({
  postId,
  authorName,
  content,
  password,
}: CommentRequest & CommentParams) => {
  const response = await fetchInstance.post(COMMENT_PATH(postId), {
    authorName,
    content,
    password,
  });
  return response.data;
};

const COMMENT_DELETE_PATH = (postId: number, commentId: number) =>
  `${COMMENT_PATH(postId)}/${commentId}`;

export const deleteCommentAPI = async ({
  postId,
  commentId,
}: CommentDeleteParams) => {
  const response = await fetchInstance.delete(
    COMMENT_DELETE_PATH(postId, commentId),
  );
  return response.data;
};
