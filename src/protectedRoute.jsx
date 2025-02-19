import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = () => {
  const isAdminLoggedIn = localStorage.getItem("adminLoggedIn") === "true";

  return isAdminLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default AdminRoute;
