import useCartApi from "../../hooks/useCartApi";
import { useState } from "react";
import "./ProductInCart.css";

const ProductInCart = ({ prodCart }) => {
  const { deleteProductInCart } = useCartApi();

  const [quantity, setQuantity] = useState(prodCart.quantity);

  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id);
  };

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <article className="product-in-cart">
      <header>
        <img src={prodCart.product.images[0].url} alt="img" />
        <section>
          <h3>{prodCart.product.title}</h3>
          <div className="quantity-controls">
            <button
              className="quantity-button"
              onClick={handleDecreaseQuantity}
            >
              -
            </button>
            <span className="quantity">{quantity}</span>
            <button
              className="quantity-button"
              onClick={handleIncreaseQuantity}
            >
              +
            </button>
          <button className="delete-button" onClick={handleDeleteCart}>
            <i className="bx bx-trash"></i>
          </button>
          </div>
        </section>
        <footer>
          <span>Subtotal:</span>
          <span>{prodCart.product.price * quantity}</span>
        </footer>
      </header>
    </article>
  );
};

export default ProductInCart;
