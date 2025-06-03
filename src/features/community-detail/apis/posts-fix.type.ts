export interface PostFixRequest {
  postId: number;
  title: string;
  content: string;
  password: string;
}

export interface PostFixResponse {
  message: string;
  postId: number;
}
