import { useState } from 'react';

import { BackButton, Menu, MenuButton } from '../../components';

type Props = {
  id?: string;
  postTitle?: string;
  postContent?: string;
};

export const CommunityDetailHeaderSection = ({
  id,
  postTitle,
  postContent,
}: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className='absolute top-[10px] flex h-[37px] w-[375px] items-center justify-between'>
      <BackButton />
      <h1
        className='absolute top-[5px] flex items-center font-semibold text-black'
        style={{
          left: 'calc(50% - 59px/2)',
        }}
      >
        커뮤니티
      </h1>
      <MenuButton setShowMenu={setShowMenu} showMenu={showMenu} />

      {/* 더보기 메뉴 */}
      {showMenu && (
        <Menu
          id={id}
          postTitle={postTitle}
          postContent={postContent}
          setShowMenu={setShowMenu}
        />
      )}
    </div>
  );
};
