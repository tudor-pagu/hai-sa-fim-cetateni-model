import React from 'react'
import styled from "styled-components";
import ListCategory from './ListCategory';
import ListItem from './ListItem';
import Post from '../util/Post';
import posts from '../util/posts';

type Props = {}

const Container = styled.div`
    
`

function render(posts: Post) {
  if (posts.kids.length === 0) {
    if (posts.content !== 'root') {
      return (
        <ListItem text={posts.content.metadata.title} link={posts.url}/>
      )
    } else {
      return <ListItem text='root' link='root'/>
    }
  }
  /*return (
      <ListCategory>
      {

      }
      </ListCategory>
  )*/
}

export default function ArticleAccordion({ }: Props) {
  return (
    <Container>
      renderPosts(posts);
    </Container>
  )
}