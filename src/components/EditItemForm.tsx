import { useState } from "react";
import type { Item } from "../types/item";

interface Props {
  item: Item;
  onUpdate: (updatedItem: Item) => void;
  onCancel: () => void;
}

const EditItemForm: React.FC<Props> = ({ item, onUpdate, onCancel }) => {
  const [name, setName] = useState(item.name);
  const [desc, setDesc] = useState(item.description);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdate({ ...item, name, description: desc });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 rounded-md bg-gray-100 flex flex-col gap-4 items-start"
    >
      <h3>Edit Item</h3>
      <div className="flex gap-2">
        <input
          className="py-1 px-3 rounded"
          type="text"
          name="nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="py-1 px-3 rounded"
          type="text"
          name="deskripsi"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-end gap-2">
        <button className="bg-blue-500 py-1 px-2 rounded text-white" type="submit">
          Update
        </button>
        <button
          className="bg-red-500 py-1 px-2 rounded text-white"
          type="button"
          onClick={onCancel}
        >
          Batal
        </button>
      </div>
    </form>
  );
};

export default EditItemForm;
