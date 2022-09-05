import postsJSON from "../postsJSON.json"
import Post from "./Post";
const posts:Post = {url:"", content:null, kids:[], id : 1, ancestors:[]};
Object.assign(posts, postsJSON);
export default posts;