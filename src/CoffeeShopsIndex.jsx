import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./CoffeeShopsIndex.scoped.scss";

export function CoffeeShopsIndex(props) {
  return (
    <div className="coffee-shops-index">
      <div className="row">
        <div className="col-sm-5">
          <div className="search input-group">
            <input className="form-control input" type="text" placeholder="City" />
            <input className="form-control input" type="text" placeholder="State" />
            <button type="submit" style={{ backgroundColor: "transparent", border: "none" }}>
              <FontAwesomeIcon className="fa-magnifying-glass" icon={faMagnifyingGlass} style={{ margin: "10px" }} />
            </button>
          </div>
          <div>
            {props?.coffeeShops && props.coffeeShops.length > 0 ? (
              props.coffeeShops.map(shop => (
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
                      <button type="button" className="btn btn-dark" style={{ marginTop: "10px" }}>
                        More Info
                      </button>
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
