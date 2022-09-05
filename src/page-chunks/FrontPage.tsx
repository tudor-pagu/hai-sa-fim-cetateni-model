import styled from 'styled-components';
import MediumArticleCard from '../components/MediumArticleCard';
import leafPosts from '../util/leafPosts';
import posts from '../util/posts';
import theme from '../global/theme';
type Props = {}

const Heading = styled.div`
    font-weight : bold;
    font-family : 'roboto-slab';
    font-size : 1.8rem;
    margin-bottom : 2.6rem;
    padding-top : 0.625rem;
    padding-bottom : 0.75rem;
    border-top : 1px dashed ${theme.grayBorderColor};
    border-bottom : 3px solid ${theme.blackBorderColor};
    color : #969696;
`

const CardContainer = styled.div`
  display :grid;
  justify-items : stretch;
  grid-template-columns : 1fr 1fr;
  gap : 15px;
`
export default function FrontPage(_props: Props) {
  const x = posts;
  return (
    <>
      <Heading>
        Articole recomandate
      </Heading>
      <CardContainer>
        <MediumArticleCard post={leafPosts[0]} />
        <MediumArticleCard post={leafPosts[1]} />
        <MediumArticleCard post={leafPosts[2]} />
        <MediumArticleCard post={leafPosts[0]} />
      </CardContainer>
    </>
  )
}