import React from 'react';
import { render } from '../../../../test-utils';
import 'jest-dom/extend-expect';

import HeaderContainer from '../HeaderContainer';

describe('HeaderContainer', () =>{
    it('should render', () => {
        const { getByText } = render(<HeaderContainer>Test</HeaderContainer>);
        expect(getByText(/test/i)).toBeInTheDocument();
    });
})



