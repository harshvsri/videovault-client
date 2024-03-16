import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function NavBar() {
  const user = JSON.parse(localStorage.getItem("response")).user.username;
  const [linksClass, setBtnClass] = useState("links");
  const navigate = useNavigate();

  function handleClick() {
    setBtnClass(linksClass === "links" ? "links active" : "links");
  }

  function handleLogout() {
    // replace "response" with the key you used to store the token
    localStorage.removeItem("response");
    navigate("/login");
  }

  return (
    <nav>
      <div className="heading">
        <Link className="link" to="/">
          VIDEO<span>VAULT</span>
        </Link>
      </div>
      <a href="#" className="toggle-btn" onClick={handleClick}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className={linksClass}>
        <ul>
          <li>
            <a href="#">{`Hi, ${user}`}</a>
          </li>
          <li>
            <Link to="/upload">Upload</Link>
          </li>
          <li>
            <a href="#">Subscriptions</a>
          </li>
          <li>
            <a href="#">Your Channel</a>
          </li>
          <li>
            <Link to="/login" onClick={handleLogout}>
              LogOut
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
