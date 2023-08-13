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
      <img src="../public/Img/logout.png" alt="" />
      <button onClick={handleSubmit}>Log Out</button>
    </div>
  );
};

export default LogOut;
