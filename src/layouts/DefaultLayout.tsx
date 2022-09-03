import React from 'react'
import Header from '../page-chunks/Header';
import Footer from '../page-chunks/Footer';
import styled from 'styled-components';
import MyContainer from '../components/MyContainer';
import theme from '../global/theme';
import Sidebar from '../page-chunks/Sidebar';
import { Breakpoint } from 'react-socks';
interface Props {
  children?: React.ReactNode;
  hero?: React.ReactNode;
}

const Container = styled.div`

`
const FlexContainer = styled.div`
  display : flex;
  gap : 25px;
`
const Content = styled.div`
  flex : 2.5;
 // background-color : green;

`
const Hero = styled.div`
`
const SidebarContainer = styled(Breakpoint)`
  flex : 1;
 // background-color : red;
`
const HeaderContainer = styled.div`
`

const FullContainer = styled.div`
  background-color : ${theme.backgroundBeige};
  min-height : 100px;
  box-shadow : inset 0 1px 3px -3px #d8d8d8;
`

export default function DefaultValue({ children, hero }: Props) {
  return (
    <Container>
      <HeaderContainer>
        <Header tabs={[{ text: 'Acasa', link: 'acasa' }, { text: 'Despre noi', link: 'despre-noi' },
        { text: 'articole', link: 'articole' }, { text: 'stiri', link: 'stiri' }]}>
          Hai Sa Fim Cetateni <span>Model</span>
        </Header>
      </HeaderContainer>
      <FullContainer>
        <MyContainer>
          <Hero>
            {
              hero
            }
          </Hero>
          <FlexContainer>
            <Content>
              {
                children
              }
            </Content>
            <SidebarContainer customQuery={`(min-width:${theme.md}px)`}>
              <Sidebar />
            </SidebarContainer>
          </FlexContainer>
        </MyContainer>
      </FullContainer>
      <Footer />
    </Container>
  )
}
