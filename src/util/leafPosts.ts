import posts from "./posts"
import Post from './Post';

const leafPosts:Post[] = [];

/**
 * exports all the posts that have no children, and are therefore 'leafs'
 */
function dfs(node:Post) {
    for (const i in node.kids) {
        leafPosts.push(node.kids[i]);
        dfs(node.kids[i]);
    }
}

dfs(posts);

export default leafPosts.filter((article)=>article.kids.length===0);