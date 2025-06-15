import { useNavigate } from 'react-router-dom';

import { getDynamicPath } from '@/shared';

import { AddPostButton, Contents, Info, Profile } from '../../components';
import { useGetPosts } from '../../hooks';

type Props = {
  activeTab: string;
};

export const PostListSection = ({ activeTab }: Props) => {
  const navigate = useNavigate();

  const { data: postData } = useGetPosts();

  const filteredPosts = Array.isArray(postData)
    ? postData.filter((post) => {
        if (activeTab === '꿀조합') return post.combination !== null;
        if (activeTab === '일상글') return post.combination === null;
        return true;
      })
    : [];

  return (
    <>
      <div className='flex flex-col gap-5 p-3'>
        {filteredPosts.map((post) => (
          <div
            key={post.postId}
            className='w-full border-b border-gray-200 transition-colors last:border-0 hover:bg-gray-50'
            onClick={() =>
              navigate(getDynamicPath.communityDetail(String(post.postId)))
            }
          >
            <div className='flex flex-col gap-2 px-3 py-2'>
              <Profile authorName={post.authorName} />
              <Contents title={post.title} content={post.content} />
              <Info
                likeCount={post.likeCount}
                commentCount={post.commentCount}
                createdAt={post.createdAt}
              />
            </div>
          </div>
        ))}
      </div>

      <AddPostButton />
    </>
  );
};
