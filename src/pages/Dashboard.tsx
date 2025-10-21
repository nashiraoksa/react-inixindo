import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const aksiLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    // window.location.href = "/";
  };

  return (
    <div>
      <h2>Halaman Dashboard</h2>
      <button onClick={aksiLogout}>Logout</button>
    </div>
  );
}
