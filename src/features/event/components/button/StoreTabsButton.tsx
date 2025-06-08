import { FranchiseName } from '@/shared';

type Props = {
  store: FranchiseName;
  activeStore: FranchiseName;
  setActiveStore: (store: FranchiseName) => void;
  index: number;
};

export const StoreTabsButton = ({
  store,
  activeStore,
  setActiveStore,
  index,
}: Props) => {
  return (
    <button
      key={store}
      onClick={() => setActiveStore(store)}
      className={`absolute h-[27px] cursor-pointer border-none bg-transparent text-base leading-[27px] text-black transition-all duration-200 hover:scale-105 active:scale-95 ${
        index === 0
          ? 'left-[49px]'
          : index === 1
            ? 'left-[calc(47%-21px)]'
            : 'left-[271px]'
      } ${
        store === 'CU' ? 'w-[32px]' : store === 'GS25' ? 'w-[64px]' : 'w-[96px]'
      } ${activeStore === store ? 'font-semibold' : 'font-normal'}`}
    >
      {store}
    </button>
  );
};
