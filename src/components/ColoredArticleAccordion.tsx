import styled from "styled-components";
import ListCategory from './ListCategory';
import ListItem from './ListItem';
import Post from '../util/Post';
import posts from '../util/posts';
import theme from '../global/theme';
type Props = {}

const Container = styled.div`
    background-color : ${theme.middleBlue};
    padding : 30px 15px;
`

function renderPosts(posts: Post): JSX.Element {
  if (posts.kids.length === 0) {
    if (posts.content !== null) {
      return (
        <ListItem light text={posts.content.metadata.title} link={posts.url} />
      )
    } else {
      return <ListItem light text='root' link='root' /> ///should never be reachable
    }
  }

  if (posts.content === null) {
    return (
      <>
        {
          posts.kids.map((post) => renderPosts(post))
        }
      </>
    )
  }
  else {
    return (
      <ListCategory light text={posts.content.metadata.title}>
        {
          posts.kids.map((post) => renderPosts(post))
        }
      </ListCategory>
    )
  }
}

export default function ArticleAccordion(_props: Props) {
  return (
    <Container>
      {
        renderPosts(posts)
      }
    </Container>
  )
} 