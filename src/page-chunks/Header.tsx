import React from 'react'
import styled from 'styled-components'
import theme from '../global/theme';
import { Container, Input } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom';
import UnstyledLink from '../components/UnstyledLink';
import { execFile } from 'child_process';
import SearchIcon from '@mui/icons-material/Search';
import { Breakpoint } from 'react-socks';
import MenuIcon from '@mui/icons-material/Menu';

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

  @media only screen and (max-width: 767px) {
    font-size: 1.2rem;
    min-height : 50px;
  }
  span {
    color : ${theme.titleGray};
  }
`

const BottomBar = styled.div`
  background-color : white;
  min-height : 50px;
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
const FlexContainer = styled.div`
  display : flex;
`

const TabLine = styled.div`
  display : flex;
`

const HamburgerIcon = styled.div`
  width:30px;
  height:30px;
  background-color: ${theme.linkHighlight};
  display : flex;
  justify-content : center;
  align-items : center;
  cursor : pointer;
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
  const handleHamburgerClick = () => {
    
  }
  return (
    <>
      <TopSocialBar></TopSocialBar>
      <MiddleBar>
        <Container>
          <UnstyledLink to=''>
            {children}
          </UnstyledLink>
        </Container>
      </MiddleBar>
      <BottomBar>
        <Container>
          <Breakpoint medium up>
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
          <Breakpoint small down>
            <HamburgerIcon onClick={handleHamburgerClick}>
              <MenuIcon sx={{ color: 'white' }} />
            </HamburgerIcon>
          </Breakpoint>
        </Container>
      </BottomBar>
    </>
  )
}
