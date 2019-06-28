import React from 'react';
import { render } from '../../../test-utils';
import 'jest-dom/extend-expect';

import CartDetail from '../CartDetail';

describe('CartDetail', () =>{
    it('should render', () => {
        const { getByText } = render(<CartDetail />);
        expect(getByText(/total: R\$10/i)).toBeInTheDocument();
    });
})



