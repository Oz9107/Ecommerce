//RegisterPage.jsx
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import "../App.css";
const RegisterPage = () => {
  //en el register vamos a ingresar: Un formulario para estoy vamos a la documentacion
  //Revisamos que campos se necesita en el create user
  //Ingresamos los campos solicitados por la api
  //cuando son varios input se recomiendo utilizar la libreria hook-form (useForm):
  const { register, reset, handleSubmit } = useForm();

  const { createUser } = useAuth();

  const navigate = useNavigate();

  const submit = (data) => {
    createUser(data, navigate);
    reset({ firstName: "", lastName: "", email: "", password: "", phone: "" });
  };

  return (
    // se agrega el onSubmit ya que es un formulario
    <form className="register-form" onSubmit={handleSubmit(submit)}>
      <h2>Welcome! Register your data to continue</h2>
      <div>
        <label htmlFor="firstname">First Name</label>
        {/* A cada input le agregamos el spread y register (segun indica la biblioteca) */}
        <input {...register("firstName")} type="text" id="firstname" />
      </div>
      <div>
        <label htmlFor="lastname">Last Name</label>
        <input {...register("lastName")} type="text" id="lastname" />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input {...register("email")} type="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input {...register("password")} type="password" id="password" />
      </div>
      <div>
        <label htmlFor="phone">Phone</label>
        <input {...register("phone")} type="text" id="phone" />
      </div>
      <button>Create User</button>
    </form>
  );
};

export default RegisterPage;
