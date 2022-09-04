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
    light?: boolean,
}

function getColor(props:Props) {
    return (props.light)?theme.coloredAccordionText:theme.sidebarTextGray;
    
}

const StyleDiv = styled.div<Props>`
    color : ${props => getColor(props)};
    font-size : 1rem;
    .padding-left-20 {
        padding-left : 20px;
    }
`
const InnerText = styled.div`
    display : flex;
    align-items : center;
    gap : 8px;
    font-family : 'roboto-slab';
    .icon {
        transition : 0.2s;
    }
    :hover {
        cursor : pointer;
    }
    .open {
        transform : rotate(180deg);
    }

    &.light {
        font-weight : 1.3rem;
        padding-bottom : 6px;
        border-bottom : ${theme.borderBottomAccordion};
    }
`

///TODO
///add area label
export default function ListCategory({light, text, children, open }: Props) {
    const [isOpen, setIsOpen] = useState(!!open);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }


    return (

        < StyleDiv  {...{light,text,children,open}}>
            <InnerText className={light?'light':""} onClick={handleClick}>
                {text}
                <IconButton style={{padding:'0px'}}>
                    <ExpandMoreIcon className={"icon " + (isOpen ? "open" : "")} style={{ color: getColor({light,text,children,open}) }} />
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