import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import 'jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

import { ProductsProvider } from '../../../context/ProductsContext';

import CartList from '../CartList';

afterEach(cleanup);

describe('ItemList', () => {
  it('should render with itens', () => {
    const { getByText } = render(<CartList />);
    expect(getByText(/Produto 4 - Preço R\$10/i)).toBeInTheDocument();
  });

  it('should render and remove', () => {
    const { getByText, getByTestId, debug } = render(
      <ProductsProvider>
        <CartList/>
      </ProductsProvider>
    );    
    let el1 = getByText(/Produto 4 - Preço R\$10/i);    
    fireEvent.click(getByTestId('actionButton-4'));
    expect(el1).not.toBeInTheDocument();    
  });
});
