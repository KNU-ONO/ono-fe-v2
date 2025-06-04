import { PostDetailResponse } from '../../apis/posts-detail.type';

// 101 ~ 120까지 모두 대응되도록 배열로 생성
export const POST_DETAIL_MOCK: Record<number, PostDetailResponse> = {
  101: {
    postId: 101,
    title: '나트륨 적은 음식 없냐',
    content: '편의점 음식 중엔 거의 없을 듯...',
    authorName: '생각하는 반달곰',
    createdAt: '2025-05-21T13:00:00',
    commentCount: 3,
    likeCount: 1,
    franchiseName: 'GS25',
    combination: null,
    comments: [
      {
        commentId: 201,
        authorName: '짭짤러버',
        content: '진짜 너무 짜요 ㅠㅠ',
        createdAt: '2025-05-21T13:05:00',
      },
      {
        commentId: 202,
        authorName: '싱거운인생',
        content: '나트륨 적은거 찾으면 공유좀요!',
        createdAt: '2025-05-21T13:10:00',
      },
      {
        commentId: 203,
        authorName: '헬스킹',
        content: '건강 챙기려면 직접 만들어 먹는게 최고.',
        createdAt: '2025-05-21T13:15:00',
      },
    ],
  },
  102: {
    postId: 102,
    title: '편의점에서 가장 맛있는 도시락?',
    content: '개인적으로는 GS25 돈까스 도시락이 제일 맛있더라구요.',
    authorName: '푸른하늘',
    createdAt: '2025-05-21T14:15:00',
    commentCount: 5,
    likeCount: 7,
    franchiseName: 'CU',
    combination: null,
    comments: [
      {
        commentId: 204,
        authorName: '댓글요정',
        content: 'GS25 돈까스 도시락 저도 좋아해요!',
        createdAt: '2025-05-21T14:20:00',
      },
      {
        commentId: 205,
        authorName: '맛집러버',
        content: 'CU 도시락도 괜찮은데!',
        createdAt: '2025-05-21T14:25:00',
      },
      {
        commentId: 206,
        authorName: '편의점러',
        content: '맞아 GS25 돈까스 존맛탱',
        createdAt: '2025-05-21T14:30:00',
      },
      {
        commentId: 207,
        authorName: '도시락왕',
        content: 'GS25 도시락 칼로리 괜찮나요?',
        createdAt: '2025-05-21T14:35:00',
      },
      {
        commentId: 208,
        authorName: '푸른하늘',
        content: '칼로리 꽤 낮더라구요!',
        createdAt: '2025-05-21T14:40:00',
      },
    ],
  },
  103: {
    postId: 103,
    title: '야근할 때 먹기 좋은 간편식 추천좀',
    content: '야근할 때 든든한거 뭐 없을까?',
    authorName: '야근요정',
    createdAt: '2025-05-21T15:30:00',
    commentCount: 2,
    likeCount: 3,
    franchiseName: '세븐일레븐',
    combination: null,
    comments: [
      {
        commentId: 209,
        authorName: '직장인',
        content: '저는 삼각김밥에 컵라면이 진리입니다.',
        createdAt: '2025-05-21T15:35:00',
      },
      {
        commentId: 210,
        authorName: '야근러버',
        content: '그냥 편의점 도시락에 컵커피요!',
        createdAt: '2025-05-21T15:40:00',
      },
    ],
  },
};
