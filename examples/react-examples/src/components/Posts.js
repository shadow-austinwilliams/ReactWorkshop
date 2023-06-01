import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState();

  const getAndSetPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    setPosts(data);
  };

  useEffect(() => {
    getAndSetPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts && posts.map((post) => <p key={post.id}>{post.body}</p>)}
    </div>
  );
};

export default Posts;
