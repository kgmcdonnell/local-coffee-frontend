// Libraries
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Components
import { CoffeeShopsIndex } from "./CoffeeShopsIndex";

export function Content() {
  return (
    <div className="container">
      <Routes>
        <Route path="/coffee-shops" element={<CoffeeShopsIndex />} />
      </Routes>
    </div>
  );
}
