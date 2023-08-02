import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { getAllProductsThunk } from "./store/slices/products.slice";
import { useDispatch } from "react-redux";
import Header from "./components/shared/Header";

function App() {
  //creamos el despachador
  const dispatch = useDispatch();

  //aca vamos con la peticion asincronica
  useEffect(() => {
    //despachamos el thunk
    dispatch(getAllProductsThunk());
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        {/* CREAMOS LA RUTA HOME O LA RUTA RAIZ */}
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
