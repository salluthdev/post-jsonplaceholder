import { useEffect, useState } from "react";
import { Button, Card } from "../common";

export default function CardWrapper() {
  const [postData, setPostData] = useState([]);
  const [idStart, setIdStart] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(
      `https://jsonplaceholder.typicode.com/posts?_start=${idStart}&_limit=10`
    )
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, [idStart]);

  return (
    <div className="wrapper">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between gap-4 py-10">
        {postData.map((item: any) => {
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
                setIdStart(idStart - 10);
                setCurrentPage(currentPage - 1);
              }}
            >
              Prev
            </Button>
          )}
          <div className="flex items-end gap-2">
            {currentPage > 1 && (
              <Button variant="outline">{currentPage - 1}</Button>
            )}
            <Button>{currentPage}</Button>
            <Button variant="outline">{currentPage + 1}</Button>
          </div>
          {postData !== null && (
            <Button
              variant="outline"
              onClick={() => {
                setIdStart(idStart + 10);
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
