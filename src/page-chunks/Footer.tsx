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
          <p>
            Suntem un grup de elevi care doresc sa aduca schimbare in tara noastra prin promovarea educatiei civice.
          </p>
        </Container>
        <Container>
          <h1>Contact</h1>
          <FlexContainer>
            <MailIcon style={{ color: 'white' }}></MailIcon>
            <p>cetateni_model_contact@gmail.com</p>
          </FlexContainer>
         { /*<ShareContainer>
            <YoutubeButton color={theme.footerTextColor} />
          </ShareContainer> */}
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
