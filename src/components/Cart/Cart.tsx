import React from 'react';

import HeaderContainer from '../commom/HeaderContainer';
import ItemList from '../commom/ItemList';
import { ActionButtonType } from '../commom/ItemList/ItemList';
import { IProduct } from '../types';

interface IProps {
    products: Array<IProduct>    
}

const Cart: React.FC<IProps> = ({products}) => {
    return (
        <>
            <HeaderContainer bgColor={'#666666'}>Carrinho</HeaderContainer>
            {products.map(product => 
                <ItemList 
                    productDescription={product.description} 
                    productPrice={product.price} 
                    actionType={ActionButtonType.remove}
                />
            )}            
        </>
    )
}

export default Cart;