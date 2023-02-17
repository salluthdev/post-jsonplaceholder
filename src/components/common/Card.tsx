interface CardProps {
  title: string;
  content: string;
}

export default function Card({ title, content }: CardProps) {
  return (
    <div>
      <div className="bg-stone-800 p-4 border-b border-[aqua]">
        <h1 className="text-sm font-semibold text-white uppercase">{title}</h1>
      </div>
      <div className="p-4">
        <p className="text-sm text-stone-800">{content}</p>
      </div>
    </div>
  );
}
