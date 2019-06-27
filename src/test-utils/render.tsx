import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../styles/defaultTheme';

function render(ui: React.ReactElement) {
  return {
    ...rtlRender(<ThemeProvider theme={defaultTheme}>{ui}</ThemeProvider>),
  };
}

export default render;
