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

const StyledLink = styled(Link)`

`

const PostsContainer = styled.div`
`

export default function Category() {

    const params = useParams();
    const post = getPostByUrl('categorii/' + params['*']);
    if (post === undefined || post.content === null) {
        return (
            <DefaultLayout hero={<Heading main>
                Postarea nu a fost gasita
            </Heading>}>

            </DefaultLayout>
        )
    }
    //TODO: Test the breadcrumbs
    return (
        <DefaultLayout hero={<Heading main>
            {
                post.content.metadata.title
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
    )
}
