// Libraries
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
// Components
import { CoffeeShopsIndex } from "./CoffeeShopsIndex";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Signup } from "./Signup";
import { CoffeeShopShow } from "./CoffeeShopShow";

export function Content() {
  const [coffeeShops, setCoffeeShops] = useState({});
  const [currentCoffeeShop, setCurrentCoffeeShop] = useState({});
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isCofeeShopVisible, setIsCoffeeShopVisible] = useState(false);
  const [currentUserShow, setCurrentUserShow] = useState({});

  // Coffee Shops Index
  const handleIndexCoffeeShops = () => {
    axios.get("http://localhost:3000/coffee_shops.json").then(function(response) {
      setCoffeeShops(response.data);
    });
  };

  const handleCoffeeShopShow = id => {
    setIsCoffeeShopVisible(true);
    axios.get(`http://localhost:3000/coffee_shops/${id}`).then(function(response) {
      setCurrentCoffeeShop(response.data.result);
    });
  };

  // Close Modal
  const handleClose = () => {
    setIsSignupVisible(false);
    setIsCoffeeShopVisible(false);
  };

  // Update User Location
  const handleUpdateLocation = params => {
    axios.patch(`http://localhost:3000/users/${localStorage.getItem("user_id")}.json`, params).then(response => {
      handleIndexCoffeeShops();
      setCurrentUserShow(response.data);
    });
  };

  // User Show
  const handleUserShow = params => {
    axios.get(`http://localhost:3000/users/${localStorage.getItem("user_id")}.json`).then(response => {
      setCurrentUserShow(response.data);
    });
  };

  useEffect(handleIndexCoffeeShops, []);
  useEffect(handleUserShow, []);

  return (
    <div>
      <Routes>
        {localStorage.jwt === undefined ? (
          <>
            <Route path="/" element={<Login onSignup={setIsSignupVisible} />} />
          </>
        ) : (
          <>
            <Route
              path="/"
              element={
                <CoffeeShopsIndex
                  coffeeShops={coffeeShops}
                  onShowCoffeeShop={handleCoffeeShopShow}
                  onUpdateLocation={handleUpdateLocation}
                  userData={currentUserShow}
                />
              }
            />
          </>
        )}
        <Route
          path="/coffee-shops"
          element={
            <CoffeeShopsIndex
              coffeeShops={coffeeShops}
              onUpdateLocation={handleUpdateLocation}
              onShowCoffeeShop={handleCoffeeShopShow}
              userData={currentUserShow}
            />
          }
        />
      </Routes>

      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>

      <Modal show={isCofeeShopVisible} onClose={handleClose}>
        <CoffeeShopShow coffeeShop={currentCoffeeShop} />
      </Modal>
    </div>
  );
}
