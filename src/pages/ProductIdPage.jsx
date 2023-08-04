import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import ProductInfo from "../components/ProductIdPage/ProductInfo";
import SimilarProducts from "../components/ProductIdPage/SimilarProducts";

const ProductIdPage = () => {
  //asi creamos un parametro el cual desestructuramos
  const { id } = useParams();

  //necesitamos renderizarlo para utilizarlo creamos un hook useFetch

  const [product, getSingleProduct] = useFetch()

  //creamos un useEffect y pasamos el path como parametro, revisar la documentacion para saber el path
  useEffect(() => {
    getSingleProduct(`/products/${id}`)
  },[id])

  //.log para verificar la informacion que llega desde la api
  console.log(product);

  return (
    <div>
      <ProductInfo
        // pasamos como prop, para utilizarlo en otro componente
        product={product}
      />
      <SimilarProducts 
      product={product} 
      />
    </div>
  );
};

export default ProductIdPage;
