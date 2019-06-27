import React from 'react';
import styled from 'styled-components';

export enum ActionButtonType {
    add,
    remove
} 

interface ActionButtonProps {
    actionType: ActionButtonType;
}

const ActionButton = styled.button<ActionButtonProps>`
    background-color: ${props => props.actionType == ActionButtonType.add ? '#1155cc' : '#cc0000'};
    color: white;
    border-radius: 4px;
    border: 1px solid #000;
    float: right;
    cursor: pointer;
`;

const Wrapper = styled.div`
    width: ${props => props.theme.width}px;
    background-color: #efefef;
    padding-right: 10px;
    box-sizing: border-box;
    padding: 10px;
    margin-bottom: ${props => props.theme.margin}px;
    border: 1px solid #d7d7d7;
`

interface IProps {
    productDescription: string;
    productPrice: number,
    actionType: ActionButtonType;
}

const ItemList: React.FC<IProps>  = ({
    productDescription, 
    productPrice,
    actionType
}) => {
    return(
        <Wrapper>
            {productDescription} - Preço R${productPrice}
            <ActionButton actionType={actionType}>{actionType === ActionButtonType.add ? 'adicionar' : 'remover'}</ActionButton>
        </Wrapper>
    )
}

export default ItemList;