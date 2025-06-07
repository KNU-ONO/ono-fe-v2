export const useCategoryBanner = (category: string | null) => {
  if (category === 'HOT_CHALLENGE') return '../_assets/hot.png';
  if (category === 'LOW_PRICE') return '../_assets/cheap.png';
  if (category === 'DIET') return '../_assets/diet.png';
  if (category === 'FAMOUS') return '../_assets/popular.png';
  if (category) return `../_assets/category-banners/${category}.png`;
  return '';
};
