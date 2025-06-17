import { z } from 'zod';

export const WriteCommentSchema = z.object({
  authorName: z.string().optional(),
  content: z.string().min(1, '댓글을 입력해주세요'),
  password: z.string().min(1, '비밀번호를 입력해주세요'),
});

export type WriteComment = z.infer<typeof WriteCommentSchema>;
