import { Spinner } from '@/shared';

import { GetEventItemsResponse } from '../../apis';
import {
  ProductBadge,
  ProductImage,
  ProductName,
  ProductPrice,
} from '../../components';
import { useGetDiscountType, useGetEventItems } from '../../hooks';

type Props = {
  activeCategory: string;
};

export const ProductListSection = ({ activeCategory }: Props) => {
  const { data: eventItemsData, isLoading: isLoadingEventItems } =
    useGetEventItems({
      franchiseId: 1,
      discountType: useGetDiscountType(activeCategory),
    });

  return (
    <div className='flex w-full flex-col px-5 transition-all duration-500 ease-in-out'>
      {!eventItemsData || isLoadingEventItems ? (
        <div className='flex h-[calc(100vh-200px)] w-full items-center justify-center'>
          <Spinner />
        </div>
      ) : (
        eventItemsData?.map((product: GetEventItemsResponse) => (
          <div
            key={product.itemId}
            className='flex w-full animate-[slideIn_0.4s_ease-out_both] items-center border-b border-[#D3D3D3] bg-white transition-all duration-300 ease-in-out hover:bg-gray-50'
          >
            <div className='flex w-full items-center gap-5'>
              <ProductImage
                productImageUrl={product.imageUrl}
                productName={product.itemName}
              />
              <div className='flex w-full flex-col items-start gap-3'>
                <ProductBadge productDiscountType={product.discountType} />
                <ProductName productName={product.itemName} />
                <ProductPrice productPrice={product.price} />
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};
