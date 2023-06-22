import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark py-4">
        <div className="container-fluid">
          <a className="navbar-brand" style={{ color: "white" }}>
            Roast'd
          </a>
          <button
            style={{ background: "white" }}
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link header-nav" to="/" style={{ color: "white" }}>
                  Find a coffee shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link header-nav" to="/account" style={{ color: "white" }}>
                  Account
                </Link>
              </li>
              <li>
                <LogoutLink className="nav-link nav-item" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
