import { PostProps } from "../types/interfaces";

const PostCard = ({ title, id, body }: PostProps) => {
  return (
    <div>
      <h2>
        {id} ) {title}
      </h2>
      <h4>{body}</h4>
    </div>
  );
};

export default PostCard;
