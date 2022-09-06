import React from 'react'
import styled from 'styled-components';
import MailIcon from '@mui/icons-material/Mail';
import YoutubeButton from '../components/YoutubeButton';
import theme from '../global/theme';

const FooterContainer = styled.div`
    background-color : ${theme.footerBackground};
    h1 {
        color:white;
        font-size: 1.2rem;
        margin-bottom:5px;
        padding:0;
    }
    a {
        font-size:0.8rem;
        margin-bottom : 15px;
    }
    p {
        padding : 0;
        margin : 0;
        margin-bottom : 10px;
    }
    color : ${theme.footerTextColor};
    padding : 10px 25px;
    padding-top : 60px;
    padding-bottom : 40px;
    display : flex;
    justify-content:space-evenly;
    @media (max-width:${`${theme.sm - 1}px`}) {
      flex-direction : column;
      align-items : stretch;
    }
    gap : 1.2rem;
;
`

const CopyrightFooterContainer = styled.div`
    background-color : ${theme.footerBackground};
    color : ${theme.footerTextColor};
    padding : 10px 25px;
    display : flex;
    justify-content:center;
    align-items: center;
;
`

const Container = styled.div`
    display : flex;
    flex-direction:column;
    gap : .3rem;
    max-width : 30%;
    @media (max-width:${`${theme.sm - 1}px`}) {
      max-width : 100%;
      align-items : center;
    }
`

const Styleda = styled.a`
    text-decoration : none;
    color : ${theme.footerTextColor};
`
const FlexContainer = styled.div`
    display : flex;
    flex-wrap : wrap;
    gap : 4px;
`
const ShareContainer = styled.div`
`


export default function Footer() {
  return (
    <>
      <FooterContainer>
        <Container>
          <h1>Despre Noi</h1>
          <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

          </p>
        </Container>
        <Container>
          <h1>Contact</h1>
          <FlexContainer>
            <MailIcon style={{ color: 'white' }}></MailIcon>
            <p>contact@gmail.com</p>
          </FlexContainer>
          <ShareContainer>
            <YoutubeButton color={theme.footerTextColor} onClick={() => { window.location.replace('https://youtube.com') }} />
          </ShareContainer>
        </Container>
        <Container>
          <h1>Linkuri</h1>
          <Styleda href='/articole'>Articole</Styleda>
          <Styleda href='/despre-noi'>Despre noi</Styleda>
        </Container>

      </FooterContainer>
      <CopyrightFooterContainer>Copyright 2022 © Hai sa fim cetateni model</CopyrightFooterContainer>
    </>
  )
}
