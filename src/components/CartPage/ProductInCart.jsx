import useCartApi from "../../hooks/useCartApi";
import "./ProductInCart.css";
const ProductInCart = ({ prodCart }) => {
  const { deleteProductInCart } = useCartApi();

  const handleDeleteCart = () => {
    deleteProductInCart(prodCart.id);
  };

  return (
    <article className="product-in-cart">
      <header>
        <img src={prodCart.product.images[0].url} alt="img" />
        <section>
          <h3>{prodCart.product.title}</h3>
          <span>{prodCart.quantity}</span>
          <button className="delete-button" onClick={handleDeleteCart}>
            <i className="bx bx-trash"></i>
          </button>
        </section>
        <footer>
          <span>Subtotal:</span>
          <span>{prodCart.product.price * prodCart.quantity}</span>
        </footer>
      </header>
    </article>
  );
};

export default ProductInCart;
