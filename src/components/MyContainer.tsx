import React from 'react'
import styled from 'styled-components';
import theme from '../global/theme';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode;
}


const Wrapper = styled.div`
   /* @media only screen and (min-width: ${`${theme.sm}px`}) {
        width : 540px;
    }

    @media only screen and (min-width: ${`${theme.md}px`}) {
        width : 720px;
    }

    @media only screen and (min-width: ${`${theme.lg}px`}) {
        width : 960px;
    }

    @media only screen and (min-width: ${`${theme.xl}px`}) {
        width : 1140px;
    }
    @media only screen and (min-width: ${`${theme.xxl}px`}) {
        width : 1320px;
    }*/
    padding : 0px 30px;
`
function MyContainer({ children, ...props }: Props) {
    return (
        <Wrapper {...props}>
            {
                children
            }
        </Wrapper>
    )
}

export default MyContainer