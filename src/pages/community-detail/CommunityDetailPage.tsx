import { useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetPostDetail } from '@/features/community-detail/hooks';
import axios from 'axios';
import { Send } from 'lucide-react';

import {
  CommentListSection,
  CommunityDetailHeaderSection,
  ContentsSection,
  PostInfoSection,
} from '@/features';

export default function CommunityDetailPage() {
  const { id } = useParams();

  const { data: postDetailData } = useGetPostDetail({ postId: Number(id) });

  const [isLiked, setIsLiked] = useState(false);
  const [newComment, setNewComment] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  // 댓글 작성 API 호출
  const addComment = async () => {
    if (newComment.trim() === '' || newPassword.trim() === '' || isSubmitting)
      return;

    setIsSubmitting(true);

    try {
      const response = await axios.post(
        `http://localhost:8080/api/posts/${id}/comments`,
        {
          authorName: '익명',
          content: newComment,
          password: newPassword,
        },
      );

      // 입력창 초기화
      setNewComment('');
      setNewPassword('');

      alert(response.data.message || '댓글이 등록되었습니다.');
    } catch (error) {
      console.error('댓글 작성 실패:', error);
      alert('댓글 작성에 실패했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 댓글 삭제 API 호출
  const deleteComment = async (commentId: number) => {
    const password = prompt('댓글 삭제를 위해 비밀번호를 입력하세요');
    if (!password) return;

    try {
      const response = await axios.delete(
        `http://localhost:8080/api/posts/${id}/comments/${commentId}`,
        {
          data: { password },
        },
      );

      alert('댓글이 삭제되었습니다.');
      console.log('댓글 삭제 성공:', response.data);
    } catch (error) {
      console.error('댓글 삭제 실패:', error);
      alert('비밀번호가 일치하지 않거나 삭제에 실패했습니다.');
    }
  };

  return (
    <div className='relative mx-auto h-[812px] w-[375px] bg-white'>
      {/* Header */}
      <CommunityDetailHeaderSection
        id={id}
        postTitle={postDetailData?.title}
        postContent={postDetailData?.content}
      />

      {/* Scrollable Content */}
      <div className='absolute top-[66px] h-[686px] w-[375px] overflow-y-auto pb-[100px]'>
        {postDetailData ? (
          <>
            {/* 게시글 본문 */}
            <ContentsSection
              authorName={postDetailData.authorName}
              title={postDetailData.title}
              content={postDetailData.content}
            />

            <PostInfoSection
              id={id}
              isLiked={isLiked}
              setIsLiked={setIsLiked}
              likeCount={postDetailData?.likeCount}
              commentCount={postDetailData?.commentCount}
              isLikeProcessing={false}
            />
            {/* 배너 */}
            <div className='relative mx-5 mb-6 h-[120px] overflow-hidden rounded-xl'>
              <img
                src='/images/banner_image3.png'
                alt='배너'
                className='object-cover'
              />
            </div>

            {/* 댓글 목록 */}
            <CommentListSection
              comments={postDetailData?.comments}
              deleteComment={deleteComment}
            />
          </>
        ) : (
          <div className='py-10 text-center text-sm text-gray-400'>
            불러오는 중...
          </div>
        )}
      </div>

      {/* 댓글 입력창 */}
      <div className='fixed bottom-0 left-1/2 z-50 flex w-[calc(100%-32px)] max-w-[375px] -translate-x-1/2 flex-col gap-2 border-t border-gray-200 bg-white px-4 py-2'>
        <input
          ref={inputRef}
          type='text'
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder='댓글을 입력하세요...'
          className='w-full rounded-full border border-gray-300 px-3 py-2 text-sm outline-none'
          onKeyDown={(e) => e.key === 'Enter' && !isSubmitting && addComment()}
          disabled={isSubmitting}
        />
        <input
          type='password'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          placeholder='비밀번호 설정'
          className='w-full rounded-full border border-gray-300 px-3 py-2 text-sm outline-none'
          onKeyDown={(e) => e.key === 'Enter' && !isSubmitting && addComment()}
          disabled={isSubmitting}
        />
        <button
          onClick={addComment}
          disabled={isSubmitting}
          className={`h-9 w-9 self-end ${isSubmitting ? 'bg-gray-400' : 'bg-[#B81E22]'} flex items-center justify-center rounded-full text-white`}
        >
          <Send className='h-4 w-4' />
        </button>
      </div>
    </div>
  );
}
