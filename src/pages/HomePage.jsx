import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import { useRef, useState } from "react";
import "../App.css";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";

const HomePage = () => {
  const [nameValue, setNameValue] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((recucer) => recucer.products);

  //el .log para verificar que trae los productos de la api

  const inputName = useRef();

  const handleFilterName = () => {
    setNameValue(inputName.current.value);
    //esto es igual a e.target.value
  };

  const cbFilter = (prod) => {
    //filter by name
    const inputNameLower = nameValue.toLowerCase().trim();
    const nameReal = prod.title.toLowerCase();
    const filterName = nameReal.includes(inputNameLower);
    //filter by price
    const price = Number(prod.price); //transformamos a numero
    const filterPrice = fromTo.from <= prod && price <= fromTo.to;
    return filterName && filterPrice;
  };

  return (
    <div>
      <input
        style={{ fontSize: "1.8rem" }}
        value={nameValue}
        ref={inputName}
        onChange={handleFilterName}
        type="text"
      />
      <FilterCategory />
      <FilterPrice />
      <div className="Product_container">
        {
          // ahora mapeamos con el .map con el encadenamiento opcional ?.
          products?.filter(cbFilter).map((prod) => (
            <CardProduct key={prod.id} product={prod} />
          ))
        }
      </div>
    </div>
  );
};

export default HomePage;
