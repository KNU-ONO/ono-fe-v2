import { useQuery } from '@tanstack/react-query';

import { GET_COMBOS_PATH, GetCombosParams, getCombos } from '../apis';

export const COMBOS_QUERY_KEY = [GET_COMBOS_PATH];

export const useGetCombos = (params: GetCombosParams) => {
  console.log(params);
  return useQuery({
    queryKey: COMBOS_QUERY_KEY,
    queryFn: () =>
      getCombos({
        tagName: params.tagName,
        franchiseId: params.franchiseId,
        sort: params.sort,
      }),
  });
};
