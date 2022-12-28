import React from 'react'
import styled from 'styled-components';
import Post from '../util/Post';
import theme from '../global/theme';

const Container = styled.div`
    .post-title {
        font-family : 'roboto-slab';
        font-style : 'normal';
        font-weight : bold;
        margin-bottom : 10px;
        font-size : 2rem;
        color : ${theme.postTitleColor};
        padding : 5px;
    }
    .post-content {
        font-family : 'roboto-slab';
        color : ${theme.postContentColor};
        font-size : 1.35rem;
        padding-bottom:75px;
    }
`

interface Props {
    post : Post;
}
export default function PostBody({post}: Props) {
  return (
    <Container>
        <img src={post.content?.metadata['featured image']} alt={ post.content?.metadata['featured image alt'] }></img>
        <h1 className='post-title'>
            {post.content?.metadata.title}
        </h1>
        <div dangerouslySetInnerHTML={{__html:post.content!.content}} className='post-content'></div>
    </Container>
  )
}