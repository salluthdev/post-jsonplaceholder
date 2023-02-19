import Link from "next/link";

interface CardProps {
  title: string;
  content: string;
  id: number;
  handleDeletePost: (id: number) => void;
}

export default function Card({
  title,
  content,
  id,
  handleDeletePost,
}: CardProps) {
  function handleDeleteClick() {
    handleDeletePost(id);
  }

  return (
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
        <p
          className="text-sm text-stone-800 cursor-pointer"
          onClick={handleDeleteClick}
        >
          Delete
        </p>
      </div>
    </div>
  );
}
