import { useState } from "react"

const ProductInfo = ({product}) => {

//creamos un contador
const [counter, setCounter] = useState(1)

const handleMinus = () => {
    if(counter -1 >= 1) {
        setCounter(counter -1)
    }
}


const handlePlus = () => setCounter(counter + 1)



  return (
    <articule>
      {/* utilizamos la info de la api */}
      <h4>{product?.brand}</h4>
      <h3>{product?.title}</h3>
      <p>{product?.description}</p>
      <section>
        <h4>Price</h4>
        <span>{product?.price}</span>
      </section>
      <section>
        <h4>Quantity</h4>
        <div>
          <button onClick={handleMinus}>-</button>
          <span>{counter}</span>
          <button onClick={handlePlus}>+</button>
        </div>
      </section>
      <footer>
        <button>
          Add to cart <i className="bx bxs-cart-add"></i>
        </button>
      </footer>
    </articule>
  );
}

export default ProductInfo
