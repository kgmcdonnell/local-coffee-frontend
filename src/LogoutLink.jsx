import axios from "axios";

export function LogoutLink() {
  const handleClick = event => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a className="nav-link" style={{ color: "white" }} onClick={handleClick}>
      Logout
    </a>
  );
}
