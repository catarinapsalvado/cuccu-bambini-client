import "./App.css";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsAnon from "./components/IsAnon";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ProductsList from "./pages/ProductsList";
import Clothing from "./pages/Clothing";
import Footwear from "./pages/Footwear";
import Gearbaby from "./pages/Gearbaby";
import IsPrivate from "./components/IsPrivate";

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
          path="/clothings"
          element={
            <IsAnon>
              <Clothing />
            </IsAnon>
          }
        />
        <Route
          path="/footwear"
          element={
            <IsAnon>
              <Footwear />
            </IsAnon>
          }
        />
        <Route
          path="/GearBaby"
          element={
            <IsAnon>
              <Gearbaby />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

//Add IsPrivate in the Private Routes

export default App;
