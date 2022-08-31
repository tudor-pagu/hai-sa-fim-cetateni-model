import React from 'react'
import DefaultLayout from '../layouts/DefaultLayout'
import ListItem from "../components/ListItem";
import ListCategory from "../components/ListCategory"
import styled from 'styled-components';
import theme from '../global/theme';
import HeroImage from '../page-chunks/HeroImage';
import { Container } from '@nextui-org/react';
import flagsImage from '../img/flag2.jpg';

const FullContainer = styled.div`
  background-color : ${theme.backgroundBeige};
  min-height : 100px;
  box-shadow : inset 0 1px 3px #d8d8d8;
`

const MainTagline = styled.div`
  font-family : ${theme.heroImageFont};
  font-size : 5rem;
  color : #FEFEFE;
`
const Secondary = styled.div`
  font-family : ${theme.heroImageFont};
  font-size : 3rem;
  color : #FFFFFF;
`
const Center = styled.div`
  display : flex;
  align-items : center;
  justify-content : center;
  flex-direction : column;
  height : 100%;
`

export default function Home() {
  return (
    <DefaultLayout>
      <FullContainer>
        <Container>

          <HeroImage image={flagsImage}>
            <Center>
              <MainTagline>
                  Educatie civica
              </MainTagline>
              <Secondary>
                  Pe intelesul tuturor
              </Secondary>
            </Center>
          </HeroImage>
        </Container>

      </FullContainer>
    </DefaultLayout>
  )
}
