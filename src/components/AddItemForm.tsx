import { useState } from "react";
import type { Item } from "../types/item";

interface Props {
  onAdd: (item: Omit<Item, "id">) => void;
}

const AddItemForm: React.FC<Props> = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !desc) return;
    onAdd({ name, description: desc });
    setName("");
    setDesc("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border p-4 rounded-md bg-gray-100 flex flex-col gap-4 items-start"
    >
      <h3>Tambah Item Baru</h3>
      <div className="flex gap-2">
        <input
          className="py-1 px-3 rounded"
          placeholder="nama"
          type="text"
          name="nama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="py-1 px-3 rounded"
          placeholder="deskripsi"
          type="text"
          name="deskripsi"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-blue-500 py-1 px-3 text-white rounded" type="submit">
          Tambah
        </button>
      </div>
    </form>
  );
};

export default AddItemForm;
