import { Link } from "react-router-dom";
// import { useContext } from "react";

import logo from "../../images/img_1.png";

export const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <Link to="/">
          <img src={logo} alt={"Active Varna Logo"} />
        </Link>
      </nav>
    </header>
  );
};
