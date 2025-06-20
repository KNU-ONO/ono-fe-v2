import { ROUTER_PATH } from '../../constants';

export const getDynamicPath = {
  combinationsDetail: (id: string) =>
    ROUTER_PATH.COMBINATIONS_DETAIL.replace(':id', id),
  comboDetail: (id: string) => ROUTER_PATH.COMBO_DETAIL.replace(':id', id),
  communityDetail: (id: string) =>
    ROUTER_PATH.COMMUNITY_DETAIL.replace(':id', id),
  postDetail: (id: string) => ROUTER_PATH.POST_DETAIL.replace(':id', id),
  nearbyDetail: (id: string) => ROUTER_PATH.NEARBY_DETAIL.replace(':id', id),
};
