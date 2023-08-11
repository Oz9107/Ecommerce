//CartPage.jsx
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/cart.slice";
import { useEffect } from "react";
import ProductInCart from "../components/CartPage/ProductInCart";
import usePurchases from "../hooks/usePurchases";
import "../components/HomePage/styles/CartPage.css";
const CartPage = () => {
  const cart = useSelector((reducer) => reducer.cart);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartThunk());
  }, []);

  const totalAmount = cart.reduce((acc, cv) => {
    const subtotal = cv.quantity * cv.product.price;
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
          <ProductInCart key={prod.id} prodCart={prod} />
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
