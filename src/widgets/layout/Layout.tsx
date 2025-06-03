import type React from 'react';

import { Header, MobileNavigation, ThemeProvider } from '@/shared';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <ThemeProvider
      attribute='class'
      defaultTheme='light'
      enableSystem
      disableTransitionOnChange
    >
      <div className={`flex min-h-screen flex-col`}>
        <Header />
        <main className='flex-1 pb-16'>{children}</main>
        <MobileNavigation />
      </div>
    </ThemeProvider>
  );
}
