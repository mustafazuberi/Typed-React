import { useState, useEffect } from "react";
import { PostCardObj, PostProps } from "../types/interfaces";
import PostCard from "./PostCard";

const PostList = () => {
  const [data, setData] = useState<PostCardObj[] | null>(null);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    const resJson = await res.json();
    setData(resJson);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {data
        ? data.map((post: PostProps) => (
            <div style={{ maxWidth: "400px" }}>
              <PostCard
                id={post.id}
                title={post.title}
                body={post.body}
                key={post.id}
              />
            </div>
          ))
        : "loading..."}
    </div>
  );
};

export default PostList;
