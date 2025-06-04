export type Comment = {
  commentId: number;
  authorName: string;
  content: string;
  createdAt: string;
};

export type Combination = {
  combinationId: number;
  title: string;
  description: string;
} | null;

export interface PostDetailResponse {
  postId: number;
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
  commentCount: number;
  likeCount: number;
  franchiseName: string;
  combination: Combination;
  comments: Comment[];
}

export interface PostDetailRequest {
  postId: number;
}
