import { useState } from "react";

const Post = () => {
  const [post, setPost] = useState([]);
  const fetchandUpdate = async () => {
    try {
      let res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      let data = await res.json();
      setPost(data);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <h1>Posts</h1>
      <button onClick={fetchandUpdate}>Get Post</button>

      {post.map((it) => (
        <li key={post.id}>
          {it.id} - {it.title}
        </li>
      ))}
    </>
  );
};
export default Post;
