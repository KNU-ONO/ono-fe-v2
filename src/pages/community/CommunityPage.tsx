import { useState } from 'react';

import { ComboTabSection, PostListSection } from '@/features';

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('인기글');

  return (
    <div className='flex w-full flex-col bg-white'>
      <ComboTabSection activeTab={activeTab} setActiveTab={setActiveTab} />
      <PostListSection activeTab={activeTab} />
    </div>
  );
}
