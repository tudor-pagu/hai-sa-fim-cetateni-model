import React from 'react'
import styled from 'styled-components'
import theme from '../global/theme';
interface Props {

}

const TopSocialBar = styled.div`
    background-color : ${theme.darkTopBlue};
    height : 20px;
`

const MiddleBar = styled.div`
  background-color : ${theme.middleBlue};
  height : 75px;
  color : white;
  font-size : 2.2rem;
  font-weight : bold;
  display : flex;
  align-items : center;
  span {
    color : ${theme.titleGray};
  }
`

export default function Header() {
  return (
    <>
      <TopSocialBar></TopSocialBar>
      <MiddleBar>
        Hai Sa Fim Cetateni <span>Model</span>
      </MiddleBar>
    </>
  )
}
