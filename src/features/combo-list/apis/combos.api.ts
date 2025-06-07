import { fetchInstance } from '@/shared';

import { GetCombosParams, GetCombosResponse } from './combos.type';

export const GET_COMBOS_PATH = '/api/combos';

export const getCombos = async (params: GetCombosParams) => {
  const response = await fetchInstance.get<GetCombosResponse[]>(
    GET_COMBOS_PATH,
    {
      params: {
        tagName: params.tagName,
        franchiseId: params.franchiseId,
        sort: params.sort,
      },
    },
  );
  return response.data;
};
