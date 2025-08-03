import { useContext, useState } from "react";
import Post from "../Post/Post";
import { PostList as PostListData } from "../../store/post-list-store";
import WelcomeMessage from "../WelcomeMessage";

export default function PostList() {
  const { postList, addInitialPosts } = useContext(PostListData);
  const [isDataFetched, setDataFetched] = useState(false);
  console.log(postList);
  if (!isDataFetched) {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
      });
    setDataFetched(true);
  }
  return (
    <>
      {postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
