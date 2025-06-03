import { useNavigate } from 'react-router-dom';

type Props = {
  id: number;
  top: number;
  left: number;
  path: string;
  icon: string;
  alt: string;
};

export const MenuButton = ({ id, top, left, path, icon, alt }: Props) => {
  const navigate = useNavigate();

  return (
    <button
      key={id}
      onClick={() => navigate(path)}
      className='absolute h-[158px] w-[146px] transition-all duration-200 hover:scale-105 active:scale-95'
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <img src={icon} alt={alt} className='h-full w-full object-contain' />
    </button>
  );
};
