import { useState } from "react";
import { GoogleMap, InfoWindow, LoadScript, Marker } from "@react-google-maps/api";

// Icon Libraries
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

// Scoped CSS
import "./CoffeeShopsIndex.scoped.scss";

export function CoffeeShopsIndex(props) {
  const handleSubmit = event => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateLocation(params);
    event.target.reset();
  };

  // setting google maps height and width
  const mapStyles = {
    height: "100%",
    width: "100%",
  };

  return (
    <div className="coffee-shops-index">
      <div className="row">
        <div className="col-sm-5 left-column">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-sm-5" style={{ padding: "5px" }}>
                <input className="form-control form-input" type="text" name="city" placeholder="City" />
              </div>
              <div className="col-sm-5" style={{ padding: "5px" }}>
                <input className="form-control form-input" type="text" name="state" placeholder="State" list="states" />

                <datalist id="states">
                  <option>Alabama</option>
                  <option>Alaska</option>
                  <option>Arkansas</option>
                  <option>California</option>
                  <option>Connecticut</option>
                  <option>Delaware</option>
                  <option>Florida</option>
                  <option>Georgia</option>
                  <option>Hawaii</option>
                  <option>Idaho</option>
                  <option>Illinois</option>
                  <option>Indiana</option>
                  <option>Iowa</option>
                  <option>Kansas</option>
                  <option>Kentucky</option>
                  <option>Louisiana</option>
                  <option>Maine</option>
                  <option>Maryland</option>
                  <option>Massachusetts</option>
                  <option>Michigan</option>
                  <option>Minnesota</option>
                  <option>Mississippi</option>
                  <option>Missouri</option>
                  <option>Montana</option>
                  <option>Nebraska</option>
                  <option>Nevada</option>
                  <option>New Hampshire</option>
                  <option>New Jersey</option>
                  <option>New Mexico</option>
                  <option>New York</option>
                  <option>North Carolina</option>
                  <option>North Dakota</option>
                  <option>Ohio</option>
                  <option>Oklahoma</option>
                  <option>Oregon</option>
                  <option>Pennsylvania</option>
                  <option>Rhode Island</option>
                  <option>South Carolina</option>
                  <option>South Dakota</option>
                  <option>Tennessee</option>
                  <option>Texas</option>
                  <option>Utah</option>
                  <option>Vermont</option>
                  <option>Virginia</option>
                  <option>Washington</option>
                  <option>West Virginia</option>
                  <option>Wisconsin</option>
                  <option>Wyoming</option>
                </datalist>
              </div>
              <button
                type="submit"
                className="col-sm-2 btn-lg search-button submit"
                style={{ backgroundColor: "transparent", border: "none", padding: "0", margin: "5px" }}
              >
                <FontAwesomeIcon className="fa-magnifying-glass" icon={faMagnifyingGlass} />
              </button>
            </div>
          </form>
          <div className="left">
            {props?.coffeeShops && props.coffeeShops.length > 0 ? (
              props.coffeeShops.map(shop => (
                <div key={shop.place_id}>
                  <div className="row">
                    <div className="child-row">
                      <p>
                        <strong>{shop.name}</strong>
                        <button
                          style={{
                            marginRight: "20px",
                            float: "right",
                            border: "none",
                            backgroundColor: "transparent",
                          }}
                          onClick={() => props.onShowCoffeeShop(shop.place_id)}
                        >
                          <FontAwesomeIcon
                            className="fa-circle-info"
                            icon={faCircleInfo}
                            style={{ color: "rgba(83,81,81)" }}
                          />
                        </button>
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
          {props.userData && props.userData.latitude > 0 ? (
            <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_API_KEY}>
              <GoogleMap
                mapContainerStyle={mapStyles}
                center={{ lat: parseFloat(props.userData.latitude), lng: parseFloat(props.userData.longitude) }}
                zoom={13}
              >
                {/* Add Markers */}
                {props?.coffeeShops && props.coffeeShops.length > 0 ? (
                  props.coffeeShops.map(shop => (
                    <div key={shop.place_id}>
                      return <Marker position={shop.geometry.location}></Marker>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </GoogleMap>
            </LoadScript>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
