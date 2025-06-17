export interface CommentParams {
  postId: number;
}

export interface CommentRequest {
  authorName: string;
  content: string;
  password: string;
}

export interface CommentResponse {
  commentId: number;
  authorName: string;
  content: string;
  createdAt: string;
}

export interface CommentDeleteParams extends CommentParams {
  commentId: number;
}
