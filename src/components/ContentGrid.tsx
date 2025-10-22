import Card from "./Card";

export default function ContentGrid() {
  return (
    <section className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card title="Cepat" desc="Membangun UI dengan tailwind" />
      <Card title="Responsive" desc="Lorem ipsum dolor sit" />
      <Card title="Modern" desc="Membangun UI secara modern" />
    </section>
  );
}
