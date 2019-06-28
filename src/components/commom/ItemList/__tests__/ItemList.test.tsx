import React from 'react';
import { render } from '../../../../test-utils';
import 'jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

import ItemList, { ActionButtonType } from '../ItemList';

afterEach(cleanup);

describe('ItemList', () =>{
    it('should render with 25 and add', () => {
        const { getByText } = render(<ItemList codeTestId='1' actionType={ActionButtonType.add} productPrice={25} productDescription='Test of item list' />);        
        expect(getByText(/Test of item list - Preço R\$25/i)).toBeInTheDocument();        
        let actionButton = getByText(/adicionar/i);
        expect(actionButton).toBeInTheDocument();
        expect(actionButton).toHaveStyle('background-color: #1155cc');        

    });

    it('should render with 15 and remove', () => {
        const { getByText } = render(<ItemList codeTestId='1' actionType={ActionButtonType.remove} productPrice={15} productDescription='Test of item list' />);                               
        expect(getByText(/Test of item list - Preço R\$15/i)).toBeInTheDocument();        
        let actionButton = getByText(/remover/i)
        expect(actionButton).toBeInTheDocument();
        expect(actionButton).toHaveStyle('background-color: #cc0000');
    });

})
