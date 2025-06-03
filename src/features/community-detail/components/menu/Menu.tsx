import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import {
  PostDeleteRequest,
  PostFixRequest,
  postDeleteAPI,
  postFixAPI,
} from '../../apis';

type Props = {
  setShowMenu: (show: boolean) => void;
  postTitle?: string;
  postContent?: string;
  id?: string;
};

export const Menu = ({ setShowMenu, postTitle, postContent, id }: Props) => {
  const navigate = useNavigate();

  const { mutate: postFixMutate } = useMutation({
    mutationFn: (data: PostFixRequest) => postFixAPI(data),
    onSuccess: () => {
      alert('게시글이 수정되었습니다.');
      setShowMenu(false);
    },
    onError: (error) => {
      console.error('게시글 수정 실패:', error);
      alert('게시글 수정에 실패했습니다.');
    },
  });

  const { mutate: postDeleteMutate } = useMutation({
    mutationFn: (data: PostDeleteRequest) => postDeleteAPI(data),
    onSuccess: () => {
      alert('게시글이 삭제되었습니다.');
      setShowMenu(false);
      navigate(-1);
    },
    onError: (error) => {
      console.error('게시글 삭제 실패:', error);
      alert('게시글 삭제에 실패했습니다.');
    },
  });

  // 게시글 수정 API
  const onEditPost = async () => {
    const title = prompt('새로운 제목을 입력하세요:', postTitle || '');
    if (!title) return;

    const content = prompt('새로운 내용을 입력하세요:', postContent || '');
    if (!content) return;

    const password = prompt('비밀번호를 입력하세요:');
    if (!password) return;

    postFixMutate({
      postId: Number(id),
      title,
      content,
      password,
    });
  };

  // 게시글 삭제 API
  const onDeletePost = async () => {
    const password = prompt('게시글 삭제를 위해 비밀번호를 입력하세요:');
    if (!password) return;

    if (!confirm('정말로 이 게시글을 삭제하시겠습니까?')) return;

    postDeleteMutate({
      postId: Number(id),
      password,
    });
  };

  return (
    <div className='absolute top-12 right-2 z-50 min-w-[120px] rounded-lg border border-gray-200 bg-white shadow-lg'>
      <button
        onClick={onEditPost}
        className='w-full border-b border-gray-100 px-4 py-3 text-left text-sm text-black hover:bg-gray-50'
      >
        게시글 수정
      </button>
      <button
        onClick={onDeletePost}
        className='w-full px-4 py-3 text-left text-sm text-red-500 hover:bg-gray-50'
      >
        게시글 삭제
      </button>
    </div>
  );
};
