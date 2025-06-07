import { CATEGORY_BUTTON_DATA } from '../../data';

type Props = {
  setSelectedTagName: (tagName: string) => void;
};

export const CategoryButtonSection = ({ setSelectedTagName }: Props) => {
  const onClick = (category: string) => {
    setSelectedTagName(category);
  };

  return (
    <>
      {CATEGORY_BUTTON_DATA.map((category) => (
        <button
          key={category.name}
          className='absolute top-[111px] h-20 w-20 transition-all duration-200 hover:scale-105 active:scale-95'
          style={{
            left: `${category.left}px`,
          }}
          onClick={() => onClick(category.name)}
        >
          <div className='relative h-full w-full rounded-lg bg-gray-100'>
            <img
              src={category.icon}
              alt={category.name}
              className='rounded-lg object-contain'
            />
          </div>
        </button>
      ))}
    </>
  );
};
