type ComboItem = {
  itemId: number;
  itemName: string;
  imageUrl: string;
  franchiseId: number;
  discountType: string;
  price: number;
};

export type Combo = {
  combinationId: number;
  title: string;
  franchiseId: number;
  likeCount: number;
  itemList: ComboItem[];
};
