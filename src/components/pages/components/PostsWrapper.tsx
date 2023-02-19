import { Post } from "@/types/shared-types";
import { Card } from "../../common";

interface PostsWrapperProps {
  postData: Post[];
  handleDeletePost: (id: number) => void;
}

export default function PostsWrapper({
  postData,
  handleDeletePost,
}: PostsWrapperProps) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between gap-4 py-10">
      {postData.map((item: Post) => {
        return (
          <div key={item.id} className="border-[2px] border-[aqua] rounded-sm">
            <Card
              title={item.title}
              content={item.body}
              id={item.id}
              handleDeletePost={() => handleDeletePost(item.id)}
            />
          </div>
        );
      })}
    </div>
  );
}
