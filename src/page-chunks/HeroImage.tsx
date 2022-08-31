import React from 'react'
import styled from 'styled-components';
type Props = {
    children?:React.ReactNode;
    image : string;
}

const FullContainer = styled.div`
    
`

const MyImage = styled.div<{image:string}>`
    background-image: ${props=>`url(${props.image})`};
    width : 100%;
    height : 425px;
    background-size : cover;
    background-position : center;
`

const Overlay = styled.div`
    background-color : rgba(32,88,223,0.4);
    height : 100%;
    width : 100%;
    position : abslute;
    display : flex;
    flex-direction : column;
    align-items : center;
`

export default function HeroImage({image, children}: Props) {
  return (
    <FullContainer>
        <MyImage image={image}>
            <Overlay>
                {
                    children
                }
            </Overlay>
        </MyImage>
    </FullContainer>
  )
}