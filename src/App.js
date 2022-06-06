import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import CategoryList from "./pages/CategoryList";
import ProductDetails from "./pages/ProductDetails";
import IsPrivate from "./components/IsPrivate";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <div className="App">
      <Navbar />
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
              {" "}
              <LoginPage />
            </IsAnon>
          }
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/products-list"
          element={
            <IsAnon>
              <ProductsList />
            </IsAnon>
          }
        />
        <Route
          path="/category/:category"
          element={
            <IsAnon>
              <CategoryList />
            </IsAnon>
          }
        />
          <Route
          path="/product-details/:productId"
          element={
            <IsAnon>
              <ProductDetails />
            </IsAnon>
          }
        />
        <Route
          path="/product-details/:productId/edit"
          element={
            <IsPrivate>
              <EditProduct />
            </IsPrivate>
          }
        />
      </Routes>
    </div>
  );
}

//Add IsPrivate in the Private Routes

export default App;
