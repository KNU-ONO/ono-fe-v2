import { useNavigate } from 'react-router-dom';

import { getDynamicPath } from '@/shared';

import { HOT_POSTS_TOP_MOCK } from '../../mock';

export const HotPostListSection = () => {
  const navigate = useNavigate();

  return (
    <section className='flex w-full flex-col gap-3 pb-2'>
      {HOT_POSTS_TOP_MOCK.map((post) => (
        <div
          key={post.id}
          onClick={() =>
            navigate(getDynamicPath.communityDetail(post.id.toString()))
          }
          className='flex w-full cursor-pointer items-center gap-4 rounded-md bg-[#F6F6F6] px-4 py-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]'
        >
          {/* 순위 숫자 */}
          <div className='flex text-2xl font-semibold'>{post.rank}</div>

          {/* 텍스트 영역 */}
          <div className='flex flex-col gap-1'>
            {/* 제목 */}
            <div className='flex items-center text-sm font-semibold'>
              {post.title}
            </div>

            {/* 부제목 */}
            <div className='flex items-center text-xs font-medium text-gray-500'>
              {post.subtitle}
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
