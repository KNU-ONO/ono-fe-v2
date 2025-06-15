import { TabButton } from '../../components';
import { TAB_DATA } from '../../data';

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const ComboTabSection = ({ activeTab, setActiveTab }: Props) => {
  const activeTabIndex = TAB_DATA.findIndex((tab) => tab === activeTab);
  const tabCount = TAB_DATA.length;

  const underlineStyle = {
    width: `${100 / tabCount}%`,
    transform: `translateX(${activeTabIndex * 100}%)`,
  };

  return (
    <div className='relative flex h-full w-full border-b py-2'>
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
