import React from 'react';

import HeaderContainer from '../commom/HeaderContainer';
import ItemList from '../commom/ItemList';
import { ActionButtonType } from '../commom/ItemList/ItemList';
import { useProductsState, useProductsDispatch } from '../../context/ProductsContext';
import { IProduct } from '../types';

const Cart: React.FC = () => {
  const productsDispatch = useProductsDispatch();
  const productsState = useProductsState();
  const handleAddProductToCart = (product: IProduct) => () => {
    productsDispatch({type: 'REMOVE_TO_CART', payload: product})
  };

  return (
    <>
      <HeaderContainer bgColor={'#666666'}>Carrinho</HeaderContainer>
      {productsState.listCart.map(product => (
        <ItemList
          key={product.code}
          productDescription={product.description}
          productPrice={product.price}
          actionType={ActionButtonType.remove}
          codeTestId={product.code}
          handleRemoveProduct={handleAddProductToCart(product)}
        />
      ))}
    </>
  );
};

export default Cart;
