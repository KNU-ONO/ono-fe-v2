import { TAB_DATA } from '../../data';

type Props = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const TabSection = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className='relative h-[43px]'>
      {TAB_DATA.map((tab, i) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className='absolute top-0 h-[27px] w-[44px] text-[15px] leading-[27px] font-medium text-black'
          style={{
            left:
              i === 0 ? '40px' : i === 1 ? 'calc(50% - 22px - 1.5px)' : '289px',
            fontWeight: activeTab === tab ? 600 : 400,
          }}
        >
          {tab}
        </button>
      ))}
      <div className='absolute top-[36px] w-full border-b border-[#DBDBDB]' />
      <div
        className='absolute top-[34px] h-[2px] w-[126px] bg-[#B81E22] transition-all duration-500 ease-in-out'
        style={{
          left:
            activeTab === '인기글'
              ? '0px'
              : activeTab === '꿀조합'
                ? 'calc(50% - 63px)'
                : 'calc(100% - 126px)',
        }}
      />
    </div>
  );
};
