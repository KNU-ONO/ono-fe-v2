import { FranchiseName, useTabUnderline } from '@/shared';

import { StoreTabsButton } from '../../components';

type Props = {
  activeStore: FranchiseName;
  setActiveStore: (store: FranchiseName) => void;
};

export const StoreTabsSection = ({ activeStore, setActiveStore }: Props) => {
  const { underlineStyle } = useTabUnderline({
    activeTab: activeStore,
    tabData: Object.values(FranchiseName),
  });

  return (
    <div className='w-full'>
      <div className='sticky top-14 z-40 flex h-full w-full border-b bg-white py-2'>
        {Object.values(FranchiseName).map((store) => (
          <StoreTabsButton
            key={store}
            store={store}
            activeStore={activeStore}
            setActiveStore={setActiveStore}
          />
        ))}
        <div
          className='absolute bottom-[-1px] h-[2px] bg-ono-red-two transition-all duration-300 ease-in-out'
          style={underlineStyle}
        />
      </div>
    </div>
  );
};
