import { Button } from '@/shared';

type Props = {
  tab: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

export const TabButton = ({ tab, activeTab, setActiveTab }: Props) => {
  return (
    <Button
      variant='ghost'
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`flex-1 ${activeTab === tab ? 'font-bold' : 'font-normal'} hover:bg-white hover:font-bold`}
    >
      {tab}
    </Button>
  );
};
