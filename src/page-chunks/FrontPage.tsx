import styled from 'styled-components';
import MediumArticleCard from '../components/MediumArticleCard';
import leafPosts from '../util/leafPosts';
import Heading from "../components/Heading";

type Props = {}



const CardContainer = styled.div`
  display :grid;
  justify-items : stretch;
  grid-template-columns : 1fr 1fr;
  gap : 15px;
`

const Container = styled.div`
  padding-bottom : 65px;  
`

export default function FrontPage(_props: Props) {
  return (
    <Container>
      <CardContainer>
        <MediumArticleCard post={leafPosts[0]} />
        <MediumArticleCard post={leafPosts[1]} />
        <MediumArticleCard post={leafPosts[2]} />
        <MediumArticleCard post={leafPosts[0]} />
      </CardContainer>
    </Container>
  )
}