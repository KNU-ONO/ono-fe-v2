import { MoreHorizontal } from 'lucide-react';

type Props = {
  setShowMenu: (show: boolean) => void;
  showMenu: boolean;
};

export const MenuButton = ({ setShowMenu, showMenu }: Props) => {
  return (
    <button
      onClick={() => setShowMenu(!showMenu)}
      className='absolute top-[0px] right-[9px] h-[37px] w-[37px]'
    >
      <MoreHorizontal className='h-6 w-6 text-black' />
    </button>
  );
};
