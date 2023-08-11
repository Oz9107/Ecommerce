import { useSelector } from "react-redux";
import CardProduct from "../components/HomePage/CardProduct";
import { useRef, useState } from "react";
import FilterCategory from "../components/HomePage/FilterCategory";
import FilterPrice from "../components/HomePage/FilterPrice";
import "../components/HomePage/styles/HomePage.css";

const HomePage = () => {
  const [nameValue, setNameValue] = useState("");
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: Infinity,
  });

  const products = useSelector((recucer) => recucer.products);

  const inputName = useRef();

  const handleFilterName = () => {
    setNameValue(inputName.current.value);
  };

  const cbFilter = (prod) => {
    const inputNameLower = nameValue.toLowerCase().trim();
    const nameReal = prod.title.toLowerCase();
    const filterName = nameReal.includes(inputNameLower);
    const price = Number(prod.price);
    const filterPrice = fromTo.from <= price && price <= fromTo.to;
    return filterName && filterPrice;
  };

  return (
    <div className="home-page-container">
      <div className="filters-container">
        <div className="search-container">
          <input
            className="search-input"
            placeholder="Search for products"
            value={nameValue}
            ref={inputName}
            onChange={handleFilterName}
            type="text"
          />
          <button className="search-button" onClick={handleFilterName}>
            <i className="bx bx-search-alt-2"></i>
          </button>
        </div>
        <FilterPrice setFromTo={setFromTo} />
        <FilterCategory />
      </div>
      <div className="Product_container">
        {products?.filter(cbFilter).length === 0 ? (
          <h2> 😥 Sorry, no exist products with that filter. ❌</h2>
        ) : (
          products
            ?.filter(cbFilter)
            .map((prod) => <CardProduct key={prod.id} product={prod} />)
        )}
      </div>
    </div>
  );
};

export default HomePage;
