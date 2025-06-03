import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { CombinationsPage, MainPage } from '@/pages';
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
