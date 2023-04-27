import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login(props) {
  const [errors, setErrors] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    setErrors([]);
    console.log("handleSubmit");
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions.json", params)
      .then(function(response) {
        console.log(response);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset;
        window.location.href = "/coffee-shops"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch(error => {
        console.log(error.response.data.errors);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div className="user-login">
      <div className="container">
        <form onSubmit={handleSubmit} className="form text-center">
          <h1>Roast'd</h1>
          <p>Connect with local coffee shops around you!</p>
          <ul>
            {errors.map(error => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <input type="email" name="email" className="box" placeholder="Email" required />
          <input type="password" name="password" className="box" placeholder="Password" required />
          <input type="submit" value="Login" id="btn" />
        </form>
        <input onClick={() => props.onSignup(true)} type="submit" value="Sign Up" id="btn" />
      </div>
    </div>
  );
}
