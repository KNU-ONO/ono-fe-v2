type Props = {
  productDiscountType: string;
};

export const ProductBadge = ({ productDiscountType }: Props) => {
  return (
    <div
      className={`absolute flex items-center justify-center ${productDiscountType === 'ONEPLUS' ? 'top-[27px] left-[188px] h-[27px] w-[47px] rounded-[13px] bg-[#B81E22] text-[#FFF]' : 'top-[27px] left-[188px] h-[27px] w-[47px] rounded-[13px] bg-[#FF6B35] text-[#FFF]'}`}
    >
      {productDiscountType === 'ONEPLUS'
        ? '1+1'
        : productDiscountType === 'TWOPLUS'
          ? '2+1'
          : '할인'}
    </div>
  );
};
