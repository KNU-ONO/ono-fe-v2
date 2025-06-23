type Props = {
  productPrice: number;
};

export const ProductPrice = ({ productPrice }: Props) => {
  return (
    <div className='text-lg font-semibold'>
      {productPrice.toLocaleString()} 원
    </div>
  );
};
