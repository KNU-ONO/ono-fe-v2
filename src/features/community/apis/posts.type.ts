export interface GetPostsResponse {
  postId: number;
  title: string;
  content: string;
  authorName: string;
  createdAt: string;
  commentCount: number;
  likeCount: number;
  franchiseName: string;
  combination: string | null;
}
