import { useEffect, useState } from 'react';

type Props = {
  onComplete: () => void;
};

export const SplashScreen = ({ onComplete }: Props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 300);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className='fixed inset-0 z-50 opacity-0 transition-opacity duration-300' />
    );
  }

  return (
    <div className='fixed inset-0 z-50 bg-[#b91c1c] transition-opacity duration-300'>
      {/* 화면 중앙 정렬, iPhone 375x812 기준 */}
      <img
        src='/images/main%201.png'
        alt='Splash'
        className='absolute top-1/2 left-1/2 h-[812px] w-[375px] max-w-none -translate-x-1/2 -translate-y-1/2'
      />
    </div>
  );
};
