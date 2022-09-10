interface Content {
    content:string,
    metadata: {
        title:string,
        featured: boolean,
        excerpt?: string,
        "featured image": string,
        "featured image alt":string,
        timestamp: Date,
        author: string,
    },
}

interface Post {
    url: string;
    content: null | Content,
    kids: Post[],
    id: number,
    ancestors : number[],
}

export default Post;