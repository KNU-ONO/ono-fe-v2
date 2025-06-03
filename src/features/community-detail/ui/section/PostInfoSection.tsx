import axios, { isAxiosError } from 'axios';
import { Heart, MessageCircle } from 'lucide-react';

type Props = {
  id?: string;
  likeCount?: number;
  commentCount?: number;
  isLiked: boolean;
  setIsLiked: (value: boolean) => void;
  isLikeProcessing: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
};

export const PostInfoSection = ({
  id,
  isLiked,
  setIsLiked,
  likeCount,
  commentCount,
  isLikeProcessing,
  inputRef,
}: Props) => {
  const handleCommentIcon = () => {
    inputRef?.current?.focus();
  };

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
    <>
      {/* 공감, 댓글 수 */}
      <div className='mb-4 flex items-center px-5'>
        <button
          className={`mr-6 flex items-center transition-all duration-300 ease-out active:scale-125 ${isLikeProcessing ? 'cursor-not-allowed opacity-50' : ''}`}
          onClick={toggleLike}
          disabled={isLikeProcessing}
        >
          <Heart
            className={`mr-1 h-4 w-4 transition-all duration-200 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-400'}`}
          />
          <span
            className={`text-sm transition-colors duration-200 ${isLiked ? 'text-[#B81E22]' : 'text-gray-500'}`}
          >
            공감 {likeCount}
          </span>
        </button>
        <button
          className='flex items-center transition-transform duration-300 ease-out active:scale-110'
          onClick={handleCommentIcon}
        >
          <MessageCircle className='mr-1 h-4 w-4 text-gray-400' />
          <span className='text-sm text-gray-500'>댓글 {commentCount}</span>
        </button>
      </div>
    </>
  );
};
