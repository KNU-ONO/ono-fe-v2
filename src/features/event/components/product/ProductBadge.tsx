type Props = {
  productDiscountType: string;
};

export const ProductBadge = ({ productDiscountType }: Props) => {
  const getBackgroundColor = () => {
    return productDiscountType === 'ONEPLUS' ? 'bg-ono-red' : 'bg-[#FF6B35]';
  };

  const getBadgeText = () => {
    if (productDiscountType === 'ONEPLUS') return '1+1';
    if (productDiscountType === 'TWOPLUS') return '2+1';
    return '할인';
  };

  return (
    <div className='relative inline-block'>
      <div
        className={`flex h-7 w-12 items-center justify-center rounded-full text-sm font-medium text-white ${getBackgroundColor()}`}
      >
        {getBadgeText()}
      </div>

      <div
        className={`absolute top-full left-1/2 h-0 w-0 -translate-x-1/2 transform border-t-[4px] border-r-[5px] border-l-[5px] border-r-transparent border-l-transparent ${
          productDiscountType === 'ONEPLUS'
            ? 'border-t-ono-red'
            : 'border-t-[#FF6B35]'
        }`}
      />
    </div>
  );
};
