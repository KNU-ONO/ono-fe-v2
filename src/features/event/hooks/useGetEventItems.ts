import { useQuery } from '@tanstack/react-query';

import {
  EVENT_ITEMS_PATH,
  GetEventItemsParams,
  getEventItemsAPI,
} from '../apis';

export const GET_EVENT_ITEMS_QUERY_KEY = EVENT_ITEMS_PATH;

export const useGetEventItems = (params: GetEventItemsParams) => {
  return useQuery({
    queryKey: [GET_EVENT_ITEMS_QUERY_KEY, params],
    queryFn: () => getEventItemsAPI(params),
  });
};
