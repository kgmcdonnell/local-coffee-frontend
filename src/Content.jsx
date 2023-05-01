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

  // Update User Location
  const handleUpdateLocation = params => {
    console.log("this is my submit!");
    console.log(localStorage.getItem("user_id"));
    axios.patch(`http://localhost:3000/users/${localStorage.getItem("user_id")}.json`, params).then(response => {
      handleIndexCoffeeShops();
    });
  };

  useEffect(handleIndexCoffeeShops, []);

  return (
    <div>
      <Routes>
        {localStorage.jwt === undefined ? (
          <>
            <Route path="/" element={<Login onSignup={setIsSignupVisible} />} />
          </>
        ) : (
          <>
            <Route path="/" element={<CoffeeShopsIndex coffeeShops={coffeeShops} />} />
          </>
        )}
        <Route
          path="/coffee-shops"
          element={<CoffeeShopsIndex coffeeShops={coffeeShops} onUpdateLocation={handleUpdateLocation} />}
        />
      </Routes>

      <Modal show={isSignupVisible} onClose={handleClose}>
        <Signup />
      </Modal>
    </div>
  );
}
