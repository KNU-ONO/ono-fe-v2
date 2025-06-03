import { ROUTER_PATH } from '@/shared';

import CombinationLogo from '../_assets/combination.svg';
import CommunityLogo from '../_assets/community.svg';
import CVS_LOGO from '../_assets/cvs.svg';
import DiscountLogo from '../_assets/discount.svg';

export const BUTTON_DATA = [
  {
    id: 1,
    path: ROUTER_PATH.NEARBY,
    icon: CVS_LOGO,
    alt: '편의점',
    top: 339,
    left: 34,
  },
  {
    id: 2,
    path: ROUTER_PATH.COMBO_LIST,
    icon: CombinationLogo,
    alt: '꿀조합',
    top: 339,
    left: 196,
  },
  {
    id: 3,
    path: ROUTER_PATH.COMMUNITY,
    icon: CommunityLogo,
    alt: '커뮤니티',
    top: 510,
    left: 34,
  },
  {
    id: 4,
    path: ROUTER_PATH.EVENT,
    icon: DiscountLogo,
    alt: '할인행사',
    top: 510,
    left: 196,
  },
];
