import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import { useEffect } from "react";
import { getAllProductsThunk } from "./store/slices/products.slice";
import { useDispatch } from "react-redux";
import Header from "./components/shared/Header";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductIdPage from "./pages/ProductIdPage";
import CartPage from "./pages/CartPage";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import PurchasesPage from "./pages/PurchasesPage";
import LogOut from "./pages/LogOut";

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
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<ProductIdPage />} />
        <Route path="/logout" element={<LogOut />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/purchases" element={<PurchasesPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
