import { FranchiseName } from '@/shared';

import { StoreTabsButton } from '../../components';

type Props = {
  activeStore: FranchiseName;
  setActiveStore: (store: FranchiseName) => void;
};

export const StoreTabsSection = ({ activeStore, setActiveStore }: Props) => {
  return (
    <>
      <div className='absolute top-[122px] h-[27px] w-[375px]'>
        {Object.values(FranchiseName).map((store, index) => (
          <StoreTabsButton
            key={store}
            store={store}
            activeStore={activeStore}
            setActiveStore={setActiveStore}
            index={index}
          />
        ))}
      </div>
      <div className='absolute top-[165px] w-[375px]'>
        <div className='absolute w-[375px] border-b border-[#DBDBDB]' />
        <div
          className={`absolute top-[-2px] h-[2px] w-[126px] bg-[#B81E22] ${activeStore === 'CU' ? 'left-[0px]' : activeStore === 'GS25' ? 'left-[calc(50% - 63px)]' : 'left-[calc(100% - 126px)]'}`}
        />
      </div>
    </>
  );
};
