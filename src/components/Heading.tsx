import React from 'react'
import styled from 'styled-components';
import theme from '../global/theme';

type Props = {
    children?: React.ReactNode;
    top? : boolean;
}

const HeadingStyle = styled.div<{top:boolean}>`
    font-weight : bold;
    font-family : 'roboto-slab';
    font-size : 1.8rem;
    margin-bottom : 2.6rem;
    padding-top : 0.625rem;
    padding-bottom : 0.75rem;
    border-top : ${props => props.top?`1px dashed ${theme.grayBorderColor}`:'none'};
    border-bottom : 3px solid ${theme.blackBorderColor};
    color : #969696;
`

export default function Heading({children, top=true}: Props) {
    return (
        <HeadingStyle top>
            {
                children
            }
        </HeadingStyle>
    )
}



