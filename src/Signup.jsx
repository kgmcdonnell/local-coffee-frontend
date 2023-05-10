// Libraries
import axios from "axios";
import { useState } from "react";
// CSS
import "./Signup.scoped.scss";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const handleSubmit = event => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then(function(response) {
        console.log(response);
        event.target.reset();
        window.location.href = "/";
      })
      .catch(function(error) {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div className="signup">
      <h3 className="text-center">Signup</h3>
      <ul>
        {errors.map(error => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
            Name
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="First Name Last Name"
              name="name"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
            Email
          </label>
          <div className="col-sm-8">
            <input
              type="email"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Email"
              name="email"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
            Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Password"
              name="password"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
            Password
          </label>
          <div className="col-sm-8">
            <input
              type="password"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="Password Confirmation"
              name="password_confirmation"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
            City
          </label>
          <div className="col-sm-8">
            <input
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="City"
              name="city"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">
            State
          </label>
          <div className="col-sm-8">
            <input
              list="states"
              type="text"
              className="form-control form-control-sm"
              id="colFormLabelSm"
              placeholder="State"
              name="state"
            />

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
        </div>
        <div className="text-center">
          <button className="signup-submit" type="submit" value="Login">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
