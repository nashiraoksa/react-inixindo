import React, { useState, useEffect } from "react";
interface FormData {
  name: string;
  email: string;
}
const FormUser: React.FC = () => {
  const [form, setForm] = useState<FormData>({ name: "", email: "" });
  const [seconds, setSeconds] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // valdasi
    if (!form.name.trim()) {
      alert("name kosong");
      return;
    }
    if (!form.email.trim()) {
      alert("email kosong");
      return;
    }

    alert(`Data terkirim: ${form.name} - ${form.email}`);
  };

  const handleReset = () => {
    setForm({ name: "", email: "" });
    setSeconds(0);
  };

  return (
    <div className="p-4 border rounded w-96">
      <h2>Form User</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Nama"
          className="border p-1 mb-2 w-full"
          //   required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-1 mb-2 w-full"
          //   required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 
mr-2"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={handleReset}
          className="bg
gray-400 p-2"
        >
          Reset
        </button>
      </form>
      <p className="mt-3">⏱ Timer: {seconds} detik</p>
      <p>Nama: {form.name}</p>
      <p>Email: {form.email}</p>
    </div>
  );
};
export default FormUser;
