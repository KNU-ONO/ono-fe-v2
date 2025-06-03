import { HttpResponse, http } from 'msw';

import { BASE_URL } from '@/shared';

import { POST_DETAIL_MOCK } from '../data';

export const postDetailHandler = [
  http.get(`${BASE_URL}/api/posts/:postId`, async ({ params }) => {
    const postId = Number(params.postId);
    const postDetail = POST_DETAIL_MOCK[postId];

    if (postDetail) {
      return HttpResponse.json(postDetail);
    }
    return HttpResponse.json({ message: 'Not found' }, { status: 404 });
  }),
];
