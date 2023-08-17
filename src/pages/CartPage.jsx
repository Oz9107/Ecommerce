import { useDispatch, useSelector } from "react-redux";
import {
  getCartThunk,
  updateCartItemQuantity,
} from "../store/slices/cart.slice"; // Asegúrate de importar la acción necesaria para actualizar la cantidad
import { useEffect, useState } from "react"; // Importa useState
import ProductInCart from "../components/CartPage/ProductInCart";
import usePurchases from "../hooks/usePurchases";
import "../components/HomePage/styles/CartPage.css";

const CartPage = () => {
  const cart = useSelector((reducer) => reducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const [productQuantities, setProductQuantities] = useState(
    cart.reduce((quantities, cv) => {
      quantities[cv.id] = cv.quantity;
      return quantities;
    }, {})
  );

  const updateQuantity = (productId, newQuantity) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: newQuantity,
    }));
    dispatch(updateCartItemQuantity({ productId, quantity: newQuantity }));
  };

  const totalAmount = cart.reduce((acc, cv) => {
    const subtotal = productQuantities[cv.id] * cv.product.price;
    return acc + subtotal;
  }, 0);

  const { makeAPurchase } = usePurchases();

  const handlePurchase = () => {
    makeAPurchase();
  };

  return (
    <section className="cart-section">
      <h2 className="cart-title">Cart</h2>
      <div className="product-list">
        {cart.map((prod) => (
          <ProductInCart
            key={prod.id}
            prodCart={prod}
            quantity={productQuantities[prod.id]}
            onUpdateQuantity={(newQuantity) =>
              updateQuantity(prod.id, newQuantity)
            }
          />
        ))}
      </div>
      <footer className="cart-footer">
        <span className="cart-total">Total</span>
        <h3 className="cart-amount">{totalAmount}</h3>
        <button className="checkout-button" onClick={handlePurchase}>
          Checkout
        </button>
      </footer>
    </section>
  );
};

export default CartPage;
