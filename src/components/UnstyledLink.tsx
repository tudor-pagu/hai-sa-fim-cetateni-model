import React from 'react'
import { Link } from 'react-router-dom'

type Props = {
    to: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

function UnstyledLink(props: Props) {
    return (
        <Link {...props} style={Object.assign(props.style?props.style:{},{ textDecoration: 'none', color:'inherit' })}>
            {
                props.children
            }
        </Link>
    )
}

export default UnstyledLink