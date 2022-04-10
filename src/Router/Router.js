import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PreventedElement from "../AuthRouteTypes/PreventedElement";
import ProtectedElement from "../AuthRouteTypes/ProtectedElement";
import PublicElement from "../AuthRouteTypes/PublicElement";
import { meta } from "../common/utils";
import Loader from "../components/Loader";
import Seowrapper from "../HOC/seowrapper";
import Header from "../components/Header";

//These elements are lazy loaded for performance
const LoadHome = lazy(() => import("../Pages/Home"));
const LoadPublic = lazy(() => import("../Pages/Public"));
const LoadLogin = lazy(() => import("../Pages/Login"));

//The Elements are wrapped with Higher Order Component for Seo basis
const Home = Seowrapper(meta.Home)(LoadHome);
const Public = Seowrapper(meta.Public)(LoadPublic);
const Login = Seowrapper(meta.Login)(LoadLogin);

const CustomRouter = () => {
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    console.log(auth, "AUTH");
  }, [auth]);
  return (
    <BrowserRouter>
      <Header auth={auth} handleLogout={() => setAuth(false)} />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <PublicElement auth={auth}>
                <Public text={"I am Public"} />
              </PublicElement>
            </Suspense>
          }
        />
        <Route
          exact
          path="/home"
          element={
            <Suspense fallback={<Loader />}>
              <ProtectedElement auth={auth}>
                <Home text={"I am Protected"} />
              </ProtectedElement>
            </Suspense>
          }
        />
        <Route
          exact
          path="/login"
          element={
            <Suspense fallback={<Loader />}>
              <PreventedElement auth={auth}>
                <Login auth={auth} handleLogin={() => setAuth(true)} />
              </PreventedElement>
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRouter;
