import React, { useState } from 'react'
import theme from '../global/theme';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import SmoothCollapse from 'react-smooth-collapse';

type Props = {
    children?: React.ReactNode;
    text: string;
    open?: boolean,
}

const StyleDiv = styled.div`
    color : ${theme.sidebarTextGray};
    font-size : 1rem;
    .padding-left-20 {
        padding-left : 20px;
    }
`
const InnerText = styled.div`
    display : flex;
    align-items : center;
    gap : 8px;
    .icon {
        transition : 0.2s;
    }
    :hover {
        cursor : pointer;
    }
    .open {
        transform : rotate(180deg);
    }
`

///TODO
///add area label
export default function ListCategory({ text, children, open }: Props) {
    const [isOpen, setIsOpen] = useState(!!open);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }


    return (

        < StyleDiv >
            <InnerText onClick={handleClick}>
                {text}
                <IconButton style={{padding:'0px'}}>
                    <ExpandMoreIcon className={"icon " + (isOpen ? "open" : "")} style={{ color: theme.sidebarTextGray }} />
                </IconButton>
            </InnerText>
            {
                <SmoothCollapse expanded={isOpen} className='padding-left-20'>
                    {
                        children
                    }
                </SmoothCollapse>
            }
        </StyleDiv >

    )
}