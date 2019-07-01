import React from 'react';
import { render, debugDOM, fireEvent } from './test-utils';
import 'jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

import App from './App';

afterEach(cleanup);

describe('App', () =>{
    it('should render', () => {
        const { getByText, container, debug } = render(<App />);
        expect(container).toBeVisible();
        expect(getByText(/lista de produtos/i)).toBeInTheDocument();
    });

    it('should add and remove products in cart list and product list', () => {
      const { debug, getByText, container, getByTestId } = render(<App />);      
      let productListHeader = getByText(/Lista de produtos/i);
      let cartListHeader = getByText(/Carrinho/i);      
      //check first item of product list have a text      
      expect(productListHeader.nextSibling as HTMLElement).toHaveTextContent(/Produto 1 - Preço R\$1/i);
      //check first item of cart list have a text      
      expect(cartListHeader.nextSibling as HTMLElement).toHaveTextContent(/Produto 4 - Preço R\$10/i);
      //move first item
      fireEvent.click(getByTestId('actionButton-1'));
      //check first item of product list not is the item added to cart
      expect(productListHeader.nextSibling as HTMLElement).not.toHaveTextContent(/Produto 1 - Preço R\$1/i);
      //check if last item of cart list is item added to cart
      let itemC = cartListHeader.nextSibling as HTMLElement;
      expect(itemC.nextSibling).toHaveTextContent(/Produto 1 - Preço R\$1/i);
      fireEvent.click(getByTestId('actionButton-2'));
      fireEvent.click(getByTestId('actionButton-3'));      
      //check if not existe product in product list
      expect(productListHeader.nextSibling as HTMLElement).toHaveTextContent(/carrinho/i);
      fireEvent.click(getByTestId('actionButton-2'));
      //check if product 2 in product list
      expect(productListHeader.nextSibling as HTMLElement).toHaveTextContent(/Produto 2 - Preço R\$3/i);
    });
})
