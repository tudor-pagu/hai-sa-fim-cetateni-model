import React from 'react'
import theme from '../global/theme';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
    children?: React.ReactNode;
    text: string;
    link: string;
}

const StyledLink = styled(Link)`
    color : inherit;
    transition : 0.1s;
    :hover {
        color : ${theme.linkHighlight};
    }
`

export default function ListItem({ text, link }: Props) {
    return (
        <div>
            <StyledLink to={link}>
                {
                    text
                }
            </StyledLink>
        </div>
    )
}