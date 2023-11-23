import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { Navigate, Outlet } from "react-router-dom";

const ProctedRoute = () => {
  const [isLoggedIn] = useContext(AuthContext);

  return isLoggedIn ? <Outlet /> : <Navigate to="/SignIn" replace />;
};
export default ProctedRoute;
