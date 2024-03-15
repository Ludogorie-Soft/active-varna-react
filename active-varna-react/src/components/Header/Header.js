import { Link } from "react-router-dom";
// import { useContext } from "react";

import logo from "../../images/img_1.png";
import profile from "../../images/profile.png";

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-container-logo">
            <Link to="/">
              <img src={logo} alt={"Active Varna Logo"} />
            </Link>
            <p>Активна Варна</p>
          </div>
          <div className="navbar-container-profile">
            <img src={profile} alt={"Profile"} />
          </div>
        </div>
      </nav>
    </header>
  );
};
