import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import {
  CombinationsPage,
  ComboListPage,
  CommunityCreatePage,
  CommunityDetailPage,
  CommunityPage,
  EventPage,
  MainPage,
  NearByDetailPage,
  NearByPage,
} from '@/pages';
import { ROUTER_PATH } from '@/shared';
import { Layout } from '@/widgets';

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
      path: ROUTER_PATH.COMMUNITY_DETAIL,
      element: <Layout pageTitle='커뮤니티' variant='detail' />,
      children: [
        {
          index: true,
          element: <CommunityDetailPage />,
        },
      ],
    },
    {
      path: ROUTER_PATH.COMMUNITY,
      element: <Layout pageTitle='커뮤니티' />,
      children: [
        {
          index: true,
          element: <CommunityPage />,
        },
      ],
    },
    {
      path: ROUTER_PATH.COMMUNITY_CREATE,
      element: <Layout pageTitle='글 쓰기' variant='create' />,
      children: [
        {
          index: true,
          element: <CommunityCreatePage />,
        },
      ],
    },
    {
      path: ROUTER_PATH.NEARBY,
      element: <Layout pageTitle='매장찾기' />,
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
      element: <Layout pageTitle='꿀조합' />,
      children: [
        {
          index: true,
          element: <ComboListPage />,
        },
      ],
    },
    {
      path: ROUTER_PATH.COMBINATIONS,
      element: <CombinationsPage />,
    },
    {
      path: ROUTER_PATH.EVENT,
      element: <Layout pageTitle='할인행사' />,
      children: [
        {
          index: true,
          element: <EventPage />,
        },
      ],
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
