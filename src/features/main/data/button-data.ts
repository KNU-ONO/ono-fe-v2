import { ROUTER_PATH } from '@/shared';

import CombinationLogo from '../_assets/menu/combination.webp';
import CommunityLogo from '../_assets/menu/community.webp';
import CVS_LOGO from '../_assets/menu/cvs.webp';
import EventLogo from '../_assets/menu/event.webp';

export const BUTTON_DATA = [
  {
    id: 1,
    path: ROUTER_PATH.NEARBY,
    icon: CVS_LOGO,
    alt: '편의점',
  },
  {
    id: 2,
    path: ROUTER_PATH.COMBO_LIST,
    icon: CombinationLogo,
    alt: '꿀조합',
  },
  {
    id: 3,
    path: ROUTER_PATH.COMMUNITY,
    icon: CommunityLogo,
    alt: '커뮤니티',
  },
  {
    id: 4,
    path: ROUTER_PATH.EVENT,
    icon: EventLogo,
    alt: '할인행사',
  },
];
