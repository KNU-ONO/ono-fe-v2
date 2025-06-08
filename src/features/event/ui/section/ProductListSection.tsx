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

  if (!eventItemsData || isLoadingEventItems) return <div>Loading...</div>;

  return (
    <div className='absolute top-[210px] h-[602px] w-[375px] overflow-y-auto'>
      <div className='transition-all duration-500 ease-in-out'>
        {eventItemsData.map((product: GetEventItemsResponse, index: number) => (
          <div
            key={product.itemId}
            className='relative h-[150.5px] w-[375px] animate-[slideIn_0.4s_ease-out_both] bg-white transition-all duration-300 ease-in-out hover:bg-gray-50'
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <ProductImage
              productImageUrl={product.imageUrl}
              productName={product.itemName}
            />
            <ProductBadge productDiscountType={product.discountType} />
            <ProductName productName={product.itemName} />
            <ProductPrice productPrice={product.price} />
            {index < eventItemsData.length - 1 && (
              <div
                className='absolute top-[150px] w-[320px] border-b border-[#D3D3D3]'
                style={{
                  left: 'calc(50% - 160px)',
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
