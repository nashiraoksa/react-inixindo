import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const aksiLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-4">
      <h1 className="text-xl font-bold">Aplikasiku</h1>
      <ul className="flex gap-4">
        <li className="hover:underline">
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>
      <button onClick={aksiLogout}>Logout</button>
    </nav>
  );
}
