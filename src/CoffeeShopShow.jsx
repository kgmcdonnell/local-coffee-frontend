import "./CoffeeShopShow.scoped.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

export function CoffeeShopShow(props) {
  return (
    <div id="coffee-shops-show">
      {/* Website/Name */}
      <a href={props.coffeeShop.website}>{props.coffeeShop.name}</a>

      {/* Number */}
      {props.coffeeShop.formatted_phone_number ? (
        <>
          <p>
            <FontAwesomeIcon className="fa-phone" icon={faPhone} size="xs" style={{ marginRight: "5px" }} />
            <small>{props.coffeeShop.formatted_phone_number}</small>
          </p>
        </>
      ) : (
        <></>
      )}

      {/* Hours */}
      <p style={{ marginBottom: "0px" }}>
        <strong>Store Hours</strong>
      </p>
      {props.coffeeShop?.opening_hours ? (
        props.coffeeShop.opening_hours.weekday_text.map(day => (
          <div key={props.coffeeShop.opening_hours.weekday_text.indexOf(day)} className="hours">
            <p>{day}</p>
          </div>
        ))
      ) : (
        <></>
      )}

      {/* Reviews */}
      <p>
        <strong>Reviews</strong>
      </p>
      {props.coffeeShop?.reviews ? (
        props.coffeeShop.reviews.map(review => (
          <div key={props.coffeeShop.reviews.indexOf(review)}>
            <p style={{ margin: "0px" }}>{review.text}</p>
            <p style={{ marginTop: "0px", fontWeight: "bold" }}>- {review.author_name}</p>
          </div>
        ))
      ) : (
        <>
          <p>No reviews</p>
        </>
      )}
    </div>
  );
}
