import postsJSON from "../postsJSON.json"
import Post from "./Post";
const posts:Post = {url:"", content:"root", kids:[], id : 1};
Object.assign(posts, postsJSON);
export default posts;