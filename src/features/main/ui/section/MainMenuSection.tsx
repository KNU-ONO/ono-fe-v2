import { MenuButton } from '../../components';
import { BUTTON_DATA } from '../../data';

export const MainMenuSection = () => {
  return (
    <div className='relative'>
      {BUTTON_DATA.map((button) => (
        <MenuButton
          key={button.id}
          id={button.id}
          top={button.top}
          left={button.left}
          path={button.path}
          icon={button.icon}
          alt={button.alt}
        />
      ))}
    </div>
  );
};
