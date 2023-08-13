import "../ProductIdPage/styles/Purchased.css";

const ProductPurchased = ({ purchase }) => {
  return (
    <article className="product-purchased">
      <header className="image-container">
        <img src={purchase.product.images[0].url} alt="Product" />
        <img src={purchase.product.images[1].url} alt="Product" />
      </header>
      <h3>{purchase.product.title}</h3>
      <div>{purchase.quantity}</div>
      <div>${purchase.quantity * purchase.product.price}</div>
    </article>
  );
};

export default ProductPurchased;
