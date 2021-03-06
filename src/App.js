import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage.jsx"
import IsAnon from "./components/IsAnon";
import NavbarBoot from "./components/NavbarBoot";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import CategoryList from "./pages/CategoryList";
import ProductDetails from "./pages/ProductDetails";
import IsPrivate from "./components/IsPrivate";
import EditProduct from "./pages/EditProduct";
import AddProduct from "./pages/AddProducts";
import Cart from "./pages/Cart"

function App() {
  return (
    <div className="App">
      <NavbarBoot />
      {/* <Searchbar /> */}

      <Routes>
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />{" "}
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
        <Route path="/" element={<Home />} />
        <Route path="/products-list" element={<ProductsList />} />
        <Route path="/create-product" element={<AddProduct />} />
        <Route path="/category/:category" element={<CategoryList />} />
        <Route
          path="/product-details/:productId"
          element={<ProductDetails />}
        />
        <Route
          path="/product-details/:productId/edit"
          element={
            <IsPrivate>
              <EditProduct />
            </IsPrivate>
          }
        />
<Route
          path="/cart"
          element={
            <IsPrivate>
              <Cart />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

//Add IsPrivate in the Private Routes

export default App;
