import React from 'react';

import HeaderContainer from '../commom/HeaderContainer';
import ItemList from '../commom/ItemList';
import { ActionButtonType } from '../commom/ItemList/ItemList';
import { IProduct } from '../types';

interface IProps {
    products: Array<IProduct>    
}

const ProductList: React.FC<IProps> = ({products}) => {
    return (
        <>
            <HeaderContainer bgColor={'#6aa84f'}>Lista de produtos</HeaderContainer>
            {products.map(product => 
                <ItemList 
                    productDescription={product.description} 
                    productPrice={product.price} 
                    actionType={ActionButtonType.add}
                />
            )}
            
        </>
    )
}

export default ProductList;