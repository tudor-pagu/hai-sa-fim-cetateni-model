import React, { useEffect, useRef, useState } from 'react'
import theme from '../global/theme';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { SettingsInputComponent } from '@mui/icons-material';
import { getAutoHeightDuration } from '@mui/material/styles/createTransitions';

import Alpine from 'alpinejs'
//@ts-ignore
import collapse from '@alpinejs/collapse'

Alpine.plugin(collapse)

type Props = {
    children?: React.ReactNode;
    text: string;
    open?: boolean,
}

const StyleDiv = styled.div`
    color : ${theme.sidebarTextGray};
    font-size : 1rem;
    >.list-collapsable {
        padding-left : 20px;
        transition : max-height 0.2s ease-out;
        overflow:hidden;
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
const HeightContext = React.createContext(() => { });

///TODO
///add area label
export default function ListCategory({ text, children, open }: Props) {
    const [isOpen, setIsOpen] = useState(!!open);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }


    return (

        < StyleDiv >
            <InnerText onClick={() => handleClick }>
                {text}
                <IconButton>
                    <ExpandMoreIcon className={"icon " + (isOpen ? "open" : "")} style={{ color: theme.sidebarTextGray }} />
                </IconButton>
            </InnerText>
            {
                <div x-show={isOpen} x-collapse>
                    {
                        children
                    }
                </div>
            }
        </StyleDiv >

    )
}