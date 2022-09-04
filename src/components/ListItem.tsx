import React from 'react'
import theme from '../global/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
    children?: React.ReactNode;
    text: string;
    link: string;
    light?: boolean;
}

const StyledLink = styled(Link) <Props>`
    color : inherit;
    transition : 0.1s;
    :hover {
        color : ${theme.linkHighlight};
    }
    font-family : 'roboto-slab';
`
const StyledDiv = styled.div<Props>`
    border-bottom : ${props => props.light ? theme.borderBottomAccordion : 'none'};
`

export default function ListItem({ light, text, link }: Props) {
    return (
        <StyledDiv {...{ light, text, link }}>
            <StyledLink to={link} {...{ light, text, link }}>
                {
                    text
                }
            </StyledLink>
        </StyledDiv>
    )
}