import React from 'react'
import DefaultLayout from "../layouts/DefaultLayout";
import Heading from '../components/Heading';
import Post from '../util/Post';
import { useParams } from 'react-router-dom';
import getPostByUrl from '../util/getPostByUrl';
import { Breadcrumbs } from '@mui/material';
import getPostById from '../util/getPostById';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MediumArticleCard from '../components/MediumArticleCard';
import theme from "../global/theme";
import posts from '../util/posts';
import leafPosts from '../util/leafPosts';

const StyledLink = styled(Link)`
  color : ${theme.linkHighlight};
`

const PostsContainer = styled.div`
`


function getRelevantPosts(searchTerm:String) {
    const x = leafPosts;
    return;
}

export default function Search() {
    const params = useParams();
    ///if keys is empty
    const searchTerm = params['*'];
    const relevantPosts = getRelevantPosts(searchTerm?searchTerm:"");

    //TODO: Test the breadcrumbs

    return null;
   /* return (
        <DefaultLayout hero={<Heading main>
            {
                searchTerm
            }
            
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
        </Heading>}>

            <PostsContainer>
                {
                    post.kids.map((post) => <MediumArticleCard post={post} />)
                }
            </PostsContainer>
        </DefaultLayout>
    )*/
}
