import React from 'react';
import ProductList from './components/ProductList';
import Cart  from './components/Cart';
import styled, { ThemeProvider } from 'styled-components';
import defaultTheme from './styles/defaultTheme';

import { IProduct } from './components/types';
import CartDetail from './components/CartDetail';

//import { createCtx } from './context/createCtx';

import { ProductsProvider, ProductsContext } from './context/ProductsContext';

/*const products : Array<IProduct> = [
  {description: 'Produto 1', price: 1 },
  {description: 'Produto 2', price: 3 },
  {description: 'Produto 3', price: 4 },
]
*/
const cart : Array<IProduct> = [
  {code: '4', description: 'Produto 4', price: 10 }  
]

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

//const [ctx, ProductsProvider]  = createCtx({listCart: cart, listProduct: products});

const App: React.FC = () => {
  return (
    <div className="App">
        <ThemeProvider theme={defaultTheme}>
          <ProductsProvider>
            <Container>
              <div>
                <ProductList />
                <Cart />
              </div>            
              <CartDetail />
            </Container>
          </ProductsProvider>
        </ThemeProvider>
    </div>
  );
}

export default App;
