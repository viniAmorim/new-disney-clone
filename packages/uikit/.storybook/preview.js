import React from 'react';
import { addDecorator } from '@storybook/react';
import { withThemes } from '@react-theming/storybook-addon';
import { normalize } from 'polished';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '~/themes/theme.json';

const GlobalStyle = createGlobalStyle`
 ${normalize()}

body {
  font-family: 'Roboto', sans-serif;
}
`;

addDecorator((Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
));

addDecorator(withThemes(ThemeProvider, [theme]));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
