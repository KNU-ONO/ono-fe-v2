import { MenuButton } from '../../components';
import { BUTTON_DATA } from '../../data';

export const MainMenuSection = () => {
  return (
    <div className='mx-auto grid max-w-[350px] grid-cols-2 justify-center gap-6 py-5'>
      {BUTTON_DATA.map((button) => (
        <MenuButton
          key={button.id}
          id={button.id}
          path={button.path}
          icon={button.icon}
          alt={button.alt}
        />
      ))}
    </div>
  );
};
