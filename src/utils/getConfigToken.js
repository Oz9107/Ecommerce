//getConfigToken.js
//aca vamos a ingresar

const getConfigToken = () => {
  return {
    headers: {
        //Ya al tener el token en el localStorage necesitamos acceder a el
        //el Bearer sale de la documentacion
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
};

export default getConfigToken;