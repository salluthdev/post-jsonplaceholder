interface CardProps {
  title: string;
}

export default function Card({ title }: CardProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
