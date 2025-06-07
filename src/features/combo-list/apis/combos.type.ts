export interface GetCombosParams {
  tagName: string;
  franchiseId: number;
  sort: string;
}

type ItemList = {
  itemId: number;
  franchiseId: number;
  itemName: string;
  imageUrl: string;
  discountType: string;
  price: number;
};

export interface GetCombosResponse {
  combinationId: number;
  title: string;
  tag: string;
  franchiseId: number;
  likeCount: number;
  itemList: ItemList[];
}
