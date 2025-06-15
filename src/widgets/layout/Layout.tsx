import { Outlet } from 'react-router-dom';

import { Header, HeaderVariant } from '@/shared';

type Props = {
  pageTitle: string;
  variant?: HeaderVariant;
};

export const Layout = ({ pageTitle, variant = 'default' }: Props) => {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header pageTitle={pageTitle} variant={variant} />
      <Outlet />
    </div>
  );
};
