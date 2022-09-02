import posts from "./posts.json"

const flatPosts = [];

/**
 * exports all the posts that have no children, and are therefore 'leafs'
 */
function dfs(node) {
    for (const i in node.kids) {
        flatPosts.push(node.kids[i]);
        dfs(node.kids[i]);
    }
}

dfs(posts);

export default flatPosts.filter((article)=>article.kids.length===0);