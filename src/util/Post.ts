interface Content {
    content:'string',
    metadata: {
        title:string,
        featured: boolean,
        excerpt?: string,
        "featured image": string,
        timestamp: Date,
        author: string,
    },
}

interface Post {
    url: string;
    content: 'root' | Content,
    kids: Post[],
    id: number,
    ancestors : Post[],
}

export default Post;