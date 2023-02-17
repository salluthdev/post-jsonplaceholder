import Link from "next/link";

interface CardProps {
  title: string;
  content: string;
  id: number;
}

export default function Card({ title, content, id }: CardProps) {
  return (
    <Link
      className="h-full flex flex-col justify-between cursor-pointer"
      href={`post/${id}`}
    >
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
      <div className="bg-[aqua] py-1 px-4">
        <p className="text-sm text-stone-800">Read more {">"}</p>
      </div>
    </Link>
  );
}
