export interface CreatePostRequest {
  title: string;
  content: string;
  authorName: string;
  password: string;
  combinationId: number;
  franchiseId: number;
  postType: string;
}
