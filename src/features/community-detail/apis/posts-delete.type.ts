export interface PostDeleteRequest {
  postId: number;
  password: string;
}

export interface PostDeleteResponse {
  message: string;
  postId: number;
}
