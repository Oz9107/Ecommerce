import { useNavigate } from "react-router-dom";

const CardProduct = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/product/${product.id}`);
  };

  //CON ESTO DETENEMOS LOS EVENTOS DE LOS PADRES AL HIJO EN ESPECIAL
  //EN ESTE CASO EN BUTTON YA QUE TIENE LA VARIABLE
  const handleAddCart = (e) => {
    e.stopPropagation();
  };

  return (
    // Con navigate podemos navegar entre paginas como con Link
    <article onClick={handleNavigate}>
      <header>
        <img src={product.images[0].url} alt="images" />
      </header>
      <section>
        <h4>{product.brand}</h4>
        <h3>{product.title}</h3>
        <article>
          <h3>Price</h3>
          <span>{product.price}</span>
        </article>
        {/* CON HANDLEADDCART DETENEMOS LA PROPAGACION DEL ONCLICK DE SU PADRE ARTICULE */}
        <button onClick={handleAddCart}>
          <i className="bx bxs-cart-add"></i>
        </button>
      </section>
    </article>
  );
};

export default CardProduct;
