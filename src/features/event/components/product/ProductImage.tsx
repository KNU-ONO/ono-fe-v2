import { BASE_URL } from '@/shared';

type Props = {
  productImageUrl: string;
  productName: string;
};

export const ProductImage = ({ productImageUrl, productName }: Props) => {
  return (
    <div className='absolute top-[30px] left-[27px] h-[100px] w-[100px] transition-transform duration-300 hover:scale-105'>
      <img
        src={`${BASE_URL}/${productImageUrl}`}
        alt={productName}
        className='object-contain'
      />
    </div>
  );
};
