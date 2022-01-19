import React, { ReactNode } from 'react';

import { ThemeProvider } from 'styled-components';

import whiteLabel from '~/themes/theme.json';

const Providers = ({
  children,
}: Partial<{
  children: ReactNode;
}>) => {
  return <ThemeProvider theme={whiteLabel}>{children}</ThemeProvider>;
};

export default Providers;
