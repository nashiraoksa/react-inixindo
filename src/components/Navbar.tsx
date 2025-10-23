import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="w-full flex justify-between items-center bg-blue-600 text-white px-6 py-4">
      <h1 className="text-xl font-bold">Aplikasiku</h1>
      <ul className="flex gap-4 items-center">
        <li className="hover:underline">
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/users">Users</NavLink>
        </li>
        <li className="hover:underline">
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
        {user ? (
          // Jika sudah login
          <>
            <li className="text-white">Halo, {user.email}</li>
            <li>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-medium text-sm py-2 px-4 rounded-md"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          // Jika belum login
          <>
            <li>
              <NavLink to="/login" className="hover:text-gray-300">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className="hover:text-gray-300">
                Register
              </NavLink>
            </li>
          </>
        )}
      </ul>
      {/* <button onClick={handleLogout}>Logout</button> */}
    </nav>
  );
}
