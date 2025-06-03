export type Comment = {
  comment_id: number;
  author_name: string;
  content: string;
  created_at: string;
};

export type Combination = {
  combination_id: number;
  title: string;
  description: string;
} | null;

export interface PostDetailResponse {
  post_id: number;
  title: string;
  content: string;
  author_name: string;
  created_at: string;
  comment_count: number;
  like_count: number;
  franchise_name: string;
  combination: Combination;
  comments: Comment[];
}

export interface PostDetailRequest {
  postId: number;
}
