interface CardProps {
  title: string;
  desc: string;
}

export default function Card({ title, desc }: CardProps) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
