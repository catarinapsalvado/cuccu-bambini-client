import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import Clouthing from "./pages/Clothing";
import Footwear from "./pages/Footwear";
import Gearbaby from "./pages/Gearbaby";

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
        <Route path="/products-list" element={<ProductsList />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/Footwear" element={<Footwear />} />
        <Route path="/gear-baby" element={<Gearbaby />} />
      </Routes>
    </div>
  );
}

export default App;
