import React from 'react'
import Post from '../util/Post'
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import htmlToPlain from '../util/htmlToPlain';
import { Breadcrumbs } from '@mui/material';
import Link from "@mui/material/Link";

type Props = {
  post: Post;
}

interface ThumbnailProps {
  img: string;
}

const Container = styled.div`
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

  .card-excerpt {
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
`

const Thumbnail = styled.div<ThumbnailProps>`
  min-width : 140px;
  padding-top : 65%;
  background-position : center;
  background-size : cover;
 // background-color : blue;
  transition : 0.3s;
  background-image : ${props => `url(${props.img})`};
`

function trimTitle(title: string, maxSize = 40) {
  if (title.length > maxSize) {
    return title.substring(0, maxSize) + '...';
  }
  return title;
}
export default function MediumArticleCard({ post }: Props) {
  const navigate = useNavigate();

  if (post.content === 'root') return <div>Should not happen</div>;
  console.log(post.content.metadata['featured image']);
  return (
    <Container>
      <div className='inner-container' onClick={() => {navigate(post.url)}} >
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
          <Breadcrumbs>
            {
              post.ancestors.splice(1).map((ancestor) => (
                <Link underline='hover' color='inherit' href={ancestor.url} >
                  {ancestor.content.metadata.title}
                </Link>
              ))
            }
          </Breadcrumbs>
      </div>
    </Container>
  )
}