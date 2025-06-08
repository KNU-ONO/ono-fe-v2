type Props = {
  productName: string;
};

export const ProductName = ({ productName }: Props) => {
  return (
    <div className='font-size-[17px] font-weight-[400] absolute top-[70px] left-[140px] text-[#000]'>
      {productName}
    </div>
  );
};
