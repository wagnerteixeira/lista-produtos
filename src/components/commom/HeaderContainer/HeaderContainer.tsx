import styled from 'styled-components';

interface HeaderContainerProps {
    bgColor?: string;
}

const defaultProps: HeaderContainerProps = {
    bgColor: 'green'
}

const HeaderContainer = styled.div<HeaderContainerProps>`
    background-color: ${props => props.bgColor};
    width: ${props => props.theme.width}px;
    color: white;
    font-size: 1.5em;
    font-weight: 700;
    padding: 0.5em;
    box-sizing: border-box;
    margin-bottom: ${props => props.theme.margin}px
`;

HeaderContainer.defaultProps = defaultProps;

export default HeaderContainer;