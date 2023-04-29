import "./CoffeeShopsIndex.scoped.scss";

export function CoffeeShopsIndex(props) {
  return (
    <div className="coffee-shops-index">
      <div className="row">
        <div className="col-sm-5">
          <h3 className="text-center" style={{ marginBottom: "20px" }}>
            Local Coffee Shops
          </h3>
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
