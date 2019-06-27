import React from 'react';
import styled from 'styled-components';

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

interface CartDetailProps {
    totalCart?: number;
}

const defaultProps: CartDetailProps = {
    totalCart : 0
} 

const CartDetail: React.FC<CartDetailProps> = ({totalCart}) => {
    return (
        <Wrapper>
            <Header>Detalhes da compra</Header>
            <Content>Total: R${totalCart}</Content>
        </Wrapper>
    );
}

CartDetail.defaultProps = defaultProps;

export default CartDetail;