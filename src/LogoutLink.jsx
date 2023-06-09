import axios from "axios";

export function LogoutLink() {
  const handleClick = event => {
    event.preventDefault();
    delete axios.defaults.headers.common["Authorization"];
    localStorage.removeItem("jwt");
    window.location.href = "/";
  };

  return (
    <a className="nav-link header-nav" style={{ color: "white", cursor: "pointer" }} onClick={handleClick}>
      Logout
    </a>
  );
}
