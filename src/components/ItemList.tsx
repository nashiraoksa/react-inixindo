import type { Item } from "../types/item";

interface Props {
  items: Item[];
  onEdit: (item: Item) => void;
  onDelete: (id: number) => void;
}

const ItemList: React.FC<Props> = ({ items, onEdit, onDelete }) => {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="p-2">Nama</th>
          <th>Deskripsi</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td className="p-4">{item.name}</td>
            <td>{item.description}</td>
            <td className="space-x-2">
              <button
                className="bg-blue-500 py-1 px-2 rounded text-white"
                onClick={() => onEdit(item)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 py-1 px-2 rounded text-white"
                onClick={() => onDelete(item.id)}
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ItemList;
