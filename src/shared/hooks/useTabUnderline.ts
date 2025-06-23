import { useMemo } from 'react';

type UseTabUnderlineParams<T> = {
  activeTab: T;
  tabData: T[];
};

type UseTabUnderlineReturn = {
  activeTabIndex: number;
  tabCount: number;
  underlineStyle: {
    width: string;
    transform: string;
  };
};

export const useTabUnderline = <T>({
  activeTab,
  tabData,
}: UseTabUnderlineParams<T>): UseTabUnderlineReturn => {
  const underlineData = useMemo(() => {
    const activeTabIndex = tabData.findIndex((tab) => tab === activeTab);
    const tabCount = tabData.length;

    const underlineStyle = {
      width: `${100 / tabCount}%`,
      transform: `translateX(${activeTabIndex * 100}%)`,
    };

    return {
      activeTabIndex,
      tabCount,
      underlineStyle,
    };
  }, [activeTab, tabData]);

  return underlineData;
};
