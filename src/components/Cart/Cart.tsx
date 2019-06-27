import React from 'react';

import HeaderContainer from '../commom/HeaderContainer';
import ItemList from '../commom/ItemList';
import { ActionButtonType } from '../commom/ItemList/ItemList';
import  { ProductsContext }   from '../../context/ProductsContext';
import { IProduct } from '../types';


const Cart: React.FC = () => {

    const { state, update } = React.useContext(ProductsContext); 

    const handleAddProductToCart = (product: IProduct) => () => {
        let newState = JSON.parse(JSON.stringify(state));
        let index  = state.listCart.indexOf(product);    
        newState.listCart.splice(index, 1);
        newState.listProduct.push(product);        
        newState.total = newState.listCart.reduce((prev: number, cur: IProduct) => prev + cur.price, 0);    
        update(newState);    
    }

    return (
        <>
            <HeaderContainer bgColor={'#666666'}>Carrinho</HeaderContainer>
            {state.listCart.map(product => 
                <ItemList 
                    key={product.code}
                    productDescription={product.description} 
                    productPrice={product.price} 
                    actionType={ActionButtonType.remove}
                    handleRemoveProduct={handleAddProductToCart(product)}
                />
            )}            
        </>
    )
}

export default Cart;