import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import theme from '../global/theme';
import {Input} from "@nextui-org/react";
import Container from "../components/MyContainer"
import { useNavigate } from 'react-router-dom';
import UnstyledLink from '../components/UnstyledLink';
import SearchIcon from '@mui/icons-material/Search';
import { Breakpoint } from 'react-socks';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import { Collapse } from "@nextui-org/react";
import ListCategory from '../components/ListCategory';
import ListItem from '../components/ListItem';
import ArticleAccordion from '../components/ArticleAccordion';

interface Props {
  children: React.ReactNode;
  tabs: {
    text: string;
    link: string;
  }[];
}

const TopSocialBar = styled.div`
    background-color : ${theme.darkTopBlue};
    height : 20px;
`

const MiddleBar = styled.div`
  background-color : ${theme.middleBlue};
  min-height : 75px;
  color : white;
  font-size : 2.2rem;
  font-weight : bold;
  display : flex;
  align-items : center;

  @media only screen and (max-width: ${`${theme.md - 1}px`}) {
    font-size: 1.5rem;
    min-height : 50px;
  }
  @media only screen and (max-width: ${`${theme.sm - 1}px`}) {
    font-size: 1rem;
    min-height : 50px;
  }
  span {
    color : ${theme.titleGray};
  }
`

const BottomBar = styled.div`
  background-color : white;
  min-height : 50px;
  display : flex;
  align-items : stretch;
`
const Tab = styled.div`
  padding : 20px 0px;
  background-color :white;
  transition : 0.3s;
  :hover {
    background-color : ${theme.linkHighlight};
    color : white;
    cursor: pointer;
  }
`
/*
const DrawerTab = styled.div`
    transition : 0.3;
    padding : 10px 20px;
    padding-right : 40px;
    min-width : 70vw;
    color : ${theme.linkHighlight};
    background-color : white;
    border-bottom : 1px solid gray;
    :hover {
       background-color : ${theme.linkHighlight};
      color : white;
      cursor: pointer;
    }
`

const StaticDrawerTab = styled.div`
    padding : 10px 20px;
    min-width : 70vwh;
    padding-right : 40px;
    color : ${theme.linkHighlight};
    background-color : ${theme.linkHighlight};
    color : white;
    border-bottom : 1px solid gray;
`
*/
const FlexContainer = styled.div`
  display : flex;
`

const TabLine = styled.div`
  display : flex;
`

const HamburgerIcon = styled.div`
  padding-left:100%;
  padding-right:100%;

  height:100%;
  background-color: ${theme.linkHighlight};
  display : flex;
  justify-content : center;
  align-items : center;
  cursor : pointer;
`

const SidebarContainer = styled.div`
  padding : 40px 10px;
  min-width : 50vw;
`

const FullContainer = styled.div`
`

function getTabStyle(index: number, tabs: {
  text: string;
  link: string;
}[]) {
  if (index > 0 && index + 1 < tabs.length) {
    return { borderLeft: '1px solid gray', borderRight: '1px solid gray', padding: '0px 20px' }
  } else if (index === 0) {
    return { borderRight: '1px solid gray', padding: '0px 20px' }
  } else {
    return { borderLeft: '1px solid gray', padding: '0px 20px' }
  }
}
export default function Header({ children, tabs }: Props) {
  const navigate = useNavigate();
  const handleTabClick = (tab: { link: string }) => {
    navigate(tab.link);
  }
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  }
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <FullContainer>
        <TopSocialBar></TopSocialBar>
        <MiddleBar>
          <Container>
            <UnstyledLink to='' style={{fontFamily:theme.logoFont}}>
              {children}
            </UnstyledLink>
          </Container>
        </MiddleBar>
        <BottomBar>
          <Container style={{display:'flex',alignItems:'stretch'}}>
            <Breakpoint customQuery={`(min-width:${theme.md}px)`}>
              <FlexContainer>
                <TabLine>
                  {
                    tabs.map((tab, index) => (
                      <Tab onClick={handleTabClick.bind(null, tab)}>
                        <span style={getTabStyle(index, tabs)}>
                          {
                            tab.text
                          }
                        </span>
                      </Tab>
                    ))
                  }
                </TabLine>
                <Input placeholder='Cauta...' contentRight={<SearchIcon sx={{ color: '#003C54' }} />}>
                </Input>
              </FlexContainer>
            </Breakpoint>
            <Breakpoint customQuery={`(max-width:${theme.md - 1}px)`}>
              <HamburgerIcon onClick={toggleDrawer}>
                <MenuIcon sx={{ height:'100%',color: 'white' }} />
              </HamburgerIcon>
              <Drawer anchor='right' open={isDrawerOpen} onClose={toggleDrawer}>

                <Collapse.Group accordion={false}>
                  {
                    <SidebarContainer>

                      <ListCategory open text='pagini'>
                        {
                          tabs.map((tab) => (
                            <ListItem text={tab.text} link={tab.link} />
                          ))
                        }
                      </ListCategory>
                      <ArticleAccordion/>
                    </SidebarContainer>

                  }
                </Collapse.Group>
              </Drawer>
            </Breakpoint>
          </Container>
        </BottomBar>
      </FullContainer>
    </>
  )
}
