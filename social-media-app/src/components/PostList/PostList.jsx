import { useContext } from "react";
import Post from "../Post/Post";
import { PostList as PostListData } from "../../store/post-list-store";

export default function PostList() {
  const { postList } = useContext(PostListData);
  console.log(postList);
  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
