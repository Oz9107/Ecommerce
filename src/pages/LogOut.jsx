import { useNavigate } from "react-router-dom";
import "../App.css";

const LogOut = () => {
  const navigate = useNavigate(); // Obtén la función navigate

  const handleSubmit = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Redirige al usuario a la ruta /login
  };

  return (
    <div className="LogOut">
      <h2>
        <i className="bx bx-exit"></i>
      </h2>
      <button onClick={handleSubmit}>Log Out</button>
    </div>
  );
};

export default LogOut;
