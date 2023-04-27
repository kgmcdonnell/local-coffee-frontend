export function CoffeeShopsIndex(props) {
  console.log(props);
  return (
    <div className="coffee-shops-index">
      <h1>Local Coffee Shops</h1>
      <div className="row">
        {props?.coffeeShops && props.coffeeShops.length > 0 ? (
          props.coffeeShops.map((shop) => (
            <div key={shop.place_id} className="shops col mb-3">
              <div className="card" style={{ width: "300px", height: "250px" }}>
                <div className="card-body">
                  <h3 className="card-title">{shop.name}</h3>
                  <p className="card-text">Address: {shop.formatted_address}</p>
                  <p className="card-text">Rating: {shop.rating}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No local coffee shops</p>
        )}
      </div>
    </div>
  );
}
