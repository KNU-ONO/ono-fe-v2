import axios, { isAxiosError } from 'axios';
import { Bookmark, Heart, MessageCircle } from 'lucide-react';

type Props = {
  id?: string;
  likeCount?: number;
  commentCount?: number;
  isLiked: boolean;
  setIsLiked: (value: boolean) => void;
  isLikeProcessing: boolean;
};

export const PostInfoSection = ({
  id,
  isLiked,
  setIsLiked,
  likeCount,
  commentCount,
  isLikeProcessing,
}: Props) => {
  const toggleLike = async () => {
    if (isLikeProcessing) return; // 중복 요청 방지

    // 낙관적 업데이트 (사용자 경험 향상)
    const prevIsLiked = isLiked;

    try {
      if (isLiked) {
        // UI 먼저 업데이트
        setIsLiked(false);

        // 좋아요 취소 API 호출
        await axios.delete(`http://localhost:8080/api/posts/${id}/like`);
        console.log('좋아요 취소 성공');
      } else {
        // UI 먼저 업데이트
        setIsLiked(true);

        // 좋아요 등록 API 호출
        await axios.post(`http://localhost:8080/api/posts/${id}/like`);
        console.log('좋아요 등록 성공');
      }
    } catch (error) {
      // 실패 시 이전 상태로 롤백
      setIsLiked(prevIsLiked);

      console.error('좋아요 처리 실패:', error);

      // 에러 타입에 따른 상세한 메시지 제공
      if (isAxiosError(error)) {
        if (error.response?.status === 401) {
          alert('로그인이 필요합니다.');
        } else if (error.response?.status === 404) {
          alert('게시글을 찾을 수 없습니다.');
        } else if ((error.response?.status ?? 0) >= 500) {
          alert('서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
        } else {
          alert(
            error.response?.data?.message ||
              '좋아요 처리 중 오류가 발생했습니다.',
          );
        }
      } else {
        alert('네트워크 오류가 발생했습니다. 인터넷 연결을 확인해주세요.');
      }
    }
  };
  return (
    <div className='flex w-full items-center justify-between gap-3 border-t border-b border-gray-200 px-5 py-3'>
      <div className='flex items-center gap-2'>
        <Heart
          onClick={toggleLike}
          className={`size-4 cursor-pointer transition-all duration-200 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
        />
        <span
          className={`text-sm transition-colors duration-200 ${isLiked ? 'text-black' : 'text-gray-500'}`}
        >
          공감 {likeCount}
        </span>
      </div>
      <div className='flex items-center gap-1 transition-transform duration-300 ease-out active:scale-110'>
        <MessageCircle className='size-4 text-gray-400' />
        <span className='text-sm text-gray-500'>댓글 {commentCount}</span>
      </div>
      <div className='flex cursor-pointer items-center gap-2'>
        <Bookmark className='size-4 fill-gray-400 text-gray-400' />
        <span className='text-sm text-gray-500'>북마크</span>
      </div>
    </div>
  );
};
