import * as React from 'react';
import { Header } from '@/components/global/Header';
import { BottomNavigation } from '@/components/global/BottomNavigation';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <BottomNavigation />
    </>
  );
}
