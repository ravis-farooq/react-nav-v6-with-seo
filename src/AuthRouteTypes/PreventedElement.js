import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PreventedElement = ({ children, auth }) => {
  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (auth) {
    navigate(from, { replace: true });
  }

  return children;
};

export default PreventedElement;
