import React from 'react';

import HeaderContainer from '../commom/HeaderContainer';
import ItemList from '../commom/ItemList';
import { ActionButtonType } from '../commom/ItemList/ItemList';
import { ProductsContext } from '../../context/ProductsContext';
import { IProduct } from '../types';

const ProductList: React.FC = () => {
  const { state, update } = React.useContext(ProductsContext);

  const handleAddProductToCart = (product: IProduct) => () => {
    let newState = {
      listCart: [...state.listCart, product],
      listProduct: state.listProduct.filter(p => p.code !== product.code),
      total: [...state.listCart, product].reduce(
        (prev: number, cur: IProduct) => prev + cur.price,
        0
      ),
    };
    update(newState);
  };

  return (
    <>
      <HeaderContainer bgColor={'#6aa84f'}>Lista de produtos</HeaderContainer>
      {state.listProduct.map(product => (
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
