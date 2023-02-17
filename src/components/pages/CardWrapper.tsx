import { useEffect, useState } from "react";
import { Card } from "../common";

export default function CardWrapper() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);

  const [postData, setPostData] = useState([]);

  return (
    <div className="wrapper">
      <div className="flex flex-wrap justify-between gap-4 py-10">
        {postData.map((item: any) => {
          return (
            <div
              key={item.id}
              className="min-w-[360px] flex-1 border-[2px] border-[aqua] rounded-sm"
            >
              <Card title={item.title} content={item.body} id={item.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
