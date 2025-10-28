import { useEffect, useState } from "react";
import type { Item } from "../types/item";
import ItemList from "../components/ItemList";
import AddItemForm from "../components/AddItemForm";
import EditItemForm from "../components/EditItemForm";

//Data Dummy untuk inisialisasi
const initialItems: Item[] = [
  { id: 1, name: "React", description: "Library UI dari Facebook" },
  { id: 2, name: "Vue", description: "Framework UI dari Evan You" },
  { id: 3, name: "Angular", description: "Framework UI dari Google" },
];

export default function About() {
  const [items, setItems] = useState<Item[]>(() => {
    try {
      const savedItems = localStorage.getItem("items");
      return savedItems ? JSON.parse(savedItems) : initialItems;
    } catch (error) {
      console.error("Error parsing localStorage data:", error);
      return initialItems;
    }
  });
  const [editing, setEditing] = useState<Item | null>(null);

  const handleAddItem = (item: Omit<Item, "id">) => {
    const newItem: Item = {
      id: Date.now(),
      ...item,
    };
    setItems([...items, newItem]);
  };

  const handleEdit = (item: Item) => {
    setEditing(item);
  };

  const handleUpdate = (updatedItem: Item) => {
    setItems(items.map((item) => (item.id === updatedItem.id ? updatedItem : item)));
    setEditing(null);
  };

  const handleCancelEdit = () => {
    setEditing(null);
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Yakin ingin menghapus item ini?")) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  useEffect(() => {
    try {
      localStorage.setItem("items", JSON.stringify(items));
      console.log("Saved to localStorage:", localStorage.getItem("items"));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [items]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Daftar Catatan (CRUD Demo)</h1>
      {editing ? (
        <EditItemForm item={editing} onUpdate={handleUpdate} onCancel={handleCancelEdit} />
      ) : (
        <AddItemForm onAdd={handleAddItem} />
      )}
      <hr />
      <ItemList items={items} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}
