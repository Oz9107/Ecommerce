//LoginPage.jsx
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  //en el register vamos a ingresar: Un formulario para estoy vamos a la documentacion
  //Revisamos que campos se necesita en el create Login
  //Ingresamos los campos solicitados por la api
  //cuando son varios input se recomiendo utilizar la libreria hook-form (useForm):

  const { register, reset, handleSubmit } = useForm();

  const { loginUser } = useAuth();

  const navigate = useNavigate()

  //esto al dar click y hacer login generara un token

  const submit = (data) => {
    loginUser(data, navigate);
    reset({
      email: "",
      password: "",
    });
  };

  return (
    <form className="login-form" onSubmit={handleSubmit(submit)}>
      <h2>Welcome! Enter your email and password to continue</h2>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register("password")} type="password" id="password" />
      </div>
      <button>Login</button>
    </form>
  );
};

export default LoginPage;
