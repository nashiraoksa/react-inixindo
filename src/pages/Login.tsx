import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const aksiLogin = () => {
    localStorage.setItem("token", "admin");
    navigate("/dashboard");
    // window.location.href = "/";
  };
  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={aksiLogin}>login</button>
    </div>
  );
}
