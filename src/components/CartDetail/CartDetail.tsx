import React from 'react';
import styled from 'styled-components';

import  { useProductsState }   from '../../context/ProductsContext';

const Wrapper = styled.div`
    width: ${props => props.theme.width}px;
    height: 300px;    
    background-color: #ffe599;
    margin-left: 0.5em; 
    padding: 1.5em;
`;

const Header = styled.h2`
    
`

const Content = styled.span`
    font-size: 1.2em;
`

const CartDetail: React.FC = () => {   
    const productsState = useProductsState(); 
    return (
        <Wrapper>
            <Header>Detalhes da compra</Header>
            <Content>Total: R${productsState.total}</Content>
        </Wrapper>
    );
}

export default CartDetail;