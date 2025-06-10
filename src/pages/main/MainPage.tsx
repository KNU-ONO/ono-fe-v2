import { useState } from 'react';

import {
  BannerSection,
  HotPostListSection,
  HotPostTitleSection,
  MainMenuSection,
} from '@/features';
import { SplashScreen } from '@/shared';

export default function MainPage() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <>
      <div className='flex w-full flex-col bg-white px-5'>
        <HotPostTitleSection />
        <HotPostListSection />
        <MainMenuSection />
      </div>
      <BannerSection />
    </>
  );
}
