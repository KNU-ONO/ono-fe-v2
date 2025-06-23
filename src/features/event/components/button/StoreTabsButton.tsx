import { Button, FranchiseName } from '@/shared';

type Props = {
  store: FranchiseName;
  activeStore: FranchiseName;
  setActiveStore: (store: FranchiseName) => void;
};

export const StoreTabsButton = ({
  store,
  activeStore,
  setActiveStore,
}: Props) => {
  return (
    <Button
      variant='ghost'
      key={store}
      onClick={() => setActiveStore(store)}
      className={`flex-1 ${activeStore === store ? 'font-bold' : 'font-normal'} hover:bg-white hover:font-bold`}
    >
      {store}
    </Button>
  );
};
