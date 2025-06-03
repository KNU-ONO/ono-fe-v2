export interface GetPostsResponse {
  post_id: number;
  title: string;
  content: string;
  author_name: string;
  created_at: string;
  comment_count: number;
  like_count: number;
  franchise_name: string;
  combination: string | null;
}
