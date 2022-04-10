import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Header = ({ auth, handleLogout }) => {
  useEffect(() => {
    console.log(auth, "check");
  }, [auth]);
  return (
    <div className="header">
      <Link to="/" className="logo">
        CompanyLogo
      </Link>

      {/* for test purpose, I intentionally kept protected link here, In order to make you click on that to show functionality of protected route */}
      <div className="header-right">
        <Link to="/home">Protected </Link>
      </div>
      <div className="header-right">
        <Link to="/login">Login nav for test purpose</Link>
      </div>
      {!auth ? (
        <div className="header-right">
          <Link to="/login">Sign in</Link>
        </div>
      ) : (
        <div className="header-right">
          <a onClick={() => handleLogout()}>Logout</a>
        </div>
      )}
      <div className="header-right">
        <Link to="/">Public</Link>
      </div>
    </div>
  );
};

export default Header;
