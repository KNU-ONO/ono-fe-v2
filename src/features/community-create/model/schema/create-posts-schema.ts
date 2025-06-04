import { z } from 'zod';

export const CreatePostsSchema = z.object({
  title: z.string().min(1, '제목을 입력해주세요'),
  content: z.string().min(1, '내용을 입력해주세요'),
  author_name: z.string().optional(),
  password: z.string().min(1, '비밀번호를 입력해주세요'),
  combination_id: z.number().optional(),
  franchise_id: z.number().optional(),
});

export type CreatePosts = z.infer<typeof CreatePostsSchema>;
