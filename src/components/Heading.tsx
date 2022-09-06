import React from 'react'
import styled from 'styled-components';
import theme from '../global/theme';

type Props = {
    children?: React.ReactNode;
    main?: boolean;
}

const HeadingStyle = styled.div<{ main: boolean }>`
    font-weight : bold;
    font-family : 'roboto-slab';
    font-size : ${props => props.main ? '3rem' : '1.8rem'};
    margin-bottom : 2.6rem;
    padding-top : ${props => props.main ? '2rem' : '0.625rem'};
    padding-bottom : 0.75rem;
    border-top : ${props => !props.main ? `1px dashed ${theme.grayBorderColor}` : 'none'};
    border-bottom : ${props => !props.main ? `3px solid ${theme.blackBorderColor}` : `1px dashed ${theme.grayBorderColor}`};
    color : ${props => !props.main ? theme.headingFrontPageColor : theme.headingMainColor};
`


export default function Heading({ children, main = false }: Props) {
    return (
        <HeadingStyle main>
            Categorie: {children}
        </HeadingStyle>

    )
}



