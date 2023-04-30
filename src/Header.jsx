import { Link } from "react-router-dom";
import { LogoutLink } from "./LogoutLink";

export function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark py-3">
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
                <Link className="nav-link active" aria-current="page" to="/coffee-shops" style={{ color: "white" }}>
                  Home
                </Link>
              </li>
              {localStorage.jwt === undefined ? (
                <></>
              ) : (
                <>
                  <LogoutLink className="nav-link nav-item" />
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
