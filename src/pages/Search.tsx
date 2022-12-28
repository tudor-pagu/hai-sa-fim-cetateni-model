import React from 'react'
import DefaultLayout from "../layouts/DefaultLayout";
import Heading from '../components/Heading';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import MediumArticleCard from '../components/MediumArticleCard';
import leafPosts from '../util/leafPosts';
import lunr from "lunr";


const PostsContainer = styled.div`
`


function getRelevantPosts(searchTerm:string) {
    const idx = lunr(function() {
        this.field('title');
        this.field('body');

        leafPosts.forEach((post,index) => {
            this.add({
                title: post.content?.metadata.title || "",
                body : post.content?.content || "",
                postId : post.id,
                id:index,
            })
        });
    });

    const posts = idx.search(searchTerm).slice(0,8).map((post)=>leafPosts[Number(post.ref)]);
    return posts;
}

export default function Search() {
    const params = useParams();
    ///if keys is empty
    const searchTerm = params['*'];
    const posts = getRelevantPosts(searchTerm?searchTerm:"");

    //TODO: Test the breadcrumbs

    return (
        <DefaultLayout hero={<Heading main beforeColonText="Cautare">
            {
                searchTerm
            }
        </Heading>}>

            <PostsContainer>
                {
                    posts.map((post) => <MediumArticleCard post={post} />)
                }
            </PostsContainer>
        </DefaultLayout>
    )
}
