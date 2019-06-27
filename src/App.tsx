import React from 'react';
import ProductList from './components/ProductList';
import Cart  from './components/Cart';
import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme';

import { IProduct } from './components/types';
import CartDetail from './components/CartDetail';

const products : Array<IProduct> = [
  {description: 'Produto 1', price: 25 },
  {description: 'Produto 2', price: 10 },
  {description: 'Produto 3', price: 35 },
]

const cart : Array<IProduct> = [
  {description: 'Produto 4', price: 11 },
  {description: 'Produto 5', price: 36 },
  {description: 'Produto 6', price: 78 },
]


const Container = styled.div`
  display: flex;
  flex-direction: row;
`

const App: React.FC = () => {
  return (
    <div className="App">
        <ThemeProvider theme={defaultTheme}>
          <Container>
            <div>
              <ProductList products={products} />
              <Cart products={cart} />
            </div>            
            <CartDetail />
          </Container>
        </ThemeProvider>
    </div>
  );
}

export default App;
