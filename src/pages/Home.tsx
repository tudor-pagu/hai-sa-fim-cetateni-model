import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import styled from 'styled-components';
import theme from '../global/theme';
import HeroImage from '../page-chunks/HeroImage';
import Container from '../components/MyContainer';
import flagsImage from '../img/flag2.jpg';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FrontPage from "../page-chunks/FrontPage";
const FullContainer = styled.div`
  background-color : ${theme.backgroundBeige};
  min-height : 100px;
  box-shadow : inset 0 1px 3px -3px #d8d8d8;
`

const MainTagline = styled.div`
  font-family : ${theme.heroImageFont};
  font-size : 5rem;
  color : #FEFEFE;
  transition : border-top 0.5;
  transition : border-bottom 0.5;
  border-top : 2px solid #FEFEFE;
  border-bottom : 2px solid #FEFEFE;
  @media only screen and (max-width: ${`${theme.md - 1}px`}) {
    font-size: 3rem;
    min-height : 50px;
  }

  @media only screen and (max-width: ${`${theme.sm - 1}px`}) {
    font-size: 2rem;
    min-height : 50px;
  }
`
const Secondary = styled.div`
  font-family : ${theme.heroImageFont};
  font-size : 3rem;
  color : #FFFFFF;
  @media only screen and (max-width: ${`${theme.md - 1}px`}) {
    font-size: 1.5rem;
    min-height : 50px;
  }
  @media only screen and (max-width: ${`${theme.sm - 1}px`}) {
    font-size: 1rem;
    min-height : 50px;
  }
`
const Center = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  flex-direction : column;
  height : 100%;
`

const infoBoxes = [
  {
    color: '#00B5E2',
    mainText: 'Campaign',
    subText: 'stuff',
    renderIcon: ((props: any) => (<AccessAlarmIcon {...props}></AccessAlarmIcon>)),
    link: '/1',
  },
  {
    color: '#00C8A0',
    mainText: 'Campaign',
    subText: 'stuff',
    renderIcon: ((props: any) => (<AccessAlarmIcon {...props}></AccessAlarmIcon>)),
    link: '/2',
  },
  {
    color: '#FB6C6C',
    mainText: 'Campaign',
    subText: 'stuff',
    renderIcon: ((props: any) => (<AccessAlarmIcon {...props}></AccessAlarmIcon>)),
    link: '/3',
  },
]
export default function Home() {
  return (
    <DefaultLayout hero={

      <HeroImage image={flagsImage} infoBoxes={infoBoxes}>
        <Center>
          <MainTagline>
            Educatie civica
          </MainTagline>
          <Secondary>
            Pe intelesul tuturor
          </Secondary>
        </Center>
      </HeroImage>

    }>
      <FrontPage/>
    </DefaultLayout>
  )
}
