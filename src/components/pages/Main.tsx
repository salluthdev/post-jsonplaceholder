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

  return (
    <div className="wrapper">
      <PostsWrapper postData={postData} />
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        nextPageLength={nextPageLength}
      />
    </div>
  );
}
