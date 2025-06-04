import { useNavigate } from 'react-router-dom';

import { Heart, MessageCircle, User } from 'lucide-react';

import { getDynamicPath } from '@/shared';

import { AddPostButton } from '../../components';
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
      <div className='flex-1 overflow-y-auto'>
        {filteredPosts.map((post) => (
          <div
            key={post.postId}
            className='relative h-[186.51px] w-full border-b border-gray-200 transition-colors hover:bg-gray-50'
            onClick={() =>
              navigate(getDynamicPath.communityDetail(String(post.postId)))
            }
          >
            <div className='absolute top-[18.83px] left-[18.34px] flex h-[38.34px] w-[37.7px] items-center justify-center rounded-full bg-gray-200'>
              <User className='h-5 w-5 text-gray-600' />
            </div>
            <div className='absolute top-[23.83px] left-[60.12px] text-[12px] font-semibold text-[#5C5C5C]'>
              {post.author_name}
            </div>
            <div className='absolute top-[65.28px] left-[23.44px] text-[14px] font-semibold text-black'>
              {post.title}
            </div>
            <div className='absolute top-[93.25px] left-[23.44px] text-[14px] font-normal text-black'>
              {post.content}
            </div>
            <div className='absolute top-[150.24px] left-[332px] text-[12px] font-semibold text-[#BFBFBF]'>
              {post.created_at}
            </div>
            <div className='absolute top-[144.03px] left-[23.44px] flex items-center space-x-2 text-sm text-gray-400'>
              <Heart className='h-4 w-4' />
              <span>{post.like_count}</span>
              <MessageCircle className='ml-2 h-4 w-4' />
              <span>{post.comment_count}</span>
            </div>
          </div>
        ))}
      </div>

      <AddPostButton />
    </>
  );
};
