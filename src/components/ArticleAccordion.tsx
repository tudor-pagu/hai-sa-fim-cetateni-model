import React from 'react'
import styled from "styled-components";
import ListCategory from './ListCategory';
import ListItem from './ListItem';
import Post from '../util/Post';
import posts from '../util/posts';

type Props = {}

const Container = styled.div`
    
`

function renderPosts(posts: Post): JSX.Element {
  if (posts.kids.length === 0) {
    if (posts.content !== null) {
      return (
        <ListItem text={posts.content.metadata.title} link={posts.url} />
      )
    } else {
      return <ListItem text='root' link='root' /> ///should never be reachable
    }
  }

  if (posts.content === null) {
    return (
      <ListCategory text='articole' open>
        {
          posts.kids.map((post) => renderPosts(post))
        }
      </ListCategory>
    )
  }
  else {
    return (
      <ListCategory text={posts.content.metadata.title}>
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