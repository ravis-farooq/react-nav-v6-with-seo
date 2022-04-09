import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PreventedElement = ({ children, auth }) => {
  let location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  if (auth) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    navigate(from, { replace: true });
  }

  return children;
};

export default PreventedElement;
