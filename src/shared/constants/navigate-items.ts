import { Home, Package, Tag, Users } from 'lucide-react';

import { ROUTER_PATH } from './router-path';

export const NAVIGATE_ITEMS = [
  {
    name: '주변 편의점 찾기',
    href: ROUTER_PATH.NEARBY,
    icon: Home,
  },
  {
    name: '골조합 찾기',
    href: ROUTER_PATH.COMBINATIONS,
    icon: Package,
  },
  {
    name: '게시판',
    href: ROUTER_PATH.COMMUNITY,
    icon: Users,
  },
  {
    name: '메뉴',
    href: ROUTER_PATH.MENU,
    icon: Tag,
  },
];
