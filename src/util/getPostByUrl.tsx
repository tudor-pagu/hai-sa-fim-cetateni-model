import posts from "./posts";
import Post from './Post';

const postMap = new Map<string,Post>();
function dfs(post:Post) {
    postMap.set(post.url, post);
    for (let i = 0; i < post.kids.length; i++) {
        dfs(post.kids[i]);
    }
}

dfs(posts);
function getPostByUrl(url:string):Post | undefined {
    return postMap.get('/'+url);
}
export default getPostByUrl;