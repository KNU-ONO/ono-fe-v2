import { useState } from 'react';

import {
  ComboTabSection,
  CommunityHeaderSection,
  PostListSection,
} from '@/features';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('인기글');

  return (
    <div className='mx-auto flex h-[812px] w-[375px] flex-col bg-white'>
      <CommunityHeaderSection />
      <ComboTabSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <PostListSection activeTab={activeTab} />
    </div>
  );
}
