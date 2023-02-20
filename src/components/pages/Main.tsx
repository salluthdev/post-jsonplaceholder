import { useEffect, useState } from "react";
import { Post } from "@/types/shared-types";
import { Pagination, PostsWrapper } from "./components";

export default function Main() {
  const [postData, setPostData] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [nextPageLength, setNextPageLength] = useState<number>(0);

  useEffect(() => {
    // fetch the postData in active page
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_start=${
            (currentPage - 1) * 10
          }&_limit=10`
        );
        const data = await response.json();
        setPostData(data);
      } catch (error) {
        console.log("Error while fetching data: ", error);
      }
    };
    fetchPosts();

    // fetch the postData length in the next page
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${
        currentPage * 10
      }&_limit=10`
    )
      .then((res) => res.json())
      .then((data) => setNextPageLength(data.length));
  }, [currentPage]);

  // delete post
  function handleDeletePost(id: number) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then(() => {
      const updatedData = postData.filter((post) => post.id !== id);
      setPostData(updatedData);
    });
  }

  // edit post
  function handleEditPost(post: Post) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}`, {
      method: "PUT",
      body: JSON.stringify({
        title: "new title",
        body: "new body here?",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const updatedData = postData.map((p) => {
          if (p.id === post.id) {
            return data;
          } else {
            return p;
          }
        });
        setPostData(updatedData);
      });
  }

  return (
    <div className="wrapper">
      <PostsWrapper
        postData={postData}
        handleEditPost={handleEditPost}
        handleDeletePost={handleDeletePost}
      />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nextPageLength={nextPageLength}
      />
    </div>
  );
}
