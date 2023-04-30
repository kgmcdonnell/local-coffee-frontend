import { useState } from "react";
import "./CoffeeShopsIndex.scoped.scss";

export function CoffeeShopsIndex(props) {
  const [search, setSearch] = useState("");
  return (
    <div className="coffee-shops-index">
      <div className="row">
        <div className="col-sm-5">
          <div className="input-group mb-3 search">
            <input
              type="text"
              className="form-control"
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Find a coffee shop"
            ></input>
          </div>

          <div>
            {props?.coffeeShops && props.coffeeShops.length > 0 ? (
              props.coffeeShops
                .filter(shop => shop.name.toLowerCase().includes(search.toLowerCase()))
                .map(shop => (
                  <div key={shop.place_id}>
                    <div className="row">
                      <div className="child-row">
                        <p>
                          <strong>{shop.name}</strong>
                        </p>
                        <p>
                          <small>Address: {shop.formatted_address}</small>
                        </p>
                        <p>
                          <small>Rating: {shop.rating}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                ))
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="col-sm-7">
          <p>hello!</p>
        </div>
      </div>
    </div>
  );
}
