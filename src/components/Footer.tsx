import React from 'react'
import styled from 'styled-components';
import theme from '../global/theme';

type Props = {}

const TopSocialBar = styled.div`
    height : 10px;
`

export default function Footer({}: Props) {
  return (
    <>
      <TopSocialBar></TopSocialBar>
    </>
  )
}