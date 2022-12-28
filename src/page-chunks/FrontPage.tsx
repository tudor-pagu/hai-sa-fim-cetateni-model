import styled from 'styled-components';
import MediumArticleCard from '../components/MediumArticleCard';
import leafPosts from '../util/leafPosts';

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

function shuffleArray(v:any[]) {
  let clone = v.filter(()=>true);
  return clone
    .map(value=>({value:value, sort: Math.random()}))  
    .sort((a,b) => a.sort - b.sort)
    .map(({value}) => value);
}
export default function FrontPage(_props: Props) {
  const featuredPosts = shuffleArray(leafPosts);
  return (
    <Container>
      <CardContainer>
        <MediumArticleCard post={featuredPosts[0]} />
        <MediumArticleCard post={featuredPosts[1]} />
        <MediumArticleCard post={featuredPosts[2]} />
        <MediumArticleCard post={featuredPosts[0]} />
      </CardContainer>
    </Container>
  )
}