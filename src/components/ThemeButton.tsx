import { useTheme } from "../context/ThemeContext";

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  const style = {
    backgroundColor: theme === "dark" ? "#333" : "#f0f0f0",
    color: theme === "dark" ? "#f0f0f0" : "#333",
    border: "1px solid #ddd",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <button onClick={toggleTheme} style={style}>
      Current: {theme.toUpperCase()}
    </button>
  );
};

export default ThemeButton;
