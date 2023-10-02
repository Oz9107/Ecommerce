import axios from "axios"
import { useState } from "react"

//creamos una peticion comenzando con un get para obtener informacion
const useFetch = () => {
  //const baseUrl = "https://ecommerceapi-xbph.onrender.com";
  const baseUrl = "https://e-commerce-api-v2.academlo.tech/api/v1";
  //creamos un estado y luego una funciona
  const [infoApi, setInfoApi] = useState();

  //GET
  const getApi = (path = "") => {
    //utilizamos axios
    const url = `${baseUrl}${path}`;
    axios
      .get(url)
      .then((res) => setInfoApi(res.data))
      .catch((err) => console.log(err));
  };

  return [infoApi, getApi];
}

export default useFetch
