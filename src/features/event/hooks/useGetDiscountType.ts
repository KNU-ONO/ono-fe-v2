export const useGetDiscountType = (activeCategory: string) => {
  if (activeCategory === '전체') {
    return 'NONE';
  } else if (activeCategory === '1+1') {
    return 'ONEPLUS';
  } else if (activeCategory === '2+1') {
    return 'TWOPLUS';
  }

  return '';
};
