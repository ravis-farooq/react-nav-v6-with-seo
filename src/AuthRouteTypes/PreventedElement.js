import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PreventedElement = ({ children, auth }) => {
  console.log(auth, "in prevent");
  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/home";
  useEffect(() => {
    if (auth) {
      navigate(from, { replace: true });
    }
  }, [auth]);

  return children;
};

export default PreventedElement;
