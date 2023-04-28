// Libraries
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
// Components
import { CoffeeShopsIndex } from "./CoffeeShopsIndex";
import { Modal } from "./Modal";
import { Login } from "./Login";
import { Signup } from "./Signup";

export function Content() {
  const [coffeeShops, setCoffeeShops] = useState({});
  const [isSignupVisible, setIsSignupVisible] = useState(false);

  // Coffee Shops Index
  const handleIndexCoffeeShops = () => {
    axios.get("http://localhost:3000/coffee_shops.json").then(function(response) {
      setCoffeeShops(response.data);
    });
  };

  // Close Modal
  const handleClose = () => {
    setIsSignupVisible(false);
  };

  useEffect(handleIndexCoffeeShops, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Login onSignup={setIsSignupVisible} />} />
        <Route path="/coffee-shops" element={<CoffeeShopsIndex coffeeShops={coffeeShops} />} />
      </Routes>

      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>
    </div>
  );
}
