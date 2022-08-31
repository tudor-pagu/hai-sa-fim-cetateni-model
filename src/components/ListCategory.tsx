import React from 'react'
import theme from '../global/theme';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
type Props = {
    children?: React.ReactNode;
    text: string;
}

const StyleDiv = styled.div`
    color : ${theme.sidebarTextGray};
    font-size : 1rem;
`
const InnerText = styled.div`
    display : flex;
    align-items : center;
    gap : 8px;
`
const StyledLink = styled(Link)`
    color : inherit;
    transition : 0.1s;
    :hover {
        color : ${theme.linkHighlight};
    }
`

export default function ListCategory({ text, children }: Props) {
    return (
        <StyleDiv>
            <InnerText>
                <StyledLink to='/home'>{text}</StyledLink>
                <IconButton>
                    <ExpandMoreIcon style={{ color: theme.sidebarTextGray }} />
                </IconButton>
            </InnerText>
        </StyleDiv>
    )
}