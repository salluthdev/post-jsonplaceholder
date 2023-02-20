import { Post } from "@/types/shared-types";
import Popup from "./Popup";
import Button from "./Button";
import { useState } from "react";

interface CardProps {
  post: Post;
  title: string;
  content: string;
  id: number;
  handleEditPost: (post: Post) => void;
  handleDeletePost: (id: number) => void;
  newTitle: string;
  setNewTitle: (title: string) => void;
  newBody: string;
  setNewBody: (title: string) => void;
}

export default function Card({
  post,
  handleEditPost,
  handleDeletePost,
  newTitle,
  setNewTitle,
  newBody,
  setNewBody,
}: CardProps) {
  const { title, body: content, id } = post;
  const [editPopup, setEditPopup] = useState<boolean>(false);

  function handleEditClick() {
    setEditPopup(true);
    setNewTitle(title);
    setNewBody(content);
  }
  function handleDeleteClick() {
    handleDeletePost(id);
  }
  function handleSaveEdit(post: Post) {
    handleEditPost({ ...post, title: newTitle, body: content });
    setEditPopup(false);
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
      {editPopup && (
        <Popup onClick={() => setEditPopup(false)}>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-semibold">Edit Post</h1>
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="border border-stone-400 rounded-sm outline-none py-1 px-3 focus:border-stone-600"
            />
            <textarea
              value={newBody}
              onChange={(e) => setNewBody(e.target.value)}
              className="min-h-[180px] border border-stone-400 rounded-sm outline-none py-1 px-3 focus:border-stone-600"
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setEditPopup(false)}>
                Cancel
              </Button>
              <Button
                onClick={() =>
                  handleSaveEdit({
                    ...post,
                    title: newTitle,
                    body: "New body?",
                  })
                }
              >
                Save
              </Button>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}
