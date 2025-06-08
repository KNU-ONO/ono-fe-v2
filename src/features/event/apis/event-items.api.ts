import { fetchInstance } from '@/shared';

import { GetEventItemsParams, GetEventItemsResponse } from './event-items.type';

export const EVENT_ITEMS_PATH = '/api/items';

export const getEventItemsAPI = async (params: GetEventItemsParams) => {
  const response = await fetchInstance.get<GetEventItemsResponse[]>(
    EVENT_ITEMS_PATH,
    {
      params: {
        searchKeyword: params.searchKeyword ?? '',
        franchiseId: params.franchiseId,
        discountType: params.discountType ?? 'ALL',
      },
    },
  );
  console.log(response.data);
  return response.data;
};
