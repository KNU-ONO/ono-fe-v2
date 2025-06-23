import { DynamicImagePath } from '@/shared';

type Props = {
  productImageUrl: string;
  productName: string;
};

export const ProductImage = ({ productImageUrl, productName }: Props) => {
  return (
    <div className='flex size-50 items-center justify-center transition-transform duration-300 hover:scale-105'>
      <img
        src={DynamicImagePath(productImageUrl)}
        alt={productName}
        className='size-40 object-contain'
      />
    </div>
  );
};
