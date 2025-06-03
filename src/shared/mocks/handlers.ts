import { getPostsHandler, postDetailHandler } from '@/features';

export const handlers = [...getPostsHandler, ...postDetailHandler];
