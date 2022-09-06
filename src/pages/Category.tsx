import React from 'react'
import DefaultLayout from "../layouts/DefaultLayout";
import Heading from '../components/Heading';
import Post from '../util/Post';
import { useParams } from 'react-router-dom';

export default function Category() {

    const params = useParams();

    return (
        <DefaultLayout>
            <Heading>
                hi
            </Heading>
        </DefaultLayout>
    )
}
