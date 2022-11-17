import { useDispatch, useSelector } from "react-redux";
import { like } from "./store/like-slice";

const Likes = () => {
  const likes = useSelector((state) => state.likes.likes);
  const dispatch = useDispatch();

  const handleLike = () => dispatch(like());

  return (
    <>
      <h3>Likes: {likes}</h3>
      <button onClick={handleLike}>Like</button>
    </>
  );
};

export { Likes };
