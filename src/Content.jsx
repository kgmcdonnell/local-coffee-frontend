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
import { Account } from "./Account";

export function Content() {
  const [coffeeShops, setCoffeeShops] = useState({});
  const [currentCoffeeShop, setCurrentCoffeeShop] = useState({});
  const [isSignupVisible, setIsSignupVisible] = useState(false);
  const [isCofeeShopVisible, setIsCoffeeShopVisible] = useState(false);
  const [currentUserShow, setCurrentUserShow] = useState({});
  const [quotes, setQuotes] = useState([]);

  // Coffee Shops Index
  const handleIndexCoffeeShops = () => {
    axios.get("/coffee_shops.json").then(function(response) {
      setCoffeeShops(response.data);
    });
  };

  const handleCoffeeShopShow = id => {
    setIsCoffeeShopVisible(true);
    axios.get(`/coffee_shops/${id}`).then(function(response) {
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
    axios.patch(`/users/${localStorage.getItem("user_id")}.json`, params).then(response => {
      handleIndexCoffeeShops();
      setCurrentUserShow(response.data);
    });
  };

  // User Show
  const handleUserShow = params => {
    axios.get(`/users/${localStorage.getItem("user_id")}.json`).then(response => {
      setCurrentUserShow(response.data);
    });
  };

  // User Update
  const handleUpdateUser = (params, id) => {
    axios.patch(`/users/${id}.json`, params).then(response => {
      handleIndexCoffeeShops();
      setCurrentUserShow(response.data);
    });
  };

  // Quotes Index
  const handleQuotes = () => {
    axios.get("/quotes.json").then(function(response) {
      setQuotes(response.data);
    });
  };

  if (localStorage.jwt !== undefined) {
    useEffect(handleIndexCoffeeShops, []);
    useEffect(handleUserShow, []);
    useEffect(handleQuotes, []);
  }

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
                  quotes={quotes}
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
              quotes={quotes}
            />
          }
        />
        <Route path="/account" element={<Account userData={currentUserShow} onUpdateUser={handleUpdateUser} />} />
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
