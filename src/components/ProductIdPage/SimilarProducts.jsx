import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import CardProduct from "../HomePage/CardProduct";
import "./styles/SimilarProducts.css";
//hacemos una peticion de los elementos
const SimilarProducts = ({ product }) => {
  const [productsByCaregory, getProductByCategory] = useFetch();

  useEffect(() => {
    //ingresamos que una peticion se genere hasta que realice primero una antes
    //es decir va ser una peticion en paraleo para eso el if
    if (product) {
      getProductByCategory(`/products?categoryId=${product.categoryId}`);
    }
    //tambien se va ejecutar aparte del primer renderizado, es decir cuando cambien para eso el []
  }, [product]);

  console.log(productsByCaregory);

  const cbFilter = (prod) => {
    if (prod.id !== product.id) {
      return prod;
    }
  };

  return (
    <div className="similar-products">
      <h3 className="similar-products__title">Similar Products</h3>
      <div className="similar-products__list">
        {productsByCaregory?.filter(cbFilter).map((prod) => (
          <CardProduct key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
};

export default SimilarProducts;
