import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/shared';

import { POSTS_PATH } from '../../apis';
import { POST_MOCK } from '../data';

export const getPostsHandler = [
  http.get(`${BASE_URL}${POSTS_PATH}`, async () => {
    return HttpResponse.json(POST_MOCK);
  }),
];
