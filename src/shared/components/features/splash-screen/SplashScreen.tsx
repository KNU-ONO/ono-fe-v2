import { useEffect, useState } from 'react';

import SplashScreenLogo from '@/shared/_assets/splash-screen/splash-image.webp';

type Props = {
  onComplete: () => void;
};

export const SplashScreen = ({ onComplete }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 8000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className='flex h-screen w-full justify-center bg-ono-red opacity-0 transition-opacity duration-300' />
    );
  }

  return (
    <div className='flex h-screen w-full items-center justify-center bg-ono-red transition-opacity duration-300'>
      <img
        src={SplashScreenLogo}
        alt='Splash'
        className='h-[200px] w-auto max-w-none'
      />
    </div>
  );
};
