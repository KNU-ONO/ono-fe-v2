import { BackButton } from '../../components';

export const ComboListHeaderSection = () => {
  return (
    <>
      <div className='absolute top-[58px] left-[9px] flex h-[37px] w-[37px]'>
        <BackButton />
      </div>
      <h1
        className='absolute top-[60px] flex h-[27px] w-[44px] items-center font-medium text-black'
        style={{ left: 'calc(50% - 44px/2 + 0.5px)' }}
      >
        꿀조합
      </h1>
    </>
  );
};
