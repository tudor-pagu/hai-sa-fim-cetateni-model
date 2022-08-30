import React from 'react'
import styled from 'styled-components'
import theme from '../global/theme';
import { Container, Input } from "@nextui-org/react";
import { Link, useNavigate } from 'react-router-dom';
import UnstyledLink from '../components/UnstyledLink';
import { execFile } from 'child_process';
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

  @media only screen and (max-width: 650px) {
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
            <Input placeholder='Cauta...' contentRight={}>
            </Input>
          </FlexContainer>
        </Container>
      </BottomBar>
    </>
  )
}
