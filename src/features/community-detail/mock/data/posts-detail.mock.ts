import { PostDetailResponse } from '../../apis/posts-detail.type';

// 101 ~ 120까지 모두 대응되도록 배열로 생성
export const POST_DETAIL_MOCK: Record<number, PostDetailResponse> = {
  101: {
    post_id: 101,
    title: '나트륨 적은 음식 없냐',
    content: '편의점 음식 중엔 거의 없을 듯...',
    author_name: '생각하는 반달곰',
    created_at: '2025-05-21T13:00:00',
    comment_count: 3,
    like_count: 1,
    franchise_name: 'GS25',
    combination: null,
    comments: [
      {
        comment_id: 201,
        author_name: '짭짤러버',
        content: '진짜 너무 짜요 ㅠㅠ',
        created_at: '2025-05-21T13:05:00',
      },
      {
        comment_id: 202,
        author_name: '싱거운인생',
        content: '나트륨 적은거 찾으면 공유좀요!',
        created_at: '2025-05-21T13:10:00',
      },
      {
        comment_id: 203,
        author_name: '헬스킹',
        content: '건강 챙기려면 직접 만들어 먹는게 최고.',
        created_at: '2025-05-21T13:15:00',
      },
    ],
  },
  102: {
    post_id: 102,
    title: '편의점에서 가장 맛있는 도시락?',
    content: '개인적으로는 GS25 돈까스 도시락이 제일 맛있더라구요.',
    author_name: '푸른하늘',
    created_at: '2025-05-21T14:15:00',
    comment_count: 5,
    like_count: 7,
    franchise_name: 'CU',
    combination: null,
    comments: [
      {
        comment_id: 204,
        author_name: '댓글요정',
        content: 'GS25 돈까스 도시락 저도 좋아해요!',
        created_at: '2025-05-21T14:20:00',
      },
      {
        comment_id: 205,
        author_name: '맛집러버',
        content: 'CU 도시락도 괜찮은데!',
        created_at: '2025-05-21T14:25:00',
      },
      {
        comment_id: 206,
        author_name: '편의점러',
        content: '맞아 GS25 돈까스 존맛탱',
        created_at: '2025-05-21T14:30:00',
      },
      {
        comment_id: 207,
        author_name: '도시락왕',
        content: 'GS25 도시락 칼로리 괜찮나요?',
        created_at: '2025-05-21T14:35:00',
      },
      {
        comment_id: 208,
        author_name: '푸른하늘',
        content: '칼로리 꽤 낮더라구요!',
        created_at: '2025-05-21T14:40:00',
      },
    ],
  },
  103: {
    post_id: 103,
    title: '야근할 때 먹기 좋은 간편식 추천좀',
    content: '야근할 때 든든한거 뭐 없을까?',
    author_name: '야근요정',
    created_at: '2025-05-21T15:30:00',
    comment_count: 2,
    like_count: 3,
    franchise_name: '세븐일레븐',
    combination: null,
    comments: [
      {
        comment_id: 209,
        author_name: '직장인',
        content: '저는 삼각김밥에 컵라면이 진리입니다.',
        created_at: '2025-05-21T15:35:00',
      },
      {
        comment_id: 210,
        author_name: '야근러버',
        content: '그냥 편의점 도시락에 컵커피요!',
        created_at: '2025-05-21T15:40:00',
      },
    ],
  },
};
