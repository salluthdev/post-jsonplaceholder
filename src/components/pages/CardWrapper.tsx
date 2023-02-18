import { useEffect, useState } from "react";
import { Button, Card } from "../common";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function CardWrapper() {
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
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between gap-4 py-10">
        {postData.map((item: Post) => {
          return (
            <div
              key={item.id}
              className="min-w-[100%] sm:min-w-[360px] flex-1 border-[2px] border-[aqua] rounded-sm"
            >
              <Card title={item.title} content={item.body} id={item.id} />
            </div>
          );
        })}
      </div>
      <div className="mb-10">
        <div className="flex flex-wrap items-end gap-4">
          {currentPage > 1 && (
            <Button
              variant="outline"
              onClick={() => {
                setCurrentPage(currentPage - 1);
              }}
            >
              Prev
            </Button>
          )}

          <div className="flex items-end gap-2">
            {currentPage > 1 && (
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentPage(currentPage - 1);
                }}
              >
                {currentPage - 1}
              </Button>
            )}
            <Button>{currentPage}</Button>
            {nextPageLength !== 0 && (
              <Button
                variant="outline"
                onClick={() => {
                  setCurrentPage(currentPage + 1);
                }}
              >
                {currentPage + 1}
              </Button>
            )}
          </div>
          {nextPageLength !== 0 && (
            <Button
              variant="outline"
              onClick={() => {
                setCurrentPage(currentPage + 1);
              }}
            >
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
