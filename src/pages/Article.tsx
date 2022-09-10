import React from 'react'
import DefaultLayout from "../layouts/DefaultLayout";
import Heading from '../components/Heading';
import { useParams } from 'react-router-dom';
import getPostByUrl from '../util/getPostByUrl';
import { Breadcrumbs } from '@mui/material';
import getPostById from '../util/getPostById';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../global/theme';
import PostBody from '../components/PostBody';
const StyledLink = styled(Link)`
  color : ${theme.linkHighlight};
`


export default function Category() {
    const params = useParams();
    const post = getPostByUrl('articole/' + params['*']);

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
                post.content
                    ? post.content.metadata.title
                    : 'Articole'
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
            <PostBody post={post} />
        </DefaultLayout>
    )
}
