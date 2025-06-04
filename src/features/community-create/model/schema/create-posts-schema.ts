import { z } from 'zod';

export const CreatePostsSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요'),
  content: z.string().min(1, '내용을 입력해주세요'),
  authorName: z.string().optional(),
  password: z.string().min(1, '비밀번호를 입력해주세요'),
  combinationId: z.number().optional(),
  franchiseId: z.number().optional(),
});

export type CreatePosts = z.infer<typeof CreatePostsSchema>;
