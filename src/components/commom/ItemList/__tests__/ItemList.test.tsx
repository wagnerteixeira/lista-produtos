import React from 'react';
import { render } from '../../../../test-utils';
import 'jest-dom/extend-expect';

import ItemList from '../ItemList';

describe('ItemList', () =>{
    it('should render', () => {
        const { getByText } = render(<ItemList productPrice={25} productDescription='Teste of item list' />);
        expect(getByText('Teste of item list - Preço R$25')).toBeInTheDocument();
    });

    it('should render', () => {
        const { getByText } = render(<ItemList productPrice={25} productDescription='Teste of item list' />);
        expect(getByText('Teste of item list - Preço R$25')).toBeInTheDocument();
    });

})
