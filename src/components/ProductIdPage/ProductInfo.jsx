import { useState } from "react";
import useCartApi from "../../hooks/useCartApi";
import "./styles/ProductInfo.css"; // Importa el archivo de estilos

const ProductInfo = ({ product }) => {
  //creamos un contador
  const [counter, setCounter] = useState(1);

  const handleMinus = () => {
    if (counter - 1 >= 1) {
      setCounter(counter - 1);
    }
  };

  const handlePlus = () => setCounter(counter + 1);

  const { addProductInCart } = useCartApi();

  const handleAddCart = () => {
    const data = {
      quantity: counter,
      productId: product.id,
    };
    addProductInCart(data);
  };

  return (
    <article className="product">
      <div className="product-info">
        {/* utilizamos la info de la api */}
        <h4 className="product-info__brand">{product?.brand}</h4>
        <h3 className="product-info__title">{product?.title}</h3>
        <p className="product-info__description">{product?.description}</p>
        <section className="product-info__section">
          <h4 className="product-info__section-label">Price</h4>
          <span className="product-info__price">${product?.price}</span>
        </section>
        <section className="product-info__section">
          <h4 className="product-info__section-label">Quantity</h4>
          <div className="product-info__quantity">
            <button
              className="product-info__quantity-button"
              onClick={handleMinus}
            >
              -
            </button>
            <span className="product-info__quantity-value">{counter}</span>
            <button
              className="product-info__quantity-button"
              onClick={handlePlus}
            >
              +
            </button>
            <button
              className="product-info__add-cart-button"
              onClick={handleAddCart}
            >
              Add to cart <i className="bx bxs-cart-add"></i>
            </button>
          </div>
        </section>
      </div>
    </article>
  );
};

export default ProductInfo;
