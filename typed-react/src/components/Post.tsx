import { PostObj } from "../types/interfaces";

interface PostProps {
  post: PostObj;
}

const Post = ({ post }: PostProps) => {
  const { id, title } = post;

  const changeTitle = (e: React.MouseEvent) => {
    console.log(e);
  };

  return (
    <div>
      <h2>{id}</h2>
      <h2>{title}</h2>
      <button onClick={changeTitle}>Add To Cart</button>
    </div>
  );
};

export default Post;
