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
      <div className="flex gap-4 py-6">
        {postData.map((item: any) => {
          return (
            <div key={item.id}>
              <Card title={item.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
