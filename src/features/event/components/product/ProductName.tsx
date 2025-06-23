type Props = {
  productName: string;
};

export const ProductName = ({ productName }: Props) => {
  return <div className='text-md font-medium'>{productName}</div>;
};
