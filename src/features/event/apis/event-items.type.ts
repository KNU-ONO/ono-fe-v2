export interface GetEventItemsResponse {
  itemId: number;
  franchiseId: number;
  itemName: string;
  imageUrl: string;
  discountType: string;
  price: number;
}

export interface GetEventItemsParams {
  searchKeyword?: string;
  franchiseId: number;
  discountType?: string;
}
