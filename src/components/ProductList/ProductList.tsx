import React from 'react';

import HeaderContainer from '../commom/HeaderContainer';
import ItemList from '../commom/ItemList';
import { ActionButtonType } from '../commom/ItemList/ItemList';
import { useProductsState, useProductsDispatch } from '../../context/ProductsContext';
import { IProduct } from '../types';

const ProductList: React.FC = () => {
  const productsDispatch = useProductsDispatch();
  const productsState = useProductsState();
  const handleAddProductToCart = (product: IProduct) => () => {    
    productsDispatch({type: 'ADD_TO_CART', payload: product });
  };

  return (
    <>
      <HeaderContainer bgColor={'#6aa84f'}>Lista de produtos</HeaderContainer>
      {productsState.listProduct.map(product => (
        <ItemList
          key={product.code}
          productDescription={product.description}
          productPrice={product.price}
          actionType={ActionButtonType.add}
          handleRemoveProduct={handleAddProductToCart(product)}
          codeTestId={product.code}
        />
      ))}
    </>
  );
};

export default ProductList;
