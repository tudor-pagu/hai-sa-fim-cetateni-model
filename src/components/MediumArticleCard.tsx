import React from 'react'
import Post from '../util/Post'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import htmlToPlain from '../util/htmlToPlain';
import { Breadcrumbs, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import posts from '../util/posts';
import getPostById from '../util/getPostById';
import theme from '../global/theme';

type Props = {
  post: Post;
}

interface ThumbnailProps {
  img: string;
}

const transitionTime = '0.5s';

const Container = styled.div`
  margin-bottom : 20px;
  border-bottom : 3px solid ${theme.blackBorderColor};
  .card-title {
    text-align:center;
    font-size : 1.3rem;
    color : white;
    font-family : 'roboto-slab';
    background-color : rgba(30,30,30,0.6);
    padding : 0.625rem;
    margin-top : -3.2rem;
    position : relative;
  }

  .card-bottom-row {
    display : flex;
    justify-content : space-between;
    margin-top : 18px;
  }
  .card-excerpt,.card-author {
    padding-top : 20px;
    color : #777777;
    font-size : 0.875rem;
    font-family : 'roboto-slab';
  }

  .inner-container {
    position : relative;
    :hover {
      cursor : pointer;
      .upArrow,.rightArrow {
       opacity : 0.8;
      }
      .thumbnail {
        filter: brightness(0.4);
      }
    }
  }
  .upArrow {
    width : 50px;
    height : 2px;
    opacity : 0;
    background-color : white;
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
  }
  .rightArrow {
    width : 2px;
    height : 50px;
    opacity : 0;
    background-color : white;
    position : absolute;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);  
  }
  .upArrow,.rightArrow {
    transition : ${transitionTime};
  }
`

const Thumbnail = styled.div<ThumbnailProps>`
  min-width : 140px;
  padding-top : 65%;
  background-position : center;
  background-size : cover;
 // background-color : blue;
  transition : ${transitionTime};
  background-image : ${props => `url(${props.img})`};
`

const StyledLink = styled(Link)`
  color : ${theme.linkHighlight};
`

function trimTitle(title: string, maxSize = 40) {
  if (title.length > maxSize) {
    return title.substring(0, maxSize) + '...';
  }
  return title;
}
export default function MediumArticleCard({ post }: Props) {
  const navigate = useNavigate();
  if (post.content === null) return <div>Should not happen</div>;
  return (
    <Container>
      <div className='inner-container' onClick={() => { navigate(post.url) }} >
        <Thumbnail className='thumbnail' img={post.content.metadata['featured image']}>
          <div className='overlay'>

          </div>
        </Thumbnail>
        <div className='card-title'>
          {
            trimTitle(post.content.metadata.title)
          }
        </div>

        <div className='upArrow'>
        </div>

        <div className='rightArrow'>
        </div>
      </div>
      <p className='card-excerpt'>
        {
          post.content.metadata.excerpt &&
          trimTitle(htmlToPlain(post.content.content), 120)
        }
      </p>
      <div className='card-bottom-row'>
        <div>
        <Breadcrumbs>
          {
            post.ancestors.slice(1).map((ancestor) => (
              <StyledLink to={getPostById(ancestor).url} >
                {
                  getPostById(ancestor).content!.metadata.title
                }
              </StyledLink>
            ))
          }
         
        </Breadcrumbs>
        </div>
        <div>
          <span className='card-author'>
            De {post.content.metadata.author}
          </span>
        </div>
      </div>
    </Container>
  )
}