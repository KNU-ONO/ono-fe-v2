import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { useGetPostDetail } from '@/features/community-detail/hooks';

import {
  CommentForm,
  CommentListSection,
  ContentsDetailSection,
  PostInfoSection,
} from '@/features';

export default function CommunityDetailPage() {
  const { id } = useParams();

  const { data: postDetailData } = useGetPostDetail({ postId: Number(id) });

  const [isLiked, setIsLiked] = useState(false);

  if (!postDetailData) return <div>작성된 글이 없습니다.</div>;

  return (
    <div className='flex w-full flex-col gap-5'>
      <ContentsDetailSection
        authorName={postDetailData?.authorName}
        title={postDetailData?.title}
        content={postDetailData?.content}
        createdAt={postDetailData?.createdAt}
      />
      <PostInfoSection
        id={id}
        isLiked={isLiked}
        setIsLiked={setIsLiked}
        likeCount={postDetailData?.likeCount}
        commentCount={postDetailData?.commentCount}
        isLikeProcessing={false}
      />
      <CommentListSection
        comments={postDetailData?.comments}
        deleteComment={() => {}}
      />
      <CommentForm />
      {/* 댓글 입력창 */}
      {/* <div className='fixed bottom-0 left-1/2 z-50 flex w-full -translate-x-1/2 flex-col gap-2 border-t border-gray-200 bg-white px-4 py-2'>
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
      </div> */}
    </div>
  );
}
