import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../App.css";
import LoginPage from "../auth/pages/LoginPage";
import Header from "../components/Header/Header";
import Cart from "../pages/Cart/Cart";
import Home from "../pages/Home/Home";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="login/*"
            element={
              <PublicRoutes>
                <Routes>
                  <Route path="/*" element={<LoginPage />} />
                </Routes>
              </PublicRoutes>
            }
          />

          <Route
            path="/*"
            element={
              <PrivateRoutes>
                <Header />
                <Routes>
                  <Route path="/home" exact element={<Home />} />
                  <Route path="/cart" exact element={<Cart />} />
                </Routes>
              </PrivateRoutes>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AppRouter;
