import { useTabUnderline } from '@/shared';

import { TabButton } from '../../components';
import { TAB_DATA } from '../../data';

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const ComboTabSection = ({ activeTab, setActiveTab }: Props) => {
  const { underlineStyle } = useTabUnderline({
    activeTab,
    tabData: TAB_DATA,
  });

  return (
    <div className='sticky top-14 z-40 flex h-full w-full border-b bg-white py-2'>
      {TAB_DATA.map((tab) => (
        <TabButton
          key={tab}
          tab={tab}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      ))}

      <div
        className='absolute bottom-[-1px] h-[2px] bg-ono-red-two transition-all duration-300 ease-in-out'
        style={underlineStyle}
      />
    </div>
  );
};
