import posts from "./posts";
import Post from './Post';

const postMap = new Map<number,Post>();
function dfs(post:Post) {
    postMap.set(post.id, post);
    for (let i = 0; i < post.kids.length; i++) {
        dfs(post.kids[i]);
    }
}
dfs(posts);
function getPostById(id:number):Post {
    return postMap.get(id) as Post;
}
export default getPostById;