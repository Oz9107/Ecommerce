//useAuth.js
import axios from "axios"

const useAuth = () => {

const createUser = (data, navigate) => {
  const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users";
  axios
    .post(url, data)
    .then((res) => {
      console.log(res.data);
      navigate("/login");
    })
    .catch((err) => console.log(err));
};
    const loginUser = (data, navigate) => {
      const url = "https://e-commerce-api-v2.academlo.tech/api/v1/users/login";
      axios
        .post(url, data)
        //al hacer login va generar un token
        //para trabajar con el token necesitamos trabajar con el localStorage (.setItem, .getItem, .removeItem)
        //el token se trabaja en el then (en el localStorage solo se guarda string o number pero no arreglos ni objetos)
        .then((res) => {
          console.log(res.data);
          //creamos y guardamos un valor en el localStorage con (setItem)
          //con esto asi cerremos la pagina, los datos quedaran almacenados
          localStorage.setItem("token", res.data.token);
          //ahora cuando haga login que vuelva a la pagina principal
          navigate("/");
        })
        //Si hay un error hacemos que se elimine con (reomoveItem)
        .catch((err) => {
          console.log(err);
          localStorage.removeItem("token");
        });
    };

    return { createUser, loginUser };
}

export default useAuth
