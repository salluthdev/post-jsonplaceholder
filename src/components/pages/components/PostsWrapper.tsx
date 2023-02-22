import { Post } from "@/types/shared-types";
import { Card } from "../../common";

interface PostsWrapperProps {
  postData: Post[];
  handleEditPost: (post: Post) => void;
  handleDeletePost: (id: number) => void;
  newTitle: string;
  setNewTitle: (newTitle: string) => void;
  newBody: string;
  setNewBody: (newBody: string) => void;
}

export default function PostsWrapper({
  postData,
  handleEditPost,
  handleDeletePost,
  newTitle,
  setNewTitle,
  newBody,
  setNewBody,
}: PostsWrapperProps) {
  return ( 
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-between gap-4 py-10">
      {postData.map((item: Post) => {
        return (
          <div key={item.id} className="border-[2px] border-[aqua] rounded-sm">
            <Card
              post={item}
              title={item.title}
              content={item.body}
              id={item.id}
              handleEditPost={() => handleEditPost(item)}
              handleDeletePost={() => handleDeletePost(item.id)}
              newTitle={newTitle}
              setNewTitle={setNewTitle}
              newBody={newBody}
              setNewBody={setNewBody}
            />
          </div>
        );
      })}
    </div>
  );
}
