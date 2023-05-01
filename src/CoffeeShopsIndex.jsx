import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "./CoffeeShopsIndex.scoped.scss";

export function CoffeeShopsIndex(props) {
  return (
    <div className="coffee-shops-index">
      <div className="row">
        <div className="col-sm-5">
          <form>
            <div className="row">
              <div className="col-sm-5" style={{ padding: "5px" }}>
                <input className="form-control form-input" type="text" placeholder="City" />
              </div>
              <div className="col-sm-5" style={{ padding: "5px" }}>
                <input className="form-control form-input" type="text" placeholder="State" />
              </div>
              <button
                type="submit"
                className="col-sm-2 btn-lg search-button"
                style={{ backgroundColor: "transparent", border: "none", padding: "0", margin: "5px" }}
              >
                <FontAwesomeIcon className="fa-magnifying-glass" icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
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
        <div className="col-sm-7">{/* this is where the map goes */}</div>
      </div>
    </div>
  );
}
