//FilterCategory.jsx
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import {
  getAllProductsThunk,
  getFilteredProductsThunk,
} from "../../store/slices/products.slice";
import { useDispatch } from "react-redux";
import "../HomePage/styles/FilterCategory.css";

const FilterCategory = () => {
  const [categories, getAllCategories] = useFetch();

  useEffect(() => {
    getAllCategories("/categories");
  }, []);


  const dispatch = useDispatch();

  const handleAllCategories = () => {
    dispatch(getAllProductsThunk());
  };

  const handleFilterCategories = (id) => {
    dispatch(getFilteredProductsThunk(id));
  };

  return (
    <article className="filter-category">
      <h3>Category</h3>
      <ul>
        <li onClick={handleAllCategories}>All Categories</li>
        {categories?.map((category) => (
          <li
            onClick={() => handleFilterCategories(category.id)}
            key={category.id}
          >
            {category.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default FilterCategory;
