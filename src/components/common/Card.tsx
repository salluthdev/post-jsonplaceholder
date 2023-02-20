import { Post } from "@/types/shared-types";
import Popup from "./Popup";

interface CardProps {
  title: string;
  content: string;
  id: number;
  handleEditPost: (post: Post) => void;
  handleDeletePost: (id: number) => void;
}

export default function Card({
  title,
  content,
  id,
  handleEditPost,
  handleDeletePost,
}: CardProps) {
  function handleEditClick() {
    handleEditPost({ title, body: content, id });
  }
  function handleDeleteClick() {
    handleDeletePost(id);
  }

  return (
    <>
      <div className="h-full flex flex-col justify-between">
        <div>
          <div className="bg-stone-800 p-4 border-b border-[aqua]">
            <h1 className="text-sm font-semibold text-white uppercase">
              {title}
            </h1>
          </div>
          <div className="p-4">
            <p className="text-sm text-stone-800">{content}</p>
          </div>
        </div>
        <div className="flex justify-between items-center bg-[aqua] py-1 px-4">
          <a
            className="text-sm text-stone-800 hover:underline"
            href={`post/${id}`}
          >
            Read more {">"}
          </a>
          <div className="flex items-center gap-1">
            <p
              className="text-sm text-stone-800 cursor-pointer hover:underline"
              onClick={handleEditClick}
            >
              Edit
            </p>
            <p className="text-sm text-stone-800">|</p>
            <p
              className="text-sm text-stone-800 cursor-pointer hover:underline"
              onClick={handleDeleteClick}
            >
              Delete
            </p>
          </div>
        </div>
      </div>
      <Popup>
        <div className="flex-flex col">
          <h1 className="text-xl font-semibold">Edit Post</h1>
        </div>
      </Popup>
    </>
  );
}
