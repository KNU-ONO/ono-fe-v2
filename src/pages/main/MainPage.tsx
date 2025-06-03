import { useState } from 'react';

import { BannerSection, HotPostSection, MainMenuSection } from '@/features';
import { SplashScreen } from '@/shared';

export default function MainPage() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className='relative mx-auto h-[812px] w-[375px] overflow-hidden bg-white'>
      <HotPostSection />
      <MainMenuSection />
      <BannerSection />
    </div>
  );
}
