import React from 'react';
import { render, fireEvent } from '../../../test-utils';
import 'jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

import ProductList from '../ProductList';

import { ProductsProvider } from '../../../context/ProductsContext';


afterEach(cleanup);

describe('ItemList', () => {
  it('should render with itens', () => {
    const { getByText } = render(<ProductList />);
    expect(getByText(/Produto 1 - Preço R\$1/i)).toBeInTheDocument();
    expect(getByText(/Produto 2 - Preço R\$3/i)).toBeInTheDocument();
    expect(getByText(/Produto 3 - Preço R\$4/i)).toBeInTheDocument();
  });

  it('should render and remove', () => {
    const { getByText, getByTestId, debug } = render(
      <ProductsProvider>
        <ProductList />
      </ProductsProvider>
    );    
    let el1 = getByText(/Produto 1 - Preço R\$1/i);
    let el2 = getByText(/Produto 2 - Preço R\$3/i)
    let el3 = getByText(/Produto 3 - Preço R\$4/i)
    fireEvent.click(getByTestId('actionButton-1'));
    expect(el1).not.toBeInTheDocument();
    expect(el2).toBeInTheDocument();
    expect(el3).toBeInTheDocument();
    fireEvent.click(getByTestId('actionButton-2'));    
    expect(el1).not.toBeInTheDocument();
    expect(el2).not.toBeInTheDocument();
    expect(el3).toBeInTheDocument();
    fireEvent.click(getByTestId('actionButton-3'));    
    expect(el1).not.toBeInTheDocument();
    expect(el2).not.toBeInTheDocument();
    expect(el3).not.toBeInTheDocument();
  });
});
