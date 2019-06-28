import React from 'react';

import HeaderContainer from '../commom/HeaderContainer';
import ItemList from '../commom/ItemList';
import { ActionButtonType } from '../commom/ItemList/ItemList';
import { ProductsContext } from '../../context/ProductsContext';
import { IProduct } from '../types';

const Cart: React.FC = () => {
  const { state, update } = React.useContext(ProductsContext);

  const handleAddProductToCart = (product: IProduct) => () => {
    let newState = {
      listCart: state.listCart.filter(p => p.code !== product.code),
      listProduct: [...state.listProduct, product],
      total: state.listCart
        .filter(p => p.code !== product.code)
        .reduce((prev: number, cur: IProduct) => prev + cur.price, 0),
    };
    update(newState);
  };

  return (
    <>
      <HeaderContainer bgColor={'#666666'}>Carrinho</HeaderContainer>
      {state.listCart.map(product => (
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
