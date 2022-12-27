import React from 'react'
import { IconButton } from '@mui/material'
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function YoutubeButton({color='white', onClick=(() => { window.location.replace('https://youtube.com') }) , style={}, iconStyle={}}) {
    return (
        <div>
            <IconButton onClick={onClick} style={{ borderRadius: '50%', borderColor: color, borderWidth: '2px', borderStyle: 'solid', ...style }}>
                <YouTubeIcon style={{ color: color, ...iconStyle }} />
            </IconButton>
        </div>
    )
}
