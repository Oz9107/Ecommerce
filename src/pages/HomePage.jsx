import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";

const HomePage = () => {
  const products = useSelector((recucer) => recucer.products);

  //el .log para verificar que trae los productos de la api
  console.log(products);

  return (
    <div>
      <div>
        {
          // ahora mapeamos con el .map con el encadenamiento opcional ?.
          products?.map(prod => (
            <CardProduct
            key={prod.id}
            product={prod}
            />
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
