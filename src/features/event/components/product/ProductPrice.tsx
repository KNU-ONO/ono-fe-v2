type Props = {
  productPrice: number;
};

export const ProductPrice = ({ productPrice }: Props) => {
  return (
    <div className='font-size-[19px] font-weight-[600] absolute top-[100px] left-[140px] text-[#000]'>
      {productPrice.toLocaleString()} 원
    </div>
  );
};
