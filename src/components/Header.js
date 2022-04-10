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
      <div className="header-right">
        <Link to="/">Public</Link>
      </div>
      {/* for test purpose, I intentionally kept protected link here, In order to make you click on that to show functionality of protected route */}
      <div className="header-right">
        <Link to="/home">Protected</Link>
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
    </div>
  );
};

export default Header;
