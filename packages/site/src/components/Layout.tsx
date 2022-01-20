import React, { ReactNode } from 'react';

import { Navbar } from '@site/uikit';
import { useRouter } from 'next/router';

import * as Styled from './styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const router = useRouter();

  return (
    <Styled.Content>
      <Navbar
        items={[
          {
            label: 'Painel',
            link: '/dashboard',
            active: router.pathname === '/dashboard',
          },
          {
            label: 'Perfil',
            link: '/perfil',
            active: router.pathname === '/perfil',
          },  
        ]}
      />
      <Styled.Container>{children}</Styled.Container>
    </Styled.Content>
  );
};

export default Layout;
