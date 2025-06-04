type Props = {
  storeImage: string;
  storeName: string;
  storeAddress: string;
};

export const StoreInfoSection = ({
  storeImage,
  storeName,
  storeAddress,
}: Props) => {
  return (
    <>
      <div className='absolute top-[110px] left-0 h-[280px] w-[375px]'>
        <img
          src={storeImage}
          alt={storeName}
          className='h-full w-full object-cover'
        />
      </div>
      <div className='absolute top-[390px] left-0 w-[375px] p-5'>
        <h2 className='mb-2 text-2xl font-bold text-black'>{storeName}</h2>
        <p className='mb-2 text-base font-normal text-black'>{storeAddress}</p>
      </div>
    </>
  );
};
