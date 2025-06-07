import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  CombinationsPage,
  ComboListPage,
  CommunityCreatePage,
  CommunityDetailPage,
  CommunityPage,
  MainPage,
  NearByDetailPage,
  NearByPage,
} from '@/pages';
import { ROUTER_PATH } from '@/shared';

const router = createBrowserRouter(
  [
    {
      path: ROUTER_PATH.MAIN,
      element: <MainPage />,
    },
    {
      path: ROUTER_PATH.COMBINATIONS,
      element: <CombinationsPage />,
    },
    {
      path: ROUTER_PATH.COMMUNITY,
      children: [
        {
          index: true,
          element: <CommunityPage />,
        },
        {
          path: ROUTER_PATH.COMMUNITY_DETAIL,
          element: <CommunityDetailPage />,
        },
        {
          path: ROUTER_PATH.COMMUNITY_CREATE,
          element: <CommunityCreatePage />,
        },
      ],
    },
    {
      path: ROUTER_PATH.NEARBY,
      children: [
        {
          index: true,
          element: <NearByPage />,
        },
        {
          path: ROUTER_PATH.NEARBY_DETAIL,
          element: <NearByDetailPage />,
        },
      ],
    },
    {
      path: ROUTER_PATH.COMBO_LIST,
      element: <ComboListPage />,
    },
    {
      path: ROUTER_PATH.COMBINATIONS,
      element: <CombinationsPage />,
    },
  ],
  {
    future: {
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
    },
  },
);

export const Routes = () => {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_startTransition: true,
      }}
    />
  );
};
