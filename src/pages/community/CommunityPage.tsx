import { useState } from 'react';

import { HeaderSection, PostListSection, TabSection } from '@/features';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('인기글');

  return (
    <div className='mx-auto flex h-[812px] w-[375px] flex-col bg-white'>
      <HeaderSection />
      <TabSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <PostListSection activeTab={activeTab} />
    </div>
  );
}
