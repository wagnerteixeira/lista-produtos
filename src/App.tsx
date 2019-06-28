import React from 'react';
import ProductList from './components/ProductList';
import CartList from './components/CartList';
import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme';

import CartDetail from './components/CartDetail';

import { ProductsProvider } from './context/ProductsContext';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`
const App: React.FC = () => {
  return (
    <div className="App">
        <ThemeProvider theme={defaultTheme}>
          <ProductsProvider>
            <Container>
              <div>
                <ProductList />
                <CartList />
              </div>            
              <CartDetail />
            </Container>
          </ProductsProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;
